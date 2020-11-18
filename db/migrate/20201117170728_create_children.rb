class CreateChildren < ActiveRecord::Migration[6.0]
  def change
    create_table :children do |t|
      t.string :name
      t.string :age
      t.string :image
      t.references :users
      t.references :sessions

      t.timestamps
    end
  end
end
