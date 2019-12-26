import React, { useEffect, useState } from "react";
import Tone from "tone";
import DrumTrack from "../components/DrumTrack";

const DrumMachine = () => {
    const [state, setState] = useState({
        synth: new Tone.Synth().toMaster()
    });
    useEffect(() => {
        // on mount
        state.synth.triggerAttackRelease("C4", "8n");
    }, [state.synth]);
    return (
        <div className="drum-machine">
            <DrumTrack title="closed-hh" />
        </div>
    );
};

export default DrumMachine;
