
import { Home, FolderGit2, Map } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.profile}>
        <h1 style={styles.name}>ThisIsUche</h1>
        <p style={styles.role}>DevOps Engineer</p>
      </div>

      <nav style={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
          <Home size={18} />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
          <FolderGit2 size={18} />
          <span>Projects</span>
        </NavLink>
        <NavLink
          to="/roadmap"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
          <Map size={18} />
          <span>Roadmap</span>
        </NavLink>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "180px",
    backgroundColor: "#dee4ea",
    padding: "24px 16px",
    borderRight: "1px solid #aaacb0",
    display: "flex",
    flexDirection: "column" as "column",
    gap: "40px",
  },
  profile: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "2px",
  },
  name: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
  },
  role: {
    margin: 0,
    fontSize: "13px",
    color: "#64748b",
  },
  nav: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "10px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    textDecoration: "none",
    color: "#0f172a",
    fontSize: "15px",
    borderRadius: "8px",
  },
  activeLink: {
    backgroundColor: "#5e67cd",
    color: "#ffffff",
    fontWeight: 600,
  },
  container: {
    padding: "16px",
  },
};