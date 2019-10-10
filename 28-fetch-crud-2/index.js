// document.addEventListener("DOMContentLoaded", () => {})
let itemsOL = document.querySelector("#to-do-items")
let newToDoForm = document.getElementById('new-to-do')
// Array.from(document.querySelectorAll("div"))


// READ
fetch("http://localhost:3000/to_do_items")
  .then(r => r.json())
  .then((toDosArray) => {
    toDosArray.forEach((jsonObj) => {
      appendJSONtoDOM(jsonObj)
    })
  })

function appendJSONtoDOM(json){
  itemsOL.innerHTML += `
    <li class="item ${json.done ? "done" : ""}">
      <input id="to-do-item-${json.id}" class="js-checkbox" data-id="${json.id}" type="checkbox" ${json.done ? "checked" : ""} />
      <label for="to-do-item-${json.id}" class="js-title middle aligned content">${json.title}</label>
      <button class="js-delete" data-id="${json.id}">×</button>
    </li>
  `
}


// CREATE

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



itemsOL.addEventListener("click", function(evt) {
  if (evt.target.tagName === "BUTTON" && evt.target.className === "js-delete") {

    // DELETE

    let id = evt.target.dataset.id

    // OPTIMISTICALLY
    // evt.target.parentElement.remove()
    fetch(`http://localhost:3000/to_do_items/${id}`, {
      method: "DELETE"
    })
    .then((r) => {
      // pessimistically
      if (r.ok) {
        evt.target.parentElement.remove()
      }
    })
    // OPTIMISTICALLY
    // evt.target.parentElement.remove()

  }
  else if (evt.target.className === "js-checkbox") {
    // evt.target.classList.contains("js-checkbox")
    // evt.target.matches("[type='checkbox']")
    
    // UPDATE
    let whatCheckedValueBecomesBool = evt.target.checked
    let id = evt.target.dataset.id

    fetch(`http://localhost:3000/to_do_items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        done: whatCheckedValueBecomesBool
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(r => r.json())
    .then(updatedJSON => {

      if (updatedJSON.done === true) {
        evt.target.parentElement.classList.add("done")
      } else {
        evt.target.parentElement.classList.remove("done")
      }

    })
  }
})





















//
