import { projects } from "../data/projects";
import { roadmap } from "../data/roadmap";

export default function Dashboard() {
  // Calculate project stats
  const stats = projects.reduce(
    (acc, project) => {
      if (project.status === "Completed") acc.completed++;
      if (project.status === "In Progress") acc.inProgress++;

      project.stack.forEach((tech) => {
        acc.techUsage[tech] = (acc.techUsage[tech] || 0) + 1;
      });

      return acc;
    },
    {
      completed: 0,
      inProgress: 0,
      techUsage: {} as Record<string, number>,
    }
  );

  // Get roadmap progress
  const completedPhases = roadmap.filter((p) => p.status === "Completed").length;
  const activePhase = roadmap.find((p) => p.status === "Active");
  const progressPercentage = Math.round((completedPhases / roadmap.length) * 100);

  // Get top technologies
  const topTech = Object.entries(stats.techUsage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Recent projects (last 3)
  const recentProjects = projects.slice(-3).reverse();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 dark:text-white">Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Overview of your DevOps journey and progress
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          title="Total Projects"
          value={projects.length}
          subtitle="Completed & In Progress"
          color="#10b981"
        />
        <StatCard
          title="Completed"
          value={stats.completed}
          subtitle={`${stats.inProgress} in progress`}
          color="#3b82f6"
        />
        <StatCard
          title="Roadmap Progress"
          value={`${progressPercentage}%`}
          subtitle={`${completedPhases}/${roadmap.length} phases done`}
          color="#8b5cf6"
        />
        <StatCard
          title="Technologies"
          value={Object.keys(stats.techUsage).length}
          subtitle="Different tech used"
          color="#f59e0b"
        />
      </div>

      {/* Current Focus */}
      {activePhase && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">🎯 Current Focus</h2>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-500 dark:border-indigo-600 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200 mb-2">
              {activePhase.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{activePhase.description}</p>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <strong className="text-gray-900 dark:text-white">Key Outcomes:</strong>
              <ul className="mt-2 space-y-1 ml-5 list-disc">
                {activePhase.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Recent Projects */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-5 dark:text-white">📁 Recent Projects</h2>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div
                key={project.title}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-2 py-0.5 rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Technologies */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-5 dark:text-white">⚡ Top Technologies</h2>
          <div className="space-y-4">
            {topTech.map(([tech, count], index) => (
              <div key={tech} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    #{index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {tech}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {count} projects
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all"
                      style={{ width: `${(count / topTech[0][1]) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">🚀 Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <ActionButton label="View All Projects" link="/projects" />
          <ActionButton label="See Roadmap" link="/roadmap" />
          <ActionButton label="Read Bio" link="/bio" />
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  color: string;
}

function StatCard({ title, value, subtitle, color }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</span>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
      </div>
      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</div>
    </div>
  );
}

// Action Button Component
interface ActionButtonProps {
  label: string;
  link: string;
}

function ActionButton({ label, link }: ActionButtonProps) {
  return (
    <a
      href={link}
      className="px-5 py-2.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {label} →
    </a>
  );
}