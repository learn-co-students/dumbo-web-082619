import actionNames from './actionNames'

const addCatActionCreator = (cat) => {
  return {
    type: actionNames.ADD_CAT,
    cat: cat
  }
}


export default {
  addCatActionCreator
}