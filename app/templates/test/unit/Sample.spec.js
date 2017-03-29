/**
 * Copyright (c) <%= options.author %>
 */

describe("Sample", function() {

    it("init eg.<%= upperFirst(componentName) %>", () => {
    	var instance = new eg.<%= upperFirst(componentName) %>();
    	expect(instance, "Should be initialize eg.<%= upperFirst(componentName) %>").to.not.equal(undefined)
    });

});
