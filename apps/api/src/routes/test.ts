import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";

const testRoutes: FastifyPluginAsync = async (app) => {
  app.get("/db-check", async () => {
    const result = await app.prisma.$queryRaw`SELECT 1`;
    return { ok: true, result };
  });
};

export default fp(testRoutes);
