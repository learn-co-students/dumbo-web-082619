import React from 'react';
import Message from './Message'


export default class MessageList extends React.Component {

  constructor(){
    super()
    this.scrollContainerRef = React.createRef()
  }

  componentDidMount(){
    // debugger
    console.log("cdm in message-list")
  }

  componentDidUpdate() {
    // console.log("cdu in message-list")
    this.scrollContainerRef.current.scrollTop = 99999999999999999999
  }

  render(){
    // console.log(this.props)
    return (<ol className="message-list" ref={ this.scrollContainerRef }> {
        this.props.messages.map(message => <li key={ message.id }>
          <Message message={ message } incrementEyes={ this.props.incrementEyes } />
        </li>) 
      }
      </ol>)
  }
  
}

