import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    const { number, getHigherNumber, getLowerNumber } = this.props;

    return (
      <div className="counter">
        <button onClick={getHigherNumber}>Plus +</button>
        <button onClick={getLowerNumber}>Minus -</button>
        <p> Your actual number is {number} </p>
      </div>
    );
  }
}
Counter.propTypes = {
  number: PropTypes.number,
  getHigherNumber: PropTypes.func,
  getLowerNumber: PropTypes.func
};
export default Counter;
