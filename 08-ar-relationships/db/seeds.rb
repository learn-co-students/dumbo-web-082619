Visit.destroy_all
Cat.destroy_all
Vet.destroy_all

fluffy = Cat.create(name: "Fluffy", fluffiness: 0)
simba = Cat.create(name: "Simba", fluffiness: 12)
smokey = Cat.create(name: "Smokey", fluffiness: 9)
spongy = Cat.create(name: "Spongy", fluffiness: 10)

eric = Vet.create(name: "Dr. Eric", location: "Dumbo", years: rand(25))
erica = Vet.create(name: "Dr. Erica", location: "Dambo", years: rand(25))
erik = Vet.create(name: "Dr. Erik", location: "Dimbo", years: rand(25))

Visit.create(time: "Saturday", cat_id: fluffy.id, vet_id: erik.id)
Visit.create(time: "Sunday Morning", cat_id: simba.id, vet_id: erik.id)

Visit.create(time: "Monday Morning", cat_id: fluffy.id, vet_id: erica.id)

Visit.create(time: "Sunday Morning", cat_id: spongy.id, vet_id: eric.id)

puts "It has been seeded."
