class CreateEnrolls < ActiveRecord::Migration[6.0]
  def change
    create_table :enrolls do |t|
      t.string :firstname
      t.string :lastname
      t.string :phone
      t.string :email
      t.string :childname
      t.string :childage
      t.datetime :startdate
      t.datetime :enddate
      t.string :question
      t.boolean :consent

      t.timestamps
    end
  end
end
