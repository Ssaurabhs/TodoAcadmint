import { describe, it, expect } from "vitest";

interface Task {
  id: string;
  name: string;
  priority: "critical" | "high" | "medium";
}

// Sorting function: critical → high → medium
const sortByPriority = (tasks: Task[]) => {
  const order = { critical: 1, high: 2, medium: 3 };
  return [...tasks].sort((a, b) => order[a.priority] - order[b.priority]);
};

describe("Task Priority Sorting", () => {
  const tasks: Task[] = [
    { id: "1", name: "Medium Task", priority: "medium" },
    { id: "2", name: "Critical Task", priority: "critical" },
    { id: "3", name: "High Task", priority: "high" },
    { id: "4", name: "Another Critical Task", priority: "critical" },
  ];

  it("sorts tasks with 'critical' before 'high' and 'medium'", () => {
    const result = sortByPriority(tasks);
    expect(result[0].priority).toBe("critical");
    expect(result[1].priority).toBe("critical"); // multiple critical grouped
    expect(result[2].priority).toBe("high");
    expect(result[3].priority).toBe("medium");
  });

  it("keeps all tasks after sorting", () => {
    const result = sortByPriority(tasks);
    expect(result.length).toBe(tasks.length);
    const names = result.map((t) => t.name);
    expect(names).toContain("Medium Task");
    expect(names).toContain("Critical Task");
    expect(names).toContain("High Task");
    expect(names).toContain("Another Critical Task");
  });

  it("places medium priority last always", () => {
    const result = sortByPriority(tasks);
    expect(result[result.length - 1].priority).toBe("medium");
  });

  it("works with only one priority type", () => {
    const onlyHigh: Task[] = [{ id: "5", name: "Only High", priority: "high" }];
    const result = sortByPriority(onlyHigh);
    expect(result[0].priority).toBe("high");
  });

  it("returns an empty array if no tasks provided", () => {
    const result = sortByPriority([]);
    expect(result).toEqual([]);
  });
});
