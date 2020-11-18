class AddSessionsToLocations < ActiveRecord::Migration[6.0]
  def change
    add_reference :locations, :session, foreign_key: true
  end
end
