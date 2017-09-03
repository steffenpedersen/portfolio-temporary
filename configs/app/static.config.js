const path = require('path');

const environment = require('./environment.js');
const base = require('./base.config.js');

module.exports = base({
	context: environment.static,
	entry: {
		static: path.resolve(__dirname, './.static.js'),
	},
	output: {
		path: environment.dist,
		filename: 'static/[name].js',
	},
	module: {
		rules: [
			{
				test: /\.\w*$/,
				// Exclude all image formats (they are already defined in base.config.js)
				exclude: /\.(static\.js|gif|png|jpe?g|svg|bmp)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						}
					},
				]
			}
		],
	},
}, 'static');
