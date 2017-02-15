var merge = require("webpack-merge");

var config = {
	entry: {
		"<%= componentName.toLowerCase() %>.pkgd": "./src/index.js",
		"<%= componentName %>.pkgd.min": "./src/index.js"
	},
	externals: {}
};

module.exports = function(common) {
	return merge.strategy({
		entry: "replace",
		externals: "replace"
	})(common, config);
};
