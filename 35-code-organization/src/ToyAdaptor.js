const URL = "http://localhost:3000/"

class ToyAdaptor {

  static getAllToys(){
    // returns a promise
    return fetch(URL + "toys").then(res => res.json())
  }

  static createAToy(toyObj){
    return fetch(URL + "toys", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        "Accept": "Application/json"
      },
      body: JSON.stringify(toyObj)
    }).then(res => res.json())
  }

  static updateLike(id, likeNumber){
    return fetch(URL + `toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json",
        "Accept": "Application/json"
      },
      body: JSON.stringify({
        likes: likeNumber
      })
    }).then(res => res.json())
  }

  static deleteToy(id){
    return fetch(URL + `toys/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
  }
}
