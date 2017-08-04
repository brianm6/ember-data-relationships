import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

// https://guides.emberjs.com/v2.14.0/models/relationships/

export default Model.extend({
  // one-to-one with user model
  profile: belongsTo('profile'),
  
  blogPosts: hasMany('blog-post'),

});
