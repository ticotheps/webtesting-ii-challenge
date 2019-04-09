import React, { Component } from "react";

import Dashboard from "./components/dashboard/Dashboard";
import Display from "./components/display/Display";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Dashboard />
      </div>
    );
  }
}

export default App;
