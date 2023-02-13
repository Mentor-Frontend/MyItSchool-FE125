let favorites={};
let cart = {}

$.getJSON('./json/main.json', function (data) {
    let goods = data;
    checkFavorites();
    showFavorites();
    showMiniFavorites();
    checkCart();
    showMiniCArt();
    function showFavorites() {
        if($.isEmptyObject(favorites)) {
            let out = '';
            let favoritesText = document.querySelector('h1.h1_favorites')
            const parent = favoritesText.parentNode
            parent.removeChild(favoritesText)
            out+= '<div class="way_link"><span>Главная <img src="./img/icons/arrow2.png" alt=""> Корзина</span></div>'
            out+='<div class="text_favorites">'
                out+='<h2 class="h2_favorites">Избранное пустое<br> Добавьте товар, перейдя по ссылке: </h2>'
                out+='<a href="catalog.html" class="catalog_a">Каталог</a>'
            out+='</div>'
            $('main').html(out);
        }else{
            let out = ''; 
            for (let key in favorites) {
                out += '<div class="thing_favorites">';                    
                    out += '<div class="header_thing">';
                        out += '<button class="button_favorites buton__delete" data-art="'+key+'">'
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
        
            $('.favorites_container').html(out);
            $('button.button_add').on('click', addToCart);
            $('.buton__delete').on('click', deleteGoods) 
        }
    }
    function deleteGoods() {
        let articul = $(this).attr('data-art');
        delete favorites[articul]
        saveFavoritesToLo(); // сохраняю в localStorage
        showFavorites();
        showMiniFavorites()
        
    }
})







function checkFavorites() {
    // проверяю содержимое в localStorage
    if(localStorage.getItem('favorites')!= null) {
        favorites=JSON.parse(localStorage.getItem('favorites'));
    }
}
function saveFavoritesToLo(){
    localStorage.setItem('favorites', JSON.stringify(favorites))
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


function showMiniCArt() {
    // показываю содержимое корзины
    let out='';
    sum = 0;
    for(let key of Object.values(cart)) {
        sum += key;
    }
    $('.number_thing').html(sum)
}


function checkCart() {
    // проверяю содержимое в localStorage
    if(localStorage.getItem('cart') != null) {
        cart=JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCartToLo(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

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