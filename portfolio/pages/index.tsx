import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
export default function Home() {
    return (
        <>
        <SEO title="Home | Kagiso Mfusi" description="Welcome to my personal portfolio showcasing my work, experience, and passions in modern tech." />
      <main className="p-6">
        <h1 className="text-4xl font-bold">Kagiso Mfusi</h1>
        <p className="mt-2 text-lg text-gray-600">
          Cloud | Cybersecurity | Systems & Web Dev |
        </p>
        <p className="mt-4 text-sm">
          Welcome to my personal portfolio. Explore my work, experience, and passions in modern tech.
        </p>
      </main>
        </>
    );
  }