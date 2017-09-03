const environment = require('./environment.js');

const templateVariables = {
	base: `/${environment.project}/`,
	project: `${environment.project}`,
	server: `http://master.${environment.project}.testserver.nu`,
}

module.exports = templateVariables;