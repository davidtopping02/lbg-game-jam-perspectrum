import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeout }) => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, initialTime);

      return () => clearInterval(timerId);
    } else {
        onTimeout()
    }
  }, [time, onTimeout]);

  return (
    <div className="d-flex justify-content-center">
      <h2>Time Remaining: {time}</h2>
    </div>
  );
};

export default Timer;