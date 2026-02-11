export default function Bio() {
    return (
        <div>
            <h1 style={styles.pageTitle}>Bio</h1>
            <p style={styles.subtitle}>
                About me and my DevOps journey
            </p>

            {/* Add your bio content here */}
            <div style={styles.content}>
                <h2 style={styles.sectionTitle}>Who I Am</h2>
                <p style={styles.paragraph}>
                    DevOps Engineer passionate about building, automating, and scaling infrastructure.
                </p>

                <h2 style={styles.sectionTitle}>My Journey</h2>
                <p style={styles.paragraph}>
                    Started with Linux fundamentals and progressed through CI/CD, cloud platforms, and containerization.
                </p>
            </div>
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
    content: {
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "32px",
    },
    sectionTitle: {
        fontSize: "20px",
        fontWeight: 600,
        marginBottom: "12px",
        marginTop: "24px",
    },
    paragraph: {
        fontSize: "15px",
        color: "#475569",
        lineHeight: "1.6",
        marginBottom: "16px",
    },
};