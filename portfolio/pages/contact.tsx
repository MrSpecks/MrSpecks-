import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
export default function ContactPage() {
    return (
        <>
        <SEO title="Contact | MrSpecks" description="Get in touch with me for collaboration or inquiries." />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Contact Me</h1>
        <p className="mt-4 text-base">
          Interested in working together or have a question? Reach out via the form below.
        </p>
      </main>
      </>
    )
  }