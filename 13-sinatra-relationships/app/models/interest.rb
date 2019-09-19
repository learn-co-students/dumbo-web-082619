class Interest < ActiveRecord::Base
  belongs_to :student
  belongs_to :topic
end
