import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
export default function ProjectsPage() {
    return (
        <>
        <SEO title="About | MrSpecks" description="A showcase of personal and professional projects built with modern technologies." />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-2 text-base text-gray-600">
          Here is a showcase of the practical work I have done in cloud, development, and cyber labs.
        </p>
      </main>
        </>
    );
  }