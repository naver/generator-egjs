/**
 * Copyright (c) <%= options.author %>
 * egjs-<%= componentName %> projects are licensed under the <%= options.license %> license
 */
<% if(options.extendsComponent){ %>import Component from "@egjs/component";<% } %>

/**
 * <%= options.description %>
 * @class
 * @name <%= capitalize(componentName) %>
 <% if(options.extendsComponent){ %>* @extends Component<% } %>
 * @group egjs
 */
class <%= capitalize(componentName) %><% if(options.extendsComponent){ %> extends Component<% } %> {
	constructor () {
		<% if(options.extendsComponent){ %>super();<% } %>
	}
}

export default <%= capitalize(componentName) %>;
