
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h1 style={styles.pageTitle}>Projects</h1>

      <div style={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
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
};