class Footballer {
    constructor (name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    get getFootballerRole() {
        switch(this.role) {

            case 'goalKeeper':
                console.log(`The footballer ${this.name} is : goalKeeper`);
                break;
            
            case 'defender':
                console.log(`The footballer ${this.name} is : defender`);
                break;

            case 'midfielder':
                console.log(`The footballer ${this.name} is : midfielder`);
                break;

            case 'forward':
                console.log(`The footballer ${this.name} is : forward`);
                break;

            default:
                throw Error ('Unsported animal type: ', this.role);
        }

    }
}


try {
    const knate = new Footballer('Ramis', 31, 'defender');

    knate.getFootballerRole;

} catch(err) {
    console.log(err.message);
}