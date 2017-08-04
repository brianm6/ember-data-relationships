import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  joined: DS.attr('date'),
  admin: DS.attr('boolean'),
  // one-to-one with user model
  profile: DS.belongsTo('profile'),
  
  blogPosts: DS.hasMany('blog-post'),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
});
