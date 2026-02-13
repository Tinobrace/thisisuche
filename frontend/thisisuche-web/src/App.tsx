import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Roadmap from "./pages/Roadmap";
import Dashboard from "./pages/Dashboard";
import Bio from "./pages/Bio";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppLayout>
  );
}