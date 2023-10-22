/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\nconst app = document.getElementById(\"content\")\n\nfunction displayHome() {\n    app.innerHTML = \"\"\n    let newH1 = document.createElement(\"h1\")\n    newH1.innerText = \"PIZZAAAAAAA!!!\"\n    app.appendChild(newH1)\n}\n    \n(0,_nav__WEBPACK_IMPORTED_MODULE_0__.loadNavigation)();\ndisplayHome();\n\n//# sourceURL=webpack://restaurantpage-odin/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu)\n/* harmony export */ });\n\nconst menuList = [\n    {title: \"margarita\",\n    toppings: \"cheese, baby tomatoes, fresh basil\",\n    cost: \"$10\"},\n    {title: \"hawaiian\",\n    toppings: \"cheese, BBQ sauce, pineapple, vegan bacon\", \n    cost: \"$12\"},\n    {title: \"supreme\",\n    toppings: \"cheese, BBQ sauce, mushrooms, char-grilled veggies, sun-dried tomatoes, olives\",\n    cost: \"$18\"},\n]\n\nconst displayMenu = (container = document.getElementById(\"content\")) => {\n    container.innerHTML = \"\"\n    const menuDiv = document.createElement('div')\n    menuDiv.id = \"menuDiv\"\n    menuList.forEach(item => {\n        const newMenuCard = document.createElement('div')\n        newMenuCard.className = \"menuCard\"\n        newMenuCard.id = item.title\n        const newTitle = document.createElement('h2')\n        newTitle.innerText = item.title\n        newMenuCard.appendChild(newTitle)\n        const newDiv = document.createElement('div')\n        const newTops = document.createElement('p')\n        newTops.innerText = item.toppings\n        const newCost = document.createElement('p')\n        newCost.innerText = item.cost\n        newDiv.appendChild(newTops)\n        newDiv.appendChild(newCost)\n        newDiv.className = \"menuDetails\"\n        newMenuCard.appendChild(newDiv)\n        menuDiv.appendChild(newMenuCard)\n    })\n    container.appendChild(menuDiv)\n}\n\n\n\n//# sourceURL=webpack://restaurantpage-odin/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadNavigation: () => (/* binding */ loadNavigation)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\nconst header = document.getElementById(\"header\")\nconst app = document.getElementById(\"content\")\n\nconst navOptions = ['Home', 'Menu', 'Contact']\n\nconst loadNavigation = () => {\n    header.innerHTML = ''\n    navOptions.forEach(item => {\n        const newTab = document.createElement('div')\n        newTab.innerText = String(item)\n        newTab.id = String(item)\n        newTab.className = \"navTab\"\n        header.appendChild(newTab)\n    })\n    const menuBtn = document.getElementById(\"Menu\")\n    menuBtn.addEventListener('click', () => {;(0,_menu__WEBPACK_IMPORTED_MODULE_0__.displayMenu)(app)})\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage-odin/./src/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;