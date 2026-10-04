import { useState, useRef, JSX } from "react";

export default function Timer(): JSX.Element {
  const [seconds, setSeconds] = useState(0);

  // Store the timer ID in a ref so clearing it doesn't cause a re-render
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerIdRef.current !== null) return;

    timerIdRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerIdRef.current !== null) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null; // Clear ref value without triggering a re-render
    }
  };

  return (
    <div>
      <p className="text-2xl font-bold">Seconds: {seconds}</p>
      <button onClick={startTimer} className="btn btn-success mr-2">
        Start
      </button>
      <button onClick={stopTimer} className="btn btn-error">
        Stop
      </button>
    </div>
  );
}
