
$('.button_size').click(function(){
    $(".list_size").fadeToggle(100);
  });

$('.button_color').click(function(){
    $(".list_color").fadeToggle(100);
  });

$('.button_price').click(function(){
    $(".list_price").fadeToggle(100);
    });            

$('.button_sort').click(function(){
    $(".list_sort").fadeToggle(100);
  });
  
$('.button_catalog').click(function(){
    $(".catalog_ul").fadeToggle(100);
});

// цена по убыванию или по возрастанию
document.querySelector('#sort-asc').onclick=  mySort;
document.querySelector('#sort-desc').onclick= mySortDesc;

  function mySort() {
    let thing = document.querySelector('.things_container');
    for (let i = 0; i < thing.children.length; i++) {
      for (let p = 0; p < thing.children.length; p++){
        if (+thing.children[i].getAttribute('data-price') < +thing.children[p].getAttribute('data-price')){
          replacedNode = thing.replaceChild(thing.children[i], thing.children[p]);
          insertAfter(replacedNode, thing.children[i])
        }
      }  
    }
  }
  

  function mySortDesc() {
    let thing = document.querySelector('.things_container');
    for (let i = 0; i < thing.children.length; i++) {
      for (let p = 0; p < thing.children.length; p++){
        if (+thing.children[i].getAttribute('data-price') > +thing.children[p].getAttribute('data-price')){
          replacedNode = thing.replaceChild(thing.children[i], thing.children[p]);
          insertAfter(replacedNode, thing.children[i])
        }
      }  
    }
  }
  
  function insertAfter(elem, refElem) {
    
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }

// сортиовка по цвету
  document.querySelector('#color-white').onclick= myColorWhite;
  document.querySelector('#color-blue').onclick= myColorBlue;
  document.querySelector('#color-yellow').onclick= myColorYellow;

    function myColorWhite() {
      let thing = document.querySelector('.white');
      if (thing != false){
        $(".yellow").fadeToggle(100)
        $(".blue").fadeToggle(100)
        
      }
    }

    function myColorBlue() {
      let thing = document.querySelector('.blue');
      if (thing != false){
        $(".white").fadeToggle(100)
        $(".yellow").fadeToggle(100)
        
      }
    }

    function myColorYellow() {
      let thing = document.querySelector('.yellow');
      if (thing != false){
        $(".white").fadeToggle(100)
        $(".blue").fadeToggle(100)
        
      }
    }

// сортировка по цене