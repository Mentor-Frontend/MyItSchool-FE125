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

        const logoImg = new Image(120);
        logoImg.src = './img/pilla_logo.png';
        logoImg.classList.add('logoImg');
        logoWrapper.appendChild(logoImg);

        const download = document.createElement('div');
        download.classList.add('download');
        footer.appendChild(download);

        const google = new Image(160, 50);
        google.src = './img/GooglePlayStore.png';
        google.classList.add('google');
        download.appendChild(google);

        const apple = new Image(160, 50);
        apple.src = './img/AppStore.png';
        apple.classList.add('apple');
        download.appendChild(apple);

        const number = document.createElement('div');
        number.classList.add('number');

        const contacts = document.createElement('div');
        contacts.classList.add('contacts');

        const insta = new Image(50);
        insta.src = './img/insta.png';
        insta.classList.add('insta');
        contacts.appendChild(insta);

        const twitter = new Image(50);
        twitter.src = './img/twitter.png';
        twitter.classList.add('twitter');
        contacts.appendChild(twitter);

        const facebook = new Image(50);
        facebook.src = './img/facebook.png';
        facebook.classList.add('facebook');
        contacts.appendChild(facebook);

        footer.appendChild(contacts);
    }


    init() {
        this.create();
        this.footerPart();
    }
}