import mongoose from 'mongoose';

const ordersSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    },
    items: [{
        productID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: [true, 'Product ID is required']
        },
        quantity: {
          type: Number,
          required: [true, 'Quantity is required'],
          min: [1, 'Quantity must be at least 1']
        }
    }],
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: [true, 'Address is required']
    },
    orderDate: {
        type: Date,
        default: Date.now(),
        required: [true, 'Order date is required']
    },
    total: {
        type: Number,
        required: [true, 'Total is required']
    }
});

const Order = mongoose.model('Order', ordersSchema);

export default Order;