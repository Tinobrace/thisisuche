import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

import { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {

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
