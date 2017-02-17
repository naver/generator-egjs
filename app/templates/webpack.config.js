var webpack = require("webpack");
var path = require("path");

var config = {
	entry: {
		"<%= componentName.toLowerCase() %>": "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		library: ["eg", "<%= upperFirst(componentName) %>"],
		libraryTarget: "umd",
		umdNamedDefine: true
	},<% if(options.extendsComponent){ %>
	externals: {
		"@egjs/component" : {
			commonjs: "@egjs/component",
			commonjs2: "@egjs/component",
			amd: "@egjs/component",
			root: ["eg", "Component"]
		}
	},<% } %>
	devtool: "cheap-module-source-map",
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			options: {
				presets: [
					["es2015"]
				]
			}
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			minimize: true,
			sourceMap: true
		})
	]
};

module.exports = function(env) {
	env = env || "development";
	return require("./config/webpack.config." + env + ".js")(config);
};
