/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Carousel from "../components/Carousel";
import projects from "../data/projects.json";
import SEO from "../components/SEO";

export default function HomePage() {
  const featured = projects.filter((p) => p.id === 2 || p.id === 3); // ReconX & NeoShell

  return (
    <main className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SEO
        title="Kagiso Mfusi | Portfolio"
        description="Cloud | Cybersecurity | Systems & Web Dev"
      />

      {/* Hero Section */}
      <section className="text-center pt-8 pb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Kagiso Mfusi
        </h1>

        <div className="mt-2 text-xl text-gray-600 dark:text-gray-300 min-h-[48px]">
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

        <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-500 dark:text-gray-400 leading-relaxed">
          Cloud builder, systems thinker, and digital innovator focused on building
          scalable tech infrastructure for Africa's next generation.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/projects" passHref>
            <a className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm font-medium transition">
              View My Work
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a className="border border-gray-400 dark:border-gray-600 px-6 py-2 rounded text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Contact Me
            </a>
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
          I'm a cloud-focused IT professional with 5+ years of experience across support,
          systems, and infrastructure. I'm building local capacity through The Kasi Cloud
          Initiative and a long-term vision of decentralized tech for Africa.
        </p>
        <Link href="/about" passHref>
          <a className="text-blue-500 mt-2 inline-block text-sm hover:underline">
            Read More →
          </a>
        </Link>
      </section>

      {/* Featured Projects */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold mb-4 text-center">Featured Projects</h2>
        <Carousel items={featured} />
      </section>
    </main>
  );
}