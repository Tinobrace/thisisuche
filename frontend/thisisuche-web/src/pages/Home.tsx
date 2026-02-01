import CareerTimeline from "../components/CareerTimeline";

export default function Home() {
  return (
    <div className="page">
      <section className="home-intro">
        <h2><strong>Uchenna Valentine Ukah</strong></h2>
        <p className="subtitle">
          <strong>DevOps Engineer · Systems Thinker · Reliability-First Builder · Lifelong Learner ·</strong>
        </p>
      </section>

      <CareerTimeline />

      <section className="closing">
        <p>
          This is not a career built on shortcuts.
          It is one shaped by responsibility, repetition, and respect for systems.
        </p>
      </section>

      <section className="home-now">
        <h2><strong>What I’m working on</strong></h2>
        <ul>
          <li>Building this personal DevOps dashboard (ThisIsUche)</li>
          <li>Strengthening cloud, CI/CD, and container skills</li>
          <li>Documenting projects and lessons learned in public</li>
        </ul>
      </section>

      <section className="home-future">
        <h2>Long-term direction</h2>
        <p>
          My goal is to grow into a world-class DevSecOps architect, working on
          meaningful systems, mentoring others, and building tools that create
          lasting impact beyond any single role or company.
        </p>
      </section>
    </div>
  );
}
