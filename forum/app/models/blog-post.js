import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  
  // one-to-many, blog-post has many comments
  comments: DS.hasMany('comment'),
  // many-to-many, multiple blog-posts can have multiple tags
  tags: DS.hasMany('tag'),
});
