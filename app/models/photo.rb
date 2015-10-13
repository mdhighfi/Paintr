# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  medium      :string           not null
#  surface     :string           not null
#  author_id   :integer          not null
#  album_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ActiveRecord::Base
  MEDIA = ['oil', 'acrylic', 'watercolor', 'gouache']
  SURFACES = ['canvas', 'paper', 'wood', 'metal', 'marble']
  # MEDIA = [:oil, :acrylic, :watercolor, :gouache]
  # SURFACES = [:canvas, :paper, :wood, :metal, :marble]

  validates :medium, inclusion: { in: MEDIA }
  validates :surface, inclusion: { in: SURFACES }

  # belongs_to :user
end
