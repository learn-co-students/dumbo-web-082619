import actionNames from '../actionNames'

const initialState = []

const reducer = (oldState = initialState, action) => {
  // console.log(oldState)
  // console.log(action)

  switch (action.type) {
    case actionNames.ADD_CAT:
      return [ ...oldState, action.cat]
    case actionNames.ADOPT_ALL_CATS:
      return []
    case actionNames.LOAD_CATS:
      return action.cats
    default: 
      return [
        ...oldState
      ]
  }
}

export default reducer

