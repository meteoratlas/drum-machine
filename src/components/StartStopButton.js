import React from "react";

const StartStopButton = props => {
    return (
        <button className="start-button" onClick={props.startStop}>
            {props.play ? "■" : "▶"}
        </button>
    );
};

export default StartStopButton;
