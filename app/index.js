"use strict";
var generators = require("yeoman-generator");
var capitalize = require("lodash.capitalize");
var isSpdxLicenseId = require("is-spdx-license-id");
var semverRegex = require("semver-regex");

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);
		this.capitalize = capitalize;
		this.argument("componentName", {
			type: String,
			required: false
		});
	},
	prompting: {
		componentName: function() {
			if (this.componentName !== undefined) {
				return true;
			}

			var prompt = [{
				type: "input",
				name: "componentName",
				message: "Enter component name",
				validate: function(input) {
					if (!input) {
						this.log("\nPlease enter a valid component name");
						return false;
					}
					return true;
				}.bind(this)
			}];

			return this.prompt(prompt).then(function(answers) {
				this.componentName = answers.componentName.trim();
			}.bind(this));
		},
		description: function() {
			if (this.options.description !== undefined) {
				return true;
			}

			var prompt = [{
				type: "input",
				name: "description",
				message: "Enter component description",
				validate: function(input) {
					if (!input) {
						this.log("\nPlease enter a valid component description");
						return false;
					}
					return true;
				}.bind(this)
			}];

			return this.prompt(prompt).then(function(answers) {
				this.options.description = answers.description.trim();
			}.bind(this));
		},
		author: function() {
			if (this.options.author !== undefined) {
				return true;
			}

			var prompt = [{
				type: "input",
				name: "author",
				message: "Enter component author",
				default: "NAVER Corp."
			}];

			return this.prompt(prompt).then(function(answers) {
				this.options.author = answers.author.trim();
			}.bind(this));
		},
		license: function() {
			if (this.options.license !== undefined) {
				return true;
			}

			var prompt = [{
				type: "input",
				name: "license",
				message: "Enter component license",
				default: "MIT",
				validate: function(input) {
					if (!isSpdxLicenseId(input)) {
						this.log("\nSorry, license should be a valid SPDX license expression");
						return false;
					}
					return true;
				}.bind(this)
			}];

			return this.prompt(prompt).then(function(answers) {
				this.options.license = answers.license.trim();
			}.bind(this));
		},
		extendsComponent: function() {
			if (this.options.extensComponent !== undefined) {
				return true;
			}

			var prompt = [{
				type: "confirm",
				name: "extendsComponent",
				message: "Would you like to extends a 'eg.Component' for your project?",
				default: false
			}];

			return this.prompt(prompt).then(function(answers) {
				this.options.extendsComponent = answers.extendsComponent;
			}.bind(this));
		},
		version: function() {
			if (this.options.version !== undefined) {
				return true;
			}

			var prompt = [{
				type: "input",
				name: "version",
				message: "Enter component version",
				default: "1.0.0",
				validate: function(input) {
					if (!semverRegex().test(input)) {
						this.log("\nSorry, version should be a valid semantic versioning expression");
						return false;
					}
					return true;
				}.bind(this)
			}];

			return this.prompt(prompt).then(function(answers) {
				this.options.version = answers.version.trim();
			}.bind(this));
		},
	},
	writing: {
		createDir: function() {
			this.log("\nCreating eg." + capitalize(this.componentName));

			this.destinationRoot("eg." + capitalize(this.componentName));
			this.directory(".", ".");
		}
	},
	end: {
		default: function() {
			this.log("\nDone!!");
			this.log("Run npm install in 'eg." + capitalize(this.componentName) + "' directory.");
			this.log("And then run 'webpack-dev-server', checkout http://localhost:8080/demo/");
		}
	}
});
