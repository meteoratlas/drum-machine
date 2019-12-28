import React, { useState } from "react";
import DrumSwitch from "./DrumSwitch";

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
            {props.pattern.map((x, i) => {
                return (
                    <DrumSwitch
                        key={props.title + i}
                        index={i}
                        shift={props.shift}
                        cntrl={props.cntrl}
                        clicked={props.clicked}
                    />
                );
            })}
        </div>
    );
};

export default DrumTrack;
