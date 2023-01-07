require('dotenv').config()

const mdb = process.env.MONGODB_CONNECT as string;

// console.log(mdb)

import mongoose from 'mongoose';


// const db = mongoose.connect(mdb);

interface IUser {
    first: String,
    last: String,
    age: Number
}

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

run().catch(err => console.log(err));

async function run() {
    // 4. Connect to MongoDB
    await mongoose.connect(mdb);
  
    const user = new User({
      first: 'Bill',
      last: 'Johnson',
      age: 1
    });

    await user.save();
  
    console.log(user.first);
}