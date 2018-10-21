const log = require('log4js').getLogger();

class ExpectableResponse {
	constructor(response){
		this.response = response;
	}

	shouldHave(condition){
		log.info(condition.toString());
		condition.check(this.response);
		return this;
	}

	mapJsonToDto(cls){
		log.debug('Mapping response to class - ' + cls.name);
		return cls.map(this.response.json);
	}

	mapTextToDto(cls){
		log.debug('Mapping response to class - ' + cls.name);
		return cls.map(JSON.parse(this.response.body));
	}
}

module.exports = ExpectableResponse;