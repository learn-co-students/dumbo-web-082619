import React from 'react';
import Cat from './Cat'
import { connect } from 'react-redux'

class CatContainer extends React.Component {

  render(){
    // console.log(this.props)
    return (
      <ul>
        {
          this.props.cats.map(cat => <Cat cat={ cat } />)
        }
      </ul>
    );
  }
}

// export default CatContainer;


const mapStateToProps = (state) => {
  console.log(state)
  // console.log("mapStateToProps got called")
  return {
    cats: state.cats
  }
}

// const higherOrderComponent = connect(mapStateToProps)
// const WrappedComponent = higherOrderComponent(CatContainer)
// export default WrappedComponent

export default connect(mapStateToProps)(CatContainer)










