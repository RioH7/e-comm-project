import mongoose from 'mongoose';

const ordersSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    items: [{
        productID: {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'Product'
        },
        name: String,
        price: Number,
        quantity: Number
    }],
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
    orderDate: {
        type: Date,
        default: Date.now(),
        required: [true, 'Order date is required']
    },
    total: {
        type: Number,
    }
});

const Order = mongoose.model('Order', ordersSchema);

export default Order;