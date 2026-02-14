type PhaseProps = {
  title: string;
  description: string;
  items: string[];
};

export default function PhaseCard({ title, description, items }: PhaseProps) {
  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>{title}</h2>
      <p>{description}</p>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
