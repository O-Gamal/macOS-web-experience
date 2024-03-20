import { useEffect, useState } from 'react';

const DateAndTime = () => {
  const [data, setData] = useState(() =>
    new Date()
      .toLocaleDateString('en-uk', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      })
      .replace(/,/g, '')
  );
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('en-us', {
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      setData(
        currentDate
          .toLocaleDateString('en-uk', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
          })
          .replace(/,/g, '')
      );
      setTime(
        currentDate.toLocaleTimeString('en-us', {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <time className='flex items-center gap-2'>
      <span className='text-[13px] font-medium'>{data}</span>
      <span className='text-[13px] font-medium'>{time}</span>
    </time>
  );
};

export default DateAndTime;
