class AddUsersIdToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :user_id, :string
  end
end
