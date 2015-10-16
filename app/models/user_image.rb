# == Schema Information
#
# Table name: user_images
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  cover_url   :string           not null
#  profile_url :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class UserImage < ActiveRecord::Base
  belongs_to :user, dependent: :destroy
end
