import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  // many-to-one, many comments are owned by one blog-post
  blogPost: DS.belongsTo('blog-post'),
});
