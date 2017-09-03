/**
 * Manually set node environment based on '-p' flag
 * (because webpack spawns own processes)
 */
process.env.NODE_ENV = process.env.NODE_ENV || (process.argv.indexOf('--p') !== -1) ? 'production' : 'development';

const path = require('path');
const webpack = require('webpack');
const log = require('./libraries/log');
const EventHooks = require('./libraries/event-hooks-plugin');

const package = require('../package.json');

const selectedProjects = process.argv.reduce((projects, arg) => {
	if(arg.indexOf('--project=') === 0) {
		let project = arg.replace(/"|'|-|=|project/g, '')
		projects.push(project);
	}

	return projects;
}, []);

const projects = selectedProjects.length ? selectedProjects : package.projects;

projects.forEach((project) => {
	process.env.project = project;

	log.start();

	// Webpack config file
	let config = require(`./${project}/webpack.config`);

	config.forEach(function(conf) {
		conf.plugins.push(new EventHooks({
			onRun: log.timerReset,
		}));
	});

	let compiler = webpack(config);
	
	let environment = require(`./${project}/environment`);

	if(process.argv.indexOf('--watch') !== -1) {
		compiler.watch({
			ignores: /node_modules/
		}, log.done);

	} else {
		compiler.run(log.done);
	}
});
