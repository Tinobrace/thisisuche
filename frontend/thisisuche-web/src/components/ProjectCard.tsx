type ProjectCardProps = {
    title: string
    description: string
    status: "completed" | "in-progress"
    stack: string[]
}

export default function ProjectCard({
    title,
    description,
    status,
    stack,
}: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className="project-header">
                <h3>{title}</h3>
                <span className={`status ${status}`}>
                    {status.replace("-", " ")}
                </span>
            </div>

            <p className="project-desc">{description}</p>

            <div className="project-stack">
                {stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
            </div>
        </div>
    )
}
