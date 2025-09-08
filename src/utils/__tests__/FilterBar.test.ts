import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(isBetween);
dayjs.extend(isoWeek);

interface Task {
  id: string;
  name: string;
  deadline?: string;
}

const filterTasks = (
  tasks: Task[],
  filterType: "all" | "today" | "week" | "custom",
  customStart?: string,
  customEnd?: string,
) => {
  const today = dayjs().format("YYYY-MM-DD");
  const startOfWeek = dayjs().startOf("isoWeek").format("YYYY-MM-DD");
  const endOfWeek = dayjs().endOf("isoWeek").format("YYYY-MM-DD");

  return tasks.filter((t) => {
    if (!t.deadline) return filterType === "all";

    const deadlineDate = dayjs(t.deadline).format("YYYY-MM-DD");

    switch (filterType) {
      case "today":
        return deadlineDate === today;
      case "week":
        return deadlineDate >= startOfWeek && deadlineDate <= endOfWeek;
      case "custom":
        if (customStart && customEnd) {
          const customStartDate = dayjs(customStart).format("YYYY-MM-DD");
          const customEndDate = dayjs(customEnd).format("YYYY-MM-DD");
          return deadlineDate >= customStartDate && deadlineDate <= customEndDate;
        }
        return false;
      default:
        return true;
    }
  });
};

describe("Task Filters", () => {
  const today = dayjs().format("YYYY-MM-DD");
  const weekStart = dayjs().startOf("isoWeek");
  const midWeek = weekStart.add(2, "day").format("YYYY-MM-DD");

  const tasks: Task[] = [
    { id: "1", name: "Today Task", deadline: today },
    { id: "2", name: "Week Task", deadline: midWeek },
    { id: "3", name: "Old Task", deadline: dayjs().subtract(10, "day").format("YYYY-MM-DD") },
    { id: "4", name: "Future Task", deadline: dayjs().add(10, "day").format("YYYY-MM-DD") },
    { id: "5", name: "No Deadline Task" },
  ];

  it("filters tasks due today", () => {
    const result = filterTasks(tasks, "today");
    expect(result.map((t) => t.name)).toContain("Today Task");
    expect(result.map((t) => t.name)).not.toContain("Week Task");
    expect(result.map((t) => t.name)).not.toContain("Old Task");
    expect(result.map((t) => t.name)).not.toContain("Future Task");
  });

  it("filters tasks due this week", () => {
    const result = filterTasks(tasks, "week");
    expect(result.map((t) => t.name)).toContain("Today Task");
    expect(result.map((t) => t.name)).toContain("Week Task");
    expect(result.map((t) => t.name)).not.toContain("Old Task");
    expect(result.map((t) => t.name)).not.toContain("Future Task");
  });

  it("filters tasks by custom date range", () => {
    const start = dayjs().subtract(5, "day").format("YYYY-MM-DD");
    const end = dayjs().add(3, "day").format("YYYY-MM-DD");
    const result = filterTasks(tasks, "custom", start, end);
    expect(result.map((t) => t.name)).toContain("Today Task");
    expect(result.map((t) => t.name)).toContain("Week Task");
    expect(result.map((t) => t.name)).not.toContain("Old Task");
    expect(result.map((t) => t.name)).not.toContain("Future Task");
  });

  it("shows all tasks when filter is 'all'", () => {
    const result = filterTasks(tasks, "all");
    expect(result.length).toBe(tasks.length);
  });

  it("shows only tasks with no deadline when filter is 'all' and deadline is missing", () => {
    const result = filterTasks([{ id: "5", name: "No Deadline Task" }], "all");
    expect(result.map((t) => t.name)).toContain("No Deadline Task");
  });
});
