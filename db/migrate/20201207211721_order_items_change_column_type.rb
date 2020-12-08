class OrderItemsChangeColumnType < ActiveRecord::Migration[6.0]
  def change
    remove_column :order_items, :session_id
  end
end
