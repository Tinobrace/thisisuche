import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

export default function AppLayout({ children }) {
  return (
    <div style={styles.app}>
      <TopBar />
      <div style={styles.body}>
        <Sidebar />
        <main style={styles.main}>{children}</main>
      </div>
    </div>
  );
}

const styles = {
  app: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  body: {
    flex: 1,
    display: "flex",
  },
  main: {
    flex: 1,
    padding: "32px",
  },
};
