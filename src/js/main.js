const burger = document.querySelector('.news-burger');
const logo = document.querySelector('.header-logo');
const button = document.querySelector('.button');
const news = document.querySelector('.news');
const header = document.querySelector('.header');

burger.addEventListener('click', (e) => {

    //add animation to burger closes/open
    burger.classList.toggle('news-burger--is-open');
    news.classList.toggle('news--is-open');
    logo.classList.toggle('invert');
    button.classList.toggle('invert');
    burger.classList.toggle('invert');
    

    
});



// News Slider

const swiper = new Swiper('.news-slider', {
    // Optional parameters
    loop: true,
    slidesPerView:3,
    spaceBetween: 20,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-arrow--right',
      prevEl: '.slider-arrow--left',
    },
  
});



//Gsap Animation 
gsap.from("news--is-open", {
      opacity: 0, 
      visibility:0,
      height: 0,
      duration: 1
});
