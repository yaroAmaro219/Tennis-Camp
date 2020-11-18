class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :title
      t.string :time
      t.string :age_group
      t.string :image
      t.string :coach

      t.timestamps
    end
  end
end
