const windowInnerWidth = window.innerWidth
function windowInner() {
  if (windowInnerWidth >= 960) {
    $(window).resize(function(){
      if ( windowInnerWidth >= 960) {
        location.reload();
      }
    });
    let swiper = new Swiper('.popular-slider', {
      spaceBetween:20,
      slidesPerView: 4,
      loop: true,
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  if (windowInnerWidth <= 960) {
    $(window).resize(function(){
      if ( windowInnerWidth <= 960) {
        location.reload();
      }
    });
    let swiper = new Swiper('.popular-slider', {
      spaceBetween:20,
      slidesPerView: 2,
      loop: true,
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
  }
}
windowInner()  





