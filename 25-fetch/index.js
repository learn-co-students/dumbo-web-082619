// fetch(url, {})
// .then(res => res.json())
// .then(jsonObj => {
//    do whatever with jsonObj
// })



// element.addEventListener("event_type", function(evt) {
  // maybe get some information regarding `evt.target` and save it to a variable

  // fetch(url, {})
  // .then(res => res.json())
  // .then(jsonObj => {
  //    do DOM manipulation with the jsonObj
  // })
// })

document.addEventListener("DOMContentLoaded", function(){
  // Inside the DOMContentLoaded, we are guaranteed to have the DOM loaded
  let button = document.querySelector("#hello-button")

  button.addEventListener('click', function(evt){
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(json => {
        let dogListUL = document.querySelector("#dogs")
        dogListUL.innerHTML += `<li><img src="${json.message}" alt="good dog" /></li>`
        // let newDogLi = document.createElement("li")
        // let newDogImg = document.createElement("img")
        //
        // newDogImg.src = json.message
        // newDogImg.alt = "good dog"
        //
        // newDogLi.append(newDogImg)
        // dogListUL.append(newDogLi)
      })

  })

})

// Outside the DOMContentLoaded, we are not guaranteed to have the DOM loaded
// console.log("before");
// let timeout = setTimeout(function () {
//   console.log("hello in 5 seconds");
// }, 5000)
//
// console.log("after");
