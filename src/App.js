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
			<h1>Take Me Out to the BALLLLLLLLLLLLLLLLS Game!</h1>
			<Display 
				balls={this.state.balls} 
				strikes={this.state.strikes}
			/>
			<Dashboard />
		</div>
		);
  	};
}

export default App;
