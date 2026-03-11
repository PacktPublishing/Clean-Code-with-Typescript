import express from 'express';
import postRoutes from './routes/postRoutes.js';

const app = express();

app.use(express.json());
app.use(postRoutes);

export default app;
