import { faker } from '@faker-js/faker/locale/en';

const addressArray = [];
for(let i = 0; i < 25; i++) {
    addressArray.push({
        houseNum: faker.address.buildingNumber(),
        street: faker.address.street(),
        postcode: faker.address.zipCode(),
        city: faker.address.city(),
        country: faker.address.country()
    });
};

export default addressArray;