class Addtypeofdaytoenrolls < ActiveRecord::Migration[6.0]
  def change
    add_column :enrolls, :typeofday, :string
  end
end
