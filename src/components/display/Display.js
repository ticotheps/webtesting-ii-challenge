import React from 'react';

import Dashboard from "../dashboard/Dashboard";
import "../../App.css";

class Display extends React.Component {
	state = {
		strikes: 0,
		balls: 0
    };
    
    resetAll = () => {
		this.setState(({ strikes, balls }) => ({
            strikes: 0,
            balls: 0
		}));
    }

	handleStrikesChange = () => {     
        this.setState((prevState, { strikes }) => ({
            strikes: prevState.strikes + 1,
        }));
	}

	handleBallsChange = () => {
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
        if (this.state.strikes < 2) {
            console.log("Stttttrike", this.state.strikes +1, "!");
            this.handleStrikesChange();
        } else {
            console.log("STRIKE 3! YOUUUUU'RE OUTTA THERE!");
            this.resetAll();
        }
	};
	
	ball = () => {
        if (this.state.balls < 3) {
            console.log("Ball", this.state.balls +1, "!");
            this.handleBallsChange();
        } else {
            console.log("Ball 4! Take your base, Batter!");
            this.resetAll();
        }
	};

	foul = () => {
        if (this.state.strikes < 2) {
            console.log("FOULLLLL BALL!");
            console.log("The 'strikes' count is:", this.state.strikes +1);
            this.handleStrikesChange();
        } else {
            console.log("The strikes count stays at 2!");
        }
	};
	
	hit = () => {
		console.log("We've got a hit, Ladies & Gentlemen!");

		this.resetAll();
	};
}

export default Display;