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
  title: "Sunflowers",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445139710/sunflowers_yz9tj7.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "acrylic",
  surface: "wood"
)

Photo.create!(
  title: "Cool Painting",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445211196/vangogh-42_dutubv.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Pickin\' Apples",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445211196/vangogh-39_ssjjl2.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Field with Poppies",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445212255/field-with-poppies_sw3gzj.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Good Times",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445211196/van-gogh-13336296-1036-840_ubktnn.jpg',
  author_id: User.find_by_username("vincent").id,
  album_id: 2,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Good Times",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445211198/Van_Gogh_0013_wjqsq4.jpg',
  author_id: User.find_by_username("vincent").id,
  album_id: 2,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Bad Times",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445211200/Irises_go89vv.jpg',
  author_id: User.find_by_username("vincent").id,
  album_id: 3,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Eatin' Pancakes",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445211199/Green_Field_ltkrll.jpg',
  author_id: User.find_by_username("vincent").id,
  album_id: 3,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Eugene Boch",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445212612/Eugene_Boch_cuyxrs.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Cafe Terrace at Night",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445212705/Cafe-Terrace-at-night_my2jvn.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Red Vineyards",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445212900/Red_vineyards_nkyswd.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Self Portrait (1989)",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445212899/Self-Portrait__1889_phjqhg.jpg',
  author_id: User.find_by_username("vincent").id,
  medium: "oil",
  surface: "canvas"
)

cafe = Photo.create!(
  title: "The Night Cafe",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445212893/the-night-cafe_tvmvgm.jpg',
  author_id: User.find_by_username("vincent").id,
  album_id: 1,
  medium: "oil",
  surface: "canvas"
)

crows = Photo.create!(
  title: "Wheat With Crows",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445213051/wheat-with-crows_z2bxmi.jpg',
  author_id: User.find_by_username("vincent").id,
  album_id: 1,
  medium: "oil",
  surface: "canvas"
)

sun = Photo.create!(
  title: "Self-Portrait",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445139726/Self-Portrait_ubif9k.jpg',
  author_id: User.find_by_username("vincent").id,
  album_id: 1,
  medium: "watercolor",
  surface: "paper"
)

potato = Photo.create!(
  title: "The Potato Eaters",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445212612/potoato-eaters_nrkwcj.jpg',
  author_id: User.find_by_username("vincent").id,
  album_id: 1,
  medium: "oil",
  surface: "canvas"
)

rest = Photo.create!(
  title: "Rest",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1445212252/rest_g6oce3.jpg',
  author_id: User.find_by_username("vincent").id,
  album_id: 1,
  medium: "oil",
  surface: "canvas"
)

album = Album.create!(
  title: "My Favorites",
  description: "These are my favorites. I hope you like them.",
  author_id: User.find_by_username("vincent").id,
)

album = Album.create!(
  title: "My Second Favorites",
  description: "Hello.",
  author_id: User.find_by_username("vincent").id,
)

album = Album.create!(
  title: "My Third Favorites",
  author_id: User.find_by_username("vincent").id,
)
