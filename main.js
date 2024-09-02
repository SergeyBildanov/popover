/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Popover.js
class Popover {
  constructor() {
    this._popovers = [];
  }
  showPopover(title, message, element) {
    let popoverElement = document.createElement("div");
    popoverElement.classList.add("popover");
    let id = performance.now();
    this._popovers.push({
      id,
      element: popoverElement
    });
    document.body.appendChild(popoverElement);
    let titleElement = document.createElement("div");
    titleElement.classList.add("popover-title");
    let messageElement = document.createElement("div");
    messageElement.classList.add("popover-message");
    titleElement.textContent = title;
    messageElement.textContent = message;
    popoverElement.appendChild(titleElement);
    popoverElement.appendChild(messageElement);
    const {
      left,
      top
    } = element.getBoundingClientRect();
    popoverElement.style.top = top - popoverElement.offsetHeight - 5 + "px";
    popoverElement.style.left = left - popoverElement.offsetWidth / 2 + element.offsetWidth / 2 + "px";
    return id;
  }
  removePopover(id) {
    const popover = this._popovers.find(p => p.id === id);
    popover.element.remove();
    this._popovers = this._popovers.filter(p => p.id !== id);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const app_button = document.querySelector(".button");
const popoversFactory = new Popover();
let activePopovers = [];
const addPopover = (title, message, element) => {
  activePopovers.push({
    id: popoversFactory.showPopover(title, message, element)
  });
};
app_button.addEventListener("click", e => {
  e.preventDefault();
  if (activePopovers.length) {
    popoversFactory.removePopover(activePopovers[0].id);
    activePopovers = [];
  } else {
    addPopover("Popover Title", "There will be content", e.target.closest(".button"));
  }
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;