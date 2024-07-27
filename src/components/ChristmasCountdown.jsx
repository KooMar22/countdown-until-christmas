import { useState, useEffect } from "react";

function ChristmasCountdown() {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let christmasDate = new Date(currentYear, 11, 25); // Christmas starts at 25.12.
    let endDate = new Date(currentYear, 11, 31); // End of Christmas time 31.12.

    // If Christmas time has passed, set the date to next year
    if (now > endDate) {
      christmasDate = new Date(currentYear + 1, 11, 25);
      endDate = new Date(currentYear + 1, 11, 31);
    }

    const difference = christmasDate - now;

    let timeRemaining = {};
    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return { timeRemaining, isChristmasPeriod: now >= christmasDate && now <= endDate };
  };

  const [timeData, setTimeData] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeData(calculateTimeRemaining());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { timeRemaining, isChristmasPeriod } = timeData;

  return (
    <div className="counter">
        {isChristmasPeriod ? (
          <div className="cestitka">
            <h1>Sretan Božić! 🎅🏻🎁☃️</h1>
            <p>Neka ovo božićno vrijeme bude ispunjeno toplinom obiteljskog okupljanja, smijehom najmilijih i trenucima duboke zahvalnosti za sve blagoslove koje nam je Bog podario.</p>
            <p>S ljubavlju i iskrenom molitvom za vaše zdravlje i sreću u nadolazećoj godini.</p>
            <p>Blagoslovljen Božić i sretna nova godina!</p>
          </div>
        ) : (
          <div>
            <h1>Do Božića je ostalo:</h1>
            <div className="countdown">
              <h2>{timeRemaining.days} dana</h2>
              <h2>{timeRemaining.hours} sati</h2>
              <h2>{timeRemaining.minutes} minuta</h2>
              <h2>{timeRemaining.seconds} sekundi</h2>
            </div>
          </div>
        )}
    </div>
  );
}

export default ChristmasCountdown;
