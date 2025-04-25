// components/DarkModeToggle.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    setIsDark(stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches));
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ rotate: 90, scale: 0 }}
          transition={{ duration: 0.4 }}
        >
          {isDark ? <Moon size={20} className="text-yellow-400" /> : <Sun size={20} className="text-orange-500" />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}