import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Custom404() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center px-6 py-12 relative overflow-hidden">
      {/* Animated Stars or Sparkles */}
      <motion.div
        className="absolute top-10 left-10 text-indigo-300 dark:text-indigo-500"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="w-10 h-10 opacity-30" />
      </motion.div>

      <motion.h1
        className="text-7xl font-black text-indigo-600 dark:text-indigo-400"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        404
      </motion.h1>

      <motion.p
        className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hmm… You just navigated into hyperspace without coordinates.
      </motion.p>

      <motion.p
        className="mt-2 text-gray-500 dark:text-gray-400 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        But don’t worry, this isn’t a black hole. Use the force and head back to safety.
      </motion.p>

      <motion.div
        className="mt-6 flex flex-col sm:flex-row items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link href="/" passHref>
          <a className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition">
            Back to Home
          </a>
        </Link>
        <Link href="/projects" passHref>
          <a className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 dark:hover:text-indigo-300 text-sm">
            View Projects
          </a>
        </Link>
        <Link href="/blog" passHref>
          <a className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 dark:hover:text-indigo-300 text-sm">
            Visit the Blog
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 dark:hover:text-indigo-300 text-sm">
            Drop Me a Line
          </a>
        </Link>
      </motion.div>
    </main>
  );
}