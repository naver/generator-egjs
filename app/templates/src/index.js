/**
 * Copyright (c) <%= options.author %>
 * eg.<%= componentName %> projects are licensed under the <%= options.license %> license
 */
<% if(options.extendsComponent){ %>import { Component } from "eg.component";<% } %>

/**
 * <%= options.description %>
 * @class
 * @name eg.<%= capitalize(componentName) %>
 <% if(options.extendsComponent){ %>* @extends eg.component<% } %>
 * @group egjs
 */
export class <%= capitalize(componentName) %><% if(options.extendsComponent){ %> extends Component<% } %> {
	constructor () {
		<% if(options.extendsComponent){ %>super();<% } %>
	}
}
