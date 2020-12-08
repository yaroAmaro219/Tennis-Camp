class AddTotalPriceToOrder < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :total_price, :integer
    add_column :orders, :total_qty, :integer
  end
end
