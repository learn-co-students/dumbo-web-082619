# destroy all instances in our database 
# in case we need to re-run the seed file
# so we don't end up with duplicate records
Pizza.destroy_all
Topping.destroy_all

# create pizzas
pizzas = [
  { name:"Plain ol cheese", cost: rand(10..30), size:"Large", extra_cheese: true }, 
  { name:"Supreme", cost: rand(10..30), size:"Medium", extra_cheese: true }, 
  { name:"Hawaiian", cost: rand(10..30), size:"Large", extra_cheese: true }
]

Pizza.create(pizzas)

# create toppings
toppings = [
  { name:"Ham",tasting_notes: Faker::Hipster.paragraphs(number: rand(2..5)).join("\n\n"), image: "http://www.liberaldictionary.com/wp-content/uploads/2019/02/ham-5021.jpg" }, 
  { name:"Pineapple",tasting_notes: Faker::Hipster.paragraphs(number: rand(2..5)).join("\n\n"), image: "https://images-na.ssl-images-amazon.com/images/I/71%2BqAJehpkL._SL1500_.jpg"}, 
  { name:"Olives",tasting_notes: Faker::Hipster.paragraphs(number: rand(2..5)).join("\n\n"), image: "https://cdn.shopify.com/s/files/1/1519/8146/products/155_BenR_170130.jpg?v=1491927038" },
  { name:"Sausage",tasting_notes: Faker::Hipster.paragraphs(number: rand(2..5)).join("\n\n"), image: "https://www.daringgourmet.com/wp-content/uploads/2019/09/Homemade-Sausage-1-square-edit-3.jpg" }, 
  { name:"Bell Peppers",tasting_notes: Faker::Hipster.paragraphs(number: rand(2..5)).join("\n\n"), image: "https://images-na.ssl-images-amazon.com/images/I/71mPpFzHR3L._SL1500_.jpg" },
  { name:"Vermont Smoke and Cure Smoked Pepperoni",tasting_notes: Faker::Hipster.paragraphs(number: rand(2..5)).join("\n\n"), image: "https://cdns.webareacontrol.com/prodimages/1000-X-1000/1/i/19720175739Smoke-Cure-Uncured-Smoked-Pepperoni-L.png" },
  { name:"Anchovies",tasting_notes: Faker::Hipster.paragraphs(number: rand(2..5)).join("\n\n"), image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cbf18296-966d-4060-8d19-5d9f934e61dd.JPG" },
  { name:"Mushrooms",tasting_notes: Faker::Hipster.paragraphs(number: rand(2..5)).join("\n\n"), image: "https://images-na.ssl-images-amazon.com/images/I/81O6O13uSUL._SY355_.jpg" },
  { name:"Onion",tasting_notes: Faker::Hipster.paragraphs(number: rand(2..5)).join("\n\n"), image: "https://steamuserimages-a.akamaihd.net/ugc/958605370490839535/242F4D6774C919D2E4FA05706782EDDCBAEF3EF6/" },
]

Topping.create(toppings)

# create pizza toppings
PizzaTopping.create(pizza: Pizza.find_by(name: "Hawaiian"), topping: Topping.find_by(name: "Ham"), amount: rand(12..50))
PizzaTopping.create(pizza: Pizza.find_by(name: "Hawaiian"), topping: Topping.find_by(name: "Pineapple"), amount: rand(12..50))
PizzaTopping.create(pizza: Pizza.find_by(name: "Supreme"), topping: Topping.find_by(name: "Sausage"), amount: rand(12..50))
PizzaTopping.create(pizza: Pizza.find_by(name: "Supreme"), topping: Topping.find_by(name: "Pepperoni"), amount: rand(12..50))