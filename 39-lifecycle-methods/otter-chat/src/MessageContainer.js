import React from 'react';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import uuid from 'uuid'


export default class MessageContainer extends React.Component {

  state = {
    messages: []
  }

  componentDidMount(){
    this.getMessages()
  }

  getMessages(){
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        console.log("fetch happened")

        this.setState({
          messages: data
        })
      })
  }

  incrementEyes = (id) => {
    // console.log(id)
    // const messageWeWantToChange 
    // const onesBefore = this.messages.slice(0, this.messages.indexOf(messageWeWantToChange))
    // const onesAfter = this.messages.slice(this.messages.indexOf(messageWeWantToChange), this.messages.length - 1)
    const newMessages = this.state.messages.map(message => {
      if (message.id === id) { //the one we're looking for
        return { // modified message
          ...message,
          eyes: message.eyes + 1 //override existing eyes key
        }
      } else {
        return message
      }
    })


    this.setState({
      messages: newMessages
    })
  }

  addMessage = (messageText, messageNumberOfEyes) => {
    const newMessage = { 
      text: messageText,
      eyes: parseInt(messageNumberOfEyes),
      id: uuid()
    }
    this.setState({
      messages: [ ...this.state.messages, newMessage]
    })
  }


  render(){
    return (<>
      <MessageList messages={ this.state.messages }  
                   incrementEyes={ this.incrementEyes }/>
      <MessageForm addMessage={ this.addMessage } />
      </>)
  }
  
}









