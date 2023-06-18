import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorLogger, logger } from './share/logger';

process.on('uncaughtException', (error) => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function dbConnector(): Promise<void> {
  try {
    await mongoose.connect(config.db_url as string);
    logger.info('🍀 DB is connected successfully');
    server = app.listen(config.port, (): void => {
      logger.info(`🚀 Server is listening on port ${config.port}`);
    });
  } catch (e) {
    errorLogger.error('🛑 Failed to connect with DB', e);
  }

  process.on('unhandledRejection', (error) => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

dbConnector();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
