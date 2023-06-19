'use strict';


export const burger = (offset=10) => {
    const burgerBtn = document.querySelector('.burger-btns'),
          burgerMenu = document.querySelector('.burger-menu'),
          close = document.querySelector('.burger-menu__close'),
          links = burgerMenu.querySelectorAll('.header__link');
          
    burgerBtn.addEventListener('click', function() {
        if(!this.classList.contains('burger-btns_active')) {
            this.classList.add('burger-btns_active');
            burgerMenu.classList.add('burger-menu_active');
        }else {
            this.classList.remove('burger-btns_active');
            burgerMenu.classList.remove('burger-menu_active');
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('burger-menu_active');
            burgerBtn.classList.remove('burger-btns_active');
        })
    })
    close.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-menu_active');
        burgerBtn.classList.remove('burger-btns_active');
    })

}

