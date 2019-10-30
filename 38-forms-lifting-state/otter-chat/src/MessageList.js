import React from 'react';
import Message from './Message'


export default class MessageList extends React.Component {

  render(){
    return (<ol> {

        this.props.messages.map(message => <li>
          <Message message={ message } incrementEyes={ this.props.incrementEyes } />
        </li>) 
      }
      </ol>)
  }
  
}

