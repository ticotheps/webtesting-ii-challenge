import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Take Me Out to the BALLLLLLLLLLLLLLLLS Game!</h1>
        {/* eslint-disable-next-line*/}
        <iframe
          src="https://giphy.com/embed/l41lZ4JBFUi6iPciI"
          width="480"
          height="270"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
        <div className="btn-container">
          <button className="btn">Strike</button>
          <button className="btn">Ball</button>
          <button className="btn">Foul</button>
          <button className="btn">Hit</button>
        </div>
      </div>
    );
  }
}

export default App;
