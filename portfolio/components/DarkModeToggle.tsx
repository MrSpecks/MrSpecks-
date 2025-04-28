// components/DarkModeToggle.tsx
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from 'framer-motion';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      setIsDark(storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", nextTheme);

    // Increment and check click count
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 10) {
      launchConfetti();
      setClickCount(0); // Reset counter
    }
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="relative">
    <button
      onClick={toggleTheme}
      className="focus:ring-2 focus:ring-blue-500 p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
    <motion.span
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 1 }}
    className="absolute top-0 right-8 text-xs text-gray-400 bg-gray-800 p-1 rounded">
     Click me for a surprise!
   </motion.span>
   </div>
  );
}
