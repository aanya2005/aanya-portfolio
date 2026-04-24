
'use client';

import { useEffect, useState } from 'react';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

export default function ScrambleText({ text }: { text: string }) {
  const [output, setOutput] = useState(text.split('').map(() => ''));
  const [active, setActive] = useState(false);

  const animate = () => {
    let frame = 0;

    const interval = setInterval(() => {
      const newText = text.split('').map((char, i) => {
        const revealPoint = frame / 2;

        if (i < revealPoint) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      });

      setOutput(newText);
      frame++;

      if (frame > text.length * 2) {
        clearInterval(interval);
        setOutput(text.split(''));
        setActive(false);
      }
    }, 40);
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <h1
      onMouseEnter={() => {
        if (!active) {
          setActive(true);
          animate();
        }
      }}
      style={{ fontSize: '2rem', letterSpacing: '1px', cursor: 'default' }}
    >
      {output.map((c, i) => (
        <span key={i} style={{ transition: 'all 0.1s' }}>
          {c}
        </span>
      ))}
    </h1>
  );
}