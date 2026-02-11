import { roadmap } from "../data/roadmap";

export default function Roadmap() {
  return (
    <div>
      <h1 style={styles.pageTitle}>DevOps Roadmap</h1>
      <p style={styles.subtitle}>
        A deliberate path from fundamentals to architecture.
      </p>

      {/* Current Focus Block */}
      {roadmap.find(p => p.status === "Active") && (
        <div style={styles.currentFocus}>
          <strong>Current Focus:</strong>{" "}
          {roadmap.find(p => p.status === "Active")!.title}
        </div>
      )}

      <div style={styles.timeline}>
        {roadmap.map((phase) => {
          const isActive = phase.status === "Active";

          return (
            <div
              key={phase.title}
              style={{
                ...styles.phase,
                borderColor: isActive ? "#6366f1" : "#ebb8a7",
                boxShadow: isActive
                  ? "0 0 0 2px rgba(99,102,241,0.2)"
                  : "none",
              }}
            >
              <div style={styles.header}>
                <h2 style={styles.title}>{phase.title}</h2>
                <span style={statusStyle(phase.status)}>
                  {phase.status}
                </span>
              </div>

              <p style={styles.description}>{phase.description}</p>

              <ul style={styles.outcomes}>
                {phase.outcomes.map((outcome) => (
                  <li key={outcome} style={styles.outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  pageTitle: {
    fontSize: "32px",
    fontWeight: 700,
    marginBottom: "8px",
  },
  subtitle: {
    color: "#64748b",
    marginBottom: "32px",
    fontSize: "16px",
  },
  currentFocus: {
    backgroundColor: "#eef2ff",
    borderRadius: "10px",
    padding: "12px 16px",
    marginBottom: "32px",
    fontSize: "14px",
    color: "#1e1b4b",
  },
  timeline: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "24px",
  },
  phase: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px",
    transition: "all 0.2s ease",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  title: {
    fontSize: "20px",
    fontWeight: 600,
    margin: 0,
  },
  description: {
    marginBottom: "12px",
    color: "#334155",
    fontSize: "15px",
  },
  outcomes: {
    paddingLeft: "18px",
    color: "#475569",
    margin: 0,
  },
  outcome: {
    fontSize: "14px",
    marginBottom: "6px",
  },
};

const statusStyle = (status: string) => ({
  padding: "4px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: 600,
  backgroundColor:
    status === "Completed"
      ? "#dcfce7"
      : status === "Active"
        ? "#e0e7ff"
        : "#fef9c3",
  color:
    status === "Completed"
      ? "#166534"
      : status === "Active"
        ? "#3730a3"
        : "#854d0e",
});