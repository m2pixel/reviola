import express from 'express'
import cors from 'cors'
import {connectToDatabase} from './config/db'
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;
connectToDatabase()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
