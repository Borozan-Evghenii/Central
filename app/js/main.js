(()=>{var e=document.querySelector(".burger__mobile"),t=document.querySelector(".nav-items__mobile"),i=document.querySelector(".body"),l=document.querySelector(".header");e.addEventListener("click",(function(e){t.classList.toggle("mobile-menu__active"),i.classList.toggle("scroll-none")})),window.scrollY>=window.innerHeight&&l.classList.toggle("header__white"),new Swiper(".swiper",{slidesPerView:1,loop:!0,autoplay:{delay:2e3},pagination:{el:".pagination",type:"bullets"},navigation:{nextEl:".button-next",prevEl:".button-prev"}}),new Swiper(".experience",{slidesPerView:3,spaceBetween:20,loop:!0,autoplay:{delay:2e3},breakpoints:{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},1e3:{slidesPerView:3,spaceBetween:20}}})})();
//# sourceMappingURL=main.js.map
