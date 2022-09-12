import 'dotenv/config';
import './repositories/mongodb/connection';
import express, { Response } from 'express';

const { PORT } = process.env;

const startServer = () => {
  const app = express();
  app.use(express.json());

  app.get('/', (_, response: Response) => {
    response.send('Está é uma rota de exemplo');
  });

  app.listen(PORT, () => {
    console.log(`🔥 Server Running on http://localhost:${PORT}`);
  });
};

export { startServer };
