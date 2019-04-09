import React, { Component } from "react";

import Dashboard from "./components/dashboard/Dashboard";
import Display from "./components/display/Display";
import "./App.css";

class App extends Component {
	state = {
		strikes: '0',
		balls: '0'
	};

	handleStrikesChange = () => {
		console.log("The handleClick() function has been activated!");
	}

	handleBallsChange = () => {
		console.log("The handleClick() function has been activated!");
	}

  	render() {
		return (
		<div className="App">
			<h1 className="App-title">Take Me Out to the BALLLLLLLLLLLLLLLLS Game!</h1>
			<Display 
				strikes={this.state.strikes}
				balls={this.state.balls} 
			/>
			<Dashboard
				funcStrike={this.strike}
				funcBall={this.ball} 
				funcFoul={this.foul} 
				funcHit={this.hit} 
			/>
		</div>
		);
	};
	  
	strike = () => {
		console.log("The strike() function was triggered!");
		this.handleStrikesChange();
		this.handleBallsChange();
		// this.setState({});
	};
	
	ball = () => {
		console.log("The ball() function was triggered!");
		this.handleStrikesChange();
		this.handleBallsChange();
		// this.setState({});
	};

	foul = () => {
		console.log("The foul() function was triggered!");
		this.handleStrikesChange();
		this.handleBallsChange();
		// this.setState({});
	};
	
	hit = () => {
		console.log("The hit() function was triggered!");
		this.handleStrikesChange();
		this.handleBallsChange();
		// this.setState({});
	};
}

export default App;
