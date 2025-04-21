import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkPref = localStorage.getItem("theme") === "dark";
    setIsDark(darkPref);
    document.documentElement.classList.toggle("dark", darkPref);
  }, []);

  const toggleDarkMode = () => {
    const newDarkState = !isDark;
    setIsDark(newDarkState);
    localStorage.setItem("theme", newDarkState ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkState);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="ml-4 px-3 py-1 rounded text-sm border dark:border-gray-500 border-gray-300 dark:text-gray-200 text-gray-700"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}