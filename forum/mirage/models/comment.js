import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  // many-to-one, many comments are owned by one blog-post
  blogPost: belongsTo('blog-post'),
});
