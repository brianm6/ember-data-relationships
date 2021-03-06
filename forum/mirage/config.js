export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.get('/users');
  this.post('/users');
  this.get('/users/:id');
  this.put('/users/:id'); // or this.patch
  this.del('/users/:id');

  this.get('/profiles');
  this.post('/profiles');
  this.get('/profiles/:id');
  this.put('/profiles/:id'); // or this.patch
  this.del('/profiles/:id');

  this.get('/blog-posts');
  this.post('/blog-posts');
  this.get('/blog-posts/:id');
  this.put('/blog-posts/:id'); // or this.patch
  this.del('/blog-posts/:id');

  this.get('/comments');
  this.post('/comments');
  this.get('/comments/:id');
  this.put('/comments/:id'); // or this.patch
  this.del('/comments/:id');

  this.get('/tags');
  this.post('/tags');
  this.get('/tags/:id');
  this.put('/tags/:id'); // or this.patch
  this.del('/tags/:id');

}
