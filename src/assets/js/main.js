'use strict';

import { scroll } from "./smoothScroll";

window.addEventListener('DOMContentLoaded', () => {
    console.log('scripts working')
    scroll({arrowSelector: '.arrow-up', arrowActiveClass: 'arrow-up_active'})
})