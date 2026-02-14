import { roadmap } from "../data/roadmap";

export default function Roadmap() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 dark:text-white">DevOps Roadmap</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        A deliberate path from fundamentals to architecture.
      </p>

      {/* Current Focus Block */}
      {roadmap.find((p) => p.status === "Active") && (
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🎯</span>
            <strong className="text-lg text-gray-900 dark:text-white">Current Focus:</strong>
          </div>
          <p className="text-indigo-900 dark:text-indigo-200 font-medium">
            {roadmap.find((p) => p.status === "Active")!.title}
          </p>
        </div>
      )}

      {/* Roadmap Timeline */}
      <div className="space-y-6">
        {roadmap.map((phase) => {
          const isActive = phase.status === "Active";

          return (
            <div
              key={phase.title}
              className={`bg-white dark:bg-gray-900 rounded-xl p-6 transition-all ${
                isActive
                  ? "border-2 border-indigo-500 dark:border-indigo-600 shadow-lg shadow-indigo-100 dark:shadow-indigo-900/20"
                  : "border border-gray-200 dark:border-gray-800"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {phase.title}
                </h2>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    phase.status === "Completed"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : phase.status === "Active"
                      ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400"
                      : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                  }`}
                >
                  {phase.status}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {phase.description}
              </p>

              <div>
                <strong className="text-sm text-gray-900 dark:text-white block mb-2">
                  Key Outcomes:
                </strong>
                <ul className="space-y-2">
                  {phase.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-indigo-500 dark:text-indigo-400 mt-0.5">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}