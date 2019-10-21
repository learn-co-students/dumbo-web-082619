class ToyCard {

  constructor(toyObj) {
    this.id = toyObj.id
    this.image = toyObj.image
    this.likes = toyObj.likes
    this.name = toyObj.name
  }

  handleLikes = (evt) => {
    ToyAdaptor.updateLike(this.id, this.likes + 1)
      .then((updatedToy) => {
        this.likes = updatedToy.likes
        this.spanTag.innerText = updatedToy.likes
      })
  }

  handleDelete = (evt) => {
    ToyAdaptor.deleteToy(this.id)
      .then(() => {
        this.toyDiv.remove()
      })
  }

  render(){
    this.toyDiv = document.createElement("div")
    this.toyDiv.classList.add("card")
    this.toyDiv.innerHTML = `
      <h2>${this.name}</h2>
      <img src=${this.image} class="toy-avatar" />
      <p><span>${this.likes}</span> Likes</p>
      <button class="like-btn">Like <3</button>
      <button class="delete-btn">Delete</button>
    `

    this.likeButton = this.toyDiv.querySelector(".like-btn")
    this.deleteButton = this.toyDiv.querySelector(".delete-btn")

    this.spanTag = this.toyDiv.querySelector("span")

    this.likeButton.addEventListener("click", this.handleLikes)
    this.deleteButton.addEventListener("click", this.handleDelete)
    return this.toyDiv
  }









//
}
