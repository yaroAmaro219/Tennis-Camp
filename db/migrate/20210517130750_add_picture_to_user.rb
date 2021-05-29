class AddPictureToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :picture, :bytea
  end
end
