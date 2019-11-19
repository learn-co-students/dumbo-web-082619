
import actionNames from './actionNames'
import actionCreators from './actionCreators'


export const loadCats = () => (dispatch) => {
  fetch("http://localhost:3000/cats")
    .then(res => res.json())
    .then(data => {
       dispatch({
        type: actionNames.LOAD_CATS,
        cats: data
      })
    })
  }


export const addCat = cat => dispatch => {
  fetch("http://localhost:3000/cats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cat)
  }).then(res => res.json())
    .then(data => {
      const action = actionCreators.addCatActionCreator(data)
      dispatch(action)
    })
}