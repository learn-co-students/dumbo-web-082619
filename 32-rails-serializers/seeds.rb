rei = Teacher.create(name: "Rei", subject: "Math")

geo = Classroom.create(name: "Geometry", teacher: rei)
Assignment.create(name: "Triangle Inequality Theorem", classroom: geo)
Assignment.create(name: "Pythagorean Theorem", classroom: geo)


leizl = Teacher.create(name: "Leizl", subject: "Science")

bio = Classroom.create(name: "Biology", teacher: leizl)
Assignment.create(name: "Mitochondria", classroom: bio)

physics = Classroom.create(name: "Physics", teacher: leizl)
Assignment.create(name: "Kinematics", classroom: physics)
