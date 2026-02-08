import { roadmap } from "../data/roadmap";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

export default function Roadmap() {
  return (
    <div>
      <h1 style={styles.pageTitle}>Roadmap</h1>
      <p style={styles.subtitle}>
        From foundations to DevSecOps architecture
      </p>

      <div style={styles.timeline}>
        {roadmap.map((phase) => (
          /* Added 'key' prop here for React list rendering */
          <Card key={phase.id || phase.title}>
            <div style={styles.header}>
              <h3 style={styles.title}>{phase.title}</h3>
              {/* Corrected: Use the Badge component directly instead of nesting it in styles */}
              <Badge
                label={phase.status}
                variant={phase.status}
                style={{
                  ...styles.badge,
                  ...styles.status[phase.status],
                }}
              />
            </div>

            <p style={styles.description}>{phase.description}</p>

            <ul style={styles.list}>
              {phase.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </Card>
        ))}
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
    fontSize: "16px",
    color: "#64748b",
    marginBottom: "32px",
  },
  timeline: {
    display: "flex",
    flexDirection: "column", // Removed 'as const' unless you are strictly using TypeScript
    gap: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  title: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
  },
  description: {
    margin: "8px 0 12px",
    color: "#475569",
  },
  list: {
    paddingLeft: "18px",
    margin: 0,
  },
  badge: {
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "999px",
    fontWeight: 600,
  },
  status: {
    Completed: {
      backgroundColor: "#dcfce7",
      color: "#166534",
    },
    Active: {
      backgroundColor: "#e0e7ff",
      color: "#3730a3",
    },
    Planned: {
      backgroundColor: "#fef9c3",
      color: "#854d0e",
    },
  },
};