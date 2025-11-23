import { useEffect, useState } from 'react';

export function useActiveSection(ids, offset = 0) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0.25 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [ids, offset]);

  return active;
}
