class OrdersController < ApplicationController
  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    order_id = params[:id].to_i
    order = Order.find_by_id(order_id)
    render json: @order
  end

  def neworder
    session_1 = Session.find(order_params[:session_id])
    quantity_1 = order_params[:quantity]


    order = Order.create(user_id: order_params[:user_id] )
    order_items = OrderItem.create(order_id: order.id, product_id: order_params[:product_id], quantity: order_params[:quantity], item_price: product_1.price_in_cents * quantity_1)
    user = User.find(order_params[:user_id])
    user.update(current_order: order.id )
    order_items = order.order_items



    total = 0
    total_quantity = 0
    order.order_items.each { |item| total += item.item_price }
    order.total_price = total

    order.order_items.each { |item| total_quantity += item.quantity }
    order.total_qty = total_quantity
    order.save




    render json: current_site_user, include: '**'
end

  # POST /orders
  # def create
  #   @order = Order.create(order_params)
  #   user = User.find(order_params[:user_id])
  #   user.update_attribute(:current_order, @order.id)
  #   if @order.save
  #     render json: @order, status: :created, location: @order
  #   else
  #     render json: @order.errors, status: :unprocessable_entity
  #   end
  # end
  def create
    order = Order.create(order_params)
    render json: order
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
