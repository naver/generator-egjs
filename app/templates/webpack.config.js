var webpack = require("webpack");
var path = require("path");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
				"presets": [
					[
						"es2015",
						{
							"loose": true,
							"mouldes": false
						}
					]
				]
			}
		}]
	},
	plugins: [
		new UglifyJSPlugin({
			include: /\.min\.js$/,
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true,
				warnings: false
			},
			output: {
				screw_ie8: false
			},
			comments: false,
			sourceMap: true
		})
	]
};

module.exports = function(env) {
	env = env || "development";
	return require("./config/webpack.config." + env + ".js")(config);
};
