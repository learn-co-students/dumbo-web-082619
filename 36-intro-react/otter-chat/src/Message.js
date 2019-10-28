import React from 'react';

class Message extends React.Component {
  

  // theActualMessage(){
  //   return this.props.text
  //   // return "I love to use clams to open tools!!!!"
  // }

  render(){

    // console.log(this.theActualMessage())

    console.log(this.props)
    console.log(this.props.orange())
    return (<p>
      { this.props.text /*this.theActualMessage()*/ }
    </p>)
  }

}

export default Message