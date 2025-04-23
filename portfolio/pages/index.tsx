import React from "react";
import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "../components/DarkModeToggle";
import Layout from "../components/Layout";
import SEO from "../components/SEO";


export default function HomePage() {
  return (
    <><header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
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
    </header><main>
        <Layout>
          <SEO title="Kagiso Mfusi | Portfolio" description="Cloud | Cybersecurity | Systems & Web Dev" />
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Kagiso Mfusi
            </h1>
            <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
              Cloud | Cybersecurity | Systems & Web Development | Customer Support
            </p>
            <p className="mt-4 max-w-xl mx-auto text-gray-500 dark:text-gray-400 leading-relaxed">
              Cloud builder, Systems thinker, Digital innovator building scalable tech infrastructure for Africa's next generation.
            </p>

            {/* Call to Action Button */}
            <div className="mt-6 flex justify-center gap-4">
              <a
                href="/projects"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium"
                aria-label="View my work in projects"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="border border-gray-400 dark:border-gray-600 px-4 py-2 rounded text-sm font-medium"
                aria-label="Lets get in touch"
              >
                Contact Me
              </a>
            </div>
          </section>

          {/* About Preview */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              I’m a cloud-focused IT professional with 5+ years of experience across support,
              systems, and infrastructure. I’m building local capacity through The Kasi Cloud
              Initiative and a long-term vision of decentralized tech for Africa.
            </p>
            <a
              href="/about"
              className="text-blue-500 mt-2 inline-block text-sm hover:underline"
              aria-label="Read more in about"
            >
              Read More →
            </a>
          </section>

          {/* Featured Projects */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-lg font-medium">ReconX: Threat Recon Lab</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cloud-based cyber lab for simulating reconnaissance and lateral movement
                  detection using Azure + Sentinel.
                </p>
              </li>
              <li>
                <h3 className="text-lg font-medium">NeoShell</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experimental shell interface exploring next-gen terminal UX powered by Node.js.
                </p>
              </li>
            </ul>
            <div className="mt-4">
            <a href="/projects"
                className="text-blue-600 text-sm font-medium mt-1 inline-block hover:underline"
                aria-label="View my recent projects">
                  Browse all projects →
                </a>
            </div>
          </section>
        </Layout>
      </main>
      </>
  );
}
