class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :name
  # belongs_to :teacher
  has_many :assignments
end
