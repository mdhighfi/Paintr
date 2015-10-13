class Photo < ActiveRecord::Base
  MEDIA = [:oil, :acrylic, :watercolor, :gouache]
  SURFACES = [:canvas, :paper, :wood, :metal, :marble]

  validates :medium, inclusion: { in: MEDIA }
  validates :surface, inclusion: { in: SURFACES }

  # belongs_to :user
end
