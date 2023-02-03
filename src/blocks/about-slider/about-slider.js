(function(){
  const about = new Swiper('.about-slider', {
    speed: 400,
    spaceBetween: 4,
    //loop: true,
    /*autoplay: {
      delay: 1000,
    },*/
    slidesPerView: 'auto',
    preloadImages: false,
    lazy: true,
    watchSlidesProgress: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
}());
