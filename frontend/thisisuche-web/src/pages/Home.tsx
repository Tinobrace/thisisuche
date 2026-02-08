import { projects } from "../data/projects";

export default function Home() {
  const completed = projects.filter(
  (project) => project.status === "Completed"
).length;

const inProgress = projects.filter(
  (project) => project.status === "In Progress"
).length;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>ThisIsUche</h1>
        <p>
          DevOps engineer documenting projects, sharpening systems thinking,
          and building toward mastery.
        </p>
      </header>

      <section style={styles.stats}>
        <div style={styles.card}>
          <h3>Projects Completed</h3>
          <p style={styles.number}>{completed}</p>
        </div>

        <div style={styles.card}>
          <h3>Projects In Progress</h3>
          <p style={styles.number}>{inProgress}</p>
        </div>

        <div style={styles.card}>
          <h3>Current Focus</h3>
          <p>CI/CD · Docker · Cloud</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "32px",
  },
  header: {
    maxWidth: "600px",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
  },
  number: {
    fontSize: "32px",
    fontWeight: 700,
    margin: 0,
  },
};
