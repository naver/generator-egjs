/**
 * Copyright (c) <%= options.author %>
 * egjs-<%= componentName.toLowerCase() %> projects are licensed under the <%= options.license %> license
 */
<% if(options.extendsComponent){ %>import Component from "@egjs/component";<% } %>

/**
 * <%= options.description %>
 * @class
 * @name <%= upperFirst(componentName) %>
 <% if(options.extendsComponent){ %>* @extends Component<% } %>
 * @group egjs
 */
class <%= upperFirst(componentName) %><% if(options.extendsComponent){ %> extends Component<% } %> {
	constructor () {
		<% if(options.extendsComponent){ %>super();<% } %>
	}
}

export default <%= upperFirst(componentName) %>;
