# destroy all instances in our database 
# in case we need to re-run the seed file
# so we don't end up with duplicate records
Pizza.destroy_all
Topping.destroy_all

# create pizzas
pizzas = [
  { name:"Plain ol cheese", cost:40, size:"large", extra_cheese:true }, 
  { name:"Supreme", cost:1000001, size:"Mansion Size", extra_cheese:true }, 
  { name:"Hawaiian", cost:18, size:"Large", extra_cheese:true }
]

Pizza.create(pizzas)

# create toppings
toppings = [
  { pizza: Pizza.find_by(name: "Hawaiian"),name:"Ham",tasting_notes:"hammy" }, 
  { pizza: Pizza.find_by(name: "Hawaiian"),name:"Pineapple",tasting_notes:"It tastes like pineapple. Like vision and smell and touch, taste needs to be experienced. Sweet and slightly tart, pineapple has a distinct flavor that is unlike any other fruit." }, 
  { pizza: Pizza.find_by(name: "Supreme"),name:"Sausage",tasting_notes:"Truly great sausage is hard to come by. What do I mean by truly great? Well, first off, it's got to have the right texture. Juicy and fatty, with a nice spring to it and a resilience that I would describe as almost rubbery, if that word didn't already have so many bad connotations. Let's call it... mildly bouncy. As it cooks on top of the pie, it should slowly ooze flavorful fat and juices into the sauce and cheese surrounding it, saturating the entire upper crust of the pie with its sweet, porky, savory, fennel aroma. A perfect sausage slice is the quintessence of synergy." }, 
  { pizza: Pizza.find_by(name: "Supreme"),name:"Vermont Smoke and Cure Smoked Pepperoni",tasting_notes:"The perfect balance of sweet, sour, and tangy in this flavorful brand caused it to rank first with tasters as a snacking pepperoni. As indicated in the name, a puff of smoke was discernible on and off the pizza. And while it cupped nicely, the meaty flavor got lost among the other flavors of the pizza." }
]

Topping.create(toppings)
