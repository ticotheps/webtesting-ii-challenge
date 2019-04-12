import React from 'react';

import "../../App.css";

function Dashboard(props) {
    return (
        <div className="Dashboard">
          <button className="btn" onClick={props.funcStrike}>Strike</button>
          <button className="btn" onClick={props.funcBall}>Ball</button>
          <button className="btn" onClick={props.funcFoul}>Foul</button>
          <button className="btn" onClick={props.funcHit}>Hit</button>
        </div>
    )
}

export default Dashboard;