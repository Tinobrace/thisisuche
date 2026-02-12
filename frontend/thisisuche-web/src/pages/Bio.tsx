export default function Bio() {
    return (
        <div>
            <h1 style={styles.pageTitle}>Uchenna Valentine Ukah</h1>
            <p style={styles.subtitle}>
                DevOps Engineer | Building | Automating | Scaling Cloud Systems
            </p>

            {/* Profile Section */}
            <div style={styles.profileSection}>
                <div style={styles.profileCard}>
                    <div style={styles.avatar}>
                        <span style={styles.avatarText}>UV</span>
                    </div>
                    <div style={styles.profileInfo}>
                        <h2 style={styles.profileName}>Uchenna Valentine Ukah</h2>
                        <p style={styles.profileRole}>DevOps Engineer</p>
                        <p style={styles.profileLocation}>📍 Lagos, Nigeria</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div style={styles.contactCard}>
                    <h3 style={styles.contactTitle}>Get In Touch</h3>
                    <div style={styles.contactList}>
                        <ContactLink
                            icon="📧"
                            label="Email"
                            value="valen.uchenna@gmail.com"
                            href="mailto:valen.uchenna@gmail.com"
                        />
                        <ContactLink
                            icon="💼"
                            label="LinkedIn"
                            value="https://www.linkedin.com/in/uchenna-valentine-ukah-2869a37a/"
                            href="https://linkedin.com/in/uchenna-valentine-ukah-2869a37a/"
                        />
                        <ContactLink
                            icon="🐙"
                            label="GitHub"
                            value="github.com/Tinobrace"
                            href="https://github.com/Tinobrace"
                        />
                        <ContactLink
                            icon="🐦"
                            label="Twitter"
                            value="@thisisuche"
                            href="https://twitter.com/thisisuche"
                        />
                    </div>
                </div>
            </div>

            {/* Career Biography */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>📖 Career Biography</h2>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        Uchenna Valentine Ukah is a DevOps Engineer with a foundation forged in
                        real-world systems support, operational accountability, and the
                        unglamorous but essential work of keeping technology running when it
                        matters most. His career is not the story of shortcuts or buzzwords,
                        but of deliberate progression from user-facing support to deep
                        infrastructure ownership, and finally to modern DevOps and cloud-native
                        engineering.
                    </p>

                    <p style={styles.paragraph}>
                        His professional journey began in <strong>End User Support</strong>,
                        where technology is experienced at its most human level. In this role,
                        Uchenna learned early that systems are only as good as the people who
                        rely on them. Supporting users meant troubleshooting under pressure,
                        translating technical failures into calm explanations, and developing
                        a disciplined approach to root-cause analysis. These formative years
                        built his respect for stability, documentation, and empathy, skills
                        that would later define his engineering mindset.
                    </p>

                    <p style={styles.paragraph}>
                        As his curiosity deepened, Uchenna transitioned into
                        <strong> Systems Administration</strong>. Here, the scope expanded from
                        individual users to entire environments. He took responsibility for
                        servers, operating systems, access control, backups, and service
                        availability. This phase sharpened his understanding of Linux systems,
                        networking fundamentals, and the consequences of misconfiguration.
                        It also introduced him to a timeless lesson: automation is not about
                        speed, it is about consistency and survival.
                    </p>

                    <p style={styles.paragraph}>
                        His evolution continued into the role of
                        <strong> Application Lifecycle Management & Support Officer</strong>,
                        a position that placed him at the intersection of software, operations,
                        and business continuity. Supporting enterprise banking platforms such
                        as <em>1xpress</em>, <em>IFRS9</em>, <em>Clirec Reconciliation App</em> and <em>Enterprise Loan Applications such as:</em> <em>Specta</em>, <em>Gazelle</em>, <em>Business Support Facility (BSF)</em>, and <em>The Business Hub (TBH)</em>,
                        Uchenna worked across deployment cycles, incident response, middleware integrations, and vendor
                        deprecations. He contributed to platform stabilization, reduced
                        dependency on third-party tools, and helped eliminate recurring
                        licensing and support costs through internal optimization.
                    </p>

                    <p style={styles.paragraph}>
                        In this role, he developed a systems-level perspective: applications do
                        not fail in isolation. Failures ripple across networks, teams, vendors,
                        and customers. This insight pushed him beyond reactive support and into
                        proactive engineering, where observability, repeatable deployments, and
                        secure pipelines are non-negotiable.
                    </p>

                    <p style={styles.paragraph}>
                        Today, Uchenna operates as a <strong>DevOps Engineer</strong>, applying
                        years of operational experience to modern cloud and platform
                        engineering. His work spans containerization with Docker, orchestration
                        with Kubernetes, CI/CD pipelines using Jenkins and GitHub Actions, and
                        cloud platforms including AWS, GCP, and Azure. He approaches DevOps not
                        as a toolset, but as a culture rooted in reliability, ownership, and
                        continuous improvement.
                    </p>

                    <p style={styles.paragraph}>
                        He is particularly focused on secure-by-default systems, practical
                        automation, and building platforms that scale without sacrificing
                        clarity. His projects emphasize HTTPS-first deployments, secrets
                        management, monitoring and logging, and production realism over demos.
                        Debugging 502 errors at 2 a.m. taught him more than any tutorial ever
                        could.
                    </p>

                    <p style={styles.paragraph}>
                        Looking forward, Uchenna is on a deliberate path toward becoming a
                        world-class DevSecOps Architect, designing resilient systems, mentoring
                        emerging engineers, and building tools that enable teams rather than
                        impress resumes. His career reflects a simple principle: mastery is
                        earned by showing up where systems break, and staying long enough to
                        understand why.
                    </p>

                    <p style={styles.closingText}>
                        This is not the story of someone who skipped steps. It is the story of
                        someone who respected them.
                    </p>
                </div>
            </div>

            {/* What I'm Working On */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>🚀 What I'm Working On</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Building this personal DevOps dashboard (ThisIsUche)</li>
                    <li style={styles.listItem}>Strengthening cloud, CI/CD, and container skills</li>
                    <li style={styles.listItem}>Documenting projects and lessons learned in public</li>
                </ul>
            </div>

            {/* Where I'm Headed */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>🎯 Where I'm Headed</h2>
                <div style={styles.content}>
                    <p style={styles.paragraph}>
                        My long-term goal is to become a world-class DevSecOps architect,
                        working on high-impact systems, mentoring upcoming engineers, and
                        building tools that outlive trends.
                    </p>
                </div>
            </div>

            {/* Skills & Expertise */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>🛠️ Skills & Expertise</h2>
                <div style={styles.skillsGrid}>
                    <SkillCategory
                        title="Cloud Platforms"
                        skills={["AWS (EC2, S3, Lambda)", "Google Cloud Platform", "Microsoft Azure"]}
                    />
                    <SkillCategory
                        title="Containerization & Orchestration"
                        skills={["Docker", "Docker Compose", "Kubernetes"]}
                    />
                    <SkillCategory
                        title="CI/CD & Automation"
                        skills={["GitHub Actions", "Jenkins", "GitLab CI", "AWS CodeDeploy"]}
                    />
                    <SkillCategory
                        title="Infrastructure as Code"
                        skills={["Terraform", "Ansible", "CloudFormation"]}
                    />
                    <SkillCategory
                        title="Programming & Scripting"
                        skills={["Bash", "Python", "Node.js"]}
                    />
                    <SkillCategory
                        title="Monitoring & Observability"
                        skills={["Prometheus", "Grafana", "CloudWatch", "ELK Stack"]}
                    />
                </div>
            </div>

            {/* Download Resume */}
            <div style={styles.resumeSection}>
                <button style={styles.resumeButton}>
                    📄 Download Resume
                </button>
            </div>
        </div>
    );
}

// Contact Link Component
interface ContactLinkProps {
    icon: string;
    label: string;
    value: string;
    href: string;
}

function ContactLink({ icon, label, value, href }: ContactLinkProps) {
    return (
        <a href={href} style={styles.contactItem} target="_blank" rel="noopener noreferrer">
            <span style={styles.contactIcon}>{icon}</span>
            <div style={styles.contactDetails}>
                <span style={styles.contactLabel}>{label}</span>
                <span style={styles.contactValue}>{value}</span>
            </div>
        </a>
    );
}

// Skill Category Component
interface SkillCategoryProps {
    title: string;
    skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
    return (
        <div style={styles.skillCategory}>
            <h3 style={styles.skillCategoryTitle}>{title}</h3>
            <ul style={styles.skillList}>
                {skills.map((skill) => (
                    <li key={skill} style={styles.skillItem}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
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
    profileSection: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginBottom: "40px",
    },
    profileCard: {
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "32px",
        display: "flex",
        alignItems: "center",
        gap: "24px",
    },
    avatar: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "#6366f1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },
    avatarText: {
        fontSize: "32px",
        fontWeight: 700,
        color: "#ffffff",
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: "24px",
        fontWeight: 700,
        margin: "0 0 4px 0",
        color: "#0f172a",
    },
    profileRole: {
        fontSize: "16px",
        color: "#64748b",
        margin: "0 0 8px 0",
    },
    profileLocation: {
        fontSize: "14px",
        color: "#94a3b8",
        margin: 0,
    },
    contactCard: {
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "32px",
    },
    contactTitle: {
        fontSize: "18px",
        fontWeight: 600,
        marginBottom: "20px",
        color: "#0f172a",
    },
    contactList: {
        display: "flex",
        flexDirection: "column" as "column",
        gap: "12px",
    },
    contactItem: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px",
        backgroundColor: "#f8fafc",
        borderRadius: "8px",
        textDecoration: "none",
        transition: "all 0.2s",
    },
    contactIcon: {
        fontSize: "20px",
    },
    contactDetails: {
        display: "flex",
        flexDirection: "column" as "column",
    },
    contactLabel: {
        fontSize: "12px",
        color: "#94a3b8",
        fontWeight: 500,
    },
    contactValue: {
        fontSize: "14px",
        color: "#475569",
        fontWeight: 500,
    },
    section: {
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "32px",
        marginBottom: "24px",
    },
    sectionTitle: {
        fontSize: "20px",
        fontWeight: 600,
        marginBottom: "20px",
        color: "#0f172a",
    },
    content: {
        maxWidth: "100%",
    },
    paragraph: {
        fontSize: "15px",
        color: "#475569",
        lineHeight: "1.7",
        marginBottom: "16px",
    },
    closingText: {
        fontSize: "15px",
        color: "#1e293b",
        lineHeight: "1.7",
        fontStyle: "italic",
        marginTop: "24px",
        paddingTop: "24px",
        borderTop: "1px solid #e2e8f0",
    },
    list: {
        margin: 0,
        paddingLeft: "24px",
    },
    listItem: {
        fontSize: "15px",
        color: "#475569",
        marginBottom: "12px",
        lineHeight: "1.6",
    },
    skillsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "24px",
    },
    skillCategory: {
        padding: "20px",
        backgroundColor: "#f8fafc",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
    },
    skillCategoryTitle: {
        fontSize: "16px",
        fontWeight: 600,
        marginBottom: "12px",
        color: "#0f172a",
    },
    skillList: {
        margin: 0,
        paddingLeft: "20px",
    },
    skillItem: {
        fontSize: "14px",
        color: "#64748b",
        marginBottom: "8px",
    },
    resumeSection: {
        textAlign: "center" as "center",
        marginTop: "40px",
    },
    resumeButton: {
        backgroundColor: "#6366f1",
        color: "#ffffff",
        border: "none",
        padding: "14px 32px",
        borderRadius: "8px",
        fontSize: "15px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s",
    },
};