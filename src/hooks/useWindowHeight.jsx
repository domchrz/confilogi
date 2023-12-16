import { useEffect, useState } from "react";

export default function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const listener = () => setWindowHeight(window.innerHeight);

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);
  return windowHeight;
}
