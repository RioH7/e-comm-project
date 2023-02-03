import express from 'express';
import mongoose from 'mongoose';
import '../.env';

const app = express();

const uri= DB_URI;

const connect = async() => {
    try {
        await mongoose.connect(uri);
        console.log('connected');
    } catch(error) {
        console.log(error);
    }
}

connect();

app.listen(PORT, () => {
    console.log('Server started.')
});