class Teacher < ApplicationRecord
  has_many :classrooms, dependent: :destroy
  has_many :assignments, through: :classrooms

  def professor_name
    "Dr. #{self.name}"
  end

end
