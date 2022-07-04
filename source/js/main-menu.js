'use strict';

const mainMenu = () => {

  const openMenuSvg = document.querySelector('.header__toggle-open');
  const closeMenuSvg = document.querySelector('.header__toggle-close');
  const navigationMobile = document.querySelector('.header-list');
  const body = document.querySelector('.page');

  const openMenu = () => {
    navigationMobile.classList.add('is-active');
    openMenuSvg.classList.add('is-hidden');
    closeMenuSvg.classList.remove('is-hidden');
    body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    navigationMobile.classList.remove('is-active');
    openMenuSvg.classList.remove('is-hidden');
    closeMenuSvg.classList.add('is-hidden');
    body.classList.remove('no-scroll');
  };


  openMenuSvg.addEventListener('click', openMenu);
  closeMenuSvg.addEventListener('click', closeMenu);

};


export {mainMenu};
