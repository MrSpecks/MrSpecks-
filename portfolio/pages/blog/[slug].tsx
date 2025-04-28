import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostSlugs, getPostData } from '../../lib/posts';

interface PostData {
  slug: string;
  title: string;
  date: string;
  content: string;
}

interface PostProps {
  postData: PostData;
}

export default function Post({ postData }: PostProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>{postData.title} | Kagiso Mfusi</title>
        <meta name="description" content={`Blog post by Kagiso Mfusi: ${postData.title}`} />
        <meta property="og:title" content={`${postData.title} | Kagiso Mfusi`} />
        <meta property="og:description" content={`Blog post by Kagiso Mfusi: ${postData.title}`} />
        <meta
          property="og:image"
          content="https://personal-portfolio-fyfepc1dn-mrspecks-projects.vercel.app/blog-post-og-image.jpg"
        />
        <meta
          property="og:url"
          content={`https://personal-portfolio-fyfepc1dn-mrspecks-projects.vercel.app/blog/${postData.slug}`}
        />
        <meta property="og:type" content="article" />
      </Head>

      <main className="max-w-4xl mx-auto p-6">
        <Link
          href="/blog"
          className="text-blue-400 hover:underline mb-4 inline-block focus:ring-2 focus:ring-blue-500 outline-none"
        >
          ← Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
        <p className="text-gray-400 mb-8">{new Date(postData.date).toLocaleDateString()}</p>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);
  return {
    props: {
      postData,
    },
  };
};