let tacoButton = document.getElementById("taco")
let listOfEmojisUL = document.querySelector("#blobs")
let newEmojiForm = document.querySelector("#emoji-form")
// let allEmojis = listOfEmojisUL.querySelectorAll("li")

// element.addEventListener("event_type", function(){})

// function removeEmoji(evt){
//  evt.target.remove()
// }

// console.log(allEmojis);
// allEmojis.forEach(function(emojiLi){
//
//   emojiLi.addEventListener("click", removeEmoji)
//
// })

// 1) Find a stable parent on the HTML //-> (querySelector, getElementById)
// 2) Add event listener //-> (addEventListener)
// 3) If one of the children is clicked //-> (evt.target)
// 4) Do the event //-> (evt.target)

listOfEmojisUL.addEventListener("click", function(evt){
  if (evt.target.tagName === "LI") {
    evt.target.remove()
  }
})

















// CLICK EVENT BELOW

tacoButton.addEventListener("click", function(evt){
  // listOfEmojisUL.innerHTML += "<li>🌮</li>"
  // // OR
  let tacoLi = document.createElement("li")
  tacoLi.innerText = "🌮"
  listOfEmojisUL.append(tacoLi)

  // tacoLi.addEventListener("click", removeEmoji )
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

  // newEmojiLi.addEventListener("click", removeEmoji)
}





















//
