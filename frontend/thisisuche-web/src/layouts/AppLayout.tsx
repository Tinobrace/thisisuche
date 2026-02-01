import { ReactNode } from "react";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-50">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;

