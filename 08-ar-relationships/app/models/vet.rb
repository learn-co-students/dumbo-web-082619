class Vet < ActiveRecord::Base
  has_many :visits
  has_many :cats, through: :visits

  def cat_names
    self.cats.map { |cat| cat.name }
  end
  # CREATE
  # john = Cat.new()
  # john.save

  # Cat.create()

  # READ
  # Cat.find(id)
  # Cat.find_by(name: "Henry") #=> The first cat satisfying the condition
  # Cat.where(name: "Henry") #=> All the cats satisfying the condition

  # UPDATE
  # john = Cat.first
  # john.name = "New name"
  # john.save

  # john.update(name: "NEW NAme")

  # DELETE
  # john = Cat.first
  # john.destroy

  # Cat.destroy(id)

end
