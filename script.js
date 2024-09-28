const slider = document.querySelector('.swiper');

let swiper;

const sliderInit = () => {
 swiper = new Swiper(slider, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Делает пагинацию кликабельной
  },
});
}
const btnArrow = document.querySelector('.site-properties__btn-arrow');
const sitePropertiesItems = document.querySelector('.site-properties__items');
const sitePropertiesList = sitePropertiesItems.querySelector(
  '.site-properties__list'
);
// const sitePropertiesItem = sitePropertiesList.querySelector(
//   'site-properties__item'
// );


function toggleBtnArrow () {
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
  if (window.innerWidth <= 360) {
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
btnArrow.addEventListener('click', toggleBtnArrow);