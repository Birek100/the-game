import React, { Component } from 'react';

class App extends Component {
  state = {
    number: 0
  };

  getLowerNumber = () => {
    this.setState(prevState => ({ number: prevState.number - 1 }));
  };
  getHigherNumber = () => {
    this.setState(prevState => ({ number: prevState.number + 1 }));
  };

  render() {
    const { number } = this.state;
    return (
      <div classname="App">
        <button onClick={this.getHigherNumber}>Plus +</button>
        <button onClick={this.getLowerNumber}>Minus -</button>
        <p> Your actual state is {number} </p>
      </div>
    );
  }
}

export default App;
