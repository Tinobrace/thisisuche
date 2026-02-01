import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="project-grid">
        <ProjectCard
          title="Secure Cloud Web App"
          description="Deployed a secure web application with HTTPS, CI/CD, and monitoring."
          status="completed"
          stack={["AWS", "Nginx", "CI/CD"]}
        />

        <ProjectCard
          title="ThisIsUche"
          description="Personal DevOps dashboard to track growth, projects, and roadmap."
          status="in-progress"
          stack={["React", "Vite", "DevOps"]}
        />
      </div>
    </div>
  )
}
