import actionNames from './actionNames'

const initialState = {
  cats: [],
  owners: [],
  dogs: [],
  gerbils: [],
  hipsters: []
}


const reducer = (oldState = initialState, action) => {
  // console.log(oldState)
  // console.log(action)

  switch (action.type) {
    case actionNames.ADD_CAT:
      return {
      ...oldState,
      cats: [ ...oldState.cats, action.cat]
    }
    case actionNames.ADOPT_ALL_CATS:
      return {
        ...oldState,
        cats: []
      }
    default: 
      return {
        ...oldState
      }
  }
}

export default reducer