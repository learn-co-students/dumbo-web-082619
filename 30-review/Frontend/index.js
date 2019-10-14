// Code your solution here

let shoeListUL = document.getElementById('shoe-list')
let mainShoeDiv = document.getElementById('main-shoe')


fetch("http://localhost:3000/shoes")
  .then(res => res.json())
  .then((shoesArray) => {

    shoesArray.forEach((shoe) => {
      let li = document.createElement("li")
      li.className = "list-group-item"
      li.innerText = shoe.name
      li.dataset.id = shoe.id
      shoeListUL.append(li)

      // li.addEventListener("click", () => {
      //
      //   displayOneShoe(shoe)
      // })
    })
    displayOneShoe(shoesArray[0])

  })

  shoeListUL.addEventListener("click", (evt) => {
    if (evt.target.className === "list-group-item") {

      fetch(`http://localhost:3000/shoes/${evt.target.dataset.id}`)
        .then(res => res.json())
        .then(shoe => {
          displayOneShoe(shoe)
        })

    }
  })

  // fetch("http://localhost:3000/shoes/1")
  // .then(res => res.json())
  // .then((shoe) => {
  //
  //   fetch(`http://localhost:3000/shoes/${shoe.id}`, {
  //     method: "PATCH"
  //   })
  //
  // })


function displayOneShoe(shoe){
  mainShoeDiv.innerHTML = `
    <img class="card-img-top" id="shoe-image" src="${shoe.image}">
    <div class="card-body">
      <h4 class="card-title" id="shoe-name">${shoe.name}</h4>
      <p class="card-text" id="shoe-description">${shoe.description}</p>
      <p class="card-text"><small class="text-muted" id="shoe-price">${shoe.price}</small></p>
      <div class="container" id="form-container">
        <form id="new-review">
          <div class="form-group">
            <textarea class="form-control" id="review-content" rows="3"></textarea>
            <input type="submit" class="btn btn-primary"></input>
          </div>
        </form>
      </div>

    </div>
    <h5 class="card-header">Reviews</h5>
    <ul class="list-group list-group-flush" id="reviews-list">
    </ul>
  `
  let reviewsUL = mainShoeDiv.querySelector("#reviews-list")
  let newForm = mainShoeDiv.querySelector("#new-review")

  newForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    fetch(`http://localhost:3000/shoes/${shoe.id}/reviews`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: evt.target["review-content"].value
      })
    })
    .then(res => res.json())
    .then(review => {
      reviewsUL.innerHTML += `<li class="list-group-item">${review.content}</li>`
    })

  })

  shoe.reviews.forEach(review => {
    reviewsUL.innerHTML += `<li class="list-group-item">${review.content}</li>`
  })
}
