'use strict'

function Dom() {
    this.create = function(tagName) {
        return document.createElement(tagName);
    }
    this.attr = function(element, name, value) {
        if(value) {
            element[name] = value;

        } else {
            element[name] = true;
        }
    }
    this.html = function(element, value) {
        if(value) {
            element.innerHTML = value;

        } else {
            element.innerHTML = '<h2>Other content';
        }
    }
    this.search = function(element, selector) {
        if(element?.childNodes) {
            return element.querySelectorAll(selector);
        } else {
            return document.querySelectorAll(selector);
        }
    }
    this.addClass = function(element, className) {
        element.classList.add(className);
    }
    this.removeClass = function(element, className) {
        element.classList.remove(className);
    }
    this.toggleClass = function(element, className) {
        element.classList.toggle(className);
    }
    this.hasClass = function(element, className) {
        return element.classList.contains(className);
    }
    this.appened = function(element, newElement, beforeElement) {
        if(beforeElement) {
            beforeElement.beforebegin(newElement);
        } else {
            element.appendChild(newElement);
        }  
    }
    this.on = function (element, eventName, funcName) {
        let isEventExist = false
        for (let key in element) {
            if (key === `on${eventName}`) {
                isEventExist = true;
            }
        }
        if (this[funcName] && isEventExist) {
            element.addEventListener(eventName, this[funcName] )
        } 
    }

}

let doc = new Doc();
doc.create("div")
doc.create("h1")
doc.create("img")
doc.create("img2")
doc.create("img3")
console.log(doc)


