const EventHooks = function(config) {
	this.config = config || {
		onRun: function() {},
		/** 
		 * Could implement more in the future for instance:
		 * onEmit
		 * onDone
		 *
		 * https://webpack.js.org/api/plugins/compiler/#event-hooks
		 */
	};
};
EventHooks.prototype.apply = function(compiler) {
	compiler.plugin('watch-run', (watching, callback) => {
		this.config.onRun();
		callback();
	});

	compiler.plugin('run', (watching, callback) => {
		this.config.onRun();
		callback();
	});
};

module.exports = EventHooks;