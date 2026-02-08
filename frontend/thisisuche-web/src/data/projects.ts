import type { Project } from "./Project";

export const projects: Project[] = [
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