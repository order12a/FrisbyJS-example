require('../config/FrisbyGlobalSetup');
const frisby = require('frisby');

class HttpClient {
	constructor(logger, baseUrl = null){
		this.logger = logger;
		if ( baseUrl !== null){
			frisby.baseUrl(baseUrl);
		}
	}

	setup(headers){
		this.logger.info('Client setup invoked, adding request headers:\n' + headers);
		frisby.setup({
			request: {
				headers: {
					headers
				}
			}
		});
		return frisby;
	}

	reset(headers = {'Content-Type': 'application/json'}){
		this.logger.warn('Client headers reset to default state');
		this.setup(headers);
		return frisby;
	}

	async get(url, headers = null){
		this.logger.info('GET method executed, url: ' + url);
		if ( headers !== null) {
			return this.setup(headers).get(url);
		}
		return frisby.get(url).inspectRequest().inspectResponse();
	}

	async post(url, body, headers = null){
		this.logger.info('POST method executed, url: ' + url + '\n' +
            'With body: '+ body);
		if ( headers !== null) {
			return this.setup(headers).post(url, body);
		}
		return frisby.post(url, body).inspectRequest().inspectResponse();
	}

	async delete(url, headers = null){
		this.logger.info('DELETE method executed, url: ' + url);
		if ( headers !== null) {
			return this.setup(headers).del(url);
		}
		return frisby.del(url).inspectRequest().inspectResponse();
	}

	getLogger(){
		return this.logger;
	}
}

module.exports = HttpClient;