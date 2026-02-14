import { useState, useMemo } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"All" | "Completed" | "In Progress">("All");
  const [filterTech, setFilterTech] = useState("All");
  const [sortBy, setSortBy] = useState<"name" | "status">("name");

  const allTechnologies = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.stack))).sort(),
    []
  );

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        const matchesSearch =
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === "All" || project.status === filterStatus;
        const matchesTech = filterTech === "All" || project.stack.includes(filterTech);

        return matchesSearch && matchesStatus && matchesTech;
      })
      .sort((a, b) => {
        if (sortBy === "name") {
          return a.title.localeCompare(b.title);
        } else {
          if (a.status === b.status) return 0;
          return a.status === "In Progress" ? -1 : 1;
        }
      });
  }, [searchTerm, filterStatus, filterTech, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setFilterStatus("All");
    setFilterTech("All");
  };

  const hasActiveFilters = searchTerm || filterStatus !== "All" || filterTech !== "All";

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 dark:text-white">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        A showcase of my DevOps work · {filteredProjects.length} of {projects.length} projects
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 min-w-[250px] px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
          className="px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="All">All Status</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
        </select>

        <select
          value={filterTech}
          onChange={(e) => setFilterTech(e.target.value)}
          className="px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="All">All Technologies</option>
          {allTechnologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="name">Sort by Name</option>
          <option value="status">Sort by Status</option>
        </select>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Clear Filters
          </button>
        )}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 px-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            No projects found matching your filters.
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: {
    title: string;
    status: "Completed" | "In Progress";
    description: string;
    stack: string[];
    repo: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
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