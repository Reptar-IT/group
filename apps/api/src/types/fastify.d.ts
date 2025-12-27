import "fastify";
import { PrismaClient } from "../generated/prisma";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}
