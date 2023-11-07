const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});

// Slider
const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    spaceBetween: 30,
});

const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    spaceBetween: 20,
    slidesPerView: 3,
});