import React, { Component } from 'react';

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

export default App
