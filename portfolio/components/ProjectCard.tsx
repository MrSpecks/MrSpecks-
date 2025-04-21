// components/cards/ProjectCard.tsx

interface Project {
    title: string;
    description: string;
    tech: string[];
    repoLink: string;
    liveDemoLink?: string;
  }
  
  export default function ProjectCard({ title, description, tech, repoLink, liveDemoLink }: Project) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:underline">Source Code</a>
          {liveDemoLink && (
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-green-600 hover:underline">Live Demo</a>
          )}
        </div>
      </div>
    );
  }