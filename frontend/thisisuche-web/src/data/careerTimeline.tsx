export interface CareerPhase {
  id: number;
  title: string;
  period: string;
  body: string[];
}

export const careerTimeline: CareerPhase[] = [
  {
    id: 1,
    title: "End User Support",
    period: "Foundations",
    body: [
      "Uchenna Valentine Ukah began his career in End User Support, where technology meets people at their most impatient and most vulnerable.",
      "This phase built his instincts for troubleshooting under pressure, translating technical failures into human language, and respecting uptime as a promise—not a metric.",
      "Here, he learned a truth many engineers miss: systems exist to serve humans, not the other way around."
    ]
  },
  {
    id: 2,
    title: "Systems Administrator",
    period: "Ownership Era",
    body: [
      "Moving into Systems Administration shifted responsibility from individuals to environments.",
      "Uchenna managed servers, Linux systems, access control, backups, and service reliability—learning firsthand that small configuration errors grow teeth in production.",
      "Automation entered the picture, not as a buzzword, but as survival strategy."
    ]
  },
  {
    id: 3,
    title: "Application Lifecycle Management & Support Officer",
    period: "Enterprise Reality",
    body: [
      "At the enterprise level, Uchenna supported mission-critical banking platforms including 1xpress and Specta.",
      "He worked across deployments, middleware integrations, incident response, and vendor deprecations—bridging the gap between development, infrastructure, and business impact.",
      "His contributions helped stabilize platforms, reduce third-party dependency, and eliminate recurring licensing and support costs."
    ]
  },
  {
    id: 4,
    title: "DevOps Engineer",
    period: "Systems Thinking",
    body: [
      "Today, Uchenna operates as a DevOps Engineer, bringing operational scars into modern cloud engineering.",
      "His work spans Docker, Kubernetes, CI/CD pipelines, and cloud platforms including AWS, GCP, and Azure.",
      "He builds systems that favor clarity over cleverness, resilience over hype, and security as a default—not an afterthought."
    ]
  }
];
