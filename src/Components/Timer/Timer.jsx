import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      onTimeUp();
    }
  }, [time, onTimeUp]);

  return (
    <div className="d-flex justify-content-center">
      <h2>Time Remaining: {time}</h2>
    </div>
  );
};

export default Timer;