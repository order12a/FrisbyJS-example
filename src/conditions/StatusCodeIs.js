const expect = require('chai').expect;

class StatusCodeIs {
	constructor(statusCode){
		this.statusCode = statusCode;
	}

	check(response){
		expect(response.status).to.equal(this.statusCode);
	}

	toString(){
		return 'Expect status code is: ' + this.statusCode;
	}
}
module.exports = StatusCodeIs;