import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.mainArea}>
        <TopBar />
        <main style={styles.main}>{children}</main>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
  },
  mainArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as "column",
  },
  main: {
    flex: 1,
    padding: "32px",
    overflowY: "auto" as "auto",
  },
};