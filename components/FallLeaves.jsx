"use client";
import { useEffect, useState, useRef } from "react";

function createLeaf(id) {
  return {
    id,
    left: Math.random() * 100,
    size: 22 + Math.random() * 18,
    duration: 6 + Math.random() * 4,
    rotation: Math.random() * 360,
    removed: false,
  };
}

export default function FallLeaves() {
  const [leaves, setLeaves] = useState([]);
  const crunchRef = useRef(null);

  useEffect(() => {
    crunchRef.current = new Audio("/sounds/leaf-crunch.mp3");

    const initial = Array.from({ length: 12 }).map((_, i) => createLeaf(i));
    setLeaves(initial);
  }, []);

  const spawnLeaf = () => {
    setLeaves((prev) => [...prev, createLeaf(Date.now())]);
  };

  const removeLeaf = (id) => {
    if (crunchRef.current) {
      crunchRef.current.currentTime = 0;
      crunchRef.current.play();
    }

    setLeaves((prev) =>
      prev.map((leaf) =>
        leaf.id === id ? { ...leaf, removed: true } : leaf
      )
    );

    setTimeout(() => {
      setLeaves((prev) => prev.filter((l) => l.id !== id));
      spawnLeaf();
    }, 300);
  };

  const handleAnimationEnd = (id) => {
    // leaf reached bottom → remove + spawn
    setLeaves((prev) => prev.filter((l) => l.id !== id));
    spawnLeaf();
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <img
          key={leaf.id}
          src="/leaf.png"
          alt="leaf"
          onClick={() => removeLeaf(leaf.id)}
          onAnimationEnd={() => handleAnimationEnd(leaf.id)}
          className="pointer-events-auto cursor-pointer transition-all duration-300"
          style={{
            position: "absolute",
            top: "-40px",
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            animation: `leafFall ${leaf.duration}s linear`,
            transform: leaf.removed
              ? "scale(0.2) rotate(720deg)"
              : `rotate(${leaf.rotation}deg)`,
            opacity: leaf.removed ? 0 : 1,
          }}
        />
      ))}
    </div>
  );
}