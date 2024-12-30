import { PrismaClient } from "@prisma/client";

declare global {
  // Extend the NodeJS global interface to include cachedPrisma
  namespace NodeJS {
    interface Global {
      cachedPrisma?: PrismaClient;
    }
  }

  // For `globalThis` compatibility with TypeScript
  var cachedPrisma: PrismaClient | undefined;
}

const prisma = global.cachedPrisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.cachedPrisma = prisma;
}

export const db = prisma;
