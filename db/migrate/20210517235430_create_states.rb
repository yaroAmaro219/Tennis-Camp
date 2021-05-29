class CreateStates < ActiveRecord::Migration[6.0]
  def change
    create_table :states do |t|
      t.string :title
      t.string :timezone
      t.string :image
      t.references :locations, null: false, foreign_key: true

      t.timestamps
    end
  end
end
