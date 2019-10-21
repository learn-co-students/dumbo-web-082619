// bind -> Function called on a function that returns a function, with `this` changed
// () => {}
// call -> Function called on a function that invokes a function, with `this` changed (takes in arguments as arguments)
// apply -> Function called on a function that invokes a function, with `this` changed (takes in arguments as an array)

function globalIntroduction(arg1, arg2){
  console.log(this, arg1, arg2);
  return `Hey, I'm ${this.fullName}`
}

const rei = {
  fullName: "Reinald Reynoso",
  name: "Rei",
  introduce: globalIntroduction
}

const eric = {
  fullName: "Hyeok Jung Kim",
  name: "Eric",
  introduce: globalIntroduction
}

const leizl = {
  fullName: "Leizl Samano",
  name: "Leizl",
  introduce: globalIntroduction
}

// console.log(leizl.introduce)
console.log(eric.introduce());
let methodName = eric.introduce
console.log(methodName());

document.addEventListener("DOMContentLoaded", function(event){
  // console.log(this);
  // this -> document (event.currentTarget/ the thing before the addEventListener)
  this.body.style["background-color"] = "red"
})

let arr = [1, 4, 3, 4]
arr.forEach(function(element) {
  // console.log(this)
  // this -> window (global Object)
})

window.fetch("https://dog.ceo/api/breeds/image/random")
  .then(function(){
    // console.log(this);
    // this -> window (global Object)
  })

class ButtonJS{
  constructor(color){
    // this -> instance being created *
    this.color = color
    this.buttonTag = document.createElement("button")
    this.buttonTag.innerText = `Color: ${this.color}`

    this.buttonTag.addEventListener("click", this.handleClick)
    // this is the buttonJS object being created *
    document.body.append(this.buttonTag)
  }

  handleClick = (evt) => {
    console.log(this);
    // `this` takes on the instance because it's defined as an instance method
    document.body.style["background-color"] = this.color
  }
}

let thing1 = new ButtonJS("blue")
let thing2 = new ButtonJS("coral")



























//
