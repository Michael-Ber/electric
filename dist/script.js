!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=()=>{const e=document.querySelector(".contacts__form"),t=e.querySelector(".btn"),n=e.querySelectorAll("input"),r=document.createElement("div");r.classList.add("message"),e.addEventListener("submit",o=>{o.preventDefault(),t.innerHTML='<div class="spinner"><img src="./assets/img/spinner.gif" alt="spinner"/></div>';let c={};n.forEach(e=>{c={...c,[e.name]:e.value}});(async(e,t)=>{try{let n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error(`Could not fetch ${e}, status ${n.status}`);return await n}catch(e){throw e}})("mailer/smart.php",c).then(()=>{n.forEach(e=>{e.value=""})}).then(()=>{r.classList.add("message_success"),r.innerHTML="Письмо отправлено. Скоро я с вами свяжусь.",e.appendChild(r),setTimeout(()=>{r.classList.remove("message_success")},5e3)}).catch(()=>{r.classList.add("message_danger"),r.innerHTML="Произошла непредвиденная ошибка. Попробуйте еще раз.",e.appendChild(r)}).finally(()=>{t.innerHTML="Отправить"})})};window.addEventListener("DOMContentLoaded",()=>{(e=>{let{arrowSelector:t,arrowActiveClass:n}=e;const r=document.querySelectorAll('[href^="#"]');let o=document.querySelector(t);window.addEventListener("scroll",()=>{document.documentElement.scrollTop>850?o.classList.add(n):o.classList.remove(n)}),o.addEventListener("click",(function(e){e.preventDefault();let t=-document.documentElement.scrollTop,n=document.documentElement.scrollTop,r=null;requestAnimationFrame((function e(o){null===r&&(r=o);let c=o-r,s=t<0?Math.max(n-c/.2,n+t):Math.min(n+c/.2,n+t);document.documentElement.scrollTo(0,s),console.log(s,n+t),s!=n+t&&requestAnimationFrame(e)}))})),r.forEach(e=>{e.hash&&e.addEventListener("click",(function(t){t.preventDefault();let n=document.querySelector(e.hash).getBoundingClientRect().top-100,r=document.documentElement.scrollTop,o=null;requestAnimationFrame((function e(t){null===o&&(o=t);let c=t-o,s=n<0?Math.max(r-c/.2,r+n):Math.min(r+c/.2,r+n);document.documentElement.scrollTo(0,s),console.log(s,r+n),s!=r+n&&requestAnimationFrame(e)}))}))})})({arrowSelector:".arrow-up",arrowActiveClass:"arrow-up_active"}),r(),function(){const e=document.querySelector(".burger-btns"),t=document.querySelector(".burger-menu"),n=document.querySelector(".burger-menu__close"),r=t.querySelectorAll(".header__link");e.addEventListener("click",(function(){this.classList.contains("burger-btns_active")?(this.classList.remove("burger-btns_active"),t.classList.remove("burger-menu_active")):(this.classList.add("burger-btns_active"),t.classList.add("burger-menu_active"))})),r.forEach(n=>{n.addEventListener("click",()=>{t.classList.remove("burger-menu_active"),e.classList.remove("burger-btns_active")})}),n.addEventListener("click",()=>{t.classList.remove("burger-menu_active"),e.classList.remove("burger-btns_active")})}()})}]);