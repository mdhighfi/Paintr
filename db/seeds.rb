User.create!(username: "vincent", password: "password")
User.create!(username: "leonardo", password: "password")
User.create!(username: "donatello", password: "password")
User.create!(username: "michelangelo", password: "password")
User.create!(username: "rafael", password: "password")
User.create!(username: "thomas", password: "password")
User.create!(username: "rene", password: "password")
User.create!(username: "jack", password: "password")

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

# thomas

Photo.create!(
  title: "Winnie The Pooh II",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663981/Winnie-The-Pooh-II_pg3ea4.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Unicorns",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663983/unicorns_vf0gqd.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "A Quiet Evening",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663979/thomaskinkade50_llg9k1.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Heather\'s Hutch",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663980/thomas-kinkade7_ikqie9.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Wintery Winter",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663981/Thomas-Kinkade-Winter-winter-23436564-1280-1024_dfpb21.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Beauty and the Beast",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663979/Thomas-Kinkade-Disney-Dreams-disney-princess-31536124-1600-1068_slqyp5.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "The Princess",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663980/Thomas-Kinkade-Disney-Dreams-disney-princess-31536073-1500-1009_pdcrlq.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Along the Lighted Path II",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663978/thomas-kinkade-along-the-lighted-path2_jryw5z.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Tangled",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663979/tangled-thomas-kinkade_o99bt4.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Thomas Kin RAID",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663977/storm_trooper_raid_kk8yom.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "acrylic",
  surface: "canvas"
)

Photo.create!(
  title: "I\'ll be Home for Christmas",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663977/pics_-_christmas_-_thomas_kinkade_-_i_ll_be_home_for_christmas_10_qlsmmw.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Hometown Christmas",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663976/Kinkade-07-Hometown-Christmas_ozebuk.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Hills XII",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663975/hills12_tgvfsz.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Guardian Castle",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663975/Guardian_Castle_chtoiu.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Gazebo of Prayer",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663977/gazebo-of-prayer-thomas_ztckfx.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Fantasia",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663978/Fantasia_vkc4m2.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Cobblestone Mill",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663977/Cobblestone-Mill_vuankd.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Cobblestone-Brooke",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663976/Cobblestone-Brooke_bajlk4.jpg',
  author_id: User.find_by_username("thomas").id,
  medium: "oil",
  surface: "canvas"
)

# rene

Photo.create!(
  title: "The Victory",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663989/the-victory-1939_1_s4gphk.jpg',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "The Masterpiece or The Mysteries of the Horizon",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663987/the-masterpiece-or-the-mysteries-of-the-horizon-1955_1_ms9dnt.jpg',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "The False Mirror",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663987/the-false-mirror-1928_1_c3vsmp.jpg',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "The Son of Man",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663987/son-of-man-1964_1_bftygt.jpg',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "The Return",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663985/small_large_wder3z.jpg',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "The Human Condition",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663987/nuovo_z6gjgf.jpg',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "The Treachery of Images",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663985/moma_magritte_treacheryofimages_upvdvy.webp',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Clairvoyance",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663986/MoMA_Magritte_Clairvoyance_joedyg.jpg',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "The Lovers",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663986/Magritte-The-Lovers_f9ii6i.jpg',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Attempting the Impossible",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663986/magritte-attempting-the-impossible-20_o676se.jpg',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

Photo.create!(
  title: "Lamp",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663984/lamp_pb81pf.jpg',
  author_id: User.find_by_username("rene").id,
  medium: "oil",
  surface: "canvas"
)

# jack

Photo.create!(
  title: "Mural",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663951/tumblr_static_mural_tbcdey.jpg',
  author_id: User.find_by_username("jack").id,
  medium: "oil",
  surface: "paper"
)

Photo.create!(
  title: "Shimmering",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663953/pollock.shimmering_unfkx2.jpg',
  author_id: User.find_by_username("jack").id,
  medium: "oil",
  surface: "paper"
)


Photo.create!(
  title: "Number Eight",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663951/pollock-number-8_qkwhl2.jpg',
  author_id: User.find_by_username("jack").id,
  medium: "oil",
  surface: "paper"
)


Photo.create!(
  title: "Kid",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663958/kidpollock3_tqjlmm.jpg',
  author_id: User.find_by_username("jack").id,
  medium: "oil",
  surface: "paper"
)


Photo.create!(
  title: "Number Thirty-Four",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663954/Jackson-Pollock-1912-1956-Number-34-1949-Oil-and-enamel-on-white-paperboard-mounted-on-Masonite-559-x-775-mm_myszyo.jpg',
  author_id: User.find_by_username("jack").id,
  medium: "oil",
  surface: "paper"
)


Photo.create!(
  title: "Yellow",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663956/Jack-the-Dripper-Latex-on-Board-36x120_ipsy7z.jpg',
  author_id: User.find_by_username("jack").id,
  medium: "oil",
  surface: "paper"
)


Photo.create!(
  title: "Action",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663950/IMG_6281_cz8lof.jpg',
  author_id: User.find_by_username("jack").id,
  medium: "oil",
  surface: "paper"
)


Photo.create!(
  title: "White",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663956/dsc03850_k7zqd7.jpg',
  author_id: User.find_by_username("jack").id,
  medium: "oil",
  surface: "paper"
)


Photo.create!(
  title: "Car Wreck",
  image_url: 'http://res.cloudinary.com/paintr/image/upload/v1446663949/blue-poles-number-11_calm1e.jpg',
  author_id: User.find_by_username("jack").id,
  medium: "oil",
  surface: "paper"
)


Photo.create!(
  title: "",
  image_url: '',
  author_id: User.find_by_username("jack").id,
  medium: "oil",
  surface: "paper"
)
