const slider = document.querySelector('.swiper');

let swiper;

const sliderInit = () => {
  swiper = new Swiper(slider, {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    spaceBetween: 50,
    slidesPerView: 'auto',

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

const btnArrow = document.querySelector('.site-properties__btn-arrow');
const sitePropertiesItems = document.querySelector('.site-properties__items');
const sitePropertiesList = sitePropertiesItems.querySelector(
  '.site-properties__list'
);
const menuBurger = document.querySelector('.menu');
const btnBurger = document.querySelector('.header__menu-mobile-btn');
const btnMenuClosed = document.querySelector('.menu__button-close');

const formContainer = document.querySelector('.form');
const formBtnClose = formContainer.querySelector('.form__btn-close');
const formApplying = formContainer.getElementById('form-applying');

function handleFormSubmit (e) {
  e.preventDefault();
  console.log('Отправка из формы')
}

function preventDefault(e) {
  e.preventDefault();
}

// функции для блокировки и разблокировки scroll
function disableScroll() {
  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, { passive: false });
}

function enableScroll() {
  window.removeEventListener('wheel', preventDefault);
  window.removeEventListener('touchmove', preventDefault);
}

function openMenu() {
  btnBurger.classList.remove('header__menu-mobile-btn--no-active');
  btnBurger.classList.add('header__menu-mobile-btn--active');
  menuBurger.classList.add('menu--opened');
}

function closeMenu() {
  btnBurger.classList.remove('header__menu-mobile-btn--active');
  btnBurger.classList.add('header__menu-mobile-btn--no-active');
  menuBurger.classList.remove('menu--opened');
}

function toggleBtnBurger() {
  if (btnBurger.classList.contains('header__menu-mobile-btn--no-active')) {
    openMenu();
    disableScroll();
  } else {
    closeMenu();
    enableScroll();
  }
}

function toggleBtnArrow() {
  btnArrow.classList.toggle('site-properties__btn-arrow--opened');
  if (btnArrow.classList.contains('site-properties__btn-arrow--opened')) {
    sitePropertiesList.style.height = 'auto';
    sitePropertiesList.style.overflow = 'visible';
  }
  if (!btnArrow.classList.contains('site-properties__btn-arrow--opened')) {
    sitePropertiesList.style.height = '237px';
    sitePropertiesList.style.overflow = 'hidden';
  }
}

function toggleSwiper() {
  if (window.innerWidth <= 826) {
    if (!swiper) {
      sliderInit();
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}

toggleSwiper();

window.addEventListener('resize', toggleSwiper);
btnBurger.addEventListener('click', toggleBtnBurger);
btnMenuClosed.addEventListener('click',closeMenu);
btnArrow.addEventListener('click', toggleBtnArrow);
menuBurger.addEventListener('click', function (evt) {
  console.log(evt.target);
  if (evt.target.classList.contains('menu--opened')) {
    closeMenu();
  }
});

// Слушатели для формы
formApplying.addEventListener('submit', handleFormSubmit);