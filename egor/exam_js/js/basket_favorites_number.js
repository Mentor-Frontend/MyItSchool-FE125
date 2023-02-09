let cart={};

$('document').ready(function () {
    checkCart()
    showMiniCArt();
    checkFavorites()
    showMiniFavorites() 
})
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
// /////////// Footer

$('.button_company').click(function(){
    $(".company_links").fadeToggle(100);
});

$('.button_useful').click(function(){
    $(".useful_links").fadeToggle(100);
});

$('.button_buyer').click(function(){
    $(".buyer_links").fadeToggle(100);
});

