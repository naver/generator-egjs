var merge = require("webpack-merge");

var config = {
	entry: {
		"<%= componentName.toLowerCase() %>.min": "./src/index.js"
	}
};

module.exports = function(common) {
	return merge(common, config);
};
