import React, { useState } from "react";

const DrumTrack = props => {
    const formatTitle = str => {
        return str
            .split("-")
            .map(x => x.charAt(0).toUpperCase() + x.slice(1))
            .join(" ");
    };
    return (
        <div className={"track " + props.title}>
            <p>{formatTitle(props.title)}</p>
            {props.pattern.map(i => {
                return <div className="track-button"></div>;
            })}
        </div>
    );
};

export default DrumTrack;
