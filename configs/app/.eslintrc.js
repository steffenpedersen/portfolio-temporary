const environment = require('./environment.js');

module.exports = {
	parser: 'babel-eslint',
	extends: 'airbnb',
	plugins: ['import'],
	settings: {
		'import/resolver': {
			webpack: {
				config: `configs/${environment.project}/webpack.config.js`,
				'config-index': 0,
			}
		}
	},
	env: {
		browser: true,
	},
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'no-new': 0,
		'no-console': 0,
		'no-plusplus': 0,
		'no-continue': 1,
		'no-underscore-dangle': 0,
		'no-param-reassign': 0,
		'spaced-comment': 0,
		'arrow-body-style': ['error', 'as-needed'],
		'brace-style' : ['error', '1tbs', { 'allowSingleLine': false }],
		'no-restricted-syntax': [
			'error',
			'ForOfStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'linebreak-style': 0,
		'import/extensions': ['error', 'always', {
			js: 'never',
			jsx: 'never',
			json: 'never',
			vue: 'never',
		}],
		'no-mixed-operators': [
			'error',
			{
				'groups': [
					// ['+', '-', '*', '/', '%', '**'], // Let's us use different arithmics on the same line
					['&', '|', '^', '~', '<<', '>>', '>>>'],
					['==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['&&', '||'],
					['in', 'instanceof']
				],
				'allowSamePrecedence': false
			}
		],
		'global-require': 0,
	}
}
