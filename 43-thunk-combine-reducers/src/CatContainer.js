import React from 'react';
import Cat from './Cat'
import { connect } from 'react-redux'
import actionNames from './actionNames'

class CatContainer extends React.Component {

  componentDidMount(){
    fetch("http://localhost:3000/cats")
      .then(res => res.json())
      .then(data => this.props.catsLoaded(data))
  }

  render(){
    // console.log(this.props)
    return (
      <ul className="cat-list">
        {
          this.props.cats.map(cat => <Cat key={ cat.id } cat={ cat } />)
        }
      </ul>
    );
  }
}

// export default CatContainer;

const mapStateToProps = (state) => {
  // console.log(state)
  // console.log("mapStateToProps got called")
  return {
    cats: state.cats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    catsLoaded: (cats) => {
      dispatch({
        type: actionNames.LOAD_CATS,
        cats: cats
      })
    }
  }
}

// const higherOrderComponent = connect(mapStateToProps)
// const WrappedComponent = higherOrderComponent(CatContainer)
// export default WrappedComponent

export default connect(mapStateToProps, mapDispatchToProps)(CatContainer)










