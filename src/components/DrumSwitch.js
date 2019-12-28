import React from "react";

const DrumSwitch = props => {
    return (
        <div
            className="track-button"
            onClick={() => props.clicked(props.func, props.index)}
        ></div>
    );
};

export default DrumSwitch;
