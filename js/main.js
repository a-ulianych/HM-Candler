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

    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        }
    },
});

//Accordeon
const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordionTitle) {
    accordionTitle.addEventListener('click', () => {
        const currentText = accordionTitle.parentElement.querySelector('.accordeon__text');

        accordionTitle.classList.toggle('accordeon__title--active');
        currentText.classList.toggle('accordeon__text--visible');

        if (currentText.classList.contains('accordeon__text--visible')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px';
        } else {
            currentText.style.maxHeight = null;
        }
    });
});