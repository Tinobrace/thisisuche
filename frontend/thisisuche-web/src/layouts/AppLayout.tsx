import { NavLink, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">
            ThisIsUche
          </h1>

          <nav className="flex gap-6 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-500 hover:text-black"
              }
            >
              Home
            </NavLink>

            <NavLink to="/projects">Projects</NavLink>

            <NavLink
              to="/roadmap"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black pb-1"
                  : "text-gray-500 hover:text-black"
              }
            >
              Roadmap
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <Outlet />
      </main>
    </div>
  );
}
