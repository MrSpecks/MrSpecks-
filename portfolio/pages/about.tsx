import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
export default function AboutPage() {
    return (
        <>
        <SEO title="About | MrSpecks" description="Learn more about me, my background, and my passion for technology." />
      <main className="p-6">
        <h1 className="text-2xl font-bold">About Me</h1>
        <p className="mt-4 text-base">
          I'm a dedicated IT professional passionate about building scalable solutions in cloud computing, cybersecurity, and sustainable technology. My journey is rooted in a drive to empower local communities through tech innovation.
      </p>
      </main>
        </>
    );
  }