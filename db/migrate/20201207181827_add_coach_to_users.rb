class AddCoachToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :coach, :boolean
    add_column :users, :current_order, :integer
  end
end
