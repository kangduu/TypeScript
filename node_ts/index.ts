interface Animal {
	dateOfBirth: any;
}

interface Dog extends Animal {
	breed: any;
}

class AnimalHouse {
	resident: Animal;
	constructor(animal: Animal) {
		this.resident = animal;
	}
}

class DogHouse extends AnimalHouse {
	resident: Dog;
	constructor(dog: Dog) {
		super(dog);
	}
}

export {};
