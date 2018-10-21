require('../src/config/FrisbyGlobalSetup');
const expect = require('chai').expect;

const frisby = require('frisby');
const TestData = require('../src/util/TestData');

describe('Raw frisby examples', function () {
	const CUSTOMERS_URL = '/customers';
	const REGISTER_URL = '/register';

	let userId;

	beforeEach(function(){
		userId = null;
	});

	afterEach(function(){
		if (userId !== null){
			return frisby.del(CUSTOMERS_URL + '/' + userId)
				.inspectBody()
				.expect('status', 200);
		}
	});

	it('should create new user with approach using async/await', async function () {
		let response = await frisby.post(REGISTER_URL, TestData.getUser());
		userId = response.json.id;
		expect(response.json.id).to.match(/[a-z0-9]{24}/);
	});

	it('should create new user with direct assertions', function () {
		return frisby.post(REGISTER_URL, TestData.getUser())
			.inspectRequest()
			.inspectResponse()
			.expect('status', 200)
			.expect('json', 'id', /[a-z0-9]{24}/);
	});

	it('call to customers endpoint should return successful status code', function(){
		return frisby.get(CUSTOMERS_URL)
			.inspectRequest()
			.inspectResponse()
			.expect('status', 200);
	});

	it('inspect should be invoked on fail', function(){
		return frisby.del('/XYZ')
			.expect('status', 200);
	});
});