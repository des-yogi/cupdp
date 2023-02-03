(function(){
  const about = new Swiper('.partners-slider__swiper', {
    speed: 400,
    spaceBetween: 8,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 'auto',
    preloadImages: false,
    lazy: true,
    watchSlidesProgress: true,
    //grabCursor: true,
  });
}());
