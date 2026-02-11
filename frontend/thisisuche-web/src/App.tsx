import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Roadmap from "./pages/Roadmap";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="roadmap" element={<Roadmap />} />
      </Route>
    </Routes>
  );
}
