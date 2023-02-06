import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

import Product from '../models/Product.js';
import products from '../seeds/products.js';

import User from '../models/User.js';
import users from '../seeds/users.js';

import Address from '../models/Address.js';
import addresses from '../seeds/addresses.js';

import Review from '../models/Review.js';
import reviews from '../seeds/reviews.js';

import Order from '../models/Order.js';
import orders from '../seeds/orders.js';


const app = express();
const uri= process.env.DB_URI;

const seedData = async() => {
    await Product.deleteMany({});
    await Product.create(products);

    await User.deleteMany({});
    await User.create(users);

    await Address.deleteMany({});
    await Address.create(addresses);

    await Review.deleteMany({});
    await Review.create(reviews);

    await Order.deleteMany({});
    await Order.create(orders);
}

const connect = async() => {
    try {
        await mongoose.connect(uri);
        console.log('connected');
        seedData();
    } catch(error) {
        console.log(error);
    }
}

connect();

app.listen(process.env.PORT, () => {
    console.log('Server started.')
});