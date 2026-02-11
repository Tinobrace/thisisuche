import { projects } from "../data/projects";

export default function Home() {
  // Single pass through projects - calculate everything at once
  const stats = projects.reduce(
    (acc, project) => {
      if (project.status === "Completed") acc.completed++;
      if (project.status === "In Progress") acc.inProgress++;

      project.stack.forEach((tag) => {  // ← Changed from tags to stack
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
      <h1 style={styles.pageTitle}>Hey! I'm Uchenna Valentine Ukah — Glad You're Here.</h1>
      <p style={styles.subtitle}>
        DevOps Engineer | Building | Automating | Scaling Cloud Systems
      </p>

      <div style={styles.stats}>
        <StatCard label="Projects Completed" value={completed} />
        <StatCard label="In Progress" value={inProgress} />
        <StatCard label="AWS Projects" value={awsCount} />
        <StatCard label="Docker Projects" value={dockerCount} />
        <StatCard label="CI/CD Projects" value={cicdCount} />
      </div>

      <section style={styles.skills}>
        <h2 style={styles.sectionTitle}>Skill Exposure</h2>

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
    backgroundColor: "#cadae0",
    border: "1px solid #7288b5",
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
    color: "#082144",
    margin: 0,
  },
  skills: {
    marginTop: "40px",
  },
  sectionTitle: {
    fontSize: "18px",
    marginBottom: "16px",
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
    padding: "8px 12px",
    borderRadius: "999px",
    backgroundColor: "#55628f84",
    fontSize: "14px",
    fontWeight: 500,
  },
};