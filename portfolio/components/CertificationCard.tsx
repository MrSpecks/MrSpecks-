import React from "react";
import Image from "next/image";

export type Certification = {
  id: number;
  title: string;
  provider: string;
  issued: string;
  credentialId?: string;
  credentialUrl?: string;
  badge: string;
  tags: string[];
};

interface CertificationCardProps {
  cert: Certification;
}

export default function CertificationCard({ cert }: CertificationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transform hover:scale-[1.02] transition duration-200 ease-in-out p-4 flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-3 relative">
        <Image
          src={cert.badge}
          alt={`${cert.provider} logo`}
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
      </div>

      <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
        {cert.title}
      </h3>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {cert.provider} • {cert.issued}
      </p>

      <div className="mt-2 flex flex-wrap justify-center gap-1">
        {cert.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center px-4 py-2 border-2 
              border-gray-300 dark:boarder-gray-600 rounded-full text-sm font-medium 
              text-gray-600 dark:text-gray-200 hover:bg-gray-00 dark:hover:bg-gray-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 
              dark:focus:ring-offset-gray-800 transition">
          View Credential
          <svg className="ml-2 w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a 2 0 012-2h6" />
            <path strokeLinecap="round"
            strokeLinejoin="round" 
            strokeWidth={2}
            d="M15 3h6m0 0v6m0-6L10 14"/>
            </svg>
        </a>
      )}
    </div>
  );
}