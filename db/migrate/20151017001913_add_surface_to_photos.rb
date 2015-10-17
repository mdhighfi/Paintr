class AddSurfaceToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :surface, :string, index: true, null: false
  end
end
