import { projects } from "../data/projects";
import { roadmap } from "../data/roadmap";

export default function Dashboard() {
    // Calculate project stats
    const stats = projects.reduce(
        (acc, project) => {
            if (project.status === "Completed") acc.completed++;
            if (project.status === "In Progress") acc.inProgress++;

            project.stack.forEach((tech) => {
                acc.techUsage[tech] = (acc.techUsage[tech] || 0) + 1;
            });

            return acc;
        },
        {
            completed: 0,
            inProgress: 0,
            techUsage: {} as Record<string, number>,
        }
    );

    // Get roadmap progress
    const completedPhases = roadmap.filter(p => p.status === "Completed").length;
    const activePhase = roadmap.find(p => p.status === "Active");
    const progressPercentage = Math.round((completedPhases / roadmap.length) * 100);

    // Get top technologies
    const topTech = Object.entries(stats.techUsage)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    // Recent projects (last 3)
    const recentProjects = projects.slice(-3).reverse();

    return (
        <div>
            <h1 style={styles.pageTitle}>Dashboard</h1>
            <p style={styles.subtitle}>
                Overview of your DevOps journey and progress
            </p>

            {/* Stats Grid */}
            <div style={styles.statsGrid}>
                <StatCard
                    title="Total Projects"
                    value={projects.length}
                    subtitle="Completed & In Progress"
                    color="#10b981"
                />
                <StatCard
                    title="Completed"
                    value={stats.completed}
                    subtitle={`${stats.inProgress} in progress`}
                    color="#3b82f6"
                />
                <StatCard
                    title="Roadmap Progress"
                    value={`${progressPercentage}%`}
                    subtitle={`${completedPhases}/${roadmap.length} phases done`}
                    color="#8b5cf6"
                />
                <StatCard
                    title="Technologies"
                    value={Object.keys(stats.techUsage).length}
                    subtitle="Different tech used"
                    color="#f59e0b"
                />
            </div>

            {/* Current Focus */}
            {activePhase && (
                <div style={styles.currentFocus}>
                    <h2 style={styles.sectionTitle}>🎯 Current Focus</h2>
                    <div style={styles.focusCard}>
                        <h3 style={styles.focusTitle}>{activePhase.title}</h3>
                        <p style={styles.focusDescription}>{activePhase.description}</p>
                        <div style={styles.outcomes}>
                            <strong>Key Outcomes:</strong>
                            <ul style={styles.outcomeList}>
                                {activePhase.outcomes.map((outcome) => (
                                    <li key={outcome}>{outcome}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Two Column Layout */}
            <div style={styles.twoColumn}>
                {/* Recent Projects */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>📁 Recent Projects</h2>
                    <div style={styles.projectList}>
                        {recentProjects.map((project) => (
                            <div key={project.title} style={styles.projectCard}>
                                <div style={styles.projectHeader}>
                                    <h3 style={styles.projectTitle}>{project.title}</h3>
                                    <span
                                        style={{
                                            ...styles.badge,
                                            backgroundColor:
                                                project.status === "Completed" ? "#dcfce7" : "#fef9c3",
                                            color:
                                                project.status === "Completed" ? "#166534" : "#854d0e",
                                        }}
                                    >
                                        {project.status}
                                    </span>
                                </div>
                                <p style={styles.projectDesc}>{project.description}</p>
                                <div style={styles.techTags}>
                                    {project.stack.slice(0, 3).map((tech) => (
                                        <span key={tech} style={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Technologies */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>⚡ Top Technologies</h2>
                    <div style={styles.techList}>
                        {topTech.map(([tech, count], index) => (
                            <div key={tech} style={styles.techItem}>
                                <div style={styles.techRank}>#{index + 1}</div>
                                <div style={styles.techInfo}>
                                    <span style={styles.techName}>{tech}</span>
                                    <div style={styles.progressBar}>
                                        <div
                                            style={{
                                                ...styles.progressFill,
                                                width: `${(count / topTech[0][1]) * 100}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                                <span style={styles.techCount}>{count} projects</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>🚀 Quick Actions</h2>
                <div style={styles.actions}>
                    <ActionButton label="View All Projects" link="/projects" />
                    <ActionButton label="See Roadmap" link="/roadmap" />
                    <ActionButton label="Read Bio" link="/bio" />
                </div>
            </div>
        </div>
    );
}

// Stat Card Component
interface StatCardProps {
    title: string;
    value: string | number;
    subtitle: string;
    color: string;
}

function StatCard({ title, value, subtitle, color }: StatCardProps) {
    return (
        <div style={styles.statCard}>
            <div style={styles.statHeader}>
                <span style={styles.statTitle}>{title}</span>
                <div style={{ ...styles.statDot, backgroundColor: color }} />
            </div>
            <div style={styles.statValue}>{value}</div>
            <div style={styles.statSubtitle}>{subtitle}</div>
        </div>
    );
}

// Action Button Component
interface ActionButtonProps {
    label: string;
    link: string;
}

function ActionButton({ label, link }: ActionButtonProps) {
    return (
        <a href={link} style={styles.actionButton}>
            {label} →
        </a>
    );
}

const styles = {
    pageTitle: {
        fontSize: "32px",
        fontWeight: 700,
        marginBottom: "8px",
    },
    subtitle: {
        fontSize: "16px",
        color: "#64748b",
        marginBottom: "32px",
    },
    statsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
        marginBottom: "40px",
    },
    statCard: {
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "24px",
    },
    statHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
    },
    statTitle: {
        fontSize: "14px",
        color: "#64748b",
        fontWeight: 500,
    },
    statDot: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
    },
    statValue: {
        fontSize: "36px",
        fontWeight: 700,
        color: "#0f172a",
        marginBottom: "4px",
    },
    statSubtitle: {
        fontSize: "13px",
        color: "#94a3b8",
    },
    currentFocus: {
        marginBottom: "40px",
    },
    focusCard: {
        backgroundColor: "#eef2ff",
        border: "2px solid #6366f1",
        borderRadius: "12px",
        padding: "24px",
    },
    focusTitle: {
        fontSize: "20px",
        fontWeight: 600,
        color: "#1e1b4b",
        marginBottom: "8px",
    },
    focusDescription: {
        fontSize: "15px",
        color: "#475569",
        marginBottom: "16px",
    },
    outcomes: {
        fontSize: "14px",
        color: "#334155",
    },
    outcomeList: {
        marginTop: "8px",
        marginLeft: "20px",
        color: "#475569",
    },
    twoColumn: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginBottom: "40px",
    },
    section: {
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "24px",
    },
    sectionTitle: {
        fontSize: "18px",
        fontWeight: 600,
        marginBottom: "20px",
        color: "#0f172a",
    },
    projectList: {
        display: "flex",
        flexDirection: "column" as "column",
        gap: "16px",
    },
    projectCard: {
        padding: "16px",
        backgroundColor: "#f8fafc",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
    },
    projectHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
    },
    projectTitle: {
        fontSize: "15px",
        fontWeight: 600,
        margin: 0,
        color: "#0f172a",
    },
    badge: {
        fontSize: "11px",
        padding: "3px 8px",
        borderRadius: "999px",
        fontWeight: 600,
    },
    projectDesc: {
        fontSize: "13px",
        color: "#64748b",
        marginBottom: "12px",
        lineHeight: "1.5",
    },
    techTags: {
        display: "flex",
        gap: "6px",
        flexWrap: "wrap" as "wrap",
    },
    techTag: {
        fontSize: "11px",
        backgroundColor: "#e0e7ff",
        color: "#3730a3",
        padding: "3px 8px",
        borderRadius: "4px",
        fontWeight: 500,
    },
    techList: {
        display: "flex",
        flexDirection: "column" as "column",
        gap: "16px",
    },
    techItem: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },
    techRank: {
        width: "32px",
        height: "32px",
        backgroundColor: "#f1f5f9",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        fontWeight: 600,
        color: "#475569",
        flexShrink: 0,
    },
    techInfo: {
        flex: 1,
    },
    techName: {
        fontSize: "14px",
        fontWeight: 500,
        color: "#0f172a",
        display: "block",
        marginBottom: "4px",
    },
    progressBar: {
        height: "6px",
        backgroundColor: "#e2e8f0",
        borderRadius: "3px",
        overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#6366f1",
        borderRadius: "3px",
        transition: "width 0.3s ease",
    },
    techCount: {
        fontSize: "12px",
        color: "#94a3b8",
        fontWeight: 500,
        flexShrink: 0,
    },
    actions: {
        display: "flex",
        gap: "12px",
        flexWrap: "wrap" as "wrap",
    },
    actionButton: {
        textDecoration: "none",
        backgroundColor: "#f1f5f9",
        color: "#0f172a",
        padding: "12px 20px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: 500,
        border: "1px solid #e2e8f0",
        transition: "all 0.2s",
        cursor: "pointer",
    },
};