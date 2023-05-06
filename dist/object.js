"use strict";
class Animal {
    // name:string;
    // species:string;
    // sound:string;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name=name;
        // this.sound=sound;
        // this.species=species
    }
    makeSound() {
        console.log(`this ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("german shephard", "ghew ghew", "kukur");
dog.makeSound();
