class Person{
  dance(){
    return "I am dancing!"
  }
}

class Instructor extends Person{
  static all = []
  constructor(name, fullName){
    // `this` is Instance
    super()
    this.name = name
    this.fullName = fullName
    Instructor.all.push(this)
  }

  // get legalName(){
  //   return `This is my legal name`
  // }

  introduce(){
    // `this` is Instance
    // super.dance() // -> Up the prototypical chain
    return `${super.dance()} Hey, I am ${this.name}`
  }

  dance(){
    return "I am dancing with a stranger"
  }

  static getAll(){
    return "Here are all the instructors"
  }

}

// function Instructor(name, fullName){
//   this.name = name
//   this.fullName = fullName
// }
//
// Instructor.prototype.introduce = function(){
//   return `Hi, I am ${this.name}`
// }



let eric = new Instructor("Eric", "Eric Kim")
let rei = new Instructor("Rei", "Reinald Reynoso")
let leizl = new Instructor("Leizl", "Leizl Samano")


// function globalIntroduction(){
//   console.log(this);
//   return `Hey, I'm ${this.fullName}`
// }
//
// const rei = {
//   fullName: "Reinald Reynoso",
//   name: "Rei",
//   introduce: globalIntroduction
// }
//
// const eric = {
//   legalName: "Hyeok Jung Kim",
//   name: "Eric",
//   introduce: globalIntroduction
// }
//
// const leizl = {
//   fullName: "Leizl Samano",
//   name: "Leizl",
//   introduce: globalIntroduction
// }
//
// console.log(eric.introduce())
// console.log(leizl.introduce())
// console.log(rei.introduce())
//
// console.log(eric.introduce === leizl.introduce)
// console.log(eric.introduce() === leizl.introduce())















//
