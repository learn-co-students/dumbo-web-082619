import React from 'react';
import Cat from './Cat'
import { connect } from 'react-redux'
import { loadCats } from './thunks'

class CatContainer extends React.Component {

  componentDidMount(){
    // console.log(this.props.loadCats)
    this.props.loadCats()
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


const mapStateToProps = (state) => {
  // console.log(state)
  return {
    cats: state.cats
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadCats: () => dispatch(loadCats())
//   }
// }

const mapDispatchToProps = {
  loadCats: loadCats
}

export default connect(mapStateToProps, mapDispatchToProps)(CatContainer)










