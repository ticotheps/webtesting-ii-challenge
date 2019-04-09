import React from 'react';

import Dashboard from "../dashboard/Dashboard";
import "../../App.css";

class Display extends React.Component {
	state = {
		strikes: 0,
		balls: 0
    };
    
    resetAll = () => {
        console.log("The resetAll() function has been activated!");
        
		this.setState(({ strikes, balls }) => ({
            strikes: 0,
            balls: 0
		}));
    }

	handleStrikesChange = () => {
        console.log("The handleClick() function has been activated!");
        
        this.setState((prevState, { strikes }) => ({
            strikes: prevState.strikes + 1,
        }));
	}

	handleBallsChange = () => {
		console.log("The handleClick() function has been activated!");

		this.setState((prevState, { balls }) => ({
			balls: prevState.balls + 1,
		}));
	}

    render() {
        return (
            <div className="Display">
                {/* eslint-disable-next-line*/}
                <iframe
                    src="https://giphy.com/embed/l41lZ4JBFUi6iPciI"
                    width="480"
                    height="270"
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                />
                <div className="scoreboard">
                    <div className="strikes">Strikes: {this.state.strikes}</div>
                    <div className="balls">Balls: {this.state.balls}</div>
                </div>
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
        
        if (this.state.strikes < 2) {
            this.handleStrikesChange();
        } else {
            this.resetAll();
        }
	};
	
	ball = () => {
        console.log("The ball() function was triggered!");
        
        if (this.state.balls < 3) {
            this.handleBallsChange();
        } else {
            this.resetAll();
        }
	};

	foul = () => {
		console.log("The foul() function was triggered!");

		this.handleStrikesChange();
		this.handleBallsChange();
	};
	
	hit = () => {
		console.log("The hit() function was triggered!");

		this.resetAll();
	};
}

export default Display;