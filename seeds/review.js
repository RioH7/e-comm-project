import { faker } from '@faker-js/faker/locale/en';
import Review from '../models/review';

const reviewArray = [];
for(let i = 0; i < 25; i++) {
    reviewArray.push({
        user: faker.name.fullName(),
        productID: faker.random.uuid(),
        rating: faker.random.number({ min: 1, max: 5}),
        comment: faker.lorem.sentences(),
        createdAt: faker.database.recent()
    });
};