class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.string :description
      t.string :image_url, null: false
      t.integer :author_id, null: false, index: true
      t.integer :album_id, index: true

      t.timestamps null: false
    end
  end
end
