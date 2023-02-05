import { faker } from '@faker-js/faker/locale/en';
import Address from '../models/address.js';

const addressArray = [];
for(let i = 0; i < 25; i++) {
    addressArray.push({
        houseNum: faker.buildingNumber(),
        street: faker.address.streetName(),
        postcode: faker.address.zipCode(),
        city: faker.address.city(),
        country: faker.address.country()
    });
};

Address.create(addressArray)
    .then(() => console.log("data added"))
    .catch(err => console.log(err));