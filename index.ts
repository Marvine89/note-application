import express from 'express';
import { Router } from './src/routes';

const app = express();
const PORT = 8000;

app.use('/', Router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});