const colors = require('colors');
let processTime = process.hrtime();

function timerReset() {
	processTime = process.hrtime();
}

function timerEnd() {
	const now = new Date();
	const processTimeDifference = process.hrtime(processTime);

	let timeSeconds = processTimeDifference[0] + processTimeDifference[1]/1000000000;
	timeSeconds = +timeSeconds.toFixed(2);

	if(process.argv.indexOf('--watch') !== -1) {
		console.log(`> Done in ${timeSeconds}s`.cyan, `at ${now}`.dim, '- Watching...');
	} else {
		console.log(`> Done in ${timeSeconds}s`.cyan, `at ${now}`.dim);
	}
}

function start() {
	const projectName = process.env.project || 'Running';
	console.log('\n');
	console.log(`	Steffens 😘`.bold);
	console.log('	==========');

	if (process.env.NODE_ENV === 'production') {
		console.log(`	${projectName} in `, `${process.env.NODE_ENV} mode`.underline);
	} else {
		console.log(`	${projectName} in `, ` ${process.env.NODE_ENV} mode `.toUpperCase().white.bgRed);
	}
	console.log('\n');
}

function done(err, stats) {
	if (err) {
		console.error('\n' + err.stack || err);
		if (err.details) {
			console.error(err.details);
		}
		console.log('✖ Errors!'.bold.red);
		return;
	}

	if (stats) {
		const info = stats.toJson();

		console.warn(info.warnings + '\n');
		console.error(stats.toString('errors-only') + '\n');

		if (stats.hasWarnings()) {
			console.log(`! ${info.warnings.length} ${(info.warnings.length) > 1 ? 'files' : 'file'} has warnings`.yellow);
		}

		if (stats.hasErrors()) {
			console.log(`✖ ${info.errors.length} ${(info.errors.length) > 1 ? 'files' : 'file'} has errors`.red);
		}

		if (!stats.hasErrors() && !stats.hasWarnings()) {
			console.log(stats.toString({
				chunks: false,  // Makes the build much quieter
				colors: true,   // Shows colors in the console
				cached: false, 	// Hides files not built
				version: false,	// Hides webpack version
				hash: false,	// Hides hash
				errorDetails: true,	// Hides hash
				reasons: true,	// Hides hash
			}) + '\n');

			console.log('✔ Completed without errors.'.green);
		}
	}

	timerEnd();
}

module.exports = {
	start,
	done,
	timerReset,
	timerEnd,
};
