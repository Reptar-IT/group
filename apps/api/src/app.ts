import Fastify, { FastifyInstance, FastifyPluginAsync } from "fastify";
import prismaPlugin from "./plugins/prisma";
import { healthRoutes } from './routes/health'
import testRoutes from './routes/test'


export function createServer(): FastifyInstance {
  const app = Fastify({ logger: true });

  // Plugins
  app.register(prismaPlugin);

  // Test Routes
  app.register(testRoutes);

  app.register(healthRoutes);

  return app;
}

