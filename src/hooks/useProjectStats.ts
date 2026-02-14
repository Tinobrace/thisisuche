import { projects } from "../data/projects";

export function useProjectStats() {
    return projects.reduce(
        (acc, project) => {
            if (project.status === "Completed") acc.completed++;
            if (project.status === "In Progress") acc.inProgress++;

            project.tags.forEach((tag) => {
                acc.tags[tag] = (acc.tags[tag] || 0) + 1;
            });

            return acc;
        },
        {
            completed: 0,
            inProgress: 0,
            tags: {} as Record<string, number>,
        }
    );
}
