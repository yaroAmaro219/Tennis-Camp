class CreateCoaches < ActiveRecord::Migration[6.0]
  def change
    create_table :coaches do |t|
      t.string :name
      t.string :age
      t.string :location
      t.references :sessions
      t.string :bio
      t.string :image

      t.timestamps
    end
  end
end
