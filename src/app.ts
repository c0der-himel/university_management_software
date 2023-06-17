import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
import ApiErrors from './errors/ApiErrors';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/users/', UserRoutes);

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
  throw new ApiErrors(400, 'Error');
});

app.use(globalErrorHandler);

export default app;
