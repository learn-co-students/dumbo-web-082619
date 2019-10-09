// element.addEventListener("event_type", function(evt) {
  // maybe get some information regarding `evt.target` and save it to a variable

  // fetch(url, {})
  // .then(res => res.json())
  // .then(jsonObj => {
  //    do DOM manipulation with the jsonObj
  // })
// })

document.addEventListener("DOMContentLoaded", function(){
  let button = document.querySelector("#hello-button")
  let newFoxForm = document.querySelector("#fox-form")
  let foxesUL = document.querySelector("#foxes")






  newFoxForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let newFoxName = evt.target.fox_name.value
    let newFoxImage = evt.target.fox_img.value

    fetch("http://localhost:3000/foxes", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name: newFoxName,
        img_url: newFoxImage
      })
    })
      .then(res => res.json())
      .then((json) => {
        foxesUL.innerHTML += `<li><img src="${json.img_url}" alt="${json.name}" /></li>`
      })
    // POST, "localhost:3000/foxes"


    console.log("submit");
  })








  button.addEventListener('click', function(evt){
    fetch("http://localhost:3000/foxes/random")
      .then(res => res.json())
      .then(json => {
        foxesUL.innerHTML += `<li><img src="${json.img_url}" alt="${json.name}" /></li>`
        // let newFoxLi = document.createElement("li")
        // let newFoxImg = document.createElement("img")
        //
        // newFoxImg.src = json.img_url
        // newFoxImg.alt = json.name
        //
        // newFoxLi.append(newFoxImg)
        // foxesUL.append(newFoxLi)
      })

  })

})
