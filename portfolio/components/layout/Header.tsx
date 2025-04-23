import React from "react";
import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle";

export default function Header() {
  return (
<header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/images/avatar.png"
            alt="Kagiso Mfusi"
            width={36}
            height={36}
            className="rounded-full border border-gray-300 dark:border-gray-600" />
          <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            MrSpecks
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <nav className="flex gap-4">
            <Link href="/about" className="text-sm hover:underline text-gray-600 dark:text-gray-300">About</Link>
            <Link href="/projects" className="text-sm hover:underline text-gray-600 dark:text-gray-300">Projects</Link>
            <Link href="/resume" className="text-sm hover:underline text-gray-600 dark:text-gray-300">Resume</Link>
            <Link href="/contact" className="text-sm hover:underline text-gray-600 dark:text-gray-300">Contact</Link>
          </nav>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}