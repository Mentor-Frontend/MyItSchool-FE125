"use strict";

class App {
    constructor() {
        this.element = '';
    }
    create() {
        let element = document.createElement('div');
        element.className = 'app';
        this.element = element;
    }
    render() {
        this.create();
        document.body.append(this.element);
    }
    init() {
        this.getData();
        this.render();
      
        let html = document.querySelector('html');
        html.setAttribute('lang', 'en');

        let metaUTF8 = document.createElement('meta');
        document.head.append(metaUTF8);
        metaUTF8.setAttribute('charset', 'UTF-8');

        let secondMeta = document.createElement('meta');
        document.head.append(secondMeta);
        secondMeta.setAttribute('http-equiv', 'X-UA-Compatible');
        secondMeta.setAttribute('content', 'IE=edge');

        let thirdMeta = document.createElement('meta');
        document.head.append(thirdMeta);
        thirdMeta.setAttribute('name', 'viewport');
        thirdMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');

        let title = document.createElement('title');
        document.head.append(title);
        title.innerHTML = 'Flowers Shop';

        let style = document.createElement('link');
        document.head.append(style);
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', './css/style.css');

        let ico = document.createElement('link');
        document.head.append(ico);
        ico.setAttribute('rel', 'icon');
        ico.setAttribute('href', '../img/favicon.png');
        ico.setAttribute('type', 'image/x-icon');

    }

    getData() {
        let products = localStorage.getItem('products');
        if (products) {
            console.log('Not empty localStorage');
            return 0;
        }
        (async function () {
            let response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok) {
                console.error('ERROR!'); 
                return 0;
            } 
            let data = response.json();
            data.then(function(items) {
                localStorage.setItem('products', JSON.stringify(items));
                return items;
            });
        })();
    } 
}

export default new App().init();