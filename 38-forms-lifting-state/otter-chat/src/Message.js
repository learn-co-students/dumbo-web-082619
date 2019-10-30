import React from 'react';

class Message extends React.Component {

  // buttonClicked = (event) => {
  //   // console.log(this.props.message.id)
  //   this.props.incrementEyes(this.props.message.id)
  // }

  render(){

    // const closure = (event) => {
    //   // console.log(this.props.message.id)
    //   this.props.incrementEyes(this.props.message.id)
    // }
    console.log(this.props)
    return (<p>
      { this.props.message.text }
      <button onClick={ event => this.props.incrementEyes(this.props.message.id) }>
       👁{ this.props.message.eyes }
      </button>
      
    </p>)
  }

}

export default Message