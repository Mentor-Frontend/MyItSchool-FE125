let cart= {};
let favorites= {};
$('document').ready(function () {
    loadGods();
    checkCart();
    showMiniCArt();
    checkFavorites()
    showMiniFavorites()
})

function loadGods() {
    // Загружает товар на страницу
    $.getJSON('json/main.json', function (data) {
        //console.log(data);
        let out = '';
        for (let key in data) {
            
                out += '<div class="thing '+data[key]['colorThing']+'" id = "'+data[key]['id']+'" data-price="'+data[key]['price']+'">';                    
                    out += '<div class="header_thing">';
                        out += '<button class="button_favorites" data-art="'+key+'">'
                            out += '<img src="'+data[key]['buttonImg']+'">';                                
                        out += '</button>'
                        out +='<a href="">';
                            out += '<img class="img_catalog" src="'+data[key].image+'">'
                        out += '</a>';                      
                    out += '</div>';                   
                    out+='<div class="footer_thing">'
                        out +='<h2 class="class_thing">' +data[key] ['name']+ '</h2>';
                        out +='<h2 class="price_thing">' +data[key] ['price']+ '</h2>';
                        out += '<ul class="list_size_thing">'
                            out+= '<li class="size_li">'
                                out+='<a href="" class="link_size">'+data[key]['sizeXxs']+'</a>'
                            out+='</li>'
                            out+= '<li class="size_li">'
                                out+='<a href="" class="link_size">'+data[key]['sizeXs']+'</a>'
                            out+='</li>'
                            out+= '<li class="size_li">'
                                out+='<a href="" class="link_size">'+data[key]['sizeS']+'</a>'
                            out+='</li>'
                            out+= '<li class="size_li">'
                                out+='<a href="" class="link_size">'+data[key]['sizeM']+'</a>'
                            out+='</li>'
                            out+= '<li class="size_li">'
                                out+='<a href="" class="link_size">'+data[key]['sizeL']+'</a>'
                            out+='</li>'
                        out += '</ul>'
                        out+='<div class="color">'
                            out+='<a href="" class="link_color">'
                                out+='<div class="input_color white_color">'
                                out+='</div>'
                            out+='</a>'
                            out+='<a href="" class="link_color">'
                                out+='<div class="input_color blue_color">'
                                out+='</div>'
                            out+='</a>'
                            out+='<a href="" class="link_color">'
                                out+='<div class="input_color beige_color">'
                                out+='</div>'
                            out+='</a>'
                        out += '</div>';
                        out += '<button class="button_add" data-art="'+key+'">Добавить в корзину</button>'
                    out += '</div>';
                out += '</div>';
           
        }
        $('.things_container').html(out);
        $('button.button_add').on('click', addToCart);
        $('button.button_favorites').on('click',addToFavorites)
        
    })
}
// в избранное
function addToFavorites() {
    //Добавляем товар в избранное
    let articul =$(this).attr('data-art');
    if (favorites[articul]!=undefined) {
        favorites[articul]++
    }else{
        favorites[articul]=1;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
    showMiniFavorites()
}

function checkFavorites() {
    // проверяю содержимое в localStorage
    if(localStorage.getItem('favorites')!= null) {
        favorites=JSON.parse(localStorage.getItem('favorites'));
    }
}

function showMiniFavorites() {
    // показываю содержимое избранного
    let out='';
    sum2 = 0;
    for(let key of Object.values(favorites)) {
        sum2 += 1;
    }
    $('.number_favorites').html(sum2)
}




// в корзину

function addToCart() {
    //Добавляем товар в корзину
    let articul =$(this).attr('data-art');
    if (cart[articul]!=undefined) {
        cart[articul]++
    }else{
        cart[articul]=1;
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    showMiniCArt()
}

function checkCart() {
    // проверяю содержимое в localStorage
    if(localStorage.getItem('cart')!= null) {
        cart=JSON.parse(localStorage.getItem('cart'));
    }
}

function showMiniCArt() {
    // показываю содержимое корзины
    let out='';
    sum = 0;
    for(let key of Object.values(cart)) {
        sum += key;
    }
    $('.number_thing').html(sum)
}

$

