import { prisma } from "@/utils/prisma-client";

export async function getTasks(tenantId: number) {
  return await prisma.task.findMany({
    where: {
      tenantId,
    },
  });
}
