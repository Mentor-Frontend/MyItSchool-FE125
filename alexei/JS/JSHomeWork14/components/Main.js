// import { getData } from "./index.js"
class Main {
    constructor(element) {
        this.element = element
    }

    create() {
        let main = document.createElement('main')
        main.classList.add('main')
        this.element=main
        let app = document.querySelector('.app')
        app.appendChild(main)

        // let products = getData()

        let mainCategoriesContainer = document.createElement('section')
        mainCategoriesContainer.classList.add('categories_container', 'main_categories')
        main.appendChild(mainCategoriesContainer)

        let mainCategoriesElectronics = document.createElement('div')
        mainCategoriesElectronics.classList.add('categories', 'electronics')
        mainCategoriesContainer.appendChild(mainCategoriesElectronics)

        let electronicsTitle = document.createElement('h3')
        electronicsTitle.classList.add('categories_title', 'electronics_title')
        electronicsTitle.innerHTML = 'Electronics'
        mainCategoriesElectronics.appendChild(electronicsTitle)

        let electronicsImage = document.createElement('img')
        electronicsImage.classList.add('categories_image', 'electronics_image')
        electronicsImage.src



        let mainCategoriesJewelery = document.createElement('div')
        mainCategoriesJewelery.classList.add('categories', 'jewelery')
        mainCategoriesContainer.appendChild(mainCategoriesJewelery)

        let mainCategoriesMensClothing = document.createElement('div')
        mainCategoriesMensClothing.classList.add('categories', 'mens-clothing')
        mainCategoriesContainer.appendChild(mainCategoriesMensClothing)

        let mainCategorieswomensClothing = document.createElement('div')
        mainCategorieswomensClothing.classList.add('categories', 'womens-clothing')
        mainCategoriesContainer.appendChild(mainCategorieswomensClothing)
    }
    // createProducts() {

    // }
    // createCart() {

    // }
    init() {
        this.create()
        return this.element
    }
}

const main = new Main().init();
export {main};