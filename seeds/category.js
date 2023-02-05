import { faker } from '@faker-js/faker/locale/en';
import Category from '../models/category.js';

const categorySeedData = [];
for (let i = 0; i < 10; i++) {
  categorySeedData.push({
    name: faker.commerce.department(),
  });
}

Category.create(categorySeedData)
  .then(() => console.log("Category seed data added successfully."))
  .catch(err => console.log(err));
