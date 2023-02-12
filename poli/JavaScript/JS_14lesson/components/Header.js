export default class Header {
    create() {
        const header = document.createElement('header');
        header.classList.add('header');
        const element = document.querySelector('.app');
        element.appendChild(header);
    }

    headerPart() {
        const header = document.querySelector(".header");

        const slogan = document.createElement("div");
        slogan.classList.add("slogan");
    
        const donutSlogan = document.createElement("p");
        donutSlogan.innerText = "BE YOURSELF.";
        slogan.appendChild(donutSlogan);
        header.appendChild(slogan);
    
        const logoWrapper = document.createElement("div");
        logoWrapper.classList.add("logoWrapper");
        header.appendChild(logoWrapper);
    
        const logoImg = new Image(130);
        logoImg.src = "img/pilla_logo.png";
        logoWrapper.appendChild(logoImg);
    
        const addressInfo = document.createElement("div");
        addressInfo.classList.add("addressInfo");
    
        const address = document.createElement("p");
        address.innerText = "State Route 191";
        addressInfo.appendChild(address);
        header.appendChild(addressInfo);
    }

    init() {
        this.create();
        this.headerPart();
    }
}
