const ExtractTextPlugin = require("extract-text-webpack-plugin");

function Extractors() {
	const preferences = {
		filename: '[name]',
		allChunks: true,
	};

	const instances = {};

	this.add = (name, options) => {
		instances[name] = new ExtractTextPlugin(options || preferences);
		return instances[name];
	}

	this.get = (name) => {
		return instances[name];
	}
}

module.exports = new Extractors();
