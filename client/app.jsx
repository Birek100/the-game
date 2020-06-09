import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
 // state = {
 //   number: 0
 // };

  //getLowerNumber = () => {
  //  this.setState(prevState => ({ number: prevState.number - 1 }));
  //};
  //this.setState(prevState => ({ number: props.number - 1 }));
  //};
  //getHigherNumber = () => {
    //this.setState(prevState => ({ number: prevState.number + 1 }));
  //};
//this.setState(prevState => ({ number: props.number + 1 }));
  //};
  render() {
    //const { number } = this.state;
    //console.log(this.props)
    const { number, getHigherNumber, getLowerNumber } = this.props;
    return (
      <div className="app">
        <button onClick={this.getHigherNumber}>Plus +</button>
        <button onClick={this.getLowerNumber}>Minus -</button>
        <p> Your actual number is {number} </p>
      </div>
    );
  }
}
//REDUX
const mapStateToProps = (state) => {
	return {
		number: state.number
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getHigherNumber: () => dispatch({ type: 'INCREASE' })
		getLowerNumber: () => dispatch({ type: 'DECREASE' })
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
