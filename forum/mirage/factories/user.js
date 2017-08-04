import { Factory, faker } from 'ember-cli-mirage';

// https://github.com/Marak/faker.js/wiki

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  joined() {
    return faker.date.past(10);
  },
  admin() {
    return faker.random.boolean();
  },
});
