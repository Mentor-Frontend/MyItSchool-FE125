class Nav {
    constructor(element) {
        this.element = element
    }

    create() {
        let element = document.createElement('nav')
        element.classList.add('nav')
        this.element=element

        let headerNav = document.querySelector('.header')
        headerNav.appendChild(element)

        let menu = document.createElement('ul')
        menu.classList.add('menu')
        element.appendChild(menu)

        let menuHome = document.createElement('li')
        menuHome.classList.add('menu_home')
        menu.appendChild(menuHome) 

        let menuHomeLink = document.createElement('a')
        menuHomeLink.classList.add('home_link')
        menuHomeLink.innerHTML = 'Home'
        menuHomeLink.href = '#'
        menuHome.appendChild(menuHomeLink)

        let menuProducts = document.createElement('li')
        menuProducts.classList.add('menu_products')
        menu.appendChild(menuProducts)

        let menuProductsLink = document.createElement('a')
        menuProductsLink.classList.add('products_link')
        menuProductsLink.innerHTML = 'Products'
        menuProductsLink.href = '#Products'
        menuProducts.appendChild(menuProductsLink)

        let menuContacts = document.createElement('li')
        menuContacts.classList.add('menu_contacts')
        menu.appendChild(menuContacts)

        let menuContactsLink = document.createElement('a')
        menuContactsLink.classList.add('contacts_link')
        menuContactsLink.innerHTML = 'Contacts'
        menuContactsLink.href = '#Contacts'
        menuContacts.appendChild(menuContactsLink)
    }
    init() {
        return this.create()
    }
}

const nav = new Nav().init();
export {nav};