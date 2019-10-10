// document.addEventListener("DOMContentLoaded", () => {})
let itemsOL = document.querySelector("#to-do-items")
let newToDoForm = document.getElementById('new-to-do')
// Array.from(document.querySelectorAll("div"))

fetch("http://localhost:3000/to_do_items")
  .then(r => r.json())
  .then((toDosArray) => {
    toDosArray.forEach((jsonObj) => {
      appendJSONtoDOM(jsonObj)
    })
  })

function appendJSONtoDOM(json){
  itemsOL.innerHTML += `
    <li class="item">
      <input id="to-do-item-${json.id}" type="checkbox" ${json.done ? "checked" : ""} />
      <label for="to-do-item-${json.id}" class="js-title middle aligned content">${json.title}</label>
      <button>×</button>
    </li>
  `
}

newToDoForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let titleInput = evt.target.title
  let newTitle = titleInput.value

  fetch("http://localhost:3000/to_do_items", {
    method: 'POST',
    body: JSON.stringify({
      title: newTitle,
      done: false
    }),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(r => r.json())
  .then(appendJSONtoDOM)

})








//
