import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import sqlite3 from 'sqlite3';

import authRouter from './routes/auth.route.js';
 

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/apiV1/auth', authRouter);

app.listen(PORT, ()=>{
    console.log(`Listening to PORT: ${PORT}`);
})