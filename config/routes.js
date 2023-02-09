import express from 'express';
import { getProductById, getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/product.js';
import { getAddressById, getAddresses, createAddress, deleteAddress, updateAddress } from '../controllers/address.js';
import { getUsers, getUserById, deleteUser, updateUser, createUser } from '../controllers/user.js';
import { getOrders, getOrderById, createOrder, cancelOrder } from '../controllers/order.js';
import { getReviews, getReviewById, createReview, updateReview, deleteReview } from '../controllers/review.js';
const app = express();

app.get('/products', getProducts);
app.get('/product/:id', getProductById);
app.post('/products', createProduct);
app.put('product/:id', updateProduct);
app.delete('product/:id', deleteProduct);

app.get('/addresses', getAddresses);
app.get('address/:id', getAddressById);
app.post('/addresses', createAddress);
app.put('address/:id', updateAddress);
app.delete('address/:id', deleteAddress);

app.get('/users', getUsers);
app.get('user/:id', getUserById);
app.post('/user', createUser);
app.put('user/:id', updateUser);
app.delete('user/:id', deleteUser);

app.get('/orders', getOrders);
app.get('/order:/id', getOrderById);
app.post('order', createOrder);
app.delete('/order/:id', cancelOrder);

app.get('/users', getReviews);
app.get('user/:id', getReviewById);
app.post('/user', createReview);
app.put('user/:id', updateReview);
app.delete('user/:id', deleteReview);

export default app;