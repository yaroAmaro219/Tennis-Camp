class RemoveOrdersIdfromOrderItems < ActiveRecord::Migration[6.0]
  def change
    remove_column :order_items, :orders_id
    remove_column :order_items, :sessions_id
  end
end
