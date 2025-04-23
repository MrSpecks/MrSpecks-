import React from 'react';
import SEO from "../components/SEO";
export default function ResumePage() {
    return (
        <>
        <SEO title="Resume | MrSpecks" description="View and download my resume showcasing skills, experience, and certifications." />
      <main className="p-6">
        <h1 className="text-2xl font-bold">My Resume</h1>
        <p className="mt-4 text-base">
          Below is a summary of my experience, education, and skills. You can also download my full resume.
        </p>
      </main>
      </>
    )
  }