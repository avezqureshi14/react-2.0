import React, { useState } from 'react'

const StopWatch: React.FC = () => {
    const [time, setTime] = useState(0);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (timerId === null) {
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setTimerId(id);
        }
        console.log("Timer Started");
        console.log(timerId);
    }
    const stopTimer = () => {
        if (timerId !== null) {
            clearInterval(timerId)
            setTimerId(null);
        }
        console.log("Timer Stopped");
    }

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    }
    return (
        <div>
            <h1>Stopwatch useState</h1>
            <p>{time} seconds</p>
            <button onClick={startTimer} >Start</button>
            <button onClick={stopTimer} >Stop</button>
            <button onClick={resetTimer} >Reset</button>
        </div>
    )
}

export default StopWatch
