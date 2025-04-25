/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */

import React from "react";
import SEO from "../components/SEO";
export default function AboutPage() {
    return (
        <>
      <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h1>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
  I'm Kagiso Mfusi, a systems-driven IT professional with a deep passion for building 
  secure, sustainable, and future-ready cloud solutions. My journey started in high school 
  with a curiosity for tech, and today I'm building forward-thinking digital platforms 
  with a purpose—one solution at a time.
</p>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
  Over the past 5+ years, I've worked across customer experience, cloud computing, 
  cybersecurity, and systems administration—gaining both technical skills and the ability 
  to connect solutions to real human needs. I believe in infrastructure that empowers, 
  protects, and scales.
</p>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
  I'm currently focused on a long-term mission through
  <span className="font-semibold text-blue-600 dark:text-blue-400">
    The Kasi Cloud Initiative
  </span>—an effort to bring cloud expertise and local infrastructure to underserved 
  communities in Africa. My work blends technical knowledge with vision, empathy, and 
  a commitment to continuous learning.
</p>

<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
  Beyond the cloud, I invest time in wellness, mindfulness, and creative pursuits that 
  keep me grounded and inspired. My vision is to not just build solutions—but to build 
  legacy.
</p>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-8 italic">
  “Build what matters. Solve what others ignore. And lead with intention.” — KaeGee
</p>
<section className="mt-12 text-center">
  <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Next.js</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">React</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">TypeScript</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Tailwind CSS</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Azure</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">GitHub</span>
  </div>
</section>
      </main>
        </>
    )
  }