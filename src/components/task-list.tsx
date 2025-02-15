import { getTasks } from "@/services/task";

interface TaskListProps {
  tenantId: number;
}

export async function TaskList({ tenantId }: TaskListProps) {
  const tasks = await getTasks(tenantId);

  return (
    <ul>
      <>
        {tasks.map((item) => (
          <li key={item.id} className="text-center">
            {item.label}
          </li>
        ))}
      </>
    </ul>
  );
}
