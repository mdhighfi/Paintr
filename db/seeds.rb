User.create!(username: "vincent", password: "password")
User.create!(username: "leonardo", password: "password")
User.create!(username: "donatello", password: "password")
User.create!(username: "michelangelo", password: "password")
User.create!(username: "rafael", password: "password")

Medium.create!(medium: "oil", surface: "canvas", photo_id: 1)
Medium.create!(medium: "watercolor", surface: "paper", photo_id: 2)
Medium.create!(medium: "acrylic", surface: "wood", photo_id: 3)

UserImage.create!(
  user_id: 1,
  cover_url: 'http://res.cloudinary.com/paintr/image/upload/v1445033435/default_cover_tkyrw3.jpg',
  profile_url: 'http://res.cloudinary.com/paintr/image/upload/v1445033654/default_profile_pic_tnqzzr.jpg'
)
UserImage.create!(
  user_id: 2,
  cover_url: 'http://res.cloudinary.com/paintr/image/upload/v1445033435/default_cover_tkyrw3.jpg',
  profile_url: 'http://res.cloudinary.com/paintr/image/upload/v1445033654/default_profile_pic_tnqzzr.jpg'
)
UserImage.create!(
  user_id: 3,
  cover_url: 'http://res.cloudinary.com/paintr/image/upload/v1445033435/default_cover_tkyrw3.jpg',
  profile_url: 'http://res.cloudinary.com/paintr/image/upload/v1445033654/default_profile_pic_tnqzzr.jpg'
)

# MEDIA = ['oil', 'acrylic', 'watercolor', 'gouache']
# SURFACES = ['canvas', 'paper', 'wood', 'metal', 'marble']

Photo.create!(
  title: "The Yellow House",
  description: "I love this house. Therefore, I painted it... I mean, not it, but a painting of it.",
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg',
  author_id: User.find_by_username("vincent").id
)

Photo.create!(
  title: "Self-Portrait",
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg',
  author_id: User.find_by_username("vincent").id
)

Photo.create!(
  title: "Sunflowers",
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Vincent_Willem_van_Gogh_128.jpg',
  author_id: User.find_by_username("vincent").id
)
