import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('profiles');
  this.route('blog-posts');
  this.route('comments');
  this.route('tags');
});

export default Router;
