import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  // many-to-many, multiple tags can have multiple blog-posts
  blogPosts: hasMany('blog-post'),
});
