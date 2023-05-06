class Animal{
    // name:string;
    // species:string;
    // sound:string;

    constructor(public name:string ,public species:string,public sound:string){
        // this.name=name;
        // this.sound=sound;
        // this.species=species
    }
    makeSound(){
        console.log(`this ${this.name} says ${this.sound}`);
    }
}

const dog=new Animal("german shephard","ghew ghew","kukur")
dog.makeSound()