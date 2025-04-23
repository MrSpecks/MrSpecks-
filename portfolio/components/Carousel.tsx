import React from "react";
import ProjectCard, { Project } from "./ProjectCard";


interface CarouselProps {
  items: Project[];
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <div className="relative">
      <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2">
        {items.map((project) => (
          <div
            key={project.id}
            className="snap-start flex-shrink-0 w-80"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}