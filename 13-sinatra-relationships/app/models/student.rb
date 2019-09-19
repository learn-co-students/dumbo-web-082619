class Student < ActiveRecord::Base
  has_many :habits
  has_many :interests
  has_many :topics, through: :interests
end
