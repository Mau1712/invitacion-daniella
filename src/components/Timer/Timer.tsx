import React from "react";
import { useEffect, useState } from "react";
import "./Timer.css";


interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-12-07T00:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Si la fecha ya pasó, mostrar ceros
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calcular inmediatamente
    calculateTimeLeft();

    // Actualizar cada segundo
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="countdown-container">      
      <div className="countdown-grid">
        <div className="countdown-item">
          <h2 className="countdown-number">{timeLeft.days}</h2>
          <p className="countdown-label">Días</p>
        </div>
        
        <div className="countdown-item">
          <h2 className="countdown-number">{timeLeft.hours.toString().padStart(2, '0')}</h2>
          <p className="countdown-label">Hrs</p>
        </div>
        
        <div className="countdown-item">
          <h2 className="countdown-number">{timeLeft.minutes.toString().padStart(2, '0')}</h2>
          <p className="countdown-label">Min</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
