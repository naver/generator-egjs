/**
* Copyright (c) NAVER Corp.
* egjs projects are licensed under the MIT license
*/

QUnit.test( "init eg.<%= capitalize(componentName) %>", function( assert ) {
  var visible = new eg.Visible();
  assert.notEqual(visible, undefined, "Should visible initialized");
});
