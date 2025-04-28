/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */

import React from "react";
import Head from "next/head";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <>
        <Head>
      <title>Kagiso Mfusi | About Me</title>
      <meta name="description" content="Learn more about Kagiso Mfusi's journey, philosophy, and expertise." />
      <meta property="og:title" content="Kagiso Mfusi | About Me" />
      <meta
       property="og:description"
       content="Discover the journey, philosophy, and expertise of Kagiso Mfusi—self-driven IT professional and aspiring cloud architect."/>
      <meta property="og:image" content="/images/backgrounds/homepage1.png" />
      <meta property="og:url" content="https://personal-portfolio-fyfepc1dn-mrspecks-projects.vercel.app" />
      <meta property="og:type" content="website" />
    </Head>
      <SEO
        title="About | Kagiso Mfusi"
        description="Discover the journey, philosophy, and expertise of Kagiso Mfusi—self-driven IT professional and cloud architect."
      />

      <main>
        {/* Hero */}
        <section className="w-full min-h-[70vh] relative flex flex-col justify-center items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
              backgroundImage: "url('/images/backgrounds/About2.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
          }}/>

          <div className="absolute inset-0 bg-blue-50/20 dark:bg-blue-900/40 z-10"/>

        <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-indigo-100 dark:text-indigo-100"
           style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>
            About Me
          </h1>
          <p className="mt-4 text-lg text-indigo-100 dark:text-indigo-100 leading-relaxed"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>
            I'm a self-driven IT professional with over five years of cross-disciplinary
            experience from customer support and systems administration to hands-on
            cloud architecture and web development. Fueled by an insatiable curiosity,
            I constantly challenge myself with cutting-edge certifications and real-world
            projects, crafting solutions that are secure, scalable, and future-proof.
          </p>
          </div>
        </section>

        {/* My Journey */}
        <section className="mb-12 space-y-6 px-4 py-6 max-w-6xl mx-auto">
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            I began in customer-facing support roles where empathy and clear communication
            were essential. As I delved into infrastructure, I undertook a systems
            administration traineeship and later honed
            advanced cloud design skills through professional courses. Today, I blend deep
             technical expertise with strategic vision to build bespoke digital platforms.
          </p>
        </section>

        {/* Expertise & Mindset */}
<section className="mb-12 space-y-6 px-4 py-6 max-w-6xl mx-auto">
  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
    Expertise & Mindset
  </h2>
  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
    <li>
      <strong>Cloud Architecture:</strong> Designing resilient, cost-efficient
      infrastructures on Azure using IaC, governance, and best practices.
    </li>
    <li>
      <strong>Cybersecurity:</strong> Proactive threat modeling and security
      automation; grounded in hands-on labs with modern SIEM tools.
    </li>
    <li>
      <strong>Full-Stack Development:</strong> Crafting responsive web applications with
      Next.js, Tailwind CSS, and serverless backends that put performance first.
    </li>
    <li>
      <strong>Software Foundations:</strong> Solid grounding in software engineering
      principles covering data structures, algorithms, and system design.
    </li>
    <li>
      <strong>Java Application Development:</strong> Hands-on experience building and debugging
      Java SE and JavaFX applications.
    </li>
    <li>
      <strong>Continuous Learning:</strong> Relentlessly pursuing solutions
      architecture certifications and exploring AI-driven sustainability.
    </li>
    <li>
      <strong>Bespoke Problem-Solving:</strong> My rare blend of analytical rigor
      and creative insight means I don't just follow patterns; I invent them.
    </li>
  </ul>
</section>


        {/* Signature Projects */}
        <section className="mb-12 space-y-6 px-4 py-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Signature Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            From prototypes to production deployments, I've led:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              <strong>ReconX:</strong> A cloud-native cyber-recon lab using Azure
              Sentinel to simulate advanced threat scenarios.
            </li>
            <li>
              <strong>NeoShell:</strong> An experimental terminal UX powered by Node.js,
              rethinking how developers interact with command-line environments.
            </li>
          </ul>
        </section>

        {/* What Drives Me */}
        <section className="space-y-6 px-4 py-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            What Drives Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I believe technology should empower, not intimidate; scale, not break; and
            adapt, not stagnate. My mission is to fuse deep technical mastery with
            human-centered design, forging digital experiences that endure and inspire
            the next generation of innovators.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 italic">
            “Build what matters. Solve what others ignore. And lead with intention.” — KaeGee
          </p>
        </section>

<section className="mt-12 text-center px-4 py-6 max-w-6xl mx-auto">
  <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">Tech Stack</h2>
  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Next.js</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">React</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">TypeScript</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Tailwind CSS</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Azure</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">GitHub</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Google Workspace</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Varcel</span>
    <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">VS Code</span>
  </div>
</section>
      </main>
        </>
    )
  }