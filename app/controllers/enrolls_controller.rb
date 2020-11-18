class EnrollsController < ApplicationController

  # GET /enrolls
  def index
    @enrolls = Enroll.all

    render json: @enrolls
  end

  # GET /enrolls/1
  def show
    render json: @enroll
  end

  # POST /enrolls
  def create
    @enroll = Enroll.new(enroll_params)
    if @enroll.save! 
      render json: @enroll,
    else
      render json: @enroll.errors
    end
  end

  # PATCH/PUT /enrolls/1
  def update
    if @enroll.update(enroll_params)
      render json: @enroll
    else
      render json: @enroll.errors, status: :unprocessable_entity
    end
  end

  # DELETE /enrolls/1
  def destroy
    @enroll.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_enroll
      @enroll = Enroll.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def enroll_params
      params.require(:enroll).permit(:firstname, :lastname, :phone, :email, :childname, :childage,  :question, :consent, :startdate, :enddate, :typeofday)
    end
  end
