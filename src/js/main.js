const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.news-button-next',
      prevEl: '.news-button-prev',
    },
  
  });




const burger = document.querySelector('.hamburger');
const news = document.querySelector('.news-block');
const body = document.querySelector('.body');
const header = document.querySelector('.header');





console.log(burger);

burger.addEventListener('click', (e)=>{
    burger.classList.toggle('is-active');
    news.classList.toggle('is-open');
    body.classList.toggle('modal-open');
    header.classList.toggle('header-invert');
});



