/**
 * Copyright (c) <%= options.author %>
 * egjs-<%= componentName.toLowerCase() %> projects are licensed under the <%= options.license %> license
 */
<% if(options.extendsComponent){ %>import Component from "@egjs/component";<% } %>

/**
 * <%= options.description %>
 * @alias eg.<%= upperFirst(componentName) %>
 <% if(options.extendsComponent){ %>* @extends eg.Component<% } %>
 */
class <%= upperFirst(componentName) %><% if(options.extendsComponent){ %> extends Component<% } %> {
	<% if(options.extendsComponent){ %>constructor() {
		super();
	}<% } %>
}

export default <%= upperFirst(componentName) %>;
