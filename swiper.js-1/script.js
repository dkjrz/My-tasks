//  SWIPER JS CODE:
// const swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

//-----------------

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, 
  spaceBetween: 10, 
  loop: true, 

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  speed: 500, 
});