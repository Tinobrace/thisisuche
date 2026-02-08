type StatCardProps = {
  label: string;
  value: number;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div style={styles.card}>
      <p style={styles.label}>{label}</p>
      <p style={styles.value}>{value}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#f8fafc",
    padding: "20px",
    borderRadius: "12px",
    minWidth: "160px",
    border: "1px solid #e2e8f0",
  },
  label: {
    margin: 0,
    fontSize: "14px",
    color: "#64748b",
  },
  value: {
    margin: "8px 0 0",
    fontSize: "28px",
    fontWeight: 700,
    color: "#0f172a",
  },
};
