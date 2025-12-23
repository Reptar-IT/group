import { FastifyInstance } from "fastify";

const healthRoutes = async (app: FastifyInstance) => {
    app.get('/health', async () => {
        return { status: 'OK' };
    })
}

export { healthRoutes };