class DropMedia < ActiveRecord::Migration
  def change
    drop_table :media
  end
end
