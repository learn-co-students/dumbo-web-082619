import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import actionCreators from './actionCreators'

// console.log(addCatActionCreator)

const store = createStore(reducer)

const action = actionCreators.addCatActionCreator("Sugar", 52)

store.dispatch(action)
store.dispatch(actionCreators.addCatActionCreator("Nora", 30000))

console.log(store.getState())
ReactDOM.render(<Provider store={ store }>
  <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


