import { faker } from '@faker-js/faker/locale/en';
import Review from '../models/review.js';
import User from '../models/user.js';
import Product from '../models/product.js';

const generateData = async() => {
    const users = await User.find();
    const products = await Product.find();

    for(let i = 0; i < 50; i++) {
        const reviewer = users[Math.floor(Math.random() * users.length)];
        const reviewProduct = products[Math.floor(Math.random() * products.length)];

        reviewArray.push({
            user: reviewer,
            productID: reviewProduct,
            rating: faker.random.number({ min: 1, max: 5 }),
            comment: faker.lorem.sentences(),
            createdAt: faker.database.recent()
        });
    }
}

Review.create(reviewArray)
    .then(() => console.log("data added"))
    .catch(err => console.log(err));