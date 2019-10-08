let tacoButton = document.getElementById("taco")
// document.querySelector("#taco")
let listOfEmojisUL = document.querySelector("#blobs")
let newEmojiForm = document.querySelector("#emoji-form")

// element.addEventListener("event_type", function(){})

// CLICK EVENT BELOW

tacoButton.addEventListener("click", function(evt){
  // listOfEmojisUL.innerHTML += "<li>🌮</li>"
  let tacoLi = document.createElement("li")
  tacoLi.innerText = "🌮"
  listOfEmojisUL.append(tacoLi)
})

// tacoButton.addEventListener("click", handleEvent)
//
// function handleEvent(evt){
//   let tacoLi = document.createElement("li")
//   tacoLi.innerText = "🌮"
//   listOfEmojisUL.append(tacoLi)
// }

// SUBMIT EVENT BELOW

newEmojiForm.addEventListener("submit", handleForm)

function handleForm(evt){
 evt.preventDefault()
 let form = evt.target
 let newEmojiInput = form.emoji
 // "emoji" is the name of the input inside the form
 let newEmoji = newEmojiInput.value

 // evt.target.querySelector("#emoji-input").value
 let newEmojiLi = document.createElement("li")
 newEmojiLi.innerText = newEmoji
 listOfEmojisUL.append(newEmojiLi)
}





















//
