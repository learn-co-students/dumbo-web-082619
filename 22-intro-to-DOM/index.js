// READ Elements from the DOM

// document.getElementById("heading") // -> Return the first element with that ID

// let allBads = document.getElementsByClassName('bad')
// let allBads2 = document.querySelectorAll(".bad")

// document.getElementsByTagName('li')
// document.getElementsByName('name')

let allLis = document.querySelectorAll("li") // -> Returns a NodeList of all the elements satisfying the condition



// CREATE an element for the DOM

// 1) Create the element
let newLi = document.createElement("li")

// 2) Razzmatazz (Personalize your element)
newLi.className = "createdElement"
newLi.innerText = "🍓"

// 3) Find the appropriate place to slap on the DOM
let selectedUL = document.getElementById("blobs")
selectedUL.append(newLi)


// Shorter way
selectedUL.innerHTML += "<li class='good'>🐕</li>"


// UPDATING elements from the DOM

// 1) Find the element on the DOM

let headingObject = document.querySelector("h1") // -> Returns the first element satisfying the condition

// 2) Make the proper adjustments
// headingObject.innerText = "Here is a nice list"



// DELETING elements from the DOM

// 1) Find the element
let spanOfWords = headingObject.querySelector("span")

// 2) Remove the element
spanOfWords.remove()



// Removing all the bad LI

function destroyOneLi(li){
  li.remove()
}

let allBadLis = document.querySelectorAll("li.bad")

allBadLis.forEach(
  function(li){ li.remove() }
)

// allBadLis.forEach(
//   destroyOneLi
// )



// let allBadLisClass = document.getElementsByClassName('bad')
// for (let i = allBadLisClass.length - 1; i >= 0 ; i--) {
//   allBadLisClass[i].remove()
// }































//
