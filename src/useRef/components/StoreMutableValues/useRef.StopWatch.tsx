import React, { useRef, useState } from 'react'

const StopWatch: React.FC = () => {
    const [time, setTime] = useState(0);
    const timeRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (timeRef.current === null) {
            timeRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000)
        }
        console.log("Timer Started");
        console.log(timeRef.current);
    }

    const stopTimer = () => {
        if (timeRef.current !== null) {
            clearInterval(timeRef.current);
            timeRef.current = null;
        }
        console.log("Timer Stopped");
    }

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    }
    return (
        <div>
            <h1>Stopwatch useRef</h1>
            <p>{time} seconds</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default StopWatch
