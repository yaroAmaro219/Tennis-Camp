class AddSessionToOrderItems < ActiveRecord::Migration[6.0]
  def change
    add_reference :order_items, :sessions, foreign_key: true
  end
end
