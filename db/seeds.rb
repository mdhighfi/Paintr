User.create!(username: "vincent", password: "password")
User.create!(username: "leonardo", password: "password")
User.create!(username: "donatello", password: "password")
User.create!(username: "michelangelo", password: "password")
User.create!(username: "rafael", password: "password")

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
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445139731/yellow_house_tajaew.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Self-Portrait",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445139726/Self-Portrait_ubif9k.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "watercolor",
  surface: "paper"
)

Photo.create!(
  title: "Sunflowers",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445139710/sunflowers_yz9tj7.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "acrylic",
  surface: "wood"
)
