import Fastify, { FastifyInstance, FastifyPluginAsync } from "fastify";
import { healthRoutes } from './routes/health'

export function createServer(): FastifyInstance {
  const app = Fastify({ logger: true });

  app.register(healthRoutes);

  return app;
}

