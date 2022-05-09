const burger  = document.querySelector('.news-burger');
const body    = document.querySelector('.body');
const logo    = document.querySelector('.header-logo');
const button  = document.querySelector('.button');
const news    = document.querySelector('.news');
const header  = document.querySelector('.header');

burger.addEventListener('click', (e) => {

    //add animation to burger closes/open
    burger.classList.toggle('news-burger--is-open');
    news.classList.toggle('news--is-open');
    logo.classList.toggle('invert');
    button.classList.toggle('invert');
    burger.classList.toggle('invert');
    body.classList.toggle('scroll-none');
    

    
});


//Room Hover Card
const roomPost  = document.querySelectorAll('.rooms-post');

roomPost.forEach( (e) => {
  e.addEventListener('mouseenter', (e)=> {
    let element = e.currentTarget;
    let url = element.dataset.bgurl;
    element.style.setProperty('background-image', 'url(' + url + ')')
  });
  e.addEventListener('mouseout', (e)=> {
    let element = e.currentTarget;
    element.style.removeProperty('background-image')
  });
});

// News Slider

const newsSlider = new Swiper('.news-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-arrow--right',
      prevEl: '.slider-arrow--left',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,

      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,

      },
      // when window width is >= 640px
      1100: {
        slidesPerView: 3,

      }
    }
  
});

// Rooms Slider

const roomSlider = new Swiper('.rooms-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,


  // Navigation arrows
  navigation: {
    nextEl: '.room-slider-arrow--right',
    prevEl: '.room-slider-arrow--left',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,

    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,

    },
    // when window width is >= 640px
    1100: {
      slidesPerView: 2,

    }
  }

});
