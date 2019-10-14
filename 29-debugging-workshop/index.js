document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')

  function fetchJoke(username){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => jokeData.joke)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    let username = document.getElementById('name-input').value

    if(username === "") {
      return null
    } else {
        fetchJoke(username)
        .then(joke => {
          const newJokeLi = document.createElement('li')

          newJokeLi.innerHTML = `
          <span class="username">${username} says:</span> ${joke}
          `
          jokeList.appendChild(newJokeLi)
        })
      }
    })
})
