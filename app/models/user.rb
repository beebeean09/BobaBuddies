# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  first_name      :string           not null
#  last_name       :string
#  host            :boolean          not null
#  boba_choice     :string
#  city_id         :integer
#  profile_image   :string
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :password_digest, :first_name, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :host, inclusion: { in: [ true, false ] }
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  before_validation :ensure_session_token

  has_many :attendances
  
  has_many :events, through: :attendances

  has_many :hosted_events,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Event


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
