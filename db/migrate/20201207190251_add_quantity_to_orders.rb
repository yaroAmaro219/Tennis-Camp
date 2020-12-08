class AddQuantityToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :quantity, :integer
    add_column :orders, :session_id, :string
    add_column :orders, :order_id, :string
  end
end
