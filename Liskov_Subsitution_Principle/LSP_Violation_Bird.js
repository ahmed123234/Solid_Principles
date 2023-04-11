const { Animal, makeAnimalSound } = require("./LSP_Animal");

class Bird extends Animal {
    fly() {
        console.log(this.name, "flaps wings");
    }

    // override the makSound method, so that LSP will be applied successfully 
    makeSound() {
        console.log(this.name, "chirps");
    }
}

const parrot = new Bird('Titi the parrot');
makeAnimalSound(parrot);
parrot.fly();

/**
 * 
 * The Bird class violate Liskov Subsitution Principle because 
 * it's not implementing its own makeSound from the parent Animal calss.
 * Insted, it's inheriting the generic sound
 * 
 * Solution: 
 * To fix the above violation, you have to make it use the makeSound method too. 
 * 
 */