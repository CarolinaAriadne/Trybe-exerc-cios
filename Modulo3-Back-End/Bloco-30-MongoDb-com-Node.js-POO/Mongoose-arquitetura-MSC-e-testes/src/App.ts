import express from 'express';
import 'express-async-errors';
import erroHandler from './middlewares/error';
import frameRouter from './routes/frame';

const app = express();
app.use(express.json());
app.use(erroHandler);
app.use(frameRouter);

export default app;