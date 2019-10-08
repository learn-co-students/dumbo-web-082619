let tacoButton = document.getElementById("taco")
let listOfEmojisUL = document.querySelector("#blobs")
let newEmojiForm = document.querySelector("#emoji-form")

// element.addEventListener("event_type", function(){})

// CLICK EVENT BELOW

tacoButton.addEventListener("click", function(evt){
  // listOfEmojisUL.innerHTML += "<li>🌮</li>"
  // // OR
  let tacoLi = document.createElement("li")
  tacoLi.innerText = "🌮"
  listOfEmojisUL.append(tacoLi)
})

// SUBMIT EVENT BELOW

newEmojiForm.addEventListener("submit", handleForm)

function handleForm(evt){
 evt.preventDefault()
 let form = evt.target
 let newEmojiInput = form.emoji
 let newEmoji = newEmojiInput.value

 let newEmojiLi = document.createElement("li")
 newEmojiLi.innerText = newEmoji
 listOfEmojisUL.append(newEmojiLi)
}





















//
