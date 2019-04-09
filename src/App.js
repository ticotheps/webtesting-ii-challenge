import React, { Component } from "react";

import Display from "./components/display/Display";
import "./App.css";

class App extends Component {

  	render() {
		return (
		<div className="App">
			<h1 className="App-title">Take Me Out to the BALLLLLLLLLLS Game!</h1>
			<Display />
		</div>
		);
	};
}

export default App;
