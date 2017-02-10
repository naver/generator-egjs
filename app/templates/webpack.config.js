var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: {
		"<%= componentName.toLowerCase() %>": "./src/index.js",
		"<%= componentName.toLowerCase() %>.min": "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		library: ["eg", "<%= upperFirst(componentName) %>"],
		libraryTarget: "umd"
	},<% if(options.extendsComponent){ %>
	externals: {
		"@egjs/component" : {
			commonjs: "@egjs/component",
			commonjs2: "@egjs/component",
			amd: "@egjs/component",
			root: ["eg", "Component"]
		}
	},<% } %>
	devServer: {
		publicPath: "/dist/"
	},
	devtool: "source-map",
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			options: {
		  		presets: ["es2015"]
			}
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			minimize: true
		})
	]
};
