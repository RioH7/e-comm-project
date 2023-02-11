import { faker } from '@faker-js/faker/locale/en'
import User from '../models/User.js';
import Product from '../models/Product.js';
import Address from '../models/Address.js';

const orderArray = [];

const generateData = async() => {
    const users = await User.find();
    const products = await Product.find();
    const addresses = await Address.find();

    for(let i = 0; i < 50; i++){
        const orderer = users[Math.floor(Math.random() * users.length)];
        const orderAddress = addresses[Math.floor(Math.random() % addresses.length)];
        let total = 0;
        const orderItems = [];
        for(let j = 0; j < Math.floor(Math.random() * 3 + 1); j++){
            let product = products[Math.floor(Math.random() % products.length)];
            orderItems.push({
                productID: product._id,
                name: product.name,
                price: product.price,
                quantity: Math.floor(Math.random() * 5 + 1)
            });
            total += product.price * orderItems[j].quantity;
        }

        orderArray.push({
            userID: orderer,
            items: orderItems,
            address: orderAddress,
            orderDate: faker.date.recent(),
            total: total
        });
    }
}

generateData();
export default orderArray;