import React from "react";
import Link from "next/link";
import Image from "next/image";

export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  status: string;
  tags: string[];
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={225}
        className="object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            GitHub
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 3h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Demo
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 3h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}