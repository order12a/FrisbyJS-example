const StatusCodeIs = require('./StatusCodeIs');

class Conditions {
	static statusCode(statusCode){
		return new StatusCodeIs(statusCode);
	}
}

module.exports = Conditions;