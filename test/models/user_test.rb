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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
