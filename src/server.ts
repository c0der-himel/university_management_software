import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorLogger, logger } from './share/logger';

async function dbConnector(): Promise<void> {
  try {
    await mongoose.connect(config.db_url as string);
    logger.info('🍀 DB is connected successfully');
    app.listen(config.port, (): void => {
      logger.info(`🚀 Server is listening on port ${config.port}`);
    });
  } catch (e) {
    errorLogger.error('🛑 Failed to connect with DB', e);
  }
}

dbConnector();
