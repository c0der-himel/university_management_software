import mongoose from 'mongoose';
import app from './app';
import config from './config/index';

const port: number = 3000;

async function dbConnector(): Promise<void> {
  try {
    await mongoose.connect(config.db_url as string);
    console.log('🍀 DB is connected successfully');
    app.listen(port, () => {
      console.log(`🚀 Server is listening on port ${config.port}`);
    });
  } catch (e) {
    console.log('🛑 Failed to connect with DB');
  }
}

dbConnector().then((r) => console.log(r));
