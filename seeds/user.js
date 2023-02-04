import { faker } from '@faker-js/faker/locale/en';
import User from '../models/user';

const userArray = [];
for (let i = 0; i < 25; i++) {
    userArray.push({
        user: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    });
};

User.create(userArray)
    .then(() => console.log("data added"))
    .catch(err => console.log(err));