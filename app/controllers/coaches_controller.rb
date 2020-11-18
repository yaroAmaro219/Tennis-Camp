class CoachesController < ApplicationController
  before_action :set_coach, only: [:show, :update, :destroy]

  # GET /coaches
  def index
    @coaches = Coach.all

    render json: @coaches
  end

  # GET /coaches/1
  def show
    render json: @coach
  end

  # POST /coaches
  def create
    @coach = Coach.new(coach_params)

    if @coach.save
      render json: @coach, status: :created, location: @coach
    else
      render json: @coach.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /coaches/1
  def update
    if @coach.update(coach_params)
      render json: @coach
    else
      render json: @coach.errors, status: :unprocessable_entity
    end
  end

  # DELETE /coaches/1
  def destroy
    @coach.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_coach
      @coach = Coach.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def coach_params
      params.require(:coach).permit(:name, :age, :location, :classes, :bio)
    end
end
