const colors = require('colors');
const path = require('path');
const environment = require('./environment.js');

const base = require('./base.config.js');

const extractors = require('../libraries/extract');

const eslint = {
	loader: 'eslint-loader',
	options: {
		configFile: path.resolve(__dirname, './.eslintrc.js'),
		exclude: /node_modules/,
	},
};

const jsLoaders = [
	'babel-loader?presets[]=es2015&cacheDirectory=true&sourceMap=true',
];
if (!environment.production) {
	jsLoaders.push(eslint);
}
console.log('ENVIRONMENT:'.bold.green);
console.log(JSON.stringify(environment, null, 2).italic);
console.log('\n');
console.log('\n');

module.exports = base({
	entry: {
		app: [
			'./styles/styles.scss',
			'./scripts/app.js',
		],
	},
	output: {
		publicPath: environment.publicPath,
		path: environment.dist,
		filename: `/scripts/[name].js`,
		chunkFilename: '/scripts/[name].js?[chunkhash]',
	},
	module: {
		rules: [{
				test: /\.scss$/,
				use: extractors.add('styles', {
					filename: './styles/[name].css',
					allChunks: true,
				}).extract({
					use: [{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								autoprefixer: true,
								importLoaders: 1,
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('autoprefixer')()
								]
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: (!environment.production), // because yarn dev fails if true (for the time being?)
							}
						},
					],
				}),
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '/styles/fonts/[name].[ext]',
					},
				},
				exclude: [
					environment.svgs,
					environment.static,
				]
			},
			{
				test: /\.svg$/,
				use: [
					'svg-inline-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							svgo: {
								plugins: [
									{removeTitle: true},
									{removeXMLNS: true},
									{removeUnknownsAndDefaults: true},
									{sortAttrs: true},
									{convertStyleToAttrs: true},
									{removeEmptyAttrs: false},
								]
							},
						}
					},
				],
				exclude: [
					environment.fonts,
					environment.static,
				]
			},
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
					options: {
						exclude: /node_modules/,
						postcss: [require('autoprefixer')()],
						loaders: {
							css: extractors.get('styles').extract({
								use: [{
										loader: 'css-loader',
										options: {
											sourceMap: true,
											autoprefixer: true,
											importLoaders: 1,
										}
									},
									{
										loader: 'sass-loader',
										options: {
											sourceMap: true,
										}
									},
								],
								fallback: 'vue-style-loader',
							}),
							js: jsLoaders,
						}
					},
				},
			},
			{
				test: /\.js$/,
				use: jsLoaders,
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		extractors.get('styles'),
	],
}, 'js|css');
