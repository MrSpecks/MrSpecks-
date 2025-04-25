/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/Carousel";
import projects from "../data/projects.json";
import SEO from "../components/SEO";


export default function HomePage() {
  const featured = projects.filter((p) => p.id === 2 || p.id === 3); // ReconX & NeoShell
  return (
      <main>
          <section className=" px-4 sm:px-6 lg:px-8 max-w-3xl max-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Kagiso Mfusi
            </h1>
            <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
              Cloud | Cybersecurity | Systems & Web Development | Customer Support
            </p>
            <p className="mt-4 max-w-xl mx-auto text-gray-500 dark:text-gray-400 leading-relaxed">
              Cloud builder, Systems thinker, Digital innovator building scalable tech infrastructure for Africa's next generation.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link href="/projects">
                <a
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium"
                aria-label="View my work in projects">
                View My Work
                </a>
              </Link>
              <Link href="/contact">
                <a
                className="border border-gray-400 dark:border-gray-600 px-4 py-2 rounded text-sm font-medium"
                aria-label="Lets get in touch">
                Contact Me
                </a>
              </Link>
            </div>
          </section>
          <section className="px-4 sm:px-6 lg:px-8 max-w-3xl max-auto text-center">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              I'm a cloud-focused IT professional with 5+ years of experience across support,
              systems, and infrastructure. I'm building local capacity through The Kasi Cloud
              Initiative and a long-term vision of decentralized tech for Africa.
            </p>
            <Link href="/about">
            <a
              className="text-blue-500 mt-2 inline-block text-sm hover:underline"
              aria-label="Read more in about">
              Read More →
              </a>
            </Link>
          </section>
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl max-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <Carousel items={featured} />
      </section>
      </main>
  );
}
