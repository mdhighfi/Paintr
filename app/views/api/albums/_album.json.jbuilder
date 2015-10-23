json.extract!(
  album,
  :id, :title, :description, :author_id
)
if cover
  json.cover_url album.photos.first.image_url
else
  json.photos album.photos do |photo|
    json.id photo.id
    json.image_url photo.image_url
  end
end
