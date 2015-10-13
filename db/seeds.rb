User.create(username: "vincent", password: "password")
# User.create(username: "vincent", password: "password")
# User.create(username: "vincent", password: "password")
# User.create(username: "vincent", password: "password")
# User.create(username: "vincent", password: "password")

# create_table "users", force: :cascade do |t|
#   t.string   "username",        null: false
#   t.string   "password_digest", null: false
#   t.string   "session_token",   null: false
#   t.datetime "created_at",      null: false
#   t.datetime "updated_at",      null: false
# end

# Photo.create(
#   title: "The Yellow House",
#   medium: "oil",
#   surface: "canvas",
#   author_id: User.find_by_username("vincent").id
# )

# create_table "photos", force: :cascade do |t|
#   t.string   "title",       null: false
#   t.string   "description"
#   t.string   "medium",      null: false
#   t.string   "surface",     null: false
#   t.integer  "author_id",   null: false
#   t.integer  "album_id",    null: false
#   t.datetime "created_at",  null: false
#   t.datetime "updated_at",  null: false
# end
