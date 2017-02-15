var merge = require("webpack-merge");

var config = {
	devtool: "inline-source-map",
	devServer: {
		publicPath: "/dist/"
	}
};

module.exports = function(common) {
	return merge(common, config);
};
