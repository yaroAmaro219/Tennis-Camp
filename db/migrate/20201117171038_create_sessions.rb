class CreateSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :sessions do |t|
      t.references :location
      t.string :time
      t.references :children
      t.references :coaches
      t.string :age

      t.timestamps
    end
  end
end
