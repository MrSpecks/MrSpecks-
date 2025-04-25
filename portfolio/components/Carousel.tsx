import React from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { motion } from "framer-motion";

type CarouselProps = {
  items: Project[];
};

export default function Carousel({ items }: CarouselProps) {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-2">
        {items.map((project) => (
          <div
            key={project.id}
            className="snap-start flex-shrink-0 w-4/5 sm:w-80"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}