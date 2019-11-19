import { combineReducers } from 'redux'

import catReducer from './catReducer'
import gerbilReducer from './gerbilReducer'

export default combineReducers({
  cats: catReducer,
  gerbil: gerbilReducer
})

