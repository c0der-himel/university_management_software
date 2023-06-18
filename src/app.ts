import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/users/', UserRoutes);

app.get('/', async (req: Request, res: Response) => {
  throw new Error('new error');
});

app.use(globalErrorHandler);

export default app;
