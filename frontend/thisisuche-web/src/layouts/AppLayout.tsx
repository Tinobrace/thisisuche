import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div style={styles.container}>
      <Sidebar />
      <main style={styles.main}>{children}</main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#a8b8c6",
  },
  main: {
    flex: 1,
    padding: "32px",
    overflowY: "auto" as "auto",
  },
};