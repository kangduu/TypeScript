"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnimalHouse {
    constructor(animal) {
        this.resident = animal;
    }
}
class DogHouse extends AnimalHouse {
    constructor(dog) {
        super(dog);
    }
}
