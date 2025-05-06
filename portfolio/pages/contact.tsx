/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion } from 'framer-motion';
import Head from "next/head";
import SEO from "../components/SEO";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      setIsSubmitted(true);
      form.reset();
    }
    else {
      setIsError(true);
    }
  };

  return (
    <>
      <Head>
        <title>Kagiso Mfusi | Contact Me</title>
        <meta name="description" content="Get in touch with Kagiso Mfusi to collaborate on digital innovation projects." />
        <meta property="og:title" content="Kagiso Mfusi | Contact Me" />
        <meta
          property="og:description"
          content="Reach out to Kagiso Mfusi to discuss your next tech project or collaboration." />
        <meta property="og:image" content="/images/backgrounds/homepage1.png" />
        <meta property="og:url" content="https://personal-portfolio-fyfepc1dn-mrspecks-projects.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
      <main>
      <section className="w-full min-h-[70vh] relative flex flex-col justify-center items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/backgrounds/contact.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
            }} />
          <div className="absolute inset-0 bg-neutral-900/10 dark:bg-neutral-90/50 z-10" />
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-2 text-indigo-100 dark:text-indigo-100"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
              Get in Touch
            </h1>
            <p className="text-indigo-100 dark:text-indigo-100 mb-6"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
              Let's build something great together. Have questions, project ideas, or just
              want to connect?
            </p>
          </div>
        </section>

        <motion.section
          className="mb-4 px-4 py-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-300 mt-12 mb-12">
            Drop me a line below. I'm always up for a new challenge.
          </p>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/movdqkgn"
            method="post"
            className="space-y-4 max-w-lg">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600" />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600" />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Send Message
            </button>
          </form>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 mt-4 text-center"
            >
              Thanks for reaching out!
            </motion.div>
          )}
          {isError && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 mt-4 text-center"
            >
              Something went wrong. Please try again.
            </motion.div>
          )}
        </motion.section>
      </main>
    </>
  );
}