import "dotenv/config";
import { createServer } from './app';

const app = createServer();

// signal interrupted by ctrl+c
process.on('SIGINT', async () => {
  app.log.info('Shutting down API')
  try {
    await app.close();
  } finally {
    process.exit(0);
  }
})

// ended by kill <pid>
process.on('SIGTERM', async () => {
  app.log.info('Received SIGTERM');
   try {
    await app.close();
  } finally {
    process.exit(0);
  }
})

const start = async () => {
    try {
        app.listen({
            port: 3001, host: '127.0.0.1'
        })
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}

start ();


