import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.profile}>
        <h1 style={styles.name}>ThisIsUche</h1>
        <p style={styles.role}>DevOps Engineer</p>
      </div>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#436dc0")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }>Home</Link>
        <Link to="/projects" style={styles.link}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#555e6f")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }>Projects</Link>
        <Link to="/roadmap" style={styles.link}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#2361de")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }>Roadmap</Link>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "240px",
    backgroundColor: "#f8fafc",
    padding: "24px 16px",
    borderRight: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
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
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#0f172a",
    fontSize: "15px",
    padding: "8px 12px",
    borderRadius: "6px",
  },
};
