import React from 'react';

const defaultState =  {
  text: "", 
  eyes: 0 
}

export default class MessageForm extends React.Component {



  // onChangeEyes = (event) => {
  //   // console.log(event.target.name)
  //   // let num = event.target.value
  //   // if (num > 5000)
  //   //   num = 5000

  //   // const variable = "potato"

  //   // const obj = {}
  //   // obj[variable] = "sdfjksdfkjhsdfjkh"

  //   // console.log(obj)

  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  state = {
    ...defaultState
  } // temporary state for draft message 

  onChange = (event) => { // to make our inputs controlled
    // console.log()
    this.setState({
      [event.target.name]: event.target.value //.toUpperCase()
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    // console.log(event)
    // console.log(this)
    this.props.addMessage(this.state.text, this.state.eyes)
    this.setState({
      ...defaultState
    })
  }

  render(){
    // console.log(this.props.addMessage)
    return (<form onSubmit={ this.onSubmit }>
        <ul>
          <li>
            <label htmlFor="message-text">Text:</label>
            <input type="text"
                   id="message-text"
                   name="text"
                   onChange={ this.onChange }
                   value={ this.state.text } />
          </li>
          <li>
            <label htmlFor="message-eyes">Eyes:</label>   
            <input type="number"
                   id="message-eyes"
                   name="eyes"
                   onChange={ this.onChange }
                   value={ this.state.eyes } />
          </li>
          <li>
            <input type="submit" />
          </li>
        </ul>
      </form>)
  }
  
}