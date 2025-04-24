// components/cards/ProjectCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";

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
  project:Project;
  }
  
  export default function ProjectCard({ project }: ProjectCardProps) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
      <Image src={project.image} alt={project.title} width={400} height={225} className="object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center space-x-4">
          <LinkButton href={project.githubUrl} external>
            GitHub
          </LinkButton>
          {project.demoUrl && (
            <LinkButton href={project.demoUrl} external>
              Demo
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}
