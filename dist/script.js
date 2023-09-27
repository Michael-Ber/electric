/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! exports provided: burger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "burger", function() { return burger; });


const burger = function () {
  let offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  const burgerBtn = document.querySelector('.burger-btns'),
    burgerMenu = document.querySelector('.burger-menu'),
    close = document.querySelector('.burger-menu__close'),
    links = burgerMenu.querySelectorAll('.header__link');
  burgerBtn.addEventListener('click', function () {
    if (!this.classList.contains('burger-btns_active')) {
      this.classList.add('burger-btns_active');
      burgerMenu.classList.add('burger-menu_active');
    } else {
      this.classList.remove('burger-btns_active');
      burgerMenu.classList.remove('burger-menu_active');
    }
  });
  links.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('burger-menu_active');
      burgerBtn.classList.remove('burger-btns_active');
    });
  });
  close.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu_active');
    burgerBtn.classList.remove('burger-btns_active');
  });
};

/***/ }),

/***/ "./src/assets/js/form.js":
/*!*******************************!*\
  !*** ./src/assets/js/form.js ***!
  \*******************************/
/*! exports provided: handleSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return handleSubmit; });
/* harmony import */ var _sendRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendRequest */ "./src/assets/js/sendRequest.js");



const handleSubmit = () => {
  try {
    const form = document.querySelector('.contacts__form');
    const btn = form.querySelector('.btn');
    const inputs = form.querySelectorAll('input');
    const msg = document.createElement('div');
    msg.classList.add('message');
    form.addEventListener('submit', e => {
      e.preventDefault();
      btn.innerHTML = '<div class="spinner"><img src="./assets/img/spinner.gif" alt="spinner"/></div>';
      let dataObj = {};
      inputs.forEach(input => {
        dataObj = {
          ...dataObj,
          [input.name]: input.value
        };
      });
      const resp = Object(_sendRequest__WEBPACK_IMPORTED_MODULE_0__["sendReq"])('./mailer/smart.php', dataObj);
      resp.then(() => {
        inputs.forEach(input => {
          input.value = '';
        });
      }).then(() => {
        msg.classList.add('message_success');
        msg.innerHTML = 'Письмо отправлено. Скоро я с вами свяжусь.';
        form.appendChild(msg);
        setTimeout(() => {
          msg.classList.remove('message_success');
        }, 5000);
      }).catch(() => {
        msg.classList.add('message_danger');
        msg.innerHTML = 'Произошла непредвиденная ошибка. Попробуйте еще раз.';
        form.appendChild(msg);
      }).finally(() => {
        btn.innerHTML = 'Отправить';
      });
    });
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll */ "./src/assets/js/smoothScroll.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/assets/js/form.js");
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ "./src/assets/js/burger.js");





window.addEventListener('DOMContentLoaded', () => {
  Object(_smoothScroll__WEBPACK_IMPORTED_MODULE_0__["scroll"])({
    arrowSelector: '.arrow-up',
    arrowActiveClass: 'arrow-up_active'
  });
  Object(_form__WEBPACK_IMPORTED_MODULE_1__["handleSubmit"])();
  Object(_burger__WEBPACK_IMPORTED_MODULE_2__["burger"])();
});

/***/ }),

/***/ "./src/assets/js/sendRequest.js":
/*!**************************************!*\
  !*** ./src/assets/js/sendRequest.js ***!
  \**************************************/
/*! exports provided: sendReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendReq", function() { return sendReq; });


const sendReq = async (url, data) => {
  try {
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res;
  } catch (e) {
    throw e;
  }
};

/***/ }),

/***/ "./src/assets/js/smoothScroll.js":
/*!***************************************!*\
  !*** ./src/assets/js/smoothScroll.js ***!
  \***************************************/
/*! exports provided: scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
const scroll = _ref => {
  let {
    arrowSelector,
    arrowActiveClass
  } = _ref;
  const links = document.querySelectorAll('[href^="#"]');
  const speed = 0.2;
  let arrow = document.querySelector(arrowSelector);
  window.addEventListener('scroll', () => {
    let fromTop = document.documentElement.scrollTop;
    if (arrow) {
      if (fromTop > 850) {
        arrow.classList.add(arrowActiveClass);
      } else {
        arrow.classList.remove(arrowActiveClass);
      }
    }
  });
  arrow && arrow.addEventListener('click', function (e) {
    e.preventDefault();
    let toSection = -document.documentElement.scrollTop;
    let fromTop = document.documentElement.scrollTop;
    let start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) {
        start = time;
      }
      let progress = time - start;
      let r = toSection < 0 ? Math.max(fromTop - progress / speed, fromTop + toSection) : Math.min(fromTop + progress / speed, fromTop + toSection);
      document.documentElement.scrollTo(0, r);
      console.log(r, fromTop + toSection);
      if (r != fromTop + toSection) {
        requestAnimationFrame(step);
      }
    }
  });
  links.forEach(link => {
    if (link.hash) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        let toSection = document.querySelector(link.hash).getBoundingClientRect().top - 100;
        let fromTop = document.documentElement.scrollTop;
        let start = null;
        requestAnimationFrame(step);
        function step(time) {
          if (start === null) {
            start = time;
          }
          let progress = time - start;
          let r = toSection < 0 ? Math.max(fromTop - progress / speed, fromTop + toSection) : Math.min(fromTop + progress / speed, fromTop + toSection);
          document.documentElement.scrollTo(0, r);
          console.log(r, fromTop + toSection);
          if (r != fromTop + toSection) {
            requestAnimationFrame(step);
          }
        }
      });
    }
  });
};


/***/ })

/******/ });
//# sourceMappingURL=script.js.map