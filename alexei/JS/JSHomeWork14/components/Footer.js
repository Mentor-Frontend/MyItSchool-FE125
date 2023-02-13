class Footer {
    constructor(element) {
        this.element = element
    }

    create() {
        let element = document.createElement('footer')
        element.classList.add('footer')
        this.element=element
        let app = document.querySelector('.app')
        app.appendChild(element)

        let footerLogoContainer = document.createElement('div')
        footerLogoContainer.classList.add('footer-logo_container')
        element.appendChild(footerLogoContainer)

        let footerLogo = document.createElement('img')
        footerLogo.classList.add('footer-logo_img')
        footerLogo.src = './img/logo_small.png'
        footerLogoContainer.appendChild(footerLogo)

        let footerLogoDescription = document.createElement('h3')
        footerLogoDescription.classList.add('footer-logo_description')
        footerLogoDescription.innerHTML = 'Quick and profitable purchases. The best online store'
        footerLogoContainer.appendChild(footerLogoDescription)

        let footerCategoriesContainer = document.createElement('div')
        footerCategoriesContainer.classList.add('footer-categories_container')
        element.appendChild(footerCategoriesContainer)

        let footerCategories = document.createElement('ul')
        footerCategories.classList.add('footer_categories')
        footerCategories.innerHTML = 'Categories'
        footerCategoriesContainer.appendChild(footerCategories)

        let footerCategoriesHome = document.createElement('li')
        footerCategoriesHome.classList.add('footer-categories_home')
        footerCategoriesHome.innerHTML = 'Home'
        footerCategories.appendChild(footerCategoriesHome)

        let footerCategoriesProducts = document.createElement('li')
        footerCategoriesProducts.classList.add('footer-categories_products')
        footerCategoriesProducts.innerHTML = 'Products'
        footerCategories.appendChild(footerCategoriesProducts)

        let footerCategoriesContacts = document.createElement('li')
        footerCategoriesContacts.classList.add('footer-categories_contacts')
        footerCategoriesContacts.innerHTML = 'Contacts'
        footerCategories.appendChild(footerCategoriesContacts)

        let footerProductsOnlyContainer = document.createElement('div')
        footerProductsOnlyContainer.classList.add('footer-products_container')
        element.appendChild(footerProductsOnlyContainer)

        let footerProductsOnly = document.createElement('ul')
        footerProductsOnly.classList.add('footer-products-only')
        footerProductsOnly.innerHTML = 'Products'
        footerProductsOnlyContainer.appendChild(footerProductsOnly)

        let footerCategoriesElectronics = document.createElement('li')
        footerCategoriesElectronics.classList.add('footer-categories_electronics')
        footerCategoriesElectronics.innerHTML = 'Electronics'
        footerProductsOnly.appendChild(footerCategoriesElectronics)

        let footerCategoriesJewelery = document.createElement('li')
        footerCategoriesJewelery.classList.add('footer-categories_jewelery')
        footerCategoriesJewelery.innerHTML = 'Jewelery'
        footerProductsOnly.appendChild(footerCategoriesJewelery)

        let footerCategoriesMensClothing = document.createElement('li')
        footerCategoriesMensClothing.classList.add('footer-categories_mens-clothing')
        footerCategoriesMensClothing.innerHTML = 'Mens clothing'
        footerProductsOnly.appendChild(footerCategoriesMensClothing)

        let footerCategoriesWomensClothing = document.createElement('li')
        footerCategoriesWomensClothing.classList.add('footer-categories_womens-clothing')
        footerCategoriesWomensClothing.innerHTML = 'Womens clothing'
        footerProductsOnly.appendChild(footerCategoriesWomensClothing)

        
        let footerMediaContainer = document.createElement('div')
        footerMediaContainer.classList.add('footer-media_container')
        element.appendChild(footerMediaContainer)

        let footerSocialContainer = document.createElement('div')
        footerSocialContainer.classList.add('footer-social_container')
        footerSocialContainer.innerHTML = 'Our Social'
        footerMediaContainer.appendChild(footerSocialContainer)

        let footerTwitter = document.createElement('img')
        footerTwitter.classList.add('footer-social', 'footer-twitter')
        footerTwitter.src = './img/twitter.svg'
        footerSocialContainer.appendChild(footerTwitter)

        let footerInstagram = document.createElement('img')
        footerInstagram.classList.add('footer-social', 'footer-instagram')
        footerInstagram.src = './img/instagram.svg'
        footerSocialContainer.appendChild(footerInstagram)

        let footerFacebook = document.createElement('img')
        footerFacebook.classList.add('footer-social', 'footer-facebook')
        footerFacebook.src = './img/facebook.svg'
        footerSocialContainer.appendChild(footerFacebook)

        let footerLinkedin = document.createElement('img')
        footerLinkedin.classList.add('footer-social', 'footer-linkedin')
        footerLinkedin.src = './img/linkedin.svg'
        footerSocialContainer.appendChild(footerLinkedin)

        let footerMobileAppContainer = document.createElement('div')
        footerMobileAppContainer.classList.add('footer-mobile-app_container')
        footerMobileAppContainer.innerHTML = 'Download mobile app'
        footerMediaContainer.appendChild(footerMobileAppContainer)

        let footerAppStore = document.createElement('img')
        footerAppStore.classList.add('footer-app', 'footer-appstore')
        footerAppStore.src = './img/appstore.svg'
        footerMobileAppContainer.appendChild(footerAppStore)

        let footerGooglePlay = document.createElement('img')
        footerGooglePlay.classList.add('footer-app', 'footer-googleplay')
        footerGooglePlay.src = './img/googleplay.svg'
        footerMobileAppContainer.appendChild(footerGooglePlay)

    }
    init() {
        return this.create()
    }
}

const footer = new Footer().init()
export {footer}