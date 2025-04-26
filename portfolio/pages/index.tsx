/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Carousel from "../components/Carousel";
import projects from "../data/projects.json";
import SEO from "../components/SEO";

export default function HomePage() {
  const featured = projects.filter((p) => p.id === 2 || p.id === 3 || p.id === 4); // ReconX & NeoShell

  return (
    <main>
      <SEO
        title="Kagiso Mfusi | Portfolio"
        description="Cloud | Cybersecurity | Systems & Web Dev"
      />

      {/* Hero Section */}
      <section className="w-full min-h-[70vh] relative flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"             
              style={{
              backgroundImage: "url('/images/backgrounds/homepage1.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
       }}/>
        <div className="absolute inset-0 bg-white/20 dark:bg-black/40 z-10"/>
        <div  className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-200 dark:text-indigo-100"
         style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>
          Kagiso Mfusi
        </h1>
        </div>
          {/* Circle Image Cutout */}
        <div className="relative z-20 mt-6 mx-auto w-32 h-32 rounded-full overflow-hidden">
         <Image
           src="/images/avatar/avatar.png" // Replace with the actual path to your image
           alt="Kagiso Mfusi"
           width={128} // You can adjust the size as needed
           height={128} // Keep the width and height the same for a circle
           className="object-cover" // Ensures the image covers the whole circle
          />
        </div>

        <div className="relative z-20 mt-2 text-xl text-indigo-100 dark:text-indigo-100">
          <Typewriter
            options={{
              strings: [
                "Cloud | Cybersecurity | Systems & Web Development",
                "Building Africa's Next Digital Infrastructure",
                "Secure. Scalable. Sustainable.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className="relative z-20 mt-4 text-base sm:text-lg max-w-2xl mx-auto
         text-indigo-100 dark:text-indigo-100 leading-relaxed">
          Engineer. Creator. Innovator. Building meaningful digital systems that solve tomorrow's challenges, today.
        </p>
        </section>

        {/* About Preview */}
      <section className="mt-12 text-center px-4 py-6 max-w-6xl">
         <h2 className="text-xl font-semibold mb-2">About Me</h2>
         <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
          I'm a self-driven IT professional with over five years of experience spanning support,
          systems, and infrastructure. Passionate about emerging cloud technologies, I constantly
           challenge myself through hands-on projects and targeted learning - recently diving into
           advanced cloud architecture patterns - to build solutions that are secure, scalable, and future-proof. 
           My ambition is to blend deep technicalexpertise with a strategic mindset, driving innovation that 
           truly makes an impacy.
        </p>
          <Link href="/about" passHref>
          <a rel="noopener noreferrer" 
           className="mt-2 inline-flex items-center px-4 py-2 border-2 
              border-gray-300 dark:boarder-gray-600 rounded-full text-sm font-medium 
              text-gray-600 dark:text-gray-400 hover:bg-gray-00 dark:hover:bg-gray-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 
              dark:focus:ring-offset-gray-800 transition">
            Read More
            <svg className="ml-2 w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a 2 0 012-2h6" />
            <path strokeLinecap="round"
            strokeLinejoin="round" 
            strokeWidth={2}
            d="M15 3h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </Link>
      </section>

      {/* Featured Projects */}
      <section className="mt-16 px-4 py-6 max-w-6xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Featured Projects</h2>
        <div className="grid gap-6">
        <Carousel items={featured} />
        </div>
        </section>
      {/* CTA Buttons */}
      <section className="mt-16 px-4 py-6 max-w-6xl">
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center text-center overflow-hidden gap-4">
          <Link href="/projects" passHref>
            <a className="bg-blue-600 text-indigo-200 dark:text-indigo-100 px-6 py-2 rounded hover:bg-blue-700 
            text-sm font-medium transition w-full sm:w-auto">
              View My Work
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a className="bg-blue-600 text-indigo-200 dark:text-indigo-100 px-6 py-2 rounded hover:bg-blue-700 
            text-sm font-medium transition w-full sm:w-auto">
              Contact Me
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}