import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import { getPrisma } from "../lib/prisma";

const prismaPlugin: FastifyPluginAsync = async (app) => {
  const prisma = getPrisma();

  // Make available via app.prisma
  app.decorate("prisma", prisma);

  // Graceful shutdown
  app.addHook("onClose", async () => {
    app.log.info("Closing Prisma connection");
    await prisma.$disconnect();
  });
};

export default fp(prismaPlugin);
