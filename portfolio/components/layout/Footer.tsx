// Contact page for Kagiso Mfusi's portfolio
// components/Layout/Footer.tsx

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-300 dark:border-gray-700 py-6 text-sm text-center text-gray-600 dark:text-gray-400">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left: Brand + Copyright */}
        <div className="mb-4 sm:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Kagiso Mfusi. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">Built with Next.js & Tailwind CSS</p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex space-x-4 mb-4 sm:mb-0">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a href="mailto:kagisomfusi@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <Mail className="h-5 w-5 hover:text-blue-600 dark:hover:text-blue-400" />
          </a>
          <a href="https://github.com/MrSpecks" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 hover:text-blue-600 dark:hover:text-blue-400" />
          </a>
          <a href="https://www.linkedin.com/in/kagiso-m-95b329224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 hover:text-blue-600 dark:hover:text-blue-400" />
          </a>
         
          {/* Gravatar Link */}
          <a href="https://simplykae.link" target="_blank" rel="noopener noreferrer" aria-label="Gravatar Page">
            <ExternalLink className="h-5 w-5 hover:text-blue-600 dark:hover:text-blue-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}