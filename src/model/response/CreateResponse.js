
class CreateResponse {
	constructor(id){
		this.id = id;
	}

	getId(){
		return this.id;
	}

	setId(id){
		this.id = id;
		return this;
	}

	static map(responseBody){
		return new CreateResponse(responseBody.id);
	}
}

module.exports = CreateResponse;