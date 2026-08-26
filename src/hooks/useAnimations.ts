import { useEffect, useState } from 'react';

export function useTypingEffect(
  strings: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseTime = 2000
): string {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let idx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = strings[idx];
      if (!isDeleting) {
        charIdx++;
        setDisplay(current.slice(0, charIdx));
        if (charIdx === current.length) {
          isDeleting = true;
          timeout = setTimeout(tick, pauseTime);
          return;
        }
        timeout = setTimeout(tick, typeSpeed);
      } else {
        charIdx--;
        setDisplay(current.slice(0, charIdx));
        if (charIdx === 0) {
          isDeleting = false;
          idx = (idx + 1) % strings.length;
          timeout = setTimeout(tick, 400);
          return;
        }
        timeout = setTimeout(tick, deleteSpeed);
      }
    };

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, [strings, typeSpeed, deleteSpeed, pauseTime]);

  return display;
}

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
