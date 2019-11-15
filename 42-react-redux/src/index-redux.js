import { createStore } from 'redux'
import reducer from './reducer'
import actionNames from './actionNames'




const adoptAllCatsAction = {
  type: actionNames.ADOPT_ALL_CATS
}

const store = createStore(reducer)

// console.log(store)

// const state = store.getState()

store.dispatch(addCatActionCreator("Sugar", 52))
store.dispatch(addCatActionCreator("Nora", 3000))
store.dispatch(adoptAllCatsAction)

console.log(store.getState())

// console.log(initialState, state)
// console.log(initialState === state)


