let Battery = function (
  name,
  capacity,
  current,
  consumptioninhour,
  chargespeed
) {
  this.name = name;
  this.capacity = +capacity;
  this.current = +current;
  this.consumptioninhour = +consumptioninhour;
  this.chargespeed = +chargespeed;
  this.leavingtime = function () {
    let leavingtime =
      (this.capacity * (this.current / 100)) / this.consumptioninhour;
    console.log("Else " + name + " " + leavingtime + " hours of use ");
    return leavingtime;
  };
  this.chargetime = function () {
    if (this.chargespeed > 0) {
      let chargetime =
        (this.capacity - this.capacity * (this.current / 100)) /
        this.chargespeed;
      console.log(name + chargetime + ' ' + " Hours for full charge");
      return chargetime;
    } else {
      return console.log(name + " is not on charge");
    }
  };
};
let nokia = new Battery("nokia", 3000, 54, 200, 500);
let samsung = new Battery("samsung", 36, 56, 300, 300);
let xiaomi = new Battery("xiaomi", 6000, 80, 300, 0);
samsung.leavingtime();
nokia.leavingtime();
xiaomi.leavingtime();
samsung.chargetime();
nokia.chargetime();
xiaomi.chargetime();
