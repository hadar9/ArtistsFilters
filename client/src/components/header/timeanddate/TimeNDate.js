import React, { useState, useEffect } from 'react';

export default function TimeNDate() {
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);

  const calcTime = function () {
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    setTime(time);
  };

  useEffect(() => {
    const now = new Date();
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    setDay(days[now.getDay()]);
    calcTime();
    setInterval(() => {
      calcTime();
    }, 1000);
  }, []);

  return (
    <div className='timendate'>
      <p>
        {day},{time}
      </p>
    </div>
  );
}
