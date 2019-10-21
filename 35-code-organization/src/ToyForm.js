class ToyForm {
  constructor() {
    // this is the instance being created
    this.form = document.querySelector(".add-toy-form")
  }

  render(){
    this.form.addEventListener("submit", this.handleSubmit)
    return this.form
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let newName = this.form.name.value
    let newImage = this.form.image.value
    let newObject = {name: newName, image: newImage, likes: 0}
    ToyAdaptor.createAToy(newObject)
      .then((newToy) => {
        this.form.reset()
        let newToyObj = new ToyCard(newToy)
        toyCollectionDiv.append(newToyObj.render())
      })
  }
}
