const burger  = document.querySelector('.burger');
const nav = document.querySelector('.nav-items');


const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },



  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },

});

const experienceSlider = new Swiper('.experience-slider', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }

});


const restaurantSlider= new Swiper('.swiper-restaurant', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },



  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },

});
