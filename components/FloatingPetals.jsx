"use client";
import { useEffect, useState } from "react";

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 10,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 10,
      drift: Math.random() > 0.5 ? 1 : -1,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            top: "-20px",
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {/* Petal shape */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f9a8d4",
              borderRadius: "60% 40% 60% 40%",
              transform: "rotate(45deg)",
              opacity: 0.7,
            }}
          />
        </div>
      ))}
    </div>
  );
}