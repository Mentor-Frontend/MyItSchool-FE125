"use strict";
let Teapot = function () {
    this.get = function () {
        this.brand = prompt('Бренд чайника:');
        this.power = +prompt('Мощность чайника (Вт):');
        this.maxVolume = +prompt('Объём чайника (в мл)');
        this.volumeWaterOfUser = +prompt('Какое объём воды был налит в чайник (в мл)?');
        this.isOn = false;
    },
    this.on = function() {
        this.isOn = true;
        console.log(this.isOn);
    },
    this.off = function() {
        this.isOn = false;
        console.log(this.isOn);
    },
    this.time = function() {
        let Q = 100*4200*(this.volumeWaterOfUser/1000);
        this.time = Q/this.power;
        console.log(this.time, 'в секундах');
    }
}

let teapot = new Teapot();
teapot.get();
teapot.time();
