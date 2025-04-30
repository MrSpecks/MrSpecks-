import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import ProjectCard from "../components/ProjectCard";
import CertificationCard from "../components/CertificationCard";
import projects from "../data/projects.json";
import certifications from "../data/certifications.json";

export default function ProjectsPage() {
  const normalizedCerts = certifications.slice(0,14).map((cert) => ({
    ...cert,
    credentialId: cert.credentialId ??"",
  }));
    return (
  <>
    <Head>
      <title>Kagiso Mfusi | Projects and Certifications</title>
      <meta name="description" content="Explore Kagiso Mfusi's projects and certificationsin cloud building, cybersecurity, and digital innovation." />
      <meta property="og:title" content="Kagiso Mfusi | Projects and Certifications" />
      <meta
       property="og:description"
       content="Check out Kagiso Mfusi's portfolio of projects and certifications, showcasing expertise in scalable tech infrastructure. "/>
      <meta property="og:image" content="/images/backgrounds/homepage1.png" />
      <meta property="og:url" content="https://personal-portfolio-fyfepc1dn-mrspecks-projects.vercel.app" />
      <meta property="og:type" content="website" />
    </Head>
      <main>
      <section className="w-full min-h-[70vh] relative bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
              style={{
              backgroundImage: "url('/images/backgrounds/projects.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
       }}>
      <div className="absolute inset-0 bg-slate-50/20 dark:bg-slate-800/40 z-10"/>
      <div  className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-indigo-100 dark:text-indigo-100"
       style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>Projects</h1>
        <p className="mt-4 text-base text-indigo-100 dark:text-indigo-100"
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>
          Explore a selection of hands-on cloud, web, and cybersecurity projects that demonstrate practical solutions and innovative designs.
        </p>
        </div>
        </section>
        
        {/* Signature Projects */}
        <section className="mb-20 px-4 py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Signature Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            From prototypes to production deployments, I've led:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              <strong>ReconX:</strong> An open-source, powerful reconnaissance and OSINT (Open-Source Intelligence) 
              tool designed to streamline and automate the process of gathering critical
               insights into domains and IP addresses to evaluate risks, 
              discover vulnerabilities, and gather key data in real-time.
            </li>
            <li>
              <strong>NeoShell:</strong> This tool is a high-performance, intelligent CMS Reconnaissance
               & Webshell Payload Generator designed for authorized penetration testing engagements. 
               It detects the backend technologies used by a wide range of websites
               and generates tailored webshell payloads based on CMS and stack fingerprinting.
            </li>
          </ul>
        </section>


          <motion.section 
            className="mb-20 px-4 py-10 max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50/30 to-transparent dark:from-blue-900/20 rounded-xl shadow-inner"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.section>

      <section className="w-full min-h-[70vh] relative flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
              style={{
              backgroundImage: "url('/images/backgrounds/certifications.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
       }}/>
        <div className="absolute inset-0 bg-gray-50/20 dark:bg-gray-800/40 z-10"/>
        <div  className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-indigo-100 dark:text-indigo-100"
       style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>Certifications</h1>
        <p className="mt-4 text-base text-indigo-100 dark:text-indigo-100"
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>
         Browse industry-recognized certifications that validate expertise in cloud architecture, cybersecurity, and sustainable technology.
        </p>
        </div>
        </section>

        <motion.section 
            className="mb-20 px-4 py-10 max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50/30 to-transparent dark:from-blue-900/20 rounded-xl shadow-inner"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {normalizedCerts.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </motion.section>
      </main>
        </>
    );
  }