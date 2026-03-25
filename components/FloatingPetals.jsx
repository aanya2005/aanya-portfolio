"use client";
import { useEffect, useState } from "react";

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: 60 + Math.random() * 40,
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
            transform: `scale(${p.drift}) rotate(${Math.random() * 360}deg)`,
          }}
        >
          {/* Petal shape */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.8,
            }}
          >
            <path
              d="M12 2C14 6 20 6 20 10C20 14 14 14 12 20C10 14 4 14 4 10C4 6 10 6 12 2Z"
              fill={Math.random() > 0.5 ? "#f9a8d4" : "#fbcfe8"}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}