let Battery = function (
  name,
  capacity,
  current,
  consumptioninhour,
  chargespeed
) {
  this.name = name || "unknown";
  this.capacity = capacity || 2000;
  this.current = current || 50;
  this.consumptioninhour = +consumptioninhour || 200;
  this.chargespeed = +chargespeed || 0;
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
      console.log(name + chargetime + " " + " Hours for full charge");
      return chargetime;
    } else {
      return console.log(name + " is not on charge");
    }
  };
};

let NokiaBattery = function(){
    Battery.apply(this,arguments);
    this.name = 'Nokia';
    this.leavingtime = function() {
        return Infinity;
    }
}

let obj = new NokiaBattery;
console.log(obj, obj.leavingtime());

let Dom = function () {
  this.create = function (tagName) {
    createdTagName = document.createElement(tagName);
  };
  this.Atributes = function (element, name, value) {
    let findElement = document.querySelector(element);
    if (value !== undefined)  {
        findElement.setAttribute(name,value);
      }
    else  getAtribute = console.log(findElement.getAttribute(name));
  };
  this.Content = function (element, value) {
    let findElement = document.querySelector(element);
    if (value !== undefined) {
        findElement.InnerHTML(value);
      }
      console.log(findElement.InnerHTML());
    }
  };
  this.search = function(element,selector){
    this.element = elem
    el = element || document;
    el = element.querySelector(selector); 
    console.log(el); 
    }
  



