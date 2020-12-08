class AddOrderIdToOrderItems < ActiveRecord::Migration[6.0]
  def change
    add_column :order_items, :order_id, :integer
    add_column :order_items, :session_id, :integer
    add_column :order_items, :item_price, :integer
  end
end
