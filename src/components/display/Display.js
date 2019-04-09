import React from 'react';

import "../../App.css";

function Display(props) {
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
                <div className="strikes">Strikes: {props.strikes}</div>
                <div className="balls">Balls: {props.balls}</div>
            </div>
        </div>
    )
}

export default Display;