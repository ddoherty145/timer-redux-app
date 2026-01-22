import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import {pauseTimer, resumeTimer, resetTimer, removeTimer} from "../features/timers/TimerSlice";

function TimerCard({timer}) {
    const dispatch = useDispatch();
    const [displayTime, setDisplayTime] = useState(timer.elapsed);

    useEffect(() => {
        let interval = null;

        if (timer.isRunning) {
            interval = setInterval(() => {
                const now = Date.now();
                const newElapsed = now - timer.startTime + timer.elapsed;
                setDisplayTime(newElapsed);
            }, 1000);
        } else {
            setDisplayTime(timer.elapsed);
        }

        return () => clearInterval(interval);
    }, [timer.isRunning, timer.elapsed, timer.startTime]);

    const handlePause = () => dispatch(pauseTimer(timer.id));
    const handleResume = () => dispatch(resumeTimer(timer.id));
    const handleReset = () => dispatch(resetTimer(timer.id));
    const handleRemove = () => dispatch(removeTimer(timer.id));

    return (
        <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h3>{timer.label}</h3>
      <p>Elapsed Time: {Math.floor(displayTime / 1000)}s</p>
      <p>Status: {timer.isRunning ? "Running" : "Paused"}</p>
      {timer.isRunning ? (
        <button onClick={handlePause}>Pause</button>
      ) : (
        <button onClick={handleResume}>Resume</button>
      )}
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
    );
};

export default TimerCard;