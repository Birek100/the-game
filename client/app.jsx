import React, { Component } from 'react';

let calc = 0

class App extends Component {
	state ={
		number: 0
	}

	getLowerNumber = () => {
		console.log(calc -= 1)
		calc -= 1
		//console.log(this.state['number'] -= 1)
		//	this.state['number'] -= 1 
	};

	getHigherNumber = () => {
		console.log(calc += 1)
		calc += 1
	};

	render(){
		console.log(this.state['number'])
		return (
			<div className="App">
				<button onClick={this.getHigherNumber}>Plus +</button>
				<button onClick={this.getLowerNumber}>Minus -</button>
				<p> Your actual number is { calc } </p>
			</div>
			);
	}
}

export default App;