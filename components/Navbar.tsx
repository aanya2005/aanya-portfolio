'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const cycleTheme = () => {
    let next: 'light' | 'warm' | 'dark';
    if (theme === 'light') next = 'warm';
    else if (theme === 'warm') next = 'dark';
    else next = 'light';
    
    setTheme(next);
  };


  return (
    <nav className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 40px', alignItems: 'center' }}>
      <div className="handwritten" style={{ fontSize: '1.5rem', color: 'var(--pink)' }}>aanya.</div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <a className="nav-link" href="#about">about</a>
        <a className="nav-link" href="#projects">projects</a>
        <a className="nav-link" href="#experience">exp</a>
        <a className="nav-link" href="#skills">skills</a>
        
        <button onClick={cycleTheme} style={{ cursor: 'pointer', fontSize: '1.2rem', background: 'none', border: 'none' }}>
          {theme === 'light' ? '☀️' : theme === 'warm' ? '☕' : '🌙'}
        </button>
      </div>
    </nav>
  );
}