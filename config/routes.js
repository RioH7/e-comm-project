import express from 'express';
import { getProductById, getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/product.js'
const app = express();

app.get('/products', getProducts);
app.get('/product/:id', getProductById);
app.post('/products', createProduct);
app.put('products/:id', updateProduct);
app.delete('products/:id', deleteProduct);

export default app;