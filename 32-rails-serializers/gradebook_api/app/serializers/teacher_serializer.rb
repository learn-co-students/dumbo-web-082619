class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :professor_name
  has_many :classrooms
  # has_many :assignments
end
