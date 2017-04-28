import <%= upperFirst(componentName) %> from "../../src/<%= componentName.toLowerCase() %>";

describe("<%= componentName %>", () => {
	let <%= componentName %>;

	beforeEach(() => {
		<%= componentName %> = new <%= upperFirst(componentName) %>();
	});

	afterEach(() => {
		<% if(options.extendsComponent){ %>// <%= componentName %>.destroy();<% } %>
		<%= componentName %> = null;
	});

	it("should created instance", () => {
		expect(<%= componentName %>).to.be.an.instanceof(<%= upperFirst(componentName) %>);
	});
});
