import React from "react";
import LinkButton from "@/components/Buttons/LinkButton";

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
      <img src={cert.badge} alt={cert.title} className="w-12 h-12 object-contain" />
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
          <LinkButton
            href={cert.credentialUrl} external>
            Show Credential
          </LinkButton>
        )}
      </div>
    </div>
  );
}
