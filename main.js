
    var swiper = new Swiper(".bg-slider-thumbs", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 0,
    //   freeMode: true,
    //   watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".bg-slider", {
      loop: true,
      spaceBetween: 10,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
      thumbs: {
        swiper: swiper,
      },
    });

    window.addEventListener("scroll", function(){
      const header = document.querySelector("header");
      header.classList.togglele("sticky", window.scrollY > 0);
    })