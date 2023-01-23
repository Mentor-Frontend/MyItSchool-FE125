export default class Footer {
    constructor (){

    }
    create() {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        const element = document.querySelector('.app');
        element.appendChild(footer);
    }

    footerPart() {
        const footer = document.querySelector('.footer');

        const logoWrapper = document.createElement('div');
        logoWrapper.classList.add('logo-wrapper');
        footer.appendChild(logoWrapper);

        const logoImg = new Image(230, 90);
        logoImg.src = './../img/header_logo.png';
        logoWrapper.appendChild(logoImg);

        const download = document.createElement('div');
        download.classList.add('download');
        footer.appendChild(download);

        const google = new Image(160, 50);
        google.src = './../img/GooglePlayStore.png';
        download.appendChild(google);

        const apple = new Image(160, 50);
        apple.src = './../img/AppStore.png';
        download.appendChild(apple);

        const number = document.createElement('div');
        number.classList.add('number');

        const contact = document.createElement('p');
        contact.innerText = '+1 757 392 3936';
        contact.classList.add('contact');
        number.appendChild(contact);

        footer.appendChild(contact);
    }


    init() {
        this.create();
        this.footerPart();
    }
}