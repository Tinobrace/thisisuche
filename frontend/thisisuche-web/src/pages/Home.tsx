import { projects } from "../data/projects";

// Pure function to count projects by tag
const countByTag = (tag: string) =>
  projects.filter((project) => project.tags.includes(tag)).length;

export default function Home() {
  // Calculate stats dynamically
  const completed = projects.filter((p) => p.status === "Completed").length;
  const inProgress = projects.filter((p) => p.status === "In Progress").length;
  const awsCount = countByTag("AWS");
  const dockerCount = countByTag("Docker");
  const cicdCount = countByTag("CI/CD");

  return (
    <div>
      <h1 style={styles.pageTitle}>Welcome to ThisIsUche</h1>
      <p style={styles.subtitle}>
        DevOps Engineer | Building, Automating, and Scaling
      </p>

      <div style={styles.stats}>
        <StatCard label="Projects Completed" value={completed} />
        <StatCard label="In Progress" value={inProgress} />
        <StatCard label="AWS Projects" value={awsCount} />
        <StatCard label="Docker Projects" value={dockerCount} />
        <StatCard label="CI/CD Projects" value={cicdCount} />
      </div>
    </div>
  );
}

// StatCard component
interface StatCardProps {
  label: string;
  value: number;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardValue}>{value}</h3>
      <p style={styles.cardLabel}>{label}</p>
    </div>
  );
}

const styles = {
  pageTitle: {
    fontSize: "32px",
    marginBottom: "8px",
    fontWeight: 700,
  },
  subtitle: {
    fontSize: "16px",
    color: "#64748b",
    marginBottom: "32px",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "24px",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "24px",
    textAlign: "center" as "center",
  },
  cardValue: {
    fontSize: "36px",
    fontWeight: 700,
    color: "#0f172a",
    margin: "0 0 8px 0",
  },
  cardLabel: {
    fontSize: "14px",
    color: "#64748b",
    margin: 0,
  },
};