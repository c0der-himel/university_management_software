import mongoose from 'mongoose';
import app from './app';
import config from './config/index';

async function dbConnector(): Promise<void> {
  try {
    await mongoose.connect(config.db_url as string);
    console.log('🍀 DB is connected successfully');
    app.listen(config.port, (): void => {
      console.log(`🚀 Server is listening on port ${config.port}`);
    });
  } catch (e) {
    console.log('🛑 Failed to connect with DB');
  }
}

dbConnector().then((r: void) => console.log(r));
