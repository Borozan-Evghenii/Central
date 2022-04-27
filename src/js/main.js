const burger = document.querySelector('.hamburger');
const news = document.querySelector('.news-block');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });




console.log(burger);

burger.addEventListener('click', (e)=>{
    burger.classList.toggle('is-active');
    news.classList.toggle('is-open');
});



