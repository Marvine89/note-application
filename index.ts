require('dotenv').config();

import express from 'express';
import { Router } from './src/routes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use('/', Router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
