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
  validates :title, :date, :time, :address, :seats, :user, :city, presence: true

  belongs_to :city
  belongs_to :user
end
