(()=>{var e=document.querySelector(".news-burger"),r=document.querySelector(".body"),s=document.querySelector(".header-logo"),t=document.querySelector(".button"),o=document.querySelector(".news");document.querySelector(".header"),e.addEventListener("click",(function(i){e.classList.toggle("news-burger--is-open"),o.classList.toggle("news--is-open"),s.classList.toggle("invert"),t.classList.toggle("invert"),e.classList.toggle("invert"),r.classList.toggle("scroll-none")})),document.querySelectorAll(".rooms-post").forEach((function(e){e.addEventListener("mouseenter",(function(e){var r=e.currentTarget,s=r.dataset.bgurl;r.style.setProperty("background-image","url("+s+")")})),e.addEventListener("mouseout",(function(e){e.currentTarget.style.removeProperty("background-image")}))})),new Swiper(".news-slider",{loop:!0,slidesPerView:1,spaceBetween:20,navigation:{nextEl:".slider-arrow--right",prevEl:".slider-arrow--left"},breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1},640:{slidesPerView:2},1100:{slidesPerView:3}}}),new Swiper(".rooms-slider",{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".room-slider-arrow--right",prevEl:".room-slider-arrow--left"},breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1},640:{slidesPerView:2},1100:{slidesPerView:2}}})})();
//# sourceMappingURL=main.js.map
