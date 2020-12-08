class OrderItemsController < ApplicationController
  def create
        order = Order.find(order_item_params[:order_id])
        order_items = order.order_items

        found_item = order_items.detect do |item| 
            order_item_params[:session_id] == item.session_id
        end
        if found_item
            # found_item.quantity += 1
            found_item.quantity += order_item_params[:quantity].to_i
            found_item.item_price = found_item.quantity * found_item.session.price
            found_item.save
            
        else
            orderItem = OrderItem.create(order_item_params)
            # orderItem.item_price = orderItem.quantity * orderItem.session.price
            orderItem.save
            # order.total_price += orderItem.item_price
            # order.save
        end
        
        total = 0
        total_quantity = 0

        order = Order.find(order_item_params[:order_id])
        order.order_items.each { |item| total += item.item_price }
        order.total_price = total

        order.order_items.each { |item| total_quantity += item.quantity }
        order.total_qty = total_quantity
        order.save
        
        # byebug
        # render json: order, include: "**"
        render json: current_site_user, include: '**'

    end

    def destroy
        order_item = OrderItem.find(params[:id].to_i)
        order_item.destroy
        order = Order.find(current_site_user.current_order)
        total = 0
        order.order_items.each { |item| total += item.item_price }
        order.total_price = total

        

        order.save
        # render json: {user: current_site_user, order: order}
        render json: current_site_user, include: '**'

    end

    private
    # def order_item_params
    #     params.permit(:session_id, :order_id, :quantity)
    # end
    def order_item_params
     params.require(:order_item).permit(:order_id, :session_id, :quantity, :item_price)
    end
end
#   before_action :set_order_item, only: [:show, :update, :destroy]
  
#   # GET /order_items
#   def index
#     @order_items = OrderItem.all

#     render json: @order_items
#   end

#   # GET /order_items/1
#   def show
#     render json: @order_item
#   end

#   # POST /order_items
#   def create
#     # @order_item = OrderItem.create(order_item_params)
#     order = Order.find(order_item_params[:orders_id])
#     order_items = order.id
#     found_item = order_items.detect do |item| 
#       order_item_params[:sessions_id] == item.session_id
#       end
#       if found_item
#         found_item.quantity += order_item_params[:quantity].to_i
#         found_item.item_price = found_item.quantity * found_item.sessopm.price_in_cents
#         found_item.save
#     else
#         orderItem = OrderItem.create(order_item_params)
#         orderItem.item_price = orderItem.quantity * orderItem.session.price_in_cents
#         orderItem.save
#     end
#   end

#   #   if @order_item.save
#   #     render json: @order_item, status: :created, location: @order_item
#   #   else
#   #     render json: @order_item.errors, status: :unprocessable_entity
#   #   end
#   # end

#   # PATCH/PUT /order_items/1
#   def update
#     if @order_item.update(order_item_params)
#       render json: @order_item
#     else
#       render json: @order_item.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /order_items/1
#   def destroy
#     @order_item.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_order_item
#       @order_item = OrderItem.find(params[:id])
#     end

#     # Only allow a trusted parameter "white list" through.
#     def order_item_params
#       params.require(:order_item).permit(:orders_id, :sessions_id, :quantity)
#     end
# end
