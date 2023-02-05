import mongoose from 'mongoose';
import User from './user.js';
import Product from './product.js';

const generateData = async() => {
    const users = await User.find();
    const products = await Product.find();

    for(let i = 0; i < 50; i++) {
        const reviewer = users[Math.floor(Math.random() * users.length)];
        const reviewProduct = products[Math.floor(Math.random() * products.length)];
    }

    const reviewSchema = new mongoose.Schema({
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User ID is required']
        },
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: [true, 'Product ID is required']
        },
        rating: {
            type: Number,
            min: [1, 'Rating must be at least 1'],
            max: [5, 'Rating cannot be more than 5'],
            required: [true, 'Rating is required']
        },
        comment: {
            type: String,
            maxlength: [200, 'Comment cannot be more than 200 characters'],
            required: [true, 'Comment is required']
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    });

    await reviewSchema.save();
}

generateData();

const Review = mongoose.model('Review', reviewSchema);

export default Review;