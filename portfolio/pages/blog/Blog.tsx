import React from "react";
import Link from 'next/link';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { getSortedPostsData } from '../../lib/posts';

interface PostData {
  slug: string;
  title: string;
  date: string;
}

interface BlogProps {
  allPostsData: PostData[];
}

export default function Blog({ allPostsData }: BlogProps) {
  return (
    <>
      <Head>
        <title>Kagiso Mfusi | Blog</title>
        <meta
          name="description"
          content="Kagiso Mfusi's blog - Insights on cloud building, systems and web, and digital innovation for Africa's next generation."
        />
        <meta property="og:title" content="Kagiso Mfusi | Blog" />
        <meta
          property="og:description"
          content="Insights on cloud building, systems and web development, and digital innovation for Africa's next generation."
        />
        <meta
          property="og:image"
          content="https://personal-portfolio-fyfepc1dn-mrspecks-projects.vercel.app/blog-og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://personal-portfolio-fyfepc1dn-mrspecks-projects.vercel.app/blog"
        />
        <meta property="og:type" content="website" />
      </Head>

      <main>
      <section className="w-full min-h-[70vh] relative flex flex-col justify-center items-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage: "url('/images/projects/ReconX2.jpg')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
          }} />
          <div className="absolute inset-0 bg-slate-800/40 z-10" />
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-indigo-100 dark:text-indigo-100"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>Blog</h1>
            <p className="mt-4 text-base text-indigo-100 dark:text-indigo-100"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>Sharing insights on cloud building, systems and web development, and digital innovation.
            </p>
            <div />
          </div>
        </section>

        <motion.section
          className="mb-20 px-4 py-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mt-12 mb-12 space-y-8">
            {allPostsData.map(({ slug, title, date }) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={`/blog/${slug}`} className="block">
                  <div className="p-6 bg-gradient-to-r from-blue-50/30 to-transparent dark:from-blue-900/20
                 rounded-lg hover:bg-blue-600 transition focus:ring-2 focus:ring-blue-500 outline-none">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <p className="text-gray-400">{new Date(date).toLocaleDateString()}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};