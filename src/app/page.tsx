import { TaskList } from "@/components/task-list";
import { getTenant } from "@/services/tenant";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get("host")?.split(":")[0];

  if (!host) return null;

  const tenant = await getTenant(host);

  return (
    <div
      style={{ backgroundColor: tenant?.mainColor }}
      className="h-screen flex flex-col items-center justify-center text-white"
    >
      <h1>Cursos</h1>
      <p>HOST: {tenant?.name}</p>
      <hr />
      {tenant?.id && <TaskList tenantId={tenant.id} />}
    </div>
  );
}
