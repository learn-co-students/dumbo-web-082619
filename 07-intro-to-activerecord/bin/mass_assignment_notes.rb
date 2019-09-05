require_relative "../config/environment"

class Clown

  attr_reader :fear
  attr_writer :age
  attr_accessor :name, :skill

  def initialize(name, age, skill, fear = "Water")
    @name = name
    @age = age
    @skill = skill
    @fear = fear
    @hair = "Red"
  end

end

krusty = Clown.new("Krusty", 73, "Juggling", "Dancing")

binding.pry
0
