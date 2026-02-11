import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p className="text-gray-600 mb-12">
        A showcase of my recent work and ongoing projects.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">
                {project.title}
              </h2>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
