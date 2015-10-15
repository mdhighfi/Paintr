User.create(username: "vincent", password: "password")
User.create(username: "leonardo", password: "password")
User.create(username: "donatello", password: "password")
User.create(username: "michelangelo", password: "password")
User.create(username: "rafael", password: "password")

# create_table "users", force: :cascade do |t|
#   t.string   "username",        null: false
#   t.string   "password_digest", null: false
#   t.string   "session_token",   null: false
#   t.datetime "created_at",      null: false
#   t.datetime "updated_at",      null: false
# end

Photo.create!(
  title: "The Yellow House",
  description: "I love this house. Therefore, I painted it... I mean, not it, but a painting of it.",
  medium: 'oil',
  surface: 'canvas',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg',
  author_id: User.find_by_username("vincent").id
)

Photo.create!(
  title: "Self-Portrait",
  medium: 'oil',
  surface: 'canvas',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg',
  author_id: User.find_by_username("vincent").id
)

Photo.create!(
  title: "Sunflowers",
  medium: 'oil',
  surface: 'canvas',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Vincent_Willem_van_Gogh_128.jpg',
  author_id: User.find_by_username("vincent").id
)

# create_table "photos", force: :cascade do |t|
#   t.string   "title",       null: false
#   t.string   "description"
#   t.string   "medium",      null: false
#   t.string   "surface",     null: false
#   t.integer  "author_id",   null: false
#   t.integer  "album_id"
#   t.datetime "created_at",  null: false
#   t.datetime "updated_at",  null: false
# end
