import { useEffect, useRef } from 'react';

export default function Observer({ onIntersection, children }) {
  const element = useRef(null);
  const observer = useRef();

  useEffect(() => {
    if (!element.current) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersection();
        }
      },
      { threshold: 0.1 }
    );
    observer.current.observe(element.current);

    return () => observer.current?.disconnect();
  }, [onIntersection]);

  return <div ref={element}>{children}</div>;
}
