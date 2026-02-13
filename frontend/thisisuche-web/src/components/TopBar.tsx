import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export default function TopBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-8 py-3">
      <div className="flex items-center justify-between">
        {/* Empty left side */}
        <div></div>

        {/* Right side - Dashboard, Bio, and Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-sm font-medium px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/bio"
            className={({ isActive }) =>
              `text-sm font-medium px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`
            }
          >
            Bio
          </NavLink>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <span className="text-xl">🌙</span>
            ) : (
              <span className="text-xl">☀️</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}