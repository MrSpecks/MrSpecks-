// components/DarkModeToggle.tsx
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import confetti from "canvas-confetti";

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
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}
