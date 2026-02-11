export default function Dashboard() {
    return (
        <div>
            <h1 style={styles.pageTitle}>Dashboard</h1>
            <p style={styles.subtitle}>
                Overview of your DevOps journey and metrics
            </p>

            {/* Add your dashboard content here */}
            <div style={styles.placeholder}>
                Dashboard content coming soon...
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
    placeholder: {
        padding: "40px",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        textAlign: "center" as "center",
        color: "#94a3b8",
    },
};