'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    cursor.style.opacity = '0';
    dot.style.opacity = '0';

    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const updateCursor = () => {
      smoothRef.current.x = lerp(smoothRef.current.x, posRef.current.x, 0.12);
      smoothRef.current.y = lerp(smoothRef.current.y, posRef.current.y, 0.12);

      cursor.style.transform = `translate(${smoothRef.current.x - 20}px, ${smoothRef.current.y - 20}px)`;
      dot.style.transform = `translate(${posRef.current.x - 3}px, ${posRef.current.y - 3}px)`;

      rafId = requestAnimationFrame(updateCursor);
    };

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cursor.style.opacity = '1';
      dot.style.opacity = '1';
    };

    const onEnterHover = () => {
      cursor.style.transform += ' scale(1.8)';
      cursor.style.background = 'rgba(201, 166, 107, 0.15)';
      cursor.style.borderColor = '#C9A66B';
    };
    const onLeaveHover = () => {
      cursor.style.background = 'transparent';
      cursor.style.borderColor = 'rgba(154, 123, 79, 0.5)';
    };

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnterHover);
      el.addEventListener('mouseleave', onLeaveHover);
    });

    rafId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor w-10 h-10 rounded-full border border-gold/50 transition-[background,border-color] duration-200"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor w-1.5 h-1.5 rounded-full bg-gold"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
