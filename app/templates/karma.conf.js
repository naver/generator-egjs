module.exports = function(config) {
	config.set({
		frameworks: ["mocha", "chai"],

		files: [
			"./node_modules/phantomjs-polyfill/bind-polyfill.js",
			"./node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js",
			"./test/unit/*.spec.js"
		],

		preprocessors: {
			"./test/unit/*.spec.js": ["webpack"]
		},

		webpack: {
			devtool: "inline-source-map",
			module: {
				rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: "babel-loader",
						options: {
							presets: ["es2015"],
							plugins: ["add-module-exports"]
						}
					}
				]
			}
		},

		webpackMiddleware: {
			noInfo: true
		},

		reporters: ["mocha"],

		browsers: ["PhantomJS_custom"],

		customLaunchers: {
			"PhantomJS_custom": {
				base: "PhantomJS",
				options: {
					viewportSize: {
						width: 1024,
						height: 960
					}
				}
			}
		},

		client: {
			useIframe: false,
			runInParent: true
		}
	});
};
