import React from 'react';
import Message from './Message'
import './App.css';

function App() {

  const messages = [
    "I love to use clams to open tools!!!!",
    "I love holding hands!",
    "I love Pizza!",
    "Node, the otter way!",
    "Checking out a new river!",
    "Flatiron feelings!"
  ]

  // const messageComponents = 

  return (
    <div className="App">
      { 
        messages.map(message => <Message 
                                  banana={ true } 
                                  potato={ 23748234678 } 
                                  orange={ () => 55 } 
                                  text={ message } />) 
      }
    </div>
  );
}

export default App;
