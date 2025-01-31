/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Scott Beck @bline
*/
var loaderUtils = require("loader-utils");
module.exports = function(source) {
	this.cacheable && this.cacheable(true);
	var jade = require("jade");
	var query = loaderUtils.parseQuery(this.query);
	var req = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
	var tmplFunc = jade.compile(source, {
		filename: req,
		doctype: query.doctype,
		self: query.self,
		pretty: query.pretty,
		locals: query.locals,
		compileDebug: this.debug || false
	});

	return tmplFunc(query);
}
