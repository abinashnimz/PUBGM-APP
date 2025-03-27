import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import sqlite3 from 'sqlite3';

import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
 

const PORT = process.env.PORT | 3000;
console.log(process.env.PORT);

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/apiV1/auth', authRouter);
app.subscribe('/apiV1/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`Listening to PORT: ${PORT}`);
})