const projects = [
  {
    title: "Secure Cloud Web App",
    status: "Completed",
    description:
      "Deployed a secure web application with HTTPS, CI/CD, and monitoring.",
    tags: ["AWS", "Nginx", "CI/CD"],
  },
  {
    title: "ThisIsUche",
    status: "In Progress",
    description:
      "Personal DevOps dashboard to track growth, projects, and roadmap.",
    tags: ["React", "Vite", "DevOps"],
  },
  {
    title: "autodeploy-express",
    status: "Completed",
    description:
      "Automated CI/CD pipeline demonstrating real-world DevOps practices with Docker and GitHub Actions.",
    tags: ["Node.js", "Docker", "GitHub Actions"],
  },
  {
    title: "docker-express-pipeline",
    status: "Completed",
    description:
      "Simple Express API built as a learning project for Docker and CI/CD workflows.",
    tags: ["Docker", "Express", "CI/CD"],
  },
  {
    title: "aws-devops-ci-cd",
    status: "Completed",
    description:
      "14-day AWS DevOps CI/CD battle plan with Jenkins, CodeArtifact, CodeBuild, CodeDeploy, and Terraform.",
    tags: ["AWS", "Jenkins", "Terraform"],
  },
  {
    title: "crud-app",
    status: "Completed",
    description:
      "Simple Flask CRUD app. My first hosted cloud app - valencloud.xyz",
    tags: ["Python", "Flask", "Cloud"],
  },
  {
    title: "pybox-status-api",
    status: "Completed",
    description:
      "A minimal Python FastAPI app in a Docker container that returns system status (uptime, hostname, timestamp).",
    tags: ["Python", "FastAPI", "Docker"],
  },
  {
    title: "email-messaging-system",
    status: "Completed",
    description:
      "Building a smart messaging system that runs smoothly and doesn't crash when many people use it!",
    tags: ["Python", "Messaging", "Scalability"],
  },
  {
    title: "Haproxy-LoadBalancing-Lab",
    status: "Completed",
    description:
      "This is a solid networking task focused on setting up and testing HAProxy as a Load Balancer.",
    tags: ["HAProxy", "Load Balancing", "Networking"],
  },
  {
    title: "three-tier-app",
    status: "Completed",
    description:
      "Three-Tier Application with Docker, Docker Compose, and Nginx.",
    tags: ["Docker", "Nginx", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <div>
      <h1 style={styles.pageTitle}>Projects</h1>

      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} style={styles.card}>
            <div style={styles.header}>
              <h3 style={styles.title}>{project.title}</h3>
              <span
                style={{
                  ...styles.badge,
                  ...(project.status === "Completed"
                    ? styles.completed
                    : styles.inProgress),
                }}
              >
                {project.status}
              </span>
            </div>

            <p style={styles.description}>{project.description}</p>

            <div style={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} style={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
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
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  title: {
    margin: 0,
    fontSize: "18px",
  },
  badge: {
    fontSize: "12px",
    padding: "4px 8px",
    borderRadius: "999px",
    fontWeight: 500,
  },
  completed: {
    backgroundColor: "#dcfce7",
    color: "#166534",
  },
  inProgress: {
    backgroundColor: "#fef9c3",
    color: "#854d0e",
  },
  description: {
    fontSize: "14px",
    color: "#374151",
    marginBottom: "12px",
  },
  tags: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  tag: {
    fontSize: "12px",
    backgroundColor: "#f1f5f9",
    padding: "4px 8px",
    borderRadius: "6px",
  },
};