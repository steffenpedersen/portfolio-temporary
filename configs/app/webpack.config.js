let configs = [
	// JS + Styles
	require('./scripts.config.js'),

	// Static files (images etc.)
	require('./static.config')
]

if (process.env.NODE_ENV !== 'production') {
	configs = configs.concat([
		// template files
		require('./html.config'),
	]);
}

module.exports = configs;
