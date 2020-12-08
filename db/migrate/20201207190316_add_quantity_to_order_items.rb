class AddQuantityToOrderItems < ActiveRecord::Migration[6.0]
  def change
    add_column :order_items, :quantity, :integer
    add_column :order_items, :session_id, :string
    add_column :order_items, :order_id, :string
  end
end
