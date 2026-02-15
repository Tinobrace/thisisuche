import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <div style={styles.card}>{children}</div>;
}

const styles = {
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "20px",
    backgroundColor: "#ffffff",
  },
};
