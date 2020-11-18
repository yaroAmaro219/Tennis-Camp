class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :name
      t.string :text
      t.string :date

      t.timestamps
    end
  end
end
