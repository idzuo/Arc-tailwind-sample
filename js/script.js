
AOS.init();

const swiper1 = new Swiper('.swiper-container-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
    },
});

const swiper2 = new Swiper('.swiper-container-1', {
    direction: 'horizontal',
    loop: true,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
    },
})