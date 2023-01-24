"use strict";
let Teapot = function (power, size) {
    this.name = 'Teapot';
    this.power = power || 1000;
    this.size = size || 2000;
    this.waterAmount = 0;
    this.isOn = false;
    let save = this;

    this.on = function () {
        if (this.waterAmount == 0) {
            this.isOn = false;
            console.log('There is no water in ' + this.name + ' !');
        }
        else {
            this.isOn = true;
            console.log(this.name + ' is on');
            this.boiling();
        }
    };
    this.off = function () {
        this.isOn = false;
        console.log(this.name + ' is off');
    };

    this.setWaterAmount = function (waterAmount) {
        if (waterAmount <= size) {
            this.waterAmount = waterAmount;
        }
    };

    this.timeOfBoiling = function () {
        let Q = 100 * 4200 * (this.waterAmount / 1000);
        this.time = Q / this.power;
        console.log('Boiling time is ' + this.time + ' seconds');
        return this.time;
    }

    this.boiling = function () {
        setTimeout(function () {
            console.log('The water is boiled!');
            save.isOn = false;
        }, save.time * 10);
    }

    this.showInfo = function () {
        return 'Power: ' + this.power + '; Size: ' + this.size + '; ' + (this.isOn ? 'is on; ' : 'is off; ') +
            'Water amount: ' + this.waterAmount + '; Time of boiling: ' + this.timeOfBoiling();
    }
}

let CoffeeMachine = function (power, size, coffee) {
    Teapot.apply(this, arguments);
    this.name = 'Coffee Machine';
    this.coffee = coffee || 100;
    let parentShowInfo = this.showInfo;
    this.showInfo = function () {
        parentShowInfo.call(this);
        return 'Power: ' + this.power + '; Size: ' + this.size + '; Coffee: ' + this.coffee + '; ' + (this.isOn ? 'is on; ' : 'is off; ') +
            'Water amount: ' + this.waterAmount + '; Time of boiling: ' + this.timeOfBoiling();
    }
}

let teapot = new Teapot(1500, 2500);
teapot.setWaterAmount(1000);
console.log(teapot.showInfo());

let coffeemachine = new CoffeeMachine(2000, 1000, 100);
coffeemachine.setWaterAmount(500);
console.log(coffeemachine.showInfo());



