// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <ScrollToTop />
    </Layout>
  );
}