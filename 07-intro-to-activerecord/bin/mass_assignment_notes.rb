require_relative "../config/environment"

class Human
  attr_accessor :name, :skill, :fear, :age

  def dance
    "I am dancing"
  end

end


class Clown < Human

  # attr_reader :fear
  # attr_writer :age
  attr_accessor :hair

  def initialize(attributes_hash)
    attributes_hash.each do |key, value|
      self.send("#{key}=", value)
    end
  end

  def terrify_a_child
    "I am terrifying a child"
  end

  def dance
    # "I am clown dancing"
    super() * 5
  end


end

# krusty = Clown.new("Krusty", 73, "Juggling", "Dancing")
larry = Clown.new({name: "Larry", fear: "Dancing", skill: "Biking"})













binding.pry
0
