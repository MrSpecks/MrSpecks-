/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
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
             client services, systems development to hands-on
            cloud architecture and web development. With every step, I've pursued depth and versatility,
            I constantly challenge myself with cutting-edge certifications and real-world
            projects to stay ahead in a rapidly evolving tech landscape.
          </p>
          </div>
        </section>

        {/* Background & Philosophy */}
        <motion.section 
  className="mb-12 px-4 py-6 max-w-6xl mx-auto"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true }}
>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
          Background & Philosophy
          </h2>
          <p className=" mt-4text-gray-600 dark:text-gray-300">
          My journey into technology began with curiosity and has since evolved into purpose.
          From building html sites in high school to becoming Microsoft Certified in Azure
            Fundamentals and leading cloud-native deployments, I've always followed a
            learn-by-doing mindset. My experience in frontline service roles sharpened my
            people skills, while hands-on certifications deepened my architectural and technical thinking. 
            Today, I'm able to blend deep technical expertise with strategic vision to build bespoke digital platforms. 
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
          I believe great solutions are born from simplicity, intention, and the courage to
            explore uncharted territory. That mindset powers everything I build.
          </p>
        </motion.section>
           <hr className="my-8 border-gray-300 dark:border-gray-700" />  
    
        {/* What I Bring */}
        <motion.section 
  className="mb-12 px-4 py-6 max-w-6xl mx-auto"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
  What I Bring
  </h2>
  <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
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
</motion.section>

        {/* Forward Focus */}
        <motion.section 
  className="mb-12 px-4 py-6 max-w-6xl mx-auto"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true }}
>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
          Forward Focus
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm currently building out an online portfolio website as a
            self-contained infrastructure to showcase my work and empower others to do the same. 
            The ultimate goal? To make career representation digital, scalable, and timeless.
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 mt-8 text-center italic">
            “Build what matters. Solve what others ignore. And lead with intention.” — Kagiso
          </p>
        </motion.section>
   <hr className="my-8 border-gray-300 dark:border-gray-700" />    
{/* Core Values */}
<motion.section 
  className="mb-12 px-4 py-6 max-w-6xl mx-auto"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
    My Core Values
  </h2>
  <div className="grid sm:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
    <div>
      <p><strong>Integrity:</strong> I hold myself to a high standard—both in code and character.</p>
      <p className="mt-2"><strong>Clarity:</strong> I believe the most impactful systems are clean, simple, and deeply thought through.</p>
      <p className="mt-2"><strong>Visionary Thinking:</strong> I study systems, recognize patters, and build with tomorrow in mind.</p>
    </div>
    <div>
      <p><strong>Resilience:</strong> Every setback is a setup. I iterate, adapt, and grow with purpose.</p>
      <p className="mt-2"><strong>Excellence:</strong> Quality isn't a goal—it's a baseline. I build with long-term value in mind.</p>
      <p className="mt-2"><strong>Empowerment:</strong> Tech should uplift people, not alienate them. I build to make complexity approachable, and progress inclusive.</p>
    </div>
  </div>
</motion.section>

<hr className="my-8 border-gray-300 dark:border-gray-700" />  
{/* Call to Action */}
<motion.section 
  className="mb-20 px-4 py-10 max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50/30 to-transparent dark:from-blue-900/20 rounded-xl shadow-inner"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  viewport={{ once: true }}
>
  <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
    Let's Build What Matters
  </h2>
  <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto">
    If you're looking for someone who blends systems thinking with real-world execution, 
    you're in the right place.
    Whether it's collaborating on a project, building a bespoke solution, 
    or simply starting a conversation, I'd love to hear from you.
  </p>
  <div className="mt-6">
    <a
      href="/contact"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
      aria-label="Navigate to Contact page"
    >
      Get in Touch
    </a>
  </div>
</motion.section>

      </main>
        </>
    )
  }