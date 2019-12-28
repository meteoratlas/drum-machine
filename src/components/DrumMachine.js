import React, { useEffect, useState } from "react";
import Tone from "tone";
import DrumTrack from "../components/DrumTrack";
import StartStopButton from "../components/StartStopButton";

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

    const [cntrlDown, setCntrlDown] = useState(false);
    const [shiftDown, setShiftDown] = useState(false);

    const handleKeyDown = e => {
        if (e.key === "Shift") setShiftDown(true);
        if (e.key === "Control") setCntrlDown(true);
    };
    const handleKeyUp = e => {
        if (e.key === "Shift") setShiftDown(false);
        if (e.key === "Control") setCntrlDown(false);
    };
    const startStop = () => {
        Tone.Transport.toggle();
    };

    useEffect(() => {
        // on mount
        Tone.Transport.bpm.value = tempo;
        Tone.Transport.latencyHint = "fastest";

        state.synth.triggerAttackRelease("C4", "8n");
    }, [state.synth]);

    const onSwitchClicked = (func, index) => {};

    return (
        <div
            className="drum-machine"
            tabIndex="1"
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
        >
            <DrumTrack
                title="closed-high-hat"
                pattern={CHPattern}
                update={setCHPattern}
                cntrl={cntrlDown}
                shift={shiftDown}
            />
            <DrumTrack
                title="open-high-hat"
                pattern={OHPattern}
                update={setOHPattern}
                cntrl={cntrlDown}
                shift={shiftDown}
            />
            <DrumTrack
                title="percussion"
                pattern={PercPattern}
                update={setPercPattern}
                cntrl={cntrlDown}
                shift={shiftDown}
            />
            <DrumTrack
                title="tom"
                pattern={TomPattern}
                update={setTomPattern}
                cntrl={cntrlDown}
                shift={shiftDown}
            />
            <DrumTrack
                title="snare"
                pattern={SnarePattern}
                update={setSnarePattern}
                cntrl={cntrlDown}
                shift={shiftDown}
            />
            <DrumTrack
                title="bass-drum"
                pattern={BassPattern}
                update={setBassPattern}
                cntrl={cntrlDown}
                shift={shiftDown}
            />
            <StartStopButton play={false} startStop={startStop} />
        </div>
    );
};

export default DrumMachine;
