class AddMediumToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :medium, :string, index: true, null: false
  end
end
