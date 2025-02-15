import { prisma } from "@/utils/prisma-client";

export const getTenant = async (host: string) => {
  return await prisma.tenant.findFirst({
    where: {
      host,
    },
  });
};
