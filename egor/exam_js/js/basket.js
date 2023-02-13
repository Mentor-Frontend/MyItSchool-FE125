let cart={};//korzina


$.getJSON('./json/main.json', function (data) {
    let goods = data;
    checkCart();
    showCart();
    showMiniCArt();
    checkFavorites();
    showMiniFavorites(); 
    function showCart() {
        if($.isEmptyObject(cart)) {
            let out = '';
            let buscketText = document.querySelector('h2.busket_text')
            const parent = buscketText.parentNode
            parent.removeChild(buscketText)
            let formOrder = document.querySelector('div.form_order')
            const parent2 = formOrder.parentNode
            parent2.removeChild(formOrder)
            let totalPriceProduct = document.querySelector('div.total_price_product')
            const parent3 = totalPriceProduct.parentNode
            parent3.removeChild(totalPriceProduct)
            out+='<div class="text_cart">'
                out+='<h2 class="h2_cart">Корзина пустая<br> Добавьте товар, перейдя по ссылке: </h2>'
                out+='<a href="catalog.html" class="catalog_a">Каталог</a>'
            out+='</div>'
            $('.my-busket').html(out);
        }else{
            let out = '';
            sum = 0;
            for(let key in cart){
                sum= sum + cart[key]*goods[key].price 
                $('.total_price_product p.p_price').html(sum)
                $('.total p.price_footer').html(sum)
            }   
            for (let key in cart) {
                out+= '<div class="product">'
                    out+='<img src="'+data[key].image+'" class="img_product">';
                    out+='<h2 class="name_product">'+data[key].name+'</h2>'
                    out+='<img src="'+data[key].color+'" class="image_color">'
                    out+='<div class="select" >'
                        out+='<select value="0">'
                            out+='<option value="1" class="size">'+data[key].sizeXxs+'</option>'
                            out+='<option value="2" class="size">'+data[key].sizeXs+'</option>'
                            out+='<option value="3" class="size">'+data[key].sizeS+'</option>'
                            out+='<option value="4" class="size">'+data[key].sizeM+'</option>'
                            out+='<option value="5" class="size">'+data[key].sizeL+'</option>'
                        out+='</select>'
                    out+='</div>'
                    out+='<div class="buttons_minus_plus">'
                        out+='<button class="minus style_buttons_plus_minus" data-art="'+key+'">-</button>'
                        out+=cart[key];
                        out+='<button class="plus style_buttons_plus_minus" data-art="'+key+'">+</button>'
                    out+='</div>'
                    out+='<div class="total_price">'+cart[key]*goods[key].price+ ' грн'+'</div>'
                    out+='<button class="buton_delete" data-art="'+key+'"><img src="./img/icons/trash_can.png"</button>'
                    
                    
                out+= '</div>'
                out+='<hr class="hr_cart">'
                
            }
        
            $('.my-busket_container').html(out);
            $('.plus').on('click', plusGoods)
            $('.minus').on('click', minusGoods) 
            $('.buton_delete').on('click', deleteGoods) 
        }
    }
    

    function plusGoods() {
        let articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLo(); // сохраняю в localStorage
        showCart();
        showMiniCArt()
    }
    function minusGoods() {
        let articul = $(this).attr('data-art');
        if(cart[articul]>1) {
            cart[articul]--
        }else {
            delete cart[articul]
        };
        saveCartToLo(); // сохраняю в localStorage
        showCart();
        showMiniCArt()
    }
    function deleteGoods() {
        let articul = $(this).attr('data-art');
        delete cart[articul]
        saveCartToLo(); // сохраняю в localStorage
        showCart();
        showMiniCArt()
    }
    
});

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
function showMiniCArt() {
    // показываю содержимое корзины
    let out='';
    sum = 0;
    for(var key of Object.values(cart)) {
        sum += key;
    }
    $('.number_thing').html(sum)
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









