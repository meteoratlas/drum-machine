import React, { useEffect, useState } from "react";
import Tone from "tone";
import DrumTrack from "../components/DrumTrack";

const DrumMachine = () => {
    const [tempo, setTempo] = useState(120);
    const [state, setState] = useState({
        synth: new Tone.Synth().toMaster()
    });
    let division = 1;
    const [loop, setLoop] = useState(
        new Tone.Loop(() => {
            division %= 16;
            division++;
        })
    );

    const [CHPattern, setCHPattern] = useState(
        Array.apply(null, Array(16)).map(x => ({ velocity: 0, pitch: 0 }))
    );
    const [OHPattern, setOHPattern] = useState(
        Array.apply(null, Array(16)).map(x => ({ velocity: 0, pitch: 0 }))
    );
    const [TomPattern, setTomPattern] = useState(
        Array.apply(null, Array(16)).map(x => ({ velocity: 0, pitch: 0 }))
    );
    const [PercPattern, setPercPattern] = useState(
        Array.apply(null, Array(16)).map(x => ({ velocity: 0, pitch: 0 }))
    );
    const [SnarePattern, setSnarePattern] = useState(
        Array.apply(null, Array(16)).map(x => ({ velocity: 0, pitch: 0 }))
    );
    const [BassPattern, setBassPattern] = useState(
        Array.apply(null, Array(16)).map(x => ({ velocity: 0, pitch: 0 }))
    );

    useEffect(() => {
        // on mount
        Tone.Transport.bpm.value = tempo;
        Tone.Transport.latencyHint = "fastest";

        state.synth.triggerAttackRelease("C4", "8n");
    }, [state.synth]);
    return (
        <div className="drum-machine">
            <DrumTrack title="closed-high-hat" pattern={CHPattern} />
            <DrumTrack title="open-high-hat" pattern={OHPattern} />
            <DrumTrack title="percussion" pattern={PercPattern} />
            <DrumTrack title="tom" pattern={TomPattern} />
            <DrumTrack title="snare" pattern={SnarePattern} />
            <DrumTrack title="bass-drum" pattern={BassPattern} />
        </div>
    );
};

export default DrumMachine;
