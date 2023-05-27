const swiper = new Swiper('.rights__cards', {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: '.button__right',
      prevEl: '.button__left',
    },

    pagination: {
      el: ".swiper-button",
      type: "fraction",
    },
    
});