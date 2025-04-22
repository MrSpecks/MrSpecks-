// components/DarkModeToggle.tsx
'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if user's system prefers dark
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(document.documentElement.classList.contains('dark') || isSystemDark)
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      setIsDark(false)
      localStorage.setItem('theme', 'light')
    } else {
      html.classList.add('dark')
      setIsDark(true)
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default DarkModeToggle