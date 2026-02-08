import { projects } from "../data/projects";

export default function Home() {

  const completed = projects.filter(
  (p) => p.status === "Completed"
).length;

const inProgress = projects.filter(
  (p) => p.status === "In Progress"
).length;

  return (
    <div>
      <section style={styles.section}>
        <h1 style={styles.title}>Uchenna Valentine Ukah</h1>
        <p style={styles.subtitle}>
          DevOps Engineer • Systems Thinker • Reliability-First Builder • Lifelong Learner ·
        </p>
        <p style={styles.text}>
          I build reliable systems, automate workflows, and turn ideas into
          production-ready infrastructure.
        </p>
         <p>
                    I am building a career shaped by responsibility, repetition, and respect for systems.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>What I Do</h2>
        <p style={styles.text}>
          I work with cloud platforms, CI/CD pipelines, containers, and
          infrastructure automation to ship software safely and repeatedly.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Where I’m Going</h2>
        <p style={styles.text}>
          My goal is to grow into a world-class DevSecOps architect, working on
          meaningful systems, mentoring others, and building tools that create
          lasting impact beyond any single role or company.
        </p>
      </section>

      <section style={styles.section}>
  <h2 style={styles.heading}>Quick Stats</h2>

  <div style={styles.stats}>
    <div>
      <strong>{completed}</strong>
      <p>Completed Projects</p>
    </div>

    <div>
      <strong>{inProgress}</strong>
      <p>Projects in Progress</p>
    </div>
  </div>
</section>

    </div>
    );
}

const styles = {
  section: {
    marginBottom: "40px",
    maxWidth: "800px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "18px",
    opacity: 0.8,
    marginBottom: "16px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "12px",
  },
  text: {
    fontSize: "16px",
    lineHeight: 1.6,
  },
  stats: {
  display: "flex",
  gap: "40px",
  marginTop: "16px",
},

};
