addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
    // submit listener here
  } else {
    toyFormContainer.style.display = 'none'
  }
})

let toyFormObj = new ToyForm()
toyFormObj.render()

// YOUR CODE HERE
ToyAdaptor.getAllToys()
.then((allToys) => {
  allToys.forEach((toy) => {
    let newToyObj = new ToyCard(toy)
    toyCollectionDiv.append(newToyObj.render())
  })
})
