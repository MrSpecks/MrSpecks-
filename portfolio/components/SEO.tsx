// components/SEO.tsx
import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords = "portfolio, web developer, projects, certifications" }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
    </Head>
  );
}