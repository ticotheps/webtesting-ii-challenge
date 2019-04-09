import React from 'react';

function Display(props) {
    return (
        <div>
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
        </div>
    )
}

export default Display;