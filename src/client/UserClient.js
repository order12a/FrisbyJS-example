const winston = require('winston');

const log = winston.createLogger({
	transports: [new winston.transports.Console()],
	format: winston.format.combine(
		winston.format.colorize({ all: true }),
		winston.format.simple()
	)
});

const HttpClient = require('../util/HttpClient');
const ExpectableResponse = require('../conditions/ExpectableResponse');

const CUSTOMERS_URL = '/customers';
const LOGIN_URL = '/login';
const REGISTER_URL = '/register';

class UserClient {
	constructor(){
		this.client = new HttpClient(log);
	}

	async getCustomers(){
		log.info('Fetching all customers with GET method');
		return new ExpectableResponse(await this.client.get(CUSTOMERS_URL));
	}

	async registerUser(userObject){
		log.info('Creating new user ' + userObject.toString());
		return new ExpectableResponse(await this.client.post(REGISTER_URL, userObject));
	}

	async registerUserRaw(userObject){
		log.info('Creating new user ' + userObject.toString());
		return this.client.post(REGISTER_URL, userObject);
	}

	async deleteCustomer(id){
		log.info('Deleting customer with id: ' + id);
		return await this.client.delete(CUSTOMERS_URL + '/' + id);
	}
}

module.exports = UserClient;