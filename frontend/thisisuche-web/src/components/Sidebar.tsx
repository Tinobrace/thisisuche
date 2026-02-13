import { Home, FolderGit2, Map, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">ThisIsUche</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">DevOps Engineer</p>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            }`
          }
        >
          <Home size={18} />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            }`
          }
        >
          <FolderGit2 size={18} />
          <span>Projects</span>
        </NavLink>

        <NavLink
          to="/roadmap"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            }`
          }
        >
          <Map size={18} />
          <span>Roadmap</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            }`
          }
        >
          <Mail size={18} />
          <span>Contact</span>
        </NavLink>
      </nav>
    </aside>
  );
}