// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import Head from 'next/head';
import ScrollToTop from '@/components/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';



export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        {/* Default meta tags for all pages */}
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
          transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <Component {...pageProps} />
          <Analytics />
        </motion.div>
      </AnimatePresence>
      <ScrollToTop />
    </Layout>
  );
}