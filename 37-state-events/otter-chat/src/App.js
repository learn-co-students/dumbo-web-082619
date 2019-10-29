import React from 'react';
import Message from './Message'
import './App.css';

class App extends React.Component {

  state = {
    messages: [
      // {
      //   title: "sdfjkhsdfkjhsdf",
      //   numberOfEyes: 99
      // }
      "I love to use clams to open tools!!!!",
      "I love holding hands!",
      "I love Pizza!",
      "Node, the otter way!",
      "Checking out a new river!",
      "Flatiron feelings!",
      "sdfkjhsdfkjhsdjkh"
    ]
  }


  // const messageComponents = 
  render() {

    return (
      <div className="App">
        { 
          this.state.messages.map(message => <Message 
                                    banana={ true } 
                                    potato={ 23748234678 } 
                                    orange={ () => 55 } 
                                    text={ message } />) 
        }
      </div>
    );
  }
}

export default App;
