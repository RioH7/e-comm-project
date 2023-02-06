import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    rating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot be more than 5'],
        required: [true, 'Rating is required']
    },
    comment: {
        type: String,
        maxlength: [300, 'Comment cannot be more than 300 characters'],
        required: [true, 'Comment is required']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;