import React, { Component } from 'react';

class App extends Component {
	state ={
		number: 0
	}

	getLowerNumber = () => {
		console.log(this.state.number)
		this.setState({number: this.state.number - 1})
	};
	getHigherNumber = () => {
		console.log(this.state.number)
		this.setState({number: this.state.number + 1})
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.getHigherNumber}>Plus +</button>
				<button onClick={this.getLowerNumber}>Minus -</button>
				<p> Your actual state is { this.state['number'] } </p>
			</div>
			);
	}
	
}

export default App;