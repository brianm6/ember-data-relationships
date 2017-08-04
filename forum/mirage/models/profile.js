import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  // one-to-one with user model
  user: belongsTo('user'),
});
