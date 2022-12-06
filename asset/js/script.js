const certsSlide = new Swiper('.certs-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3,
        disableOnInteraction: true
    },
    breakpoints: {
        // when window width is >= 700px
        700: {
            slidesPerView: 5,
            spaceBetween: 0,

        },
    },
});

const certsImages = [
    "asset/img/1.png",
    "asset/img/3.png",
    "asset/img/4.png",
    "asset/img/5.png",
    "asset/img/6.png",
    "asset/img/7.png",
    "asset/img/8.png",
    "asset/img/10.png",
];

certsImages.forEach((certsImage) => {
    certsSlide.appendSlide(`
        <div class="swiper-slide">
            <img src="${certsImage}" alt="certs-image">
        </div>
    `);
})









