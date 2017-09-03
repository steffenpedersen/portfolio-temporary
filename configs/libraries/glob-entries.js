const path = require('path');
const glob = require('glob');

function GlobEntries() {
	this.fromSrc = (src) => {
		return this.fromArray(this.getArray(src));
	}

	this.fromArray = (items) => {
		return items.reduce(reduceArray, {});
	}

	this.getArray = (src) => {
		return glob.sync(src);
	}

	function reduceArray(obj, entry, index) {
		const filename = path.basename(entry);
		obj[filename] = entry;
		return obj;
	}
}

module.exports = new GlobEntries();
