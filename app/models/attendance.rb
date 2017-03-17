# == Schema Information
#
# Table name: attendances
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  event_id   :integer          not null
#

class Attendance < ApplicationRecord
  validates :user, :events, presence: true

  belongs_to :user
  belongs_to :event
end
