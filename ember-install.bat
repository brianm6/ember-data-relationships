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

ember g route user
ember g route profile
ember g route blog-post
ember g route comment
ember g route tag

ember s