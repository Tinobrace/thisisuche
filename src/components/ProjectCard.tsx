import { useState } from "react";

interface ProjectCardProps {
  project: {
    title: string;
    status: "Completed" | "In Progress";
    description: string;
    stack: string[];
    repo: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = project.description.length > 100;

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1">
          {project.title}
        </h3>
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${
            project.status === "Completed"
              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
              : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
        {isExpanded || !shouldTruncate
          ? project.description
          : `${project.description.slice(0, 100)}...`}
      </p>

      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 mb-4"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <a
          href={`https://github.com/Tinobrace/${project.repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 inline-flex items-center gap-1"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}