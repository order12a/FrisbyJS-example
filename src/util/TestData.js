const log = require('log4js').getLogger();
const faker = require('faker');
let User = require('../model/request/User');

class TestData {
	static getUser(){
		log.debug('Generating new random user');
		return new User(
			faker.name.firstName(),
			faker.name.lastName(),
			faker.internet.email(),
			faker.internet.userName()
		);
	}
}

module.exports = TestData;