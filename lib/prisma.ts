import { PrismaClient } from "@prisma/client";

// This File is to ensure that we only have one instance of Prisma Client
// in development mode, to avoid exhausting database connections

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma;