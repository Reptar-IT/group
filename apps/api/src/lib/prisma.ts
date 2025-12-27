import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

let prisma: PrismaClient;

export function getPrisma() {
  if (!prisma) {
    const adapter = new PrismaPg(pool);

    prisma = new PrismaClient({
      adapter,
      log: ["error", "warn"],
    });
  }

  return prisma;
}
