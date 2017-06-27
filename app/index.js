"use strict";
var Generator = require("yeoman-generator");
var capitalize = require("lodash.capitalize");
var upperFirst = require("lodash.upperfirst");
var isSpdxLicenseId = require("is-spdx-license-id");
var semverRegex = require("semver-regex");

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.argument("componentName", {
			type: String,
			required: false
		});
	}
	prompting() {
		const message = [{
			type: "input",
			name: "description",
			message: "Enter component description",
			validate: function(input) {
				if (!input) {
					console.log("\nPlease enter a valid component description");
					return false;
				}
				return true;
			}
		}, 
		// {
		// 	type: "input",
		// 	name: "author",
		// 	message: "Enter component author",
		// 	default: "NAVER Corp."
		// }, 
		{
			type: "input",
			name: "license",
			message: "Enter component license",
			default: "MIT",
			validate: function(input) {
				if (!isSpdxLicenseId(input)) {
					console.log("\nSorry, license should be a valid SPDX license expression");
					return false;
				}
				return true;
			}
		}, {
			type: "confirm",
			name: "extendsComponent",
			message: "Would you like to extends a 'egjs-component' for your project?",
			default: false
		}, {
			type: "input",
			name: "version",
			message: "Enter component version",
			default: "2.0.0",
			validate: function(input) {
				if (!semverRegex().test(input)) {
					console.log("\nSorry, version should be a valid semantic versioning expression");
					return false;
				}
				return true;
			}
		}];

		if(!this.options.componentName) {
			message.unshift({
				type: "input",
				name: "componentName",
				message: "Enter component name(\"camelCase\" is recommended)",
				validate: (input) => {
					if (!input) {
						console.log("\nPlease enter a valid component name");
						return false;
					}
					return true;
				}
			});
		}
		return this.prompt(message).then((answers) => {
			this.options.componentName = answers.componentName || this.options.componentName || "";
			this.options.componentName = this.options.componentName.trim();
			this.options.componentname = this.options.componentName.toLowerCase();
			this.options.ComponentName = upperFirst(this.options.componentName);
			this.options.description = answers.description.trim();
			this.options.author = "NAVER Corp.";
			this.options.license = answers.license.trim();
			this.options.extendsComponent = answers.extendsComponent;
			this.options.version = answers.version.trim();
		});
	}
	writing() {
		console.log("\nCreating egjs-" + this.options.componentname);
		this.destinationRoot("egjs-" + this.options.componentname);
		this.fs.copyTpl(
      this.sourceRoot(),
      this.destinationPath("."),
      this.options,
			{dot: true}
    );
		this.fs.copy(
			this.templatePath(".*"),
			this.destinationRoot(".")
		);
		this.fs.move(
			this.destinationPath("src/Component.template.js"),
			this.destinationPath("src/" + this.options.ComponentName + ".js")
		);
		this.fs.move(
			this.destinationPath("test/unit/component.spec.template.js"),
			this.destinationPath("test/unit/" + this.options.componentname + ".spec.js")
		);
	}
	install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false,
			callback: function() {
				console.log("\nDone!!");
				console.log("Run 'npm start', checkout http://localhost:8080/test/manual/");
			}
    });
  }
};
