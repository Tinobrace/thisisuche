export default function Projects() {
  return (
    <div>
      <h1 style={styles.pageTitle}>Projects</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h3 style={styles.title}>Secure Cloud Web App</h3>
            <span style={{ ...styles.badge, ...styles.completed }}>
              Completed
            </span>
          </div>

          <p style={styles.description}>
            Deployed a secure web application with HTTPS, CI/CD, and monitoring.
          </p>

          <div style={styles.tags}>
            <span style={styles.tag}>AWS</span>
            <span style={styles.tag}>Nginx</span>
            <span style={styles.tag}>CI/CD</span>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.header}>
            <h3 style={styles.title}>ThisIsUche</h3>
            <span style={{ ...styles.badge, ...styles.inProgress }}>
              In Progress
            </span>
          </div>

          <p style={styles.description}>
            Personal DevOps dashboard to track growth, projects, and roadmap.
          </p>

          <div style={styles.tags}>
            <span style={styles.tag}>React</span>
            <span style={styles.tag}>Vite</span>
            <span style={styles.tag}>DevOps</span>

            
          </div>
        </div>
      </div>
    </div>
  );
}


const styles = {
  pageTitle: {
    fontSize: "28px",
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  title: {
    margin: 0,
    fontSize: "18px",
  },
  badge: {
    fontSize: "12px",
    padding: "4px 8px",
    borderRadius: "999px",
    fontWeight: 500,
  },
  completed: {
    backgroundColor: "#dcfce7",
    color: "#166534",
  },
  inProgress: {
    backgroundColor: "#fef9c3",
    color: "#854d0e",
  },
  description: {
    fontSize: "14px",
    color: "#374151",
    marginBottom: "12px",
  },
  tags: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  tag: {
    fontSize: "12px",
    backgroundColor: "#f1f5f9",
    padding: "4px 8px",
    borderRadius: "6px",
  },
};
