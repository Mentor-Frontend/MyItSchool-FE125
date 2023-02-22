const productCount = 0
const totalPrice = 0
class Header {
    constructor(element) {
        this.element = element
    }

    create() {
        let element = document.createElement('header')
        element.classList.add('header')
        this.element = element
        let app = document.querySelector('.app')
        app.appendChild(element)

        let logo = document.createElement('div')
        logo.classList.add('logo')
        element.appendChild(logo)

        let logoImg = document.createElement('img')
        logoImg.classList.add('logo_img')
        logoImg.src = './img/logo_small.png'
        logo.appendChild(logoImg)

        let headRight = document.createElement('div')
        headRight.classList.add('header_cart')
        element.appendChild(headRight)

        let headUser = document.createElement('div')
        headUser.classList.add('user_ico', 'ico')
        headRight.appendChild(headUser)

        let headUserImg = document.createElement('img')
        headUserImg.src = './img/user.svg'
        headUserImg.classList.add('user_img')
        headUser.appendChild(headUserImg)

        let headCart = document.createElement('div')
        headCart.classList.add('cart_ico', 'ico')
        headRight.appendChild(headCart)

        let headCartImg = document.createElement('img')
        headCartImg.src = './img/shopping-cart.svg'
        headCartImg.classList.add('shopping-cart_img')
        headCart.appendChild(headCartImg)

        let productCouner = document.createElement('div')
        productCouner.classList.add('product_counter')
        productCouner.innerHTML = productCount
        headCart.appendChild(productCouner)

        let headerPrice = document.createElement('p')
        headerPrice.classList.add('counter_number')
        headerPrice.innerHTML = `${totalPrice}`+ '$'
        headRight.appendChild(headerPrice)


     }
    init() {
        this.create()
        return this.element
    }
}

const header = new Header().init();
export { header };