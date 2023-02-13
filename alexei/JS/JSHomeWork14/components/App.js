class App {
    constructor(element){
        this.element = element
    }

    create() {
        const app = document.createElement('div')
        app.classList.add('app')
        this.element=app
     }

    render() {
        document.body.appendChild(this.element)
    }

    init() {
        let styles = document.createElement('link')
        styles.rel = 'stylesheet'
        styles.href = './css/styles.css'
        document.head.appendChild(styles)



        this.create()
        this.render()
        this.getData()

        return this.element
    }
    async getData() {
        let products = localStorage.getItem('products');
        if (products) {
            console.log('Not empty localStorage');
            return 0;
        }
        
            let response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok) {
                console.error('ERROR!'); 
                return 0;
            } 
            let data = response.json();
            await data.then(function(items) {
                localStorage.setItem('products', JSON.stringify(items));
                return items;
            });
    } 
     };

export default new App()
