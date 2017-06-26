import <%= ComponentName %> from "../../src/<%= ComponentName %>";

describe("<%= componentName %>", () => {
	let <%= componentName %>;

	beforeEach(() => {
		<%= componentName %> = new <%= ComponentName %>();
	});

	afterEach(() => {
		<% if(extendsComponent){ %>// <%= componentName %>.destroy();<% } %>
		<%= componentName %> = null;
	});

	it("should created instance", () => {
		expect(<%= componentName %>).to.be.an.instanceof(<%= ComponentName %>);
	});
});
