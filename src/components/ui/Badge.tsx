type BadgeProps = {
    label: string;
    variant: "Completed" | "Active" | "Planned";
};

export default function Badge({ label, variant }: BadgeProps) {
    return (
        <span style={{ ...styles.base, ...styles[variant] }}>
            {label}
        </span>
    );
}

const styles = {
    base: {
        fontSize: "12px",
        padding: "4px 10px",
        borderRadius: "999px",
        fontWeight: 600,
    },
    Completed: {
        backgroundColor: "#dcfce7",
        color: "#166534",
    },
    Active: {
        backgroundColor: "#e0e7ff",
        color: "#3730a3",
    },
    Planned: {
        backgroundColor: "#fef9c3",
        color: "#854d0e",
    },
};
