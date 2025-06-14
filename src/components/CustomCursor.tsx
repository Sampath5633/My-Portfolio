// src/components/CustomCursor.tsx
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const dot = document.createElement('div');
    dot.className = 'custom-cursor-dot';
    document.body.appendChild(dot);

    const move = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', move);

    return () => {
      document.removeEventListener('mousemove', move);
      document.body.removeChild(dot);
    };
  }, []);

  return null;
};

export default CustomCursor;
