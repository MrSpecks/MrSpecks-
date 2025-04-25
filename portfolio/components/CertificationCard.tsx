/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

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
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex items-start space-x-4">
      <Image src={cert.badge} alt={cert.title} className="w-12 h-12 object-contain" />
      <div>
        <h3 className="text-md font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {cert.provider} &middot; {cert.issued}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {cert.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl} rel="noopener noreferrer">
              <span className="mt-2 inline-flex items-center px-4 py-2 border-2 
              border-gray-300 dark:boarder-gray-600 rounded-full text-sm font-medium 
              text-gray-600 dark:text-gray-200 hover:bg-gray-00 dark:hover:bg-gray-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 
              dark:focus:ring-offset-gray-800 transition">
            Show Credential
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
          </span>
          </a>
        )}
      </div>
    </div>
  );
}
