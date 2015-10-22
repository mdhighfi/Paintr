# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :password_digest, :username, :session_token,
    presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :user_images,
    dependent: :destroy

  has_many :photos,
    class_name: "Photo",
    foreign_key: :author_id,
    primary_key: :id,
    dependent: :destroy

  has_many :albums,
    class_name: "Album",
    foreign_key: :author_id,
    primary_key: :id,
    dependent: :destroy

  attr_reader :password

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password).to_s
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)

    user if user && user.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    self.session_token
  end
end
