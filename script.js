const slider = document.querySelector('.site-properties__items');

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

//слайдер сертификатов
const certificatesSlider = document.querySelector('.certificates__swiper');

let swiperCertificates;

const certificatesSliderInit = () => {
  swiperCertificates = new Swiper(certificatesSlider, {
    direction: 'horizontal',
    centeredSlides: true,
    spaceBetween: 50,
    slidesPerView: 'auto',

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

const btnArrow = document.querySelector('.site-properties__btn-arrow');
const sitePropertiesItems = document.querySelector('.site-properties__items');
const sitePropertiesList = sitePropertiesItems.querySelector(
  '.site-properties__list'
);
const menuBurger = document.querySelector('.menu');
const btnBurger = document.querySelector('.header__menu-mobile-btn');
const btnMenuClose = document.querySelector('.menu__button-close');

const formContainer = document.querySelector('.form-apply-order');
const formBtnClose = formContainer.querySelector('.form__btn-close');
const formApplying = formContainer.querySelector('form-applying');
const btnFormOpen = document.querySelectorAll('.btn-open-form');
const btnFormClose = formContainer.querySelector('.form__btn-close');

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

// открыть форму и закрыть форму

function openFormApplay () {
  formContainer.classList.add('form--active');
  disableScroll();
  }
  
  function closeFormApplay () {
    formContainer.classList.remove('form--active');
    enableScroll();
  }

  // функция для отключеня сабмита формы по дефолту
  function handleFormSubmit (e) {
    e.preventDefault();
    console.log('Отправка из формы')
  }

function openMenu() {
  btnBurger.classList.remove('header__menu-mobile-btn--no-active');
  btnBurger.classList.add('header__menu-mobile-btn--active');
  menuBurger.classList.add('menu--opened');
  disableScroll();
}

function closeMenu() {
  btnBurger.classList.remove('header__menu-mobile-btn--active');
  btnBurger.classList.add('header__menu-mobile-btn--no-active');
  menuBurger.classList.remove('menu--opened');
  enableScroll();
}

function toggleBtnBurger() {
  if (btnBurger.classList.contains('header__menu-mobile-btn--no-active')) {
    openMenu();
    
  } else {
    closeMenu();
    
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

function toggleSliderCertificates () {
  if (window.innerWidth <= 1340) {
    if (!swiperCertificates) {
      certificatesSliderInit();
    }
  } else {
    if (swiperCertificates) {
      swiperCertificates.destroy(true, true);
      swiperCertificates = null;
    }
  }
}

function toggleSwiper() {
  if (window.innerWidth <= 767) {
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
toggleSliderCertificates ();

window.addEventListener('resize', toggleSwiper);
window.addEventListener('resize', toggleSliderCertificates);
btnBurger.addEventListener('click', toggleBtnBurger);
btnMenuClose.addEventListener('click',closeMenu);
btnArrow.addEventListener('click', toggleBtnArrow);
menuBurger.addEventListener('click', function (evt) {
  console.log(evt.target);
  if (evt.target.classList.contains('menu--opened') || evt.target.classList.contains('menu__link')) {
    closeMenu();
  }
});

// btnFormOpen.addEventListener('click', openFormApplay);
btnFormClose.addEventListener('click', closeFormApplay);
formContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('form--active')) {
    closeFormApplay();
  }
});
btnFormOpen.forEach(btn => btn.addEventListener('click', openFormApplay));