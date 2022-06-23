const burger  = document.querySelector('.burger__mobile');
const menu = document.querySelector('.nav-items__mobile');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');


burger.addEventListener('click', (e)=>{
  menu.classList.toggle("mobile-menu__active"),
  body.classList.toggle("scroll-none")
});

window.addEventListener('scroll', (e)=>{
  let scrollTop = window.scrollY;
  // let scrollCenter = window.offsetHeight /2;
  if (scrollTop > window.innerHeight ) {
    header.classList.add("header__white")
  } else {
    header.classList.remove("header__white")
  }
})




const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },

  pagination: {
    el: '.pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

});

const experienceSlider = new Swiper('.experience', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
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
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1000:{
      slidesPerView: 3,
      spaceBetween: 20
    },
  }

});
