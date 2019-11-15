import React from 'react';
import logo from './logo.svg';
import './App.css';
import CatContainer from './CatContainer'
import CatForm from './CatForm'

// class App extends React.Component {

  // state = {
  //   cats: [
  //     {
  //       name: "Garfield"
  //     },
  //     {
  //       name: "Hobbes"
  //     },
  //     {
  //       name: "Fluffy"
  //     }
  //   ]
  // }

  // addCat = (cat) => {
  //   this.setState({
  //     cats: [...this.state.cats, cat]
  //   })
  // }

export default props => <>
        <CatContainer />
        <CatForm />
      </>

