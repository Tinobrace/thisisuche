import { projects } from "../data/projects";
import { roadmap } from "../data/roadmap";
import { Link } from "react-router-dom";
import { useMemo } from "react";

export default function Home() {
  // Calculate stats with useMemo
  const stats = useMemo(() => {
    return projects.reduce(
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
  }, []);

  // Roadmap progress
  const completedPhases = roadmap.filter((p) => p.status === "Completed").length;
  const progressPercentage = Math.round((completedPhases / roadmap.length) * 100);

  // Top technologies
  const topTech = useMemo(() => {
    return Object.entries(stats.techUsage)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
  }, [stats.techUsage]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-bold text-white">UV</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome to ThisIsUche
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              DevOps Engineer | Building, Automating, and Scaling
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl p-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm Uchenna Valentine Ukah, a DevOps Engineer focused on building reliable, 
            scalable infrastructure. This is my personal dashboard where I track my journey, 
            showcase projects, and document lessons learned. Currently deep-diving into 
            cloud-native architectures and secure deployment pipelines.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">📊 At a Glance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            label="Total Projects"
            value={projects.length}
            subtitle="Hands-on experience"
            gradient="from-blue-500 to-blue-600"
          />
          <StatCard
            label="Completed"
            value={stats.completed}
            subtitle={`${stats.inProgress} in progress`}
            gradient="from-green-500 to-green-600"
          />
          <StatCard
            label="Roadmap Progress"
            value={`${progressPercentage}%`}
            subtitle={`${completedPhases}/${roadmap.length} phases`}
            gradient="from-purple-500 to-purple-600"
          />
          <StatCard
            label="Technologies"
            value={Object.keys(stats.techUsage).length}
            subtitle="Different tools mastered"
            gradient="from-orange-500 to-orange-600"
          />
        </div>
      </section>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Top Technologies */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">⚡ Top Technologies</h2>
          <div className="space-y-4">
            {topTech.map(([tech, count], index) => (
              <div key={tech} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    #{index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">{tech}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{count} projects</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${(count / topTech[0][1]) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">🚀 Recent Activity</h2>
          <div className="space-y-4">
            <ActivityItem
              icon="📁"
              title="New Project Added"
              description="ThisIsUche - Personal DevOps Dashboard"
              time="In Progress"
            />
            <ActivityItem
              icon="✅"
              title="Phase Completed"
              description="Core DevOps - CI/CD and Containerization"
              time="Recently"
            />
            <ActivityItem
              icon="🎯"
              title="Currently Learning"
              description="Cloud & CI/CD Depth - Kubernetes and Advanced Patterns"
              time="Active"
            />
            <ActivityItem
              icon="📚"
              title="Skills Expanded"
              description={`${Object.keys(stats.techUsage).length} technologies across ${projects.length} projects`}
              time="Ongoing"
            />
          </div>
        </section>
      </div>

      {/* Skill Exposure */}
      <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-12">
        <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">🛠️ Skill Exposure</h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(stats.techUsage)
            .sort((a, b) => b[1] - a[1])
            .map(([tech, count]) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-100 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition"
                style={{
                  opacity: count === topTech[0][1] ? 1 : 0.85,
                }}
              >
                <span className="font-medium text-gray-900 dark:text-white">{tech}</span>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{count}</span>
              </div>
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Explore My Work</h2>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Dive into my projects, follow my roadmap, or learn more about my journey 
          in DevOps and cloud engineering.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/projects"
            className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            View Projects
          </Link>
          <Link
            to="/roadmap"
            className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition border border-indigo-500"
          >
            See Roadmap
          </Link>
          <Link
            to="/bio"
            className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition border border-indigo-500"
          >
            Read Bio
          </Link>
        </div>
      </section>
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  label: string;
  value: string | number;
  subtitle: string;
  gradient: string;
}

function StatCard({ label, value, subtitle, gradient }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</span>
        <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${gradient}`} />
      </div>
      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</div>
    </div>
  );
}

// Activity Item Component
interface ActivityItemProps {
  icon: string;
  title: string;
  description: string;
  time: string;
}

function ActivityItem({ icon, title, description, time }: ActivityItemProps) {
  return (
    <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
      <div className="text-2xl flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{description}</p>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-500 flex-shrink-0">{time}</span>
    </div>
  );
}