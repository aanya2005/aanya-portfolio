// components/WinterCozy.jsx
"use client";
export default function WinterCozy() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute w-full h-full bg-gradient-to-b from-white/10 via-transparent to-white/20 animate-pulse"></div>
      {/* Optional: Add fireplace GIF or particles */}
    </div>
  );
}