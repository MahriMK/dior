const swiperTop = new Swiper(".top__slider", {
  // Optional parameters
  // direction: "vertical",
  effect: "fade",
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperAbout = new Swiper(".about__slider", {
  // slidesPerView: 4,
  // spaceBetween: 20,
  freeMode: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      // spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // 1025: {
    //   slidesPerView: 4,
    //   spaceBetween: 20,
    // },
  },
});

// accordeon
document.querySelectorAll(".accordeon__trigger").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("accordeon__item--active");
  });
});
