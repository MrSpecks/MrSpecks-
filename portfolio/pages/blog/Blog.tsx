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
    <div className="min-h-screen bg-gray-900 text-white">
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

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <p className="text-lg mb-12 text-center text-gray-300">
          Sharing insights on cloud building, systems and web development, and digital innovation.
        </p>

        <div className="space-y-8">
          {allPostsData.map(({ slug, title, date }) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/blog/${slug}`} className="block">
                <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition focus:ring-2 focus:ring-blue-500 outline-none">
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="text-gray-400">{new Date(date).toLocaleDateString()}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
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