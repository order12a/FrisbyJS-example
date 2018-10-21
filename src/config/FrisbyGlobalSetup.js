const frisby = require('frisby');

module.exports = frisby.globalSetup({
	request: {
		baseUrl: process.env.BASE_URL || 'http://104.248.22.249',
		headers: {
			'Content-Type': 'application/json',
		}
	},
	requestLogger: false,
	responseLogger: false
});