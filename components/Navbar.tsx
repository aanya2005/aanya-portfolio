'use client';

import { useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px' }}>
        <div>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#experience">Experience</a>
          <a className="nav-link" href="#skills">Skills</a>
        </div>

        <button
          onClick={() => setDark(!dark)}
          style={{ fontSize: '20px', background: 'none', border: 'none' }}
        >
          ☀️
        </button>
      </nav>
    </div>
  );
}