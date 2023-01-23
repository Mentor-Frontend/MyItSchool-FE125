export default function changeLocation(location, idProduct) {
    console.log(idProduct);
    switch (location) {
        case '/product/':
            console.log
            const app = document.querySelector('#app')
           app.innerHTML = ''
           const nameProduct = JSON.parse(
            localStorage.getItem('products')
            ).find((el) => el.id === idProduct).title
            console.log(nameProduct)
            const h2 = document.createElement('h2')
            h2.innerText = `Это продукт под названием ${nameProduct}`
           app.append(h2)
           case '/card/':
            
    }
}