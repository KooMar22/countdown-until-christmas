import { useState, useEffect } from "react";

function useCountdown() {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let christmasDate = new Date(currentYear, 11, 25); // 25.12.
    let endDate = new Date(currentYear, 11, 31); // 31.12.

    if (now > endDate) {
      christmasDate = new Date(currentYear + 1, 11, 25);
      endDate = new Date(currentYear + 1, 11, 31);
    }

    const difference = christmasDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return null;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeRemaining;
}

export default useCountdown;