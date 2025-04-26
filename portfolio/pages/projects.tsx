import React from "react";
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
      <main>
      <section className="w-full min-h-[70vh] relative bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
              style={{
              backgroundImage: "url('/images/backgrounds/your-image.jpg')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
       }}>
      <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-4 text-base text-gray-600">
          Explore a selection of hands-on cloud, web, and cybersecurity projects that demonstrate practical solutions and innovative designs.
        </p>
        </section>
        <section className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="w-full min-h-[70vh] relative bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
              style={{
              backgroundImage: "url('/images/backgrounds/your-image.jpg')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
       }}>
      <h1 className="text-2xl font-bold">Certifications</h1>
        <p className="mt-4 text-base text-gray-600">
         Browse industry-recognized certifications that validate expertise in cloud architecture, cybersecurity, and sustainable technology.
        </p>
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