import React, { Component } from "react";

import Dashboard from "./components/dashboard/Dashboard";
import Display from "./components/display/Display";
import "./App.css";

class App extends Component {
	state = {
		balls: '',
		strikes: ''
	};

  	render() {
		return (
		<div className="App">
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
