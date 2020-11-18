class AddChildrenToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :children, foreign_key: true
  end
end