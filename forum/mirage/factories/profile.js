import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  verified() {
    return faker.random.boolean();
  },
});
