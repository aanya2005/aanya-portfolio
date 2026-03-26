// components/ThemeContext.jsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const seasonMapping = [
  { months: [2, 3, 4], season: "spring" },
  { months: [5, 6, 7], season: "summer" },
  { months: [8, 9, 10], season: "fall" },
  { months: [11, 0, 1], season: "winter" },
];

const themeColors = {
  spring: { "--bg-color": "#ffe4e1", "--text-color": "#333" },
  summer: { "--bg-color": "#d4f1be", "--text-color": "#1b3b0e" },
  fall: { "--bg-color": "#ff7f50", "--text-color": "#3e2f2f" },
  winter: { "--bg-color": "#0b1d51", "--text-color": "#fff" },
};

export const ThemeProvider = ({ children }) => {
  const [season, setSeason] = useState("spring");

  useEffect(() => {
    const month = new Date().getMonth();
    const currentSeason =
      seasonMapping.find(({ months }) => months.includes(month))?.season ||
      "spring";
    setSeason(currentSeason);

    const root = document.documentElement;
    Object.entries(themeColors[currentSeason]).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ season }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);