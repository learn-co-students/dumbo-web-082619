import React from 'react';

class Message extends React.Component {


  // constructor(props){
  //   super()
  //   this.onLikeClicked = this.onLikeClicked.bind(this)
  // }

  state = {
    // whatever: [1,2,3,5,6],
    numberOEyes: 0,
    whichEmoji: "🌶"
  }
  

  // theActualMessage(){
  //   return this.props.text
  //   // return "I love to use clams to open tools!!!!"
  // }

  onLikeClicked = (event) => {

    // super.onLikeClicked()
    // console.log(this)

    // console.log(this.state)

    // this.state.numberOEyes++ //🙅‍♀️
    // this.state.numberOEyes += 1 🙅‍♀️


    this.setState({
      // whatever: [ 7],
      numberOEyes: this.state.numberOEyes + 1,
      whichEmoji: "👁"
    }, () => {
      console.log(this.state.numberOEyes)
      this.fuckYou(this.state.numberOEyes)

    })

   

    // console.log(this.state)
    // popUp(this.state.


    // console.log("hi mom")
    // return "dafshjsdfhjkdkjh"
  }

  fuckYou(numberOEyes){
     if (numberOEyes == 5)
      alert("🖕")
  }

  render(){
    // console.log("render")
    // console.log(this.state.numberOEyes)

    // returnValue()

    // console.log(this.theActualMessage())

    // console.log(this.props)
    // console.log(this.props.orange())
    return (<p>
      { this.props.text /*this.theActualMessage()*/ }
      <button onClick={ this.onLikeClicked }>
        { this.state.whichEmoji } { this.state.numberOEyes }
      </button>
    </p>)
  }

}

export default Message