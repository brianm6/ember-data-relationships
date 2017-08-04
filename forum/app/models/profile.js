import DS from 'ember-data';

export default DS.Model.extend({
  verified: DS.attr('boolean', { defaultValue: false }),
  // one-to-one with user model
  user: DS.belongsTo('user'),
});
