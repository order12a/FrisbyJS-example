const UserClient = require('../src/client/UserClient');
const TestData = require('../src/util/TestData');
const CreateResponse = require('../src/model/response/CreateResponse');
const Conditions = require('../src/conditions/Conditions');

const expect = require('chai').expect;
const addContext = require('mochawesome/addContext');

describe('Socks shop API tests', function(){
	let client;
	let userId;

	before(function(){
		client = new UserClient();
	});

	after(function(){
		//TODO add some code
	});

	beforeEach(function(){
		userId = null;
	});

	afterEach(async function(){
		if (userId !== null){
			let response = await client.deleteCustomer(userId);
			addContext(this, {
				title: 'Temp user clean up, response:',
				value: response.body
			});
		}
	});

	it('Test Create new User in simple raw JS style', async function(){
		let response = await (client.registerUserRaw(TestData.getUser()));
		let resp = CreateResponse.map(response.json);
		userId = resp.getId();
		expect(resp.getId()).to.match(/[a-z0-9]{24}/);
	});

	it('Test Create User with custom conditions', async function(){
		let resp = await (await client.registerUser(TestData.getUser()))
			.shouldHave(Conditions.statusCode(200))
			.mapJsonToDto(CreateResponse);

		userId = resp.getId();
		expect(resp.getId()).to.match(/[a-z0-9]{24}/);
	});

	it('Test Get Customers', async function(){
		await (await client.getCustomers()).shouldHave(Conditions.statusCode(200));
	});
});