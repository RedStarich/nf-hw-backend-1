import 'dotenv/config';
import express from 'express';
import connectDB from './db';
import globalRouter from './global-router';
import { logger } from './logger';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(logger);
app.use(express.json());
app.use('/api/v1/',globalRouter);

app.get("/test", async (req, res) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    res.status(200).send("This is a test response");
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});


app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
