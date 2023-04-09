const { FootballerRole } = require('./FootballerRole');

class DefenderRole extends FootballerRole {

    constructor(role) {
        super(role)
    }
    
    get getFootballerRole() {
        return this.role;
    }
}


class GoalKeeperRole extends FootballerRole {
    constructor(role) {
        super(role)
    }

    get getFootballerRole() {
        return this.role;
    }
}

class MidfielderRole extends FootballerRole {
    constructor(role) {
        super(role)
    }

    get getFootballerRole() {
        return this.role;
    }
}

class ForwardRole extends FootballerRole {
    constructor(role) {
        super(role)
    }

    get getFootballerRole() {
        return this.role;
    }
}


module.exports = { DefenderRole, GoalKeeperRole, MidfielderRole, ForwardRole };
