const person = {
	name: "Harsh",
	age: 25
};

class Person {
	constructor(_name, _age) {
		this.name = _name;
		this.age = _age;
	}

	greeting() {
		console.log("Hello", this.name, this.age);
	}
}

module.exports = { person, Person };
