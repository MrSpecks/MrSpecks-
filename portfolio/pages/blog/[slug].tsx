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
      <section className="w-full min-h-[70vh] relative bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
              style={{
              backgroundImage: "url('/images/backgrounds/projects.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
       }}>
      <div className="absolute inset-0 bg-slate-50/20 dark:bg-slate-800/40 z-10"/>
      <div  className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-indigo-100 dark:text-indigo-100"
       style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>{postData.title}</h1>
        <p className="mt-4 text-base text-indigo-100 dark:text-indigo-100"
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>{new Date(postData.date).toLocaleDateString()}</p>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.content }}
        />
        </div>
        </section>

        
        <section className="mt-16 px-4 py-6 max-w-6xl mx-auto flex flex-col justify-center items-center text-center overflow-hidden">
          <div className="max-w-3xl w-full">
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link href="/blog/Blog" passHref>
              <a className="bg-blue-600 text-indigo-200 dark:text-indigo-100 px-6 py-2 rounded focus:ring-blue-500 hover:bg-blue-700
                text-sm font-medium transition w-full sm:w-auto">
                Back to Blog
              </a>
            </Link>
          </div>
          </div>
        </section>
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