export default function TopBar() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>ThisIsUche</h2>
      <nav style={styles.nav}>
        <span>Dashboard</span>
        <span>Bio</span>
        <span>Projects</span>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    height: "60px",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #e5e7eb",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "600",
  },
  nav: {
    display: "flex",
    gap: "16px",
    fontSize: "14px",
  },
};
