class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :description
      t.string :medium, null: false
      t.string :surface, null: false
      t.string :image_url, null: false
      t.integer :author_id, null: false
      t.integer :album_id

      t.timestamps null: false
    end
    add_index :photos, :medium
    add_index :photos, :surface
    add_index :photos, :author_id
    add_index :photos, :album_id
  end
end
