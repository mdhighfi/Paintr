# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ActiveRecord::Base
  validates :author_id, :title, presence: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id

  has_many :photos,
    class_name: "Photo",
    foreign_key: :album_id,
    primary_key: :id
end
