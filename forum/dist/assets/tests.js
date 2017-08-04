'use strict';

define('forum/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('models/blog-post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/blog-post.js should pass ESLint\n\n');
  });

  QUnit.test('models/comment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/comment.js should pass ESLint\n\n');
  });

  QUnit.test('models/profile.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/profile.js should pass ESLint\n\n');
  });

  QUnit.test('models/tag.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/tag.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/user.js should pass ESLint\n\n13:13 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/blog-posts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/blog-posts.js should pass ESLint\n\n');
  });

  QUnit.test('routes/comments.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/comments.js should pass ESLint\n\n');
  });

  QUnit.test('routes/profiles.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/profiles.js should pass ESLint\n\n');
  });

  QUnit.test('routes/tags.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tags.js should pass ESLint\n\n');
  });

  QUnit.test('routes/users.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users.js should pass ESLint\n\n');
  });
});
define('forum/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('forum/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'forum/tests/helpers/start-app', 'forum/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = _ember.default.RSVP.resolve;
});
define('forum/tests/helpers/resolver', ['exports', 'forum/resolver', 'forum/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('forum/tests/helpers/start-app', ['exports', 'ember', 'forum/app', 'forum/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('forum/tests/test-helper', ['forum/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('forum/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/blog-post-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/blog-post-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/comment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/comment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/profile-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/profile-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/tag-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/tag-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/blog-posts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/blog-posts-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/comments-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/comments-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/profiles-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/profiles-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/tags-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tags-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/users-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users-test.js should pass ESLint\n\n');
  });
});
define('forum/tests/unit/models/blog-post-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('blog-post', 'Unit | Model | blog post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('forum/tests/unit/models/comment-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('comment', 'Unit | Model | comment', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('forum/tests/unit/models/profile-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('profile', 'Unit | Model | profile', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('forum/tests/unit/models/tag-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('tag', 'Unit | Model | tag', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('forum/tests/unit/models/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('forum/tests/unit/routes/blog-posts-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:blog-posts', 'Unit | Route | blog posts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('forum/tests/unit/routes/comments-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:comments', 'Unit | Route | comments', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('forum/tests/unit/routes/profiles-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:profiles', 'Unit | Route | profiles', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('forum/tests/unit/routes/tags-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:tags', 'Unit | Route | tags', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('forum/tests/unit/routes/users-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:users', 'Unit | Route | users', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('forum/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
