import { faker } from '@faker-js/faker/locale/en'
import Order from '../models/order.js';
import User from '../models/user.js';
import Product from '../models/product.js';
import Address from '../models/address.js';

const orderArray = [];
for(let i = 0; i < 50; i++) {
    const orderer = faker.random.arrayElement(User.collection.insertedIds);
    const orderProduct = faker.random.arrayElement(Product.collection.insertedIds);
    const orderAddress = faker.random.arrayElement(Address.collection.insertedIds);

    orderArray.push({
        user: orderer,
        items: orderProduct,
        address: orderAddress,
        orderDate: faker.date.recent(),
        total: orderProduct.price
    });
}

Order.create(orderArray)
    .then(() => "data added")
    .catch(err  => console.log(err));

