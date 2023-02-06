import { faker } from '@faker-js/faker/locale/en';
import User from '../models/Review.js';
import Product from '../models/Product.js';

const reviewArray = [];

const generateData = async() => {
    const users = await User.find();
    const products = await Product.find();

    for(let i = 0; i < 50; i++) {
        const reviewer = users[Math.floor(Math.random() * users.length)];
        const reviewProduct = products[Math.floor(Math.random() * products.length)];
        reviewArray.push({
            userID: reviewer,
            productID: reviewProduct,
            rating: faker.datatype.number({ min: 1, max: 5 }),
            comment: faker.lorem.sentences(3),
            createdAt: faker.date.recent()
        })
    }
};

generateData();
export default reviewArray;