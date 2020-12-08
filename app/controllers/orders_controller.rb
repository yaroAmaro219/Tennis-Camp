class OrdersController < ApplicationController
  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    # session_1 = Session.find(order_params[:session_id])
    # quantity_1 = order_params[:quantity]
    # @order = Order.new(order_params)
    # order_items = OrderItem.create(orders_id: @order.id, sessions_id: order_params[:sessions_id], quantity: order_params[:quantity])
    # user = User.find(order_params[:user_id])
    # user.update(current_order: @order.id)
    # order_items = @order.order_items
    # @order = Order.create(user_id: order_params[:user_id] )
    @order = Order.create(order_params)
    user = User.find(order_params[:user_id])
    user.update_attribute(:current_order, @order.id)
    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def order_params
      params.require(:order).permit(:user_id, :session_id, :quantity, :order_id)
    end
end
