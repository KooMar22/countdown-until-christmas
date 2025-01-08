import { useEffect } from "react";
import useCountdown from "../hooks/useCountdown";

function ChristmasCountdown() {
  const timeRemaining = useCountdown();

  useEffect(() => {
    if (!timeRemaining) {
      window.location.href = "https://markova-bozicna.vercel.app/";
    }
  }, [timeRemaining]);

  return (
    <div className="counter">
      <h1>Do Božića je ostalo:</h1>
      <div className="countdown">
        <div className="countdown-item">
          <h2>Dani</h2>
          <div className="box">
            <h3>{timeRemaining.days}</h3>
          </div>
        </div>
        <div className="countdown-item">
          <h2>Sati</h2>
          <div className="box">
            <h3>{timeRemaining.hours}</h3>
          </div>
        </div>
        <div className="countdown-item">
          <h2>Minute</h2>
          <div className="box">
            <h3>{timeRemaining.minutes}</h3>
          </div>
        </div>
        <div className="countdown-item">
          <h2>Sekunde</h2>
          <div className="box">
            <h3>{timeRemaining.seconds}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChristmasCountdown;