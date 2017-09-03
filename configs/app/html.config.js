const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const globEntries = require('../libraries/glob-entries');

const environment = require('./environment.js');
const base = require('./base.config.js');

const templateVariables = require('./variables.js');

const entries = [].concat(
	globEntries.getArray(`${environment.assets}/html/*.html`)
);

const plugins = entries.map((entry) => {
	return new HtmlWebpackPlugin({
		title: path.basename(entry),
		filename: path.basename(entry),
		template: entry,
		cache: false,
		inject: false,
	});
});

module.exports = base({
	entry: globEntries.fromArray(entries),
	output: {
		publicPath: environment.publicPath,
		path: environment.dist,
		filename: '[name]',
	},
	module: {
		rules: [
			{
				test: /\.(html)$/,
				use: [
					{
						loader: 'html-loader',
						options: {
					        minimize: false,
						},
					},
					{
						loader: 'ejs-html-loader',
						options: {
							context: templateVariables,
						}
					}
				],
				exclude: [
					environment.static,
					environment.scripts,
					environment.styles,
				]
			},
		],
	},
	plugins: plugins,

}, 'html');
