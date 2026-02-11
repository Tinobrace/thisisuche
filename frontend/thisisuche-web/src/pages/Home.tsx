import { projects } from "../data/projects";

export default function Home() {
  // Single pass through projects - calculate everything at once
  const stats = projects.reduce(
    (acc, project) => {
      if (project.status === "Completed") acc.completed++;
      if (project.status === "In Progress") acc.inProgress++;

      project.tags.forEach((tag) => {
        acc.tags[tag] = (acc.tags[tag] || 0) + 1;
      });

      return acc;
    },
    {
      completed: 0,
      inProgress: 0,
      tags: {} as Record<string, number>,
    }
  );

  // Extract values from stats
  const completed = stats.completed;
  const inProgress = stats.inProgress;
  const awsCount = stats.tags["AWS"] || 0;
  const dockerCount = stats.tags["Docker"] || 0;
  const cicdCount = stats.tags["CI/CD"] || 0;

  // Sort tags by frequency
  const sortedTags = Object.entries(stats.tags).sort((a, b) => b[1] - a[1]);

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Hey! I'm Uchenna Valentine Ukah — Glad You're Here.
        </h1>
        <p style={styles.heroSubtitle}>
          DevOps Engineer • Building, Automating, and Scaling Cloud Systems
        </p>
      </section>

      {/* Stats Section */}
      <div style={styles.stats}>
        <StatCard label="Projects Completed" value={completed} />
        <StatCard label="In Progress" value={inProgress} />
        <StatCard label="AWS Projects" value={awsCount} />
        <StatCard label="Docker Projects" value={dockerCount} />
        <StatCard label="CI/CD Projects" value={cicdCount} />
      </div>

      {/* Skill Exposure */}
      <section style={styles.skills}>
        <h3 style={styles.sectionTitle}>Skill Exposure</h3>

        <div style={styles.skillGrid}>
          {sortedTags.map(([tag, count]) => (
            <div
              key={tag}
              style={{
                ...styles.skillItem,
                opacity: count === sortedTags[0][1] ? 1 : 0.85,
              }}
            >
              <span>{tag}</span>
              <strong>{count}</strong>
            </div>
          ))}
        </div>
      </section>
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
  hero: {
    marginBottom: "48px",
  },
  heroTitle: {
    fontSize: "36px",
    fontWeight: 700,
    marginBottom: "12px",
    lineHeight: 1.2,
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "#64748b",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "48px",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px",
    textAlign: "center" as "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
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
  skills: {
    marginTop: "48px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "20px",
  },
  skillGrid: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    gap: "12px",
  },
  skillItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 16px",
    borderRadius: "999px",
    backgroundColor: "#eef2ff",
    fontSize: "14px",
    fontWeight: 500,
    border: "1px solid #e0e7ff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
};