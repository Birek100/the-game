import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './action.jsx';

class App extends Component {
  render() {
    const { number, getHigherNumber, getLowerNumber } = this.props;
    return (
      <div className="app">
        <button onClick={getHigherNumber}>Plus +</button>
        <button onClick={getLowerNumber}>Minus -</button>
        <p> Your actual number is {number} </p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    number: state.number
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getHigherNumber: () => dispatch(increase()),
    getLowerNumber: () => dispatch(decrease())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
