import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors'

const app = express();

dotenv.config();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));


app.use(cors());

app.use('/', Routes);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))