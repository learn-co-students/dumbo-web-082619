require 'pry'

clown_joke = "Why don't sharks eat clowns? They taste funny."
clown_names = [ "Bluster", "Flaky", "Raspy", "Floppy", "Krusty", "Baby" ]

class Clown

  attr_reader :fear
  attr_writer :age
  attr_accessor :name, :skill

  # initialize => Linked to Clown.new()
  def initialize(name, age, skill, fear = "Water")
    @name = name
    @age = age
    @skill = skill
    @fear = fear
    @hair = "Red"
    self.cure()
  end

  # WRITER
  # def name=(name)
  #   @name = name
  # end

  # READER
  # def name
  #   @name
  # end

  def dance
    # self refers to the instance calling this method
    # self.name() => @name
    "I am #{self.name} and I am dancing."
  end

  def cure
    @fear = "Nothing"
  end


end



clown1 = Clown.new("Bluster", 40, ["juggling", "laughing"], "red noses")
clown2 = Clown.new("Flaky", 32, "pie throwing", "children")
clown3 = Clown.new("Raspy", 24, "haunting your dreams","other clowns")
clown4 = Clown.new("Floppy", 76, "falling down","stairs")
clown5 = Clown.new("Krusty", 39, "giving a creepy smile","parties")
clown6 = Clown.new("Baby", 19, "eating a lot of food","birds")

clowns = [ clown1, clown2, clown3, clown4, clown5, clown6 ]




binding.pry
0
