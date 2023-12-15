import { useEffect, useState } from 'react';

export default function useCountdown(initialNumber, interval, duration) {
  const [number, setNumber] = useState(initialNumber);
  const [shouldStart, setShouldStart] = useState(false);
  const deductBy = Math.floor((initialNumber / duration / interval) * 10);

  useEffect(() => {
    if (!shouldStart) return;

    const countDownInterval = setInterval(() => {
      setNumber((prevState) => prevState - deductBy);
    }, [100]);
    if (number <= 0) {
      clearInterval(countDownInterval);
    }

    return () => clearInterval(countDownInterval);
  }, [number, shouldStart]);

  return { number, startInterval: () => setShouldStart(true) };
}
