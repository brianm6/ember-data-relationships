"use strict";



define('forum/app', ['exports', 'ember', 'forum/resolver', 'ember-load-initializers', 'forum/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('forum/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('forum/helpers/app-version', ['exports', 'ember', 'forum/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('forum/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('forum/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('forum/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'forum/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('forum/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('forum/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('forum/initializers/ember-cli-mirage', ['exports', 'ember', 'ember-cli-mirage/utils/read-modules', 'forum/config/environment', 'forum/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _ember, _readModules, _environment, _config, _server, _assign2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  var getWithDefault = _ember.default.getWithDefault;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    var environment = env.environment;
    var discoverEmberDataModels = getWithDefault(env['ember-cli-mirage'] || {}, 'discoverEmberDataModels', true);
    var modules = (0, _readModules.default)(env.modulePrefix);
    var options = (0, _assign2.default)(modules, { environment: environment, baseConfig: _config.default, testConfig: _config.testConfig, discoverEmberDataModels: discoverEmberDataModels });

    return new _server.default(options);
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('forum/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('forum/initializers/export-application-global', ['exports', 'ember', 'forum/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('forum/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('forum/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('forum/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("forum/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('forum/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

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
  };
});
define('forum/mirage/factories/blog-post', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Factory.extend({
    body: function body() {
      return _emberCliMirage.faker.lorem.sentence();
    }
  });
});
define('forum/mirage/factories/comment', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Factory.extend({
    body: function body() {
      return _emberCliMirage.faker.lorem.sentence();
    }
  });
});
define('forum/mirage/factories/profile', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Factory.extend({
    verified: function verified() {
      return _emberCliMirage.faker.random.boolean();
    }
  });
});
define('forum/mirage/factories/tag', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Factory.extend({
    name: function name() {
      return _emberCliMirage.faker.lorem.words();
    }
  });
});
define('forum/mirage/factories/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Factory.extend({
    firstName: function firstName() {
      return _emberCliMirage.faker.name.firstName();
    },
    lastName: function lastName() {
      return _emberCliMirage.faker.name.lastName();
    },
    joined: function joined() {
      return _emberCliMirage.faker.date.past(10);
    },
    admin: function admin() {
      return _emberCliMirage.faker.random.boolean();
    }
  });
});
define('forum/mirage/models/blog-post', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Model.extend({
    // one-to-many, blog-post has many comments
    comments: (0, _emberCliMirage.hasMany)('comment'),
    // many-to-many, multiple blog-posts can have multiple tags
    tags: (0, _emberCliMirage.hasMany)('tag')
  });
});
define('forum/mirage/models/comment', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Model.extend({
    // many-to-one, many comments are owned by one blog-post
    blogPost: (0, _emberCliMirage.belongsTo)('blog-post')
  });
});
define('forum/mirage/models/profile', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Model.extend({
    // one-to-one with user model
    user: (0, _emberCliMirage.belongsTo)('user')
  });
});
define('forum/mirage/models/tag', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Model.extend({
    // many-to-many, multiple tags can have multiple blog-posts
    blogPosts: (0, _emberCliMirage.hasMany)('blog-post')
  });
});
define('forum/mirage/models/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Model.extend({
    // one-to-one with user model
    profile: (0, _emberCliMirage.belongsTo)('profile'),

    blogPosts: (0, _emberCliMirage.hasMany)('blog-post')

  });
});
define('forum/mirage/scenarios/default', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (server) {

    // https://www.loadsys.com/many-many-relationships-ember-cli-mirage/
    // http://www.programwitherik.com/ember-mirage-tutorial-and-examples/
    // https://www.munderwood.ca/index.php/2017/03/27/many-to-many-relationships-in-ember-cli-mirage-factories/

    function randomSubset(arr, n) {
      if (n >= arr.length) {
        return arr;
      }
      if (arr.length === 0) {
        return arr;
      }
      if (n < 1) {
        n = 1;
      }

      var selected = [];
      while (selected.length < n) {
        var candidate = faker.random.arrayElement(arr);
        if (!selected.includes(candidate)) {
          selected.push(candidate);
        }
      }

      return selected;
    }

    var profile = server.create('profile');

    var user = server.create('user', { profile: profile });

    var blogPosts = server.createList('blog-post', 6);
    var comments = server.createList('comment', 5);

    comments.forEach(function (comment) {
      var numberOfPosts = faker.random.number({ min: 1, max: 3 });
      var postsForComment = randomSubset(blogPosts, numberOfPosts);
      comment.blogPosts = postsForComment;
      comment.save();
    });

    blogPosts.forEach(function (blogPost) {
      var numberOfComments = faker.random.number({ min: 1, max: 3 });
      var commentsForPost = randomSubset(comments, numberOfComments);
      blogPost.comments = commentsForPost;
      blogPost.save();
    });
  };
});
define('forum/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('forum/models/blog-post', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    body: _emberData.default.attr(),

    // one-to-many, blog-post has many comments
    comments: _emberData.default.hasMany('comment'),
    // many-to-many, multiple blog-posts can have multiple tags
    tags: _emberData.default.hasMany('tag')
  });
});
define('forum/models/comment', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    body: _emberData.default.attr(),
    // many-to-one, many comments are owned by one blog-post
    blogPost: _emberData.default.belongsTo('blog-post')
  });
});
define('forum/models/profile', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    verified: _emberData.default.attr('boolean', { defaultValue: false }),
    // one-to-one with user model
    user: _emberData.default.belongsTo('user')
  });
});
define('forum/models/tag', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr(),

    // many-to-many, multiple tags can have multiple blog-posts
    blogPosts: _emberData.default.hasMany('blog-post')
  });
});
define('forum/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    firstName: _emberData.default.attr(),
    lastName: _emberData.default.attr(),
    joined: _emberData.default.attr('date'),
    admin: _emberData.default.attr('boolean'),
    // one-to-one with user model
    profile: _emberData.default.belongsTo('profile'),

    blogPosts: _emberData.default.hasMany('blog-post'),

    fullName: Ember.computed('firstName', 'lastName', function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    })
  });
});
define('forum/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('forum/router', ['exports', 'ember', 'forum/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('users');
    this.route('profiles');
    this.route('blog-posts');
    this.route('comments');
    this.route('tags');
  });

  exports.default = Router;
});
define('forum/routes/blog-posts', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model() {
      return this.get('store').findAll('blog-post', { include: 'comments' });
    }
  });
});
define('forum/routes/comments', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('forum/routes/profiles', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('forum/routes/tags', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('forum/routes/users', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('forum/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("forum/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ewCoT4aO", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Forum\"],[14],[0,\"\\n\"],[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "forum/templates/application.hbs" } });
});
define("forum/templates/blog-posts", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gIzHbTK2", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[11,\"h1\",[]],[13],[0,\"Posts\"],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[1,[33,[\"log\"],[[28,[\"post\"]]],null],false],[0,\"\\n  \"],[11,\"p\",[]],[13],[1,[28,[\"post\",\"id\"]],false],[0,\" - \"],[1,[28,[\"post\",\"body\"]],false],[14],[0,\"\\n  \"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"post\",\"comments\"]]],null,{\"statements\":[[0,\"      \"],[11,\"li\",[]],[13],[1,[28,[\"comment\",\"body\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"comment\"]},null],[0,\"  \"],[14],[0,\"\\n\"]],\"locals\":[\"post\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "forum/templates/blog-posts.hbs" } });
});
define("forum/templates/comments", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FEJF4L3Q", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "forum/templates/comments.hbs" } });
});
define("forum/templates/profiles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6MSCm3f9", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "forum/templates/profiles.hbs" } });
});
define("forum/templates/tags", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5KdQUwrw", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "forum/templates/tags.hbs" } });
});
define("forum/templates/users", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ab1zSK9w", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "forum/templates/users.hbs" } });
});
define('forum/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/factories/blog-post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/blog-post.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/factories/comment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/comment.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/factories/profile.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/profile.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/factories/tag.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/tag.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/factories/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/user.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/blog-post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/blog-post.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/comment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/comment.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/profile.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/profile.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/tag.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/tag.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/user.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/scenarios/default.js should pass ESLint\n\n14:23 - \'faker\' is not defined. (no-undef)\n25:7 - \'user\' is assigned a value but never used. (no-unused-vars)\n31:25 - \'faker\' is not defined. (no-undef)\n38:28 - \'faker\' is not defined. (no-undef)');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});


define('forum/config/environment', ['ember'], function(Ember) {
  var prefix = 'forum';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("forum/app")["default"].create({"name":"forum","version":"0.0.0+"});
}
//# sourceMappingURL=forum.map
