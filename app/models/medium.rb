# == Schema Information
#
# Table name: media
#
#  id         :integer          not null, primary key
#  photo_id   :integer          not null
#  medium     :string           not null
#  surface    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Medium < ActiveRecord::Base
  MEDIA = ['oil', 'acrylic', 'watercolor', 'gouache']
  SURFACES = ['canvas', 'paper', 'wood', 'metal', 'marble']

  validates :medium, inclusion: { in: MEDIA }
  validates :surface, inclusion: { in: SURFACES }


  belongs_to :photo, dependent: :destroy
end
