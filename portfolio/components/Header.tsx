import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          MrSpecks
        </Link>
        <nav className="flex gap-4">
          <Link href="/about" className="text-sm hover:underline text-gray-600 dark:text-gray-300">About</Link>
          <Link href="/projects" className="text-sm hover:underline text-gray-600 dark:text-gray-300">Projects</Link>
          <Link href="/resume" className="text-sm hover:underline text-gray-600 dark:text-gray-300">Resume</Link>
          <Link href="/contact" className="text-sm hover:underline text-gray-600 dark:text-gray-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
}