import actionNames from './actionNames'

const addCatActionCreator = (catName, catTailLength) => {
  return {
    type: actionNames.ADD_CAT,
    cat: {
      name: catName,
      tailLength: catTailLength
    }
  }
}


export default {
  addCatActionCreator
}