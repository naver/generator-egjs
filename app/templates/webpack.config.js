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
		"eg.Component" : {
			commonjs: "eg.Component",
			commonjs2: "eg.Component",
			amd: "eg.Component",
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
