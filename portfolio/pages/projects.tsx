import React from "react";
import Head from "next/head";
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
        <section className="mt-12 mb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

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
        <section className="mt-12 mb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {normalizedCerts.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </section>
      </main>
        </>
    );
  }