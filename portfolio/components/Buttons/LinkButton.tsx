import React from "react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function LinkButton({ href, children, external }: LinkButtonProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium text-gray-100 dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-700 transition"
    >
      {children}
      {external && (
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 3h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </Link>
  );
}