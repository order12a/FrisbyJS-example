
class User {
	constructor(firstName, lastName, email, username, password = 'password'){
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.username = username;
		this.password = password;
	}

	getFirstName() {
		return this.firstName;
	}

	setFirstName(firstName) {
		this.firstName = firstName;
		return this;
	}

	getLastName() {
		return this.lastName;
	}

	setLastName(lastName) {
		this.lastName = lastName;
		return this;
	}

	getEmail() {
		return this.email;
	}

	setEmail(email) {
		this.email = email;
		return this;
	}

	getUsername() {
		return this.username;
	}

	setUsername(username) {
		this.username = username;
		return this;
	}

	getPassword() {
		return this.password;
	}

	setPassword(password) {
		this.password = password;
		return this;
	}

	toString(){
		return '{' +
			'\nuserName: ' + this.username +
			'\nfirstName: ' + this.firstName +
			'\nlastName: ' + this.lastName +
			'\nemail: ' + this.email +
			'\npassword: ' + this.password +
			'\n}';
	}
}

module.exports = User;