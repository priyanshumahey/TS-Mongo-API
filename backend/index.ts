import express from 'express';
import mongoose from 'mongoose';

require('dotenv').config()
const dbStr: string = process.env.MONGO_CONNECT as string;
console.log(dbStr)


// More complex way, useful for multiple .env files:

/*
import path from 'path';
const envFile = process.env.NODE_ENV = '.env';
require('dotenv').config({ path: path.resolve(__dirname, envFile) });
const dbStr: string = process.env.MONGO_CONNECT as string;
console.log(dbStr)
*/

