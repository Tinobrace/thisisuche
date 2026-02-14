export function useRoadmap() {
  const completed = roadmap.filter(p => p.status === "Completed");
  const active = roadmap.find(p => p.status === "Active") ?? null;
  const planned = roadmap.filter(p => p.status === "Planned");

  return {
    completed,
    active,
    planned,
    phases: roadmap,
  };
}
