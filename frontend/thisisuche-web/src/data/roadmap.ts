export type RoadmapStatus = "Completed" | "Active" | "Planned";

export interface RoadmapPhase {
    title: string;
    status: RoadmapStatus;
    description: string;
    outcomes: string[];
}

export const roadmap: RoadmapPhase[] = [
    {
        title: "Foundations",
        status: "Completed",
        description: "Built strong Linux, networking, and scripting fundamentals.",
        outcomes: [
            "Linux system confidence",
            "Networking basics",
            "Git & Bash fluency",
        ],
    },
    {
        title: "Core DevOps",
        status: "Completed",
        description:
            "Hands-on CI/CD, Docker, cloud deployments, and real projects.",
        outcomes: [
            "Dockerized applications",
            "CI/CD pipelines",
            "Production deployments",
        ],
    },
    {
        title: "Cloud & CI/CD Depth",
        status: "Active",
        description:
            "Deepening cloud-native skills with AWS, Kubernetes, and automation.",
        outcomes: [
            "Kubernetes workloads",
            "Advanced CI/CD patterns",
            "Monitoring & observability",
        ],
    },
    {
        title: "DevSecOps Architect",
        status: "Planned",
        description:
            "Designing secure, scalable systems and mentoring others.",
        outcomes: [
            "Security-first pipelines",
            "System architecture design",
            "Mentorship & thought leadership",
        ],
    },
];