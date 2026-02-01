import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r p-6">
      <nav className="space-y-3">
        <NavLink to="/" className="block font-medium">
          Home
        </NavLink>

        <NavLink to="/projects" className="block text-gray-500">
          Projects
        </NavLink>

        <NavLink to="/roadmap" className="block text-gray-500">
          Roadmap
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
