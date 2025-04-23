import React from "react";
import SEO from "../components/SEO";
import ProjectCard from "../components/ProjectCard";
import CertificationCard from "../components/CertificationCard";
import projects from "../data/projects.json";
import certifications from "../data/certifications.json";

export default function ProjectsPage() {
  const normalizedCerts = certifications.slice(0,14).map((cert) => ({
    ...cert,
    credentialId: cert.credentialId || undefined,
    credentialUrl: cert.credentialUrl || undefined,
  }));
    return (
        <>
        <SEO title="Kagiso Mfusi | Projects" description="A showcase of personal and professional projects built with modern technologies." />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-2 text-base text-gray-600">
          Here is a showcase of the practical work I have done in cloud, development, and cyber labs.
        </p>

        {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Certifications
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {normalizedCerts.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </section>
      </main>
        </>
    )
  }