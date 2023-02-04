import { faker } from '@faker-js/faker/locale/en'
import Order from '../models/order';

const orderArray = [];
for(let i = 0; i < 25; i++) {
    orderArray.push({
        user: faker.name.fullName(),
        items: [{productID: faker.random.uuid()}, {quantity: faker.random.number({ min: 1, max: 5})}],
        // address
        orderDate: faker.date.recent(),
        total: faker.commerce.price(1, 25)
    })
};

