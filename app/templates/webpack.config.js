var webpack = require("webpack");

module.exports = {
	entry: {
		"eg.<%= componentName %>": "./src/index.js",
		"eg.<%= componentName %>.min": "./src/index.js"
	},
	output: {
		path: __dirname + "/dist",
		filename: "[name].js",
		library: ["eg", "[name]"],
		libraryTarget: "umd"
	},<% if(options.extendsComponent){ %>
	externals: {
		"eg.component" : {
			commonjs: "eg.component",
			amd: "eg.component",
			root: ["eg", "component"]
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
