import React from "react";
import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle";

export default function Header() {
  return (
<header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12">
          <Image src="/images/avatar/avatar.png"
            alt="Kagiso Mfusi"
            width={40}
            height={40}
            className="rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover" 
            />
          </div>
          <Link href="/" className="text-xl sm:text-xl font-bold text-gray-800 dark:text-white"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>
            Kagiso M.
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <nav className="flex space-x-2 sm:space-x-4 text-xs sm:text-sm">
            <Link href="/about" className="hover:underline text-gray-600 dark:text-gray-300">About</Link>
            <Link href="/projects" className="hover:underline text-gray-600 dark:text-gray-300">Projects</Link>
            <Link href="/resume" className="hover:underline text-gray-600 dark:text-gray-300">Resume</Link>
            <Link href="/contact" className="hover:underline text-gray-600 dark:text-gray-300">Contact</Link>
          </nav>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}