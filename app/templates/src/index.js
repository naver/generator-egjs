/**
 * Copyright (c) <%= options.author %>
 * egjs-<%= componentName.toLowerCase() %> projects are licensed under the <%= options.license %> license
 */

const <%= upperFirst(componentName) %> = require("./<%= componentName.toLowerCase() %>").default;

module.exports = <%= upperFirst(componentName) %>;
