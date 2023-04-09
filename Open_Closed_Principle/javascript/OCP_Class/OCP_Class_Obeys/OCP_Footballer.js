const {DefenderRole, MidfielderRole, ForwardRole, GoalKeeperRole} = require('./DefenderRole');

class Footballer {
    constructor (name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    get getFootballerRole() {

       console.log(this.role.getFootballerRole);
    }
}


try {
    
    let i = 4;
    const roles = {
        1: new MidfielderRole('midfielder'),
        2: new ForwardRole('forward'),
        3: new DefenderRole('defender'),
        4: new GoalKeeperRole('goalKeeper')
    };

    while (i > 0) {

        const knate = new Footballer('Ramis', 31, roles[i--]);

        knate.getFootballerRole;
    }

} catch(err) {
    console.log(err.message);
}