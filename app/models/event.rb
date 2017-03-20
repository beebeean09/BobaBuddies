# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  city_id    :integer          not null
#  host_id    :integer          not null
#  title      :string           not null
#  date       :datetime         not null
#  time       :datetime         not null
#  address    :string           not null
#  seats      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Event < ApplicationRecord
  validates :title, :date, :time, :address, :seats, :host, :city, presence: true

  belongs_to :city

  belongs_to :host,
    class_name: :User,
    primary_key: :id,
    foreign_key: :host_id

  has_many :attendances

  has_many :attendees,
    through: :attendances,
    source: :user
end
