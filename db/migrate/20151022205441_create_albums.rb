class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.integer :author_id, null: false, index: true
      t.string :title, null: false
      t.string :description, null: false

      t.timestamps null: false
    end
  end
end
