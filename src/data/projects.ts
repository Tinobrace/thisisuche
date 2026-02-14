export interface Project {
  title: string;
  status: "Completed" | "In Progress";
  description: string;
  stack: string[];
  repo: string;  // ← Add this field
}

export const projects: Project[] = [
  {
    title: "Secure Cloud Web App",
    status: "Completed",
    description:
      "Deployed a secure web application with HTTPS, CI/CD, and monitoring.",
    stack: ["AWS", "Nginx", "CI/CD"],
    repo: "secure-cloud-web-app",
  },
  {
    title: "ThisIsUche",
    status: "In Progress",
    description:
      "Personal DevOps dashboard to track growth, projects, and roadmap.",
    stack: ["React", "Vite", "DevOps"],
    repo: "thisisuche",
  },
  {
    title: "autodeploy-express",
    status: "Completed",
    description:
      "Automated CI/CD pipeline demonstrating real-world DevOps practices with Docker and GitHub Actions.",
    stack: ["Node.js", "Docker", "GitHub Actions"],
    repo: "autodeploy-express",
  },
  {
    title: "docker-express-pipeline",
    status: "Completed",
    description:
      "Simple Express API built as a learning project for Docker and CI/CD workflows.",
    stack: ["Docker", "Express", "CI/CD"],
    repo: "docker-express-pipeline",
  },
  {
    title: "aws-devops-ci-cd",
    status: "Completed",
    description:
      "14-day AWS DevOps CI/CD battle plan with Jenkins, CodeArtifact, CodeBuild, CodeDeploy, and Terraform.",
    stack: ["AWS", "Jenkins", "Terraform"],
    repo: "aws-devops-ci-cd",
  },
  {
    title: "crud-app",
    status: "Completed",
    description:
      "Simple Flask CRUD app. My first hosted cloud app - valencloud.xyz",
    stack: ["Python", "Flask", "Cloud"],
    repo: "crud-app",
  },
  {
    title: "pybox-status-api",
    status: "Completed",
    description:
      "A minimal Python FastAPI app in a Docker container that returns system status (uptime, hostname, timestamp).",
    stack: ["Python", "FastAPI", "Docker"],
    repo: "pybox-status-api",
  },
  {
    title: "email-messaging-system",
    status: "Completed",
    description:
      "Building a smart messaging system that runs smoothly and doesn't crash when many people use it!",
    stack: ["Python", "Messaging", "Scalability"],
    repo: "email-messaging-system",
  },
  {
    title: "Haproxy-LoadBalancing-Lab",
    status: "Completed",
    description:
      "This is a solid networking task focused on setting up and testing HAProxy as a Load Balancer.",
    stack: ["HAProxy", "Load Balancing", "Networking"],
    repo: "Haproxy-LoadBalancing-Lab",
  },
  {
    title: "three-tier-app",
    status: "Completed",
    description:
      "Three-Tier Application with Docker, Docker Compose, and Nginx.",
    stack: ["Docker", "Nginx", "JavaScript"],
    repo: "three-tier-app",
  },
];