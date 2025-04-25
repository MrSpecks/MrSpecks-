/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SEO from "../components/SEO";

export default function ContactPage() {
  return (
    <>
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        Get in Touch
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Let's build something great together. Have questions, project ideas, or just
        want to connect?
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
      Drop me a line below. I'm always up for a new challenge.
      </p>
      <form
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
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"/>
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
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"/>
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
    </main>
    </>
  );
}