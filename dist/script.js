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

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll */ "./src/assets/js/smoothScroll.js");



window.addEventListener('DOMContentLoaded', () => {
  console.log('scripts working');
  Object(_smoothScroll__WEBPACK_IMPORTED_MODULE_0__["scroll"])({
    arrowSelector: '.arrow-up',
    arrowActiveClass: 'arrow-up_active'
  });
});

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
    if (fromTop > 850) {
      arrow.classList.add(arrowActiveClass);
    } else {
      arrow.classList.remove(arrowActiveClass);
    }
  });
  arrow.addEventListener('click', function (e) {
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