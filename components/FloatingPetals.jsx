"use client";

import { useEffect, useState } from "react";

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 90,
      size: 10 + Math.random() * 10,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 10,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* branch */}
      <img
        src="/branch.png"
        alt="branch"
        className="absolute top-20 right-0 w-[400px]"
      />

      {/* petals */}
      {petals.map((p) => (
        <img
          key={p.id}
          src="/petal.png"
          alt="petal"
          style={{
            position: "absolute",
            top: "-20px",
            left: `${p.left}%`,
            width: `${p.size}px`,
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}