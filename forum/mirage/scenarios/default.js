export default function(server) {

  // https://www.loadsys.com/many-many-relationships-ember-cli-mirage/
  // http://www.programwitherik.com/ember-mirage-tutorial-and-examples/
  // https://www.munderwood.ca/index.php/2017/03/27/many-to-many-relationships-in-ember-cli-mirage-factories/
  
  function randomSubset (arr, n) {
    if (n >= arr.length) { return arr; }
    if (arr.length === 0) { return arr; }
    if (n < 1) { n = 1; }
    
    let selected = [];
    while (selected.length < n) {
      let candidate = faker.random.arrayElement(arr);
      if (!selected.includes(candidate)) {
        selected.push(candidate);
      }
    }
    
    return selected;
  }
  
  let profile = server.create('profile');
  
  let user = server.create('user', { profile: profile } );

  let blogPosts = server.createList('blog-post', 6)
  let comments = server.createList('comment', 5)
  
  comments.forEach((comment) => {
    let numberOfPosts = faker.random.number({min: 1, max: 3})
    let postsForComment = randomSubset(blogPosts, numberOfPosts)
    comment.blogPosts = postsForComment
    comment.save()
  });
  
  blogPosts.forEach((blogPost) => {
    let numberOfComments = faker.random.number({min: 1, max: 3})
    let commentsForPost = randomSubset(comments, numberOfComments)
    blogPost.comments = commentsForPost
    blogPost.save()
  });
  
}
