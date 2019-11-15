import React from 'react';
import { connect } from 'react-redux'
import actionCreators from './actionCreators'

const initialState = {
  name: "",
  tailLength: 0
}

class CatForm extends React.Component {

  state = initialState

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addCat({
      name: this.state.name,
      tailLength: this.state.tailLength
    })
    this.setState({ ...initialState })
  }

  render(){
    return (
      <form onSubmit={ this.onSubmit }>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" value={ this.state.name } onChange={ this.onChange } />
        <label for="tail-length">Tail Length</label>
        <input type="number" id="tail-length" name="tailLength" value={ this.state.tailLength } onChange={ this.onChange } />
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCat: cat => {
      const action = {
        type: "ADD_CAT",
        cat: {
          name: cat.name,
          tailLength: cat.tailLength
        }
      }
      // const action = actionCreators.addCatActionCreator(cat.name, cat.tailLength)
      dispatch(action)
    }
  }
}

const higherOrderComponent = connect(null, mapDispatchToProps)

export default higherOrderComponent(CatForm);












