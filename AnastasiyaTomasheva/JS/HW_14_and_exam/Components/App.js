'use strict';

class App {

    getProducts = async function () {
        
        let url = 'https://fakestoreapi.com/products';

        await fetch(url).then(function(response){
            return response.json()
            
        }).then(function(data){
            if (localStorage.getItem("key") === null) {
            localStorage.setItem('productsData', JSON.stringify(data))
            console.log(data)
            }
        })
        
    }()

    create () {

        this.div = document.createElement('div');
        this.element = this.div;
        this.element.classList.add('app');
        console.log(this.element);
        return this.element;
    }

    render() {

            document.body.prepend(this.element);
            
    }

    init() {

        this.create();
        this.render();

        this.html = document.querySelector('html');
        this.html.setAttribute('lang', 'en');

        this.style = document.createElement('link');
        document.head.prepend(this.style);
        this.style.setAttribute('rel', 'stylesheet');
        this.style.setAttribute('href', './css/style.css');
        

        this.title = document.createElement('title');
        document.head.prepend(this.title);
        this.title.innerHTML = 'Some site';
        console.log(this.title);

        this.meta = document.createElement('meta');
        document.head.prepend(this.meta);
        this.meta.setAttribute('charset', 'UTF-8');
        console.log(this.meta);

    }
}

export default new App().init()

class Header {

    create(){

        this.header = document.createElement('header');
        this.element = this.header;
    }

    init(){

        this.create();
        return this.element;
    }
}

const header = new Header().init();
export {header};

class Nav {

    create(){

        this.nav = document.createElement('nav');
        this.element = this.nav;
    }

    init(){

        this.create();
        return this.element;
    }
}

const nav = new Nav().init();
export {nav};

class Main {

    create(){

        this.main = document.createElement('main');
        this.element = this.main;
    }

    init(){

        this.create();
        return this.element;
    }
}

const main = new Main().init();
export {main};

class Footer {

    create(){

        this.footer = document.createElement('footer');
        this.element = this.footer;
    }

    init(){

        this.create();
        return this.element;
    }
}

const footer = new Footer().init();
export {footer};