import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import userRouter from './app/modules/users/users.route';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/users/', userRouter);

class ApiErrors extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string | undefined, stack = '') {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
  throw new ApiErrors(400, 'Error');
});

export default app;
