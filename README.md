# ember-data-relationships

https://guides.emberjs.com/v2.14.0/models/defining-models/

install nodejs
nmp install -g ember-cli
ember new forum
cd forum
ember install ember-cli-mirage

ember g model user
ember g model profile
ember g model blog-post
ember g model comment
ember g model tag

ember g mirage-model user
ember g mirage-model profile
ember g mirage-model blog-post
ember g mirage-model comment
ember g mirage-model tag

ember g mirage-factory user
ember g mirage-factory profile
ember g mirage-factory blog-post
ember g mirage-factory comment
ember g mirage-factory tag

ember d route user
ember d route profile
ember d route blog-post
ember d route comment
ember d route tag

ember g route users
ember g route profiles
ember g route blog-posts
ember g route comments
ember g route tags

ember s
