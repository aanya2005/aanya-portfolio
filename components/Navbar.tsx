'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'warm' | 'dark'>('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const cycleTheme = () => {
    const modes: ('light' | 'warm' | 'dark')[] = ['light', 'warm', 'dark'];
    const nextIndex = (modes.indexOf(theme) + 1) % modes.length;
    setTheme(modes[nextIndex]);
  };

  return (
    <nav className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px' }}>
      <div className="handwritten" style={{ fontSize: '1.5rem', color: 'var(--pink)' }}>aanya.</div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <a href="#about" style={{ textDecoration: 'none', color: 'var(--pink)' }}>about</a>
        <a href="#experience" style={{ textDecoration: 'none', color: 'var(--pink)' }}>experience</a>
        <button 
          onClick={cycleTheme} 
          style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}
        >
          {theme === 'light' ? '☀️' : theme === 'warm' ? '☕' : '🌙'}
        </button>
      </div>
    </nav>
  );
}