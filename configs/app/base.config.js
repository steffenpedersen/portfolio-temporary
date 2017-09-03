const colors = require('colors');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const environment = require('./environment.js');

const constants = {
	'process.env': {
		'PROJECT': JSON.stringify(process.env.project),
	}
};

let plugins = [
	new webpack.DefinePlugin(constants),
	new webpack.EnvironmentPlugin(['NODE_ENV']),
];

if (environment.production) {
	plugins = plugins.concat([
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			mangle: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		})
	]);
}

const baseConfiguration = {
	context: environment.assets,
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(gif|png|jpe?g|svg|bmp)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/[path][name].[ext]',
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								quality: 65
							},
							pngquant:{
								quality: '65-90',
								speed: 4
							},
							svgo:{
								plugins: [
									{removeEmptyAttrs: true},
								]
							},
							gifsicle: {
								optimizationLevel: 7,
								interlaced: false
							},
							optipng: {
								optimizationLevel: 7,
								interlaced: false
							}
						},
					},
				],
				exclude: [
					environment.fonts,
					environment.svgs,
				]
			},
		],
	},
	resolve: {
		modules: [
			environment.scripts,
			'node_modules'
		],
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'scripts': environment.scripts,
			'styles': environment.styles,
			'fonts': environment.fonts,
			'svgs': environment.svgs,
			'static': environment.static,
		},
		extensions: [
			'.js',
			'.json',
			'.vue',
		]
	},
	plugins: plugins,
}

module.exports = function(configuration, name) {
	let configName = name || '';

	plugins.push(
		new ProgressBarPlugin({
			format: `${colors.green.inverse(` ${configName} `)} [:bar] ${colors.green.bold(':percent')} (:elapsed seconds) :msg`,
			clear: true,
			summary: false
		})
	);

	return webpackMerge({}, configuration, baseConfiguration);
};
