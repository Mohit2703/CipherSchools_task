
import express from 'express';
import cors from 'cors';

import { PORT } from './config.js';
import { connectToMongo } from './db.js';

import auth from './routers/auth.js';


const app = express()

app.use(express.json())
app.use(cors({
  origin: '*'
}))

connectToMongo();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/auth', auth);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
