import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  if (!global.cachedPrisma) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    global.cachedPrisma = new PrismaClient();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  prisma = global.cachedPrisma;
}

export const db = prisma;
