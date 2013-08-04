var _ = require("underscore");

module.exports.load = function (path, arr) {

	if (!_.isArray(arr)) {
		throw new Error("Not an array")
	}
	var res = [];
	_.each(arr,
	       function (m) {
		       res.push(require(process.cwd() + "/" + path + "/" + m));
	       });

	return res;

};

module.exports.prepare = function (pathRoot) {
	return {
		load: function (path) {
			return require(process.cwd() + "/" + pathRoot + "/" + path);
		}
	};
};
