const myJson = [
    {
        "name" : "Белая куртка",
        "price" : 2900,
        "image" : "../img/product/product1.png",
        "colorThing" : "white",
        "sizeXxs": "XXS",
        "sizeXs": "XS",
        "sizeS": "S",
        "sizeM": "M",
        "sizeL": "L",
        "color" : "../img/icons/white.png",
        "buttonImg" : "../img/icons/favorites.png",
        "id": "1"
    },
    {
        "name" : "Синее пальто",
        "price" : 3150,
        "image" : "../img/product/product2.png",
        "colorThing" : "blue",
        "sizeXxs": "XXS",
        "sizeXs": "XS",
        "sizeS": "S",
        "sizeM": "M",
        "sizeL": "L",
        "color" : "../img/icons/blue.png",
        "buttonImg" : "../img/icons/favorites.png",
        "id": "2"
    },
    {
        "name" : "Бежевая шуба",
        "price" : 4200,
        "image" : "../img/product/product3.png",
        "colorThing" : "yellow",
        "sizeXxs": "XXS",
        "sizeXs": "XS",
        "sizeS": "S",
        "sizeM": "M",
        "sizeL": "L",
        "color" : "../img/icons/beige.png",
        "buttonImg" : "../img/icons/favorites.png",
        "id": "3"
    },
    {
        "name" : "Синяя парка",
        "price" : 3400,
        "image" : "../img/product/product4.png",
        "colorThing" : "blue",
        "sizeXxs": "XXS",
        "sizeXs": "XS",
        "sizeS": "S",
        "sizeM": "M",
        "sizeL": "L",
        "color" : "../img/icons/blue.png",
        "buttonImg" : "../img/icons/favorites.png",
        "id": "4"
    },
    {
        "name" : "Белая куртка",
        "price" : 2900,
        "image" : "../img/product/product1.png",
        "colorThing" : "white",
        "sizeXxs": "XXS",
        "sizeXs": "XS",
        "sizeS": "S",
        "sizeM": "M",
        "sizeL": "L",
        "color" : "../img/icons/white.png",
        "buttonImg" : "../img/icons/favorites.png",
        "id": "5"
    },
    {
        "name" : "Синее пальто",
        "price" : 3150,
        "image" : "../img/product/product2.png",
        "colorThing" : "blue",
        "sizeXxs": "XXS",
        "sizeXs": "XS",
        "sizeS": "S",
        "sizeM": "M",
        "sizeL": "L",
        "color" : "../img/icons/blue.png",
        "buttonImg" : "../img/icons/favorites.png",
        "id": "6"
    },
    {
        "name" : "Бежевая шуба",   
        "price" : 4200,
        "image" : "../img/product/product3.png",
        "colorThing" : "yellow",
        "sizeXxs": "XXS",
        "sizeXs": "XS",
        "sizeS": "S",
        "sizeM": "M",
        "sizeL": "L",
        "color" : "../img/icons/beige.png",
        "buttonImg" : "../img/icons/favorites.png",
        "id": "7"
    },
    {
        "name" : "Синяя парка",
        "price" : 3400,
        "image" : "../img/product/product4.png",
        "colorThing" : "blue",
        "sizeXxs": "XXS",
        "sizeXs": "XS",
        "sizeS": "S",
        "sizeM": "M",
        "sizeL": "L",
        "color" : "../img/icons/blue.png",
        "buttonImg" : "../img/icons/favorites.png",
        "id": "8"
    }
];

function viewElements (value) {
    document.querySelector('.list-holder').innerHTML = ' '
    document.querySelector('.list-holder').style.cssText= ''
    if (value) {
        const findProducts = myJson.filter ((product) => 
        product.name.includes(value));

        if (findProducts.length > 0 ) {
            const arrFindProducts = findProducts.map(product => createSearchElement(product))
            document.querySelector('.list-holder').innerHTML = arrFindProducts.join('')
            document.querySelector('.list-holder').style.cssText= 'background: #fff; border: 1px solid #000; border-radius: 10px; '
        }
        
    }
}

function createSearchElement(product) {
    const innerHtml = `
        <li class="search_product">
            <a href="">
                <img class="img_search" src="${product.image}">
                <p>${product.name}</p>
                
            </a>
            <hr>
        </li>
    `
    
    return innerHtml
}
