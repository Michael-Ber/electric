'use strict';

import { scroll } from "./smoothScroll";
import { handleSubmit } from "./form";
import { burger } from "./burger";

window.addEventListener('DOMContentLoaded', () => {
    scroll({arrowSelector: '.arrow-up', arrowActiveClass: 'arrow-up_active'});
    handleSubmit();
    burger();
})