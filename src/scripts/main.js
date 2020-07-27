'use strict';

const navState = document.querySelector('.header__nav');
const logo = document.querySelector('.logo');
const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', (e) => {
  navState.classList.toggle('nav-active');
  logo.classList.toggle('header__logo-active');
  toggler.classList.toggle('burger_active');
});
