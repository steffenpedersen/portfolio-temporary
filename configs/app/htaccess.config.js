const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const globEntries = require('../libraries/glob-entries');

const environment = require('./environment.js');
const base = require('./base.config.js');

const templateVariables = require('./variables.js');

const entry = path.resolve(environment.root, `${environment.assetsRoot}/.htaccess`);

module.exports = base({
	entry: {
		'.htaccess': entry,
	},
	output: {
		publicPath: environment.publicPath,
		path: environment.distRoot,
		filename: '[name]',
	},
	module: {
		rules: [
			{
				test: /\.(htaccess)$/,
				use: [
					{
						loader: 'html-loader',
					},
					{
						loader: 'ejs-html-loader',
						options: {
							context: templateVariables,
						}
					}
				]
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: path.basename(entry),
			filename: path.basename(entry),
			template: entry,
			cache: false,
			inject: false,
		})
	],

}, 'htaccess');
