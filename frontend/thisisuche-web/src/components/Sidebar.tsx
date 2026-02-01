import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>ThisIsUche</h2>
        <p className="tagline">DevOps Engineer</p>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/roadmap">Roadmap</NavLink>
      </nav>
    </aside>
  )
}
