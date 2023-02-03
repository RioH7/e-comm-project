import mongoose from 'mongoose';

const reviewsSchema = new mongoose.Schema({
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

const Review = mongoose.model('Review', reviewsSchema);

export default Review;