import { careerTimeline } from "../data/careerTimeline";
import '../styles/timeline.css';

export default function CareerTimeline() {
  return (
    <section className="timeline">
      <h2>Career Journey</h2>

      {careerTimeline.map((phase) => (
        <div key={phase.id} className="timeline-item">
          <div className="timeline-header">
            <h3>{phase.title}</h3>
            <span>{phase.period}</span>
          </div>

          {phase.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ))}
    </section>
  );
}
