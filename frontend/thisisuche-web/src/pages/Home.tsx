import { projects } from "../data/projects";

// Pure function to count projects by tag
const countByTag = (tag: string) =>
  projects.filter((project) => project.tags.includes(tag)).length;

const expectedSkills = [
  "Linux",
  "Networking",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "AWS",
  "Terraform",
  "Monitoring",
  "Security",
  "Databases",
  "System Design",
];

const actualSkills = new Set<string>();

projects.forEach((project) => {
  project.tags.forEach((tag) => {
    actualSkills.add(tag);
  });
});

const missingSkills = expectedSkills.filter(
  (skill) => !actualSkills.has(skill)
);

// Build a tag frequency map
const getTagStats = () => {
  const map: Record<string, number> = {};

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      map[tag] = (map[tag] || 0) + 1;
    });
  });

  return map;
};

export default function Home() {
  // Calculate stats dynamically
  const completed = projects.filter((p) => p.status === "Completed").length;
  const inProgress = projects.filter((p) => p.status === "In Progress").length;
  const awsCount = countByTag("AWS");
  const dockerCount = countByTag("Docker");
  const cicdCount = countByTag("CI/CD");

  // Get tag statistics and sort by frequency
  const tagStats = getTagStats();
  const sortedTags = Object.entries(tagStats).sort((a, b) => b[1] - a[1]);

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

      <section style={styles.skills}>
        <h2 style={styles.sectionTitle}>Skill Focus</h2>

        <div style={styles.skillGrid}>
          {sortedTags.map(([tag, count]) => (
            <div key={tag} style={styles.skillItem}>
              <span>{tag}</span>
              <strong>{count}</strong>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.gaps}>
  <h2 style={styles.sectionTitle}>Blind Spots</h2>

  {missingSkills.length === 0 ? (
    <p style={styles.goodNews}>
      No obvious gaps detected. That’s rare. Respect.
    </p>
  ) : (
    <ul style={styles.gapList}>
      {missingSkills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  )}
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
    backgroundColor: "#eef2ff",
    fontSize: "14px",
    fontWeight: 500,
  },
  <section style={styles.gaps}>
  <h2 style={styles.sectionTitle}>Blind Spots</h2>

  {missingSkills.length === 0 ? (
    <p style={styles.goodNews}>
      No obvious gaps detected. That’s rare. Respect.
    </p>
  ) : (
    <ul style={styles.gapList}>
      {missingSkills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  )}
</section>

};