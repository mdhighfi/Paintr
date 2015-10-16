class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.integer :photo_id, null: false, index: true
      t.string :medium, null: false, index: true
      t.string :surface, null: false, index: true

      t.timestamps null: false
    end
  end
end
