class ChangeDataTypeForDate < ActiveRecord::Migration[6.0]
  def change
    change_column(:enrolls, :startdate, :string)
    change_column(:enrolls, :enddate, :string)
  end
end
