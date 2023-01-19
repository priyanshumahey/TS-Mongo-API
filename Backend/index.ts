import mongoose from 'mongoose';
import express from "express";

require('dotenv').config()

interface IUser {
    first: String,
    last: String,
    age: Number
}



const mdb = process.env.MONGODB_CONNECT as string;





const newSchema = new mongoose.Schema<IUser> ({
    first: String,
    last: String,
    age: Number
},
{
    versionKey: false 
}
)

const User = mongoose.model<IUser>('Primary', newSchema, 'Primary')



mongoose.set("strictQuery", false);
mongoose.connect(mdb)


const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

async function run() {
    await mongoose.connect(mdb);
  
    const user = new User({
      first: 'Bill',
      last: 'Johnson',
      age: 1
    });

    await user.save();
  
    console.log(user.first);
}

run().catch(err => console.log(err));

const app = express();
const port = 3000;

app.get( "/", ( req, res ) => {
    res.send('Hello World!')
} );

app.use(express.json());

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} ); 

const mainRouter = require('./mainRoute.api.ts')
app.use('/api', mainRouter)

export default app;