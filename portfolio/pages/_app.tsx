// pages/_app.tsx
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import LandingPage from "@/pages/LandingPage";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [showLanding, setShowLanding] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    //Forced to always show for testing purposes
    const hasSeenLanding = localStorage.getItem("hasSeenLanding");
    if (!hasSeenLanding) {
      setShowLanding(true);
    }
    setLoading(false);
  }, []);

  const handleSkip = () => {
    localStorage.setItem("hasSeenLanding", "true");
    setShowLanding(false);
  };

  if (loading) return <></>; // prevent flicker during check

  if (showLanding) {
    return <LandingPage onSkip={handleSkip} />;
  }

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kagiso Mfusi Portfolio" />
      </Head>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Component {...pageProps} />
          <Analytics />
        </motion.div>
      </AnimatePresence>
      <ScrollToTop />
    </Layout>
  );
}

