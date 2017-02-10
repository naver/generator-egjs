/**
 * Copyright (c) <%= options.author %>
 */

QUnit.test("init eg.<%= upperFirst(componentName) %>", function(assert) {
  var instance = new eg.<%= upperFirst(componentName) %>();
  assert.notEqual(instance, undefined, "Should eg.<%= upperFirst(componentName) %> initialized");
});
