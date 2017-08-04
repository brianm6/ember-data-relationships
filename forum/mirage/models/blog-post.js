import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  // one-to-many, blog-post has many comments
  comments: hasMany('comment'),
  // many-to-many, multiple blog-posts can have multiple tags
  tags: hasMany('tag'),
});
