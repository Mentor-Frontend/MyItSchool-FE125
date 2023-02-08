class Footer {
    constructor() {
        this.element = '';
    }
    create(){
        let app = document.querySelector('.app');
        let footer = document.createElement('footer');
        footer.className = 'footer';
        footer.setAttribute('id', 'contacts');
        app.append(footer);
        this.element = footer;

        let footerCont = document.createElement('div');
        footer.append(footerCont);
        footerCont.className = 'footer_container';

        let logoFooter = document.createElement('div');
        footerCont.append(logoFooter);
        logoFooter.className = 'logo_footer';

        let logoImg = document.createElement('img');
        logoFooter.append(logoImg);
        logoImg.setAttribute('src', './img/logo_white.png');
        logoImg.addEventListener('click', () => {
            location.hash = '#home';
            window.scrollTo(0,0);
        })

        let logoText = document.createElement('h2');
        logoFooter.append(logoText);
        logoText.innerHTML = "Flowers, what the world needs!"


        let links = document.createElement('div');
        footerCont.append(links);
        links.className = 'links';

        let google = document.createElement('img');
        links.append(google);
        google.setAttribute('src', './img/google-play.png');

        let apple = document.createElement('img');
        links.append(apple);
        apple.setAttribute('src', './img/app-store.png');

        let contacts = document.createElement('div');
        footerCont.append(contacts);
        contacts.className = 'contacts';

        let contText = document.createElement('h2');
        contacts.append(contText);
        contText.innerHTML = 'Contacts';

        let cont1 = document.createElement('div');
        contacts.append(cont1);
        cont1.className = 'contact';

        let imgCont1 = document.createElement('img');
        cont1.append(imgCont1);
        imgCont1.setAttribute('src', './img/location.png');
        imgCont1.setAttribute('id', 'img_loc')

        let textCont1 = document.createElement('h3');
        cont1.append(textCont1);
        textCont1.innerHTML = '26985 Brighton Lane, Lake Forest, CA';

        let cont2 = document.createElement('div');
        contacts.append(cont2);
        cont2.className = 'contact';

        let imgCont2 = document.createElement('img');
        cont2.append(imgCont2);
        imgCont2.setAttribute('src', './img/email.png');

        let textCont2 = document.createElement('h3');
        cont2.append(textCont2);
        textCont2.innerHTML = 'support@Flowers.com';

        let cont3 = document.createElement('div');
        contacts.append(cont3);
        cont3.className = 'contact';

        let imgCont3 = document.createElement('img');
        cont3.append(imgCont3);
        imgCont3.setAttribute('src', './img/phone.png');

        let textCont3 = document.createElement('h3');
        cont3.append(textCont3);
        textCont3.innerHTML = '+1 236 548 965';

    }
    init(){
        this.create();
        return this.element;
    }
}
const footer = new Footer();
export {footer};