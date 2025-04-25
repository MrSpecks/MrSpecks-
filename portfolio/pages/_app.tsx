import React from "react";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/globals.css";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <ScrollToTop />
    </Layout>
  );
}