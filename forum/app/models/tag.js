import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  
  // many-to-many, multiple tags can have multiple blog-posts
  blogPosts: DS.hasMany('blog-post'),
});
