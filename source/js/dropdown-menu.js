var navMain = document.querySelector('.page-header__wrapper');
var navToggle = document.querySelector('.page-header__button');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__wrapper--closed')) {
    navMain.classList.remove('page-header__wrapper--closed');
    navMain.classList.add('page-header__wrapper--opened');
  } else {
    navMain.classList.add('page-header__wrapper--closed');
    navMain.classList.remove('page-header__wrapper--opened');
  }
});
