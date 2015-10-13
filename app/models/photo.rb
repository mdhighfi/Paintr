class Photo < ActiveRecord::Base
  MEDIA = [Oil, Acrylic, Watercolor, Gouache]
  SURFACES = [Canvas, Paper, Wood, Metal, Marble]

  validates :medium, inclusion: { in: MEDIA }
  validates :surface, inclusion: { in: SURFACES }
end
