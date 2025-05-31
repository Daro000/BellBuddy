import { useState, useEffect } from 'react';

type TimerProps = {
    initialSeconds?: number; // domyślnie 2700 (45 min)
};

const Timer = ({ initialSeconds = 2700 }: TimerProps) => {
    const [timeLeft, setTimeLeft] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const timerId = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 0) {
                    clearInterval(timerId);
                    setIsRunning(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [isRunning]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div style={{ margin: '1em 0', fontSize: '1.5em' }}>
            <p>Timer: {formatTime(timeLeft)}</p>
            <button onClick={() => setIsRunning(r => !r)}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={() => { setIsRunning(false); setTimeLeft(initialSeconds); }} style={{ marginLeft: '1em' }}>
                Reset
            </button>
        </div>
    );
};

export default Timer;
