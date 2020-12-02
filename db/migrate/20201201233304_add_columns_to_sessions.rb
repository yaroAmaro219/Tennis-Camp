class AddColumnsToSessions < ActiveRecord::Migration[6.0]
  def change
    add_column :sessions, :dates, :string
    add_column :sessions, :location, :string
  end
end
