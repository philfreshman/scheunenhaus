const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    speed: 2000,
    pagination: {
        // el: ".swiper-pagination",
        clickable: true
    },
    loop: true,
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: false
    // },
    // speed: 200,
    // spaceBetween: 0,
    // centeredSlides: true,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    // autoplay: true,
    // pagination: {
    //     clickable: true,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // }


    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },

});