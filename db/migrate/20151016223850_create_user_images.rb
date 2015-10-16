class CreateUserImages < ActiveRecord::Migration
  def change
    create_table :user_images do |t|
      t.integer :user_id, null: false, index: true
      t.string :cover_url, null: false
      t.string :profile_url, null: false

      t.timestamps null: false
    end
  end
end
