
const initialState = []

const reducer = (oldState = initialState, action) => {

  console.log(action)

  switch (action.type) {
    
    default: 
      return [
        ...oldState
      ]
  }
}

export default reducer

