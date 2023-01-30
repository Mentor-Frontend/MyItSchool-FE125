let Tech = function(power) {
    let status = false;

    power = power || 0;

    this.enable = function() {
        status = true;
    }

    this.disable = function() {
        status = false;
    }

    this.getStatus = function() {
        return status;
    }

    this.getPower = function() {
        return power;
    }
}

let Teapot = function(power, size) {
    Tech.apply (this, arguments);

    size = size || 1000;
    let waterAmount = 0;
    this.setWater = function() {
        if (amount > 0 && amount <= size) {
            waterAmount = amount;
        } else {
            waterAmount = 0;
        }
    };

    this.getWater = function() {
        return waterAmount;
    };
    this.on = function() {
        status = true;
    };
    this.off = function() {
        status = false;
    };
    let parentGetStatus = this.getStatus;
    this.getStatus = function() {
        parentGetStatus.call(this);
        if (status == true && parentGetStatus() == true) {
            return true;
        } else {
            return false;
        };
    }
}

let teapot = new Teapot(2000, 2000);
console.log(teapot)

class Animal {
    constructor(data) {
        this.name = data.name;
        this.eat = data.name;
    }

    showName() {
        console.log(this.name);
    }
}

class Dog extends Animal {
    constructor(data) {
        super(data);
        this.speak = true
    };

    bark() {
        console.log('Gaw');
    };
    showName() {
        super.showName();
        console.log('Dog' )
    }
}