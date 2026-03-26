// components/SummerSun.jsx
"use client";
export default function SummerSun() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute w-full h-full bg-gradient-to-b from-yellow-200 via-transparent to-transparent opacity-30 animate-pulse"></div>
    </div>
  );
}