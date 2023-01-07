# Guide

This guide details the basics of how to connect MongoDB to a Node.js backend using TypeScript as well as then using the backend to obtain data for use with a React frontend.

## Starting off

We start off using vite to build us a functional easily accessible React frontend using TypeScript

``` shell
npm create vite@latest frontend -template react-ts
```

This will create a React frontend with minimal requirements in TypeScript.

From there, we'll also need to create a backend using Node and TypeScript:

``` shell
npm init -y
npm install  typescript --save
```

For the backend, we'll also need to download Nodemon which notices changes and saves you make and assists in faster updating of the code.

``` shell
npm install nodemon --save
```

## Working and Setting Up MongoDB

To start off working with MongoDB, let's create a test database and a test collection. We'll call the database `Names` and call the collection `Primary`. The data we'll want to put into the database will be:

``` JSON
[
    {
       "first": "John",
       "last": "Doe",
       "age": 10
    },
    {
       "first": "Jane",
       "last": "Fleming",
       "age": 35
    },
    {
       "first": "Clint",
       "last": "Cassidy",
       "age": 35
    }
]
```

For the MongoDB database, we need to get the MongoDB connection string. For the local one I'm using, my connection string looks like: `MONGODB_CONNECT=mongodb://localhost:27017/`. We're going to create a file called `.ENV` and add the connection string to that. The `.ENV` file looks like such:

``` env
MONGODB_CONNECT=mongodb://localhost:27017/
```

### Connect to MongoDB

To connect with the MongoDB collection we just made, we'll need to first start off by parsing the .ENV file.
To do this, we use `"dotenv"` which is a module that loads environments variables from a `.env` file.

The code to read the `.env` file will look as such:

``` JS
require('dotenv').config()

const mdb = process.env.MONGODB_CONNECT as string;=

```

Here we can see that the string `mdb` holds the value that allows us to connect to our MongoDB database. We can view the value here using:

``` JS
console.log(mdb)
```

``` shell
npm install @types/mongoose --save
```

Download express:

``` shell
npm install @types/express --save
```
