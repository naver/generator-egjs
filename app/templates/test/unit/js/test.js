/**
* Copyright (c) <%= options.author %>
*/

QUnit.test("init eg.<%= capitalize(componentName) %>", function(assert) {
  var instance = new eg.<%= capitalize(componentName) %>();
  assert.notEqual(instance, undefined, "Should eg.<%= capitalize(componentName) %> initialized");
});
