class Topic < ActiveRecord::Base
  has_many :interests
  has_many :students, through: :interests
end
