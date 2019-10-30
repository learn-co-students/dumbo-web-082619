import React from 'react';
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import uuid from 'uuid'


export default class MessageContainer extends React.Component {

  state = {
    // draftText: "",
    // draftEyes: "",
    messages: [
      { 
        id: 1,
        text: "I love to use clams to open tools!!!!",
        eyes: 0
      },
      { 
        id: 2,
        text: "I love holding hands!",
        eyes: 0
      },
      { 
        id: 3,
        text: "I love Pizza!",
        eyes: 5
      },
      { 
        id: 4,
        text: "Node, the otter way!",
        eyes: 0
      },
      { 
        id: 5,
        text: "Checking out a new river!",
        eyes: 0
      },
      { 
        id: 6,
        text: "Flatiron feelings!",
        eyes: 0
      },
    ],
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
      <MessageForm addMessage={ this.addMessage } />
      <MessageList messages={ this.state.messages } 
                   incrementEyes={ this.incrementEyes }/>
      </>)
  }
  
}









