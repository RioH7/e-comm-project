import { faker } from '@faker-js/faker/locale/en';


const userArray = [];
for (let i = 0; i < 25; i++) {
    userArray.push({
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    });
};

export default userArray;