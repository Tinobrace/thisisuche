import { NavLink } from "react-router-dom";

export default function TopBar() {
  return (
    <div style={styles.topBar}>
      <div style={styles.spacer}></div>
      <div style={styles.links}>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/bio"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
          Bio
        </NavLink>
      </div>
    </div>
  );
}

const styles = {
  topBar: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    padding: "12px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spacer: {
    flex: 1,
  },
  links: {
    display: "flex",
    gap: "24px",
  },
  link: {
    textDecoration: "none",
    color: "#64748b",
    fontSize: "14px",
    fontWeight: 500,
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "all 0.2s",
  },
  activeLink: {
    color: "#0f172a",
    backgroundColor: "#f1f5f9",
    fontWeight: 600,
  },
};
