import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
import Category from '../models/category.js';
import Order from '../models/order.js';
import Review from '../models/review.js';
import Address from '../models/address.js';
import User from '../models/user.js';
import Product from '../models/product.js';
import categories from '../seeds/category.js';
import orders from '../seeds/order.js';
import reviews from '../seeds/review.js';
import addresses from '../seeds/address.js';
import users from '../seeds/user.js';
import products from '../seeds/product.js';

async function seedData() {
    await Category.deleteMany({});
    await Category.create(categories);

    await Order.deleteMany({});
    await Order.create(orders);

    await Review.deleteMany({});
    await Review.create(reviews);

    await Address.deleteMany({});
    await Address.create(addresses);

    await User.deleteMany({});
    await User.create(users);

    await Product.deleteMany({});
    await Product.create(products);
}

const app = express();

const uri= process.env.DB_URI;

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