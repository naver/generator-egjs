/**
* Copyright (c) NAVER Corp.
* egjs projects are licensed under the MIT license
*/
<% if(options.extendsComponent){ %>import { Component } from "eg.Component";<% } %>

/**
 * <%= options.description %>
 * @class
 * @name eg.<%= capitalize(componentName) %>
 <% if(options.extendsComponent){ %>* @extends eg.Component<% } %>
 * @group egjs
 */
export class <%= capitalize(componentName) %><% if(options.extendsComponent){ %> extends Component<% } %> {
	constructor () {
		<% if(options.extendsComponent){ %>super();<% } %>
	}
}
