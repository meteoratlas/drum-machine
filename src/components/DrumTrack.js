import React, { useState } from "react";

const DrumTrack = props => {
    let [pattern, setPattern] = useState(
        Array.apply(null, Array(16)).map(x => ({ velocity: 0, pitch: 0 }))
    );
    const loadPattern = pattern => {
        setPattern(pattern);
    };
    return (
        <div className={"track " + props.title}>
            {pattern.map(i => {
                return <div className="track-button"></div>;
            })}
        </div>
    );
};

export default DrumTrack;
