import { useEffect, useState } from 'react';

const mediaQuery = window.matchMedia('(max-width: 60rem)');

export default function MatchMedia({ children }) {
  const [isMobile, setIsMobile] = useState(mediaQuery.matches);

  useEffect(() => {
    const listener = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return <>{children(isMobile)}</>;
}
