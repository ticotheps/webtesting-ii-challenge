import React, { Component } from "react";

import Dashboard from "./components/dashboard/Dashboard";
import Display from "./components/display/Display";
import "./App.css";

class App extends Component {
	state = {
		balls: '0',
		strikes: '0'
	};

  	render() {
		return (
		<div className="App">
			<h1 className="App-title">Take Me Out to the BALLLLLLLLLLLLLLLLS Game!</h1>
			<Display 
				balls={this.state.balls} 
				strikes={this.state.strikes}
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
		// this.setState({});
	};
	
	ball = () => {
		console.log("The ball() function was triggered!");
		// this.setState({});
	};

	foul = () => {
		console.log("The foul() function was triggered!");
		// this.setState({});
	};
	
	hit = () => {
		console.log("The hit() function was triggered!");
		// this.setState({});
	};
}

export default App;
