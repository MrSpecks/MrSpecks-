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
      <meta name="description" content="Get to know Kagiso Mfusi, his journey, philosophy, and expertise." />
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
        description="Explore Kagiso Mfusi's journey—an ambitious, self-driven IT professional combining cloud, cybersecurity, and systems expertise with a relentless drive to innovate"
      />

      <main>
        {/* Hero */}
        <section className="w-full min-h-[40vh] relative flex flex-col justify-center items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
              backgroundImage: "url('/images/backgrounds/About2.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-dark overlay for readability
          }}/>

          <div className="absolute inset-0 bg-blue-50/20 dark:bg-blue-900/40 z-10"/>

        <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-indigo-100 dark:text-indigo-100"
           style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
            Meet Kagiso Mfusi
          </h1>
          <p className="mt-4 text-lg text-indigo-100 dark:text-indigo-100 leading-relaxed"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
            I'm a passionate and self-taught IT professional with a diverse background spanning
             client services, systems development and administration to hands-on
            cloud architecture and web development. With every step, I've pursued depth and versatility,
            I constantly challenge myself with cutting-edge certifications and real-world
            projects to stay ahead in the rapidly evolving tech landscape.
          </p>
          </div>
        </section>

        {/* Background & Philosophy */}
        <section className="mb-12 space-y-6 px-4 py-6 max-w-6xl mx-auto">
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Background & Philosophy
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
          My journey into technology began with curiosity and has since evolved into purpose.
          From building html sites in high school to becoming Microsoft Certified in Azure
            Fundamentals and leading cloud-native deployments, I've always followed a
            learn-by-doing mindset. My experience in frontline service roles sharpened my
            people skills, while hands-on certifications deepened my architectural and technical thinking. 
            Today, I'm able to blend deep technical expertise with strategic vision to build bespoke digital platforms. 
          </p>
          <p className="text-gray-600 dark:text-gray-300">
          I believe great solutions are born from simplicity, intention, and the courage to
            explore uncharted territory. That mindset powers everything I build.
          </p>
        </section>

        {/* What I Bring */}
<section className="mb-12 space-y-6 px-4 py-6 max-w-6xl mx-auto">
  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
  What I Bring
  </h2>
  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
    <li>
      <strong>Cloud Architecture:</strong> Designing resilient, cost-efficient
      infrastructures on Azure using IaC, governance, and best practices.
    </li>
    <li>
      <strong>Cybersecurity fluency:</strong> Defensive and offensive tools, with hands-on lab experience.
    </li>
    <li>
      <strong>Full-Stack Development:</strong> Crafting responsive web applications with
      Next.js, Tailwind CSS, and serverless backends that put performance first.
    </li>
    <li>
      <strong>Software Foundations:</strong> Solid grounding in software development
      principles, including OOP, SDLC and design patterns, with a focus on Java.
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
      <strong>Bespoke Problem-Solving:</strong> Problem solving that's not
       just technical, but human-centered and mission-driven.
    </li>
  </ul>
</section>

        {/* Forward Focus */}
        <section className="space-y-6 px-4 py-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Forward Focus
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm currently building out an online portfolio website as a
            self-contained infrastructure to showcase my work and empower others to do the same. 
            The ultimate goal? To make career representation digital, scalable, and timeless.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 italic">
            “Build what matters. Solve what others ignore. And lead with intention.” — Kagiso
          </p>
        </section>

      </main>
        </>
    )
  }