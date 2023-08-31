/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    fill: white;
}

body {
    width: 100vw;
    height: 100vh;
    background: -webkit-radial-gradient(#07102c, #000619);
    font-family: 'Courier New', monospace;
    color: white;
}

main {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 7rem 5rem 1fr 3rem;
}

header {
    grid-row: 1 / 2;
    display: grid;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 80%;
}

#logo {
    width: 400px;
}

.message {
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-top: 3rem;
    color: white;
}

.message-inner {
    display: grid;
    background-color: rgb(63, 63, 63);
    border: 1px solid white;
    border-radius: 2rem;
    padding: 0.5rem 2rem;

}

.main-inner {
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
}

.main-left, .main-right {
    height: 80%;
    width: 80%;
    display: grid;
    grid-template-rows: min-content 1fr;
    justify-items: center;
}

h2 {
    font-size: 2rem;
}

.left-grid-outer, .right-grid-outer {
    width: 90%;
    background-color: rgb(255, 255, 255, 0.8);
    display: grid;
    align-items: center;
    justify-items: center;
}

.left-grid, .right-grid {
    width: 99%;
    height: 99%;
    background-color: rgb(255, 255, 255, 0.8);
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 0.1rem;
}

.grid-cell {
    background-color: #000619;
}

.grid-cell:hover {
    opacity: 0.8;
}

.place-ship {
    opacity: 0.8;
}

.hasShip {
    background-color: red;
}

.isShot {
    background-color: blue;
}

footer {
    display: grid;
    grid-template-columns: auto 30px;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1rem;
    color: white;
    user-select: none;
}

footer svg {
    fill: white;
}

.home-inner {
    grid-row: 2 / 4;
    display: grid;
    justify-items: center;
    align-items: center;
}

.play-button {
    background-color: rgb(63, 63, 63);
    padding: 1rem 2rem;
    border: 1px solid white;
    transition: 0.10s ease-in;
    cursor: pointer;
    border-radius: 0.2rem;
}

.play-button:hover {
    scale: 1.2;
}

.main-inner-ss {
    grid-row: 3 / 4;
    display: grid;
    justify-items: center;
    align-items: center;
}


.main-grid-outer {
    width: 40%;
    height: 80%;
    background-color: rgb(255, 255, 255, 0.8);
    display: grid;
    align-items: center;
    justify-items: center;
}

.main-grid {
    width: 99%;
    height: 99%;
    background-color: rgb(255, 255, 255, 0.8);
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 0.1rem;
}

.place-ships {
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-top: 3rem;
    color: white;
    grid-template-columns: 1fr 5rem 20rem 1fr;
}

.switch-axis {
    grid-column: 2 / 3;
    height: 4.5rem;
    background-color: #07102c;
    border: 2px solid white;
    display: grid;
    align-items: center;
    justify-items: center;

}

.place-ships {
    display: grid;
    grid-auto-flow: column; 
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-top: 3rem;
    color: white;
    gap: 2rem;
    grid-template-columns: 1fr 5rem min-content 1fr;
}

.place-ships-inner {
    display: grid;
    grid-column: 3 / 4;
    background-color: rgb(63, 63, 63);
    border: 1px solid white;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
}

.orders {
    white-space: nowrap;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,qDAAqD;IACrD,qCAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;;AAExB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,qCAAqC;IACrC,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,aAAa;IACb,mCAAmC;IACnC,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,yCAAyC;IACzC,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,yCAAyC;IACzC,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;IACf,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;;;AAGA;IACI,UAAU;IACV,WAAW;IACX,yCAAyC;IACzC,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,yCAAyC;IACzC,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,yBAAyB;IACzB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,SAAS;IACT,+CAA+C;AACnD;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iCAAiC;IACjC,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    fill: white;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: -webkit-radial-gradient(#07102c, #000619);\n    font-family: 'Courier New', monospace;\n    color: white;\n}\n\nmain {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 7rem 5rem 1fr 3rem;\n}\n\nheader {\n    grid-row: 1 / 2;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n}\n\n.logo {\n    height: 80%;\n}\n\n#logo {\n    width: 400px;\n}\n\n.message {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    padding-top: 3rem;\n    color: white;\n}\n\n.message-inner {\n    display: grid;\n    background-color: rgb(63, 63, 63);\n    border: 1px solid white;\n    border-radius: 2rem;\n    padding: 0.5rem 2rem;\n\n}\n\n.main-inner {\n    grid-row: 3 / 4;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\n.main-left, .main-right {\n    height: 80%;\n    width: 80%;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    justify-items: center;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\n.left-grid-outer, .right-grid-outer {\n    width: 90%;\n    background-color: rgb(255, 255, 255, 0.8);\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.left-grid, .right-grid {\n    width: 99%;\n    height: 99%;\n    background-color: rgb(255, 255, 255, 0.8);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 0.1rem;\n}\n\n.grid-cell {\n    background-color: #000619;\n}\n\n.grid-cell:hover {\n    opacity: 0.8;\n}\n\n.place-ship {\n    opacity: 0.8;\n}\n\n.hasShip {\n    background-color: red;\n}\n\n.isShot {\n    background-color: blue;\n}\n\nfooter {\n    display: grid;\n    grid-template-columns: auto 30px;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    font-size: 1rem;\n    color: white;\n    user-select: none;\n}\n\nfooter svg {\n    fill: white;\n}\n\n.home-inner {\n    grid-row: 2 / 4;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n.play-button {\n    background-color: rgb(63, 63, 63);\n    padding: 1rem 2rem;\n    border: 1px solid white;\n    transition: 0.10s ease-in;\n    cursor: pointer;\n    border-radius: 0.2rem;\n}\n\n.play-button:hover {\n    scale: 1.2;\n}\n\n.main-inner-ss {\n    grid-row: 3 / 4;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n\n.main-grid-outer {\n    width: 40%;\n    height: 80%;\n    background-color: rgb(255, 255, 255, 0.8);\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.main-grid {\n    width: 99%;\n    height: 99%;\n    background-color: rgb(255, 255, 255, 0.8);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 0.1rem;\n}\n\n.place-ships {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    padding-top: 3rem;\n    color: white;\n    grid-template-columns: 1fr 5rem 20rem 1fr;\n}\n\n.switch-axis {\n    grid-column: 2 / 3;\n    height: 4.5rem;\n    background-color: #07102c;\n    border: 2px solid white;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n\n}\n\n.place-ships {\n    display: grid;\n    grid-auto-flow: column; \n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    padding-top: 3rem;\n    color: white;\n    gap: 2rem;\n    grid-template-columns: 1fr 5rem min-content 1fr;\n}\n\n.place-ships-inner {\n    display: grid;\n    grid-column: 3 / 4;\n    background-color: rgb(63, 63, 63);\n    border: 1px solid white;\n    border-radius: 2rem;\n    padding: 0.5rem 2rem;\n}\n\n.orders {\n    white-space: nowrap;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Gameboard = () => {
    //Initialize board
    let board = []
    for (let i = 0; i < 10; ++i) {
        board[i] = []
        for (let j = 0; j < 10; ++j) {
            board[i][j] = { hasShip: false, isShot: false }
        }
    }
    //Ships
    let carrier
    let battleShip
    let submarine
    let cruiser
    let destoryer

    const assignShip = (ship) => {
        if (ship.name === 'carrier') {
            carrier = ship
        } else if (ship.name = 'battleShip') {
            battleShip = ship
        } else if (ship.name === 'submarine') {
            submarine = ship
        } else if (ship.name === 'cruiser') {
            cruiser = ship
        } else if (ship.name === 'destroyer') {
            destoryer = ship
        }
    }

    const placeShip = (x,y, direction, ship) => {
        assignShip(ship) 
        if (direction === 'x') {
            for (let i = x; i < x + ship.length; ++i) {
                board[i][y].hasShip = ship.name
            }
        } else {
            for (let i = y; i < y + ship.length; ++i) {
                board[x][i].hasShip = ship.name
            }
        }
    }

    const hitShip = (name) => {
        if (name === 'carrier') {
            carrier.hit()
        } else if (name === 'battleShip') {
            battleShip.hit()
        } else if (name === 'submarine') {
            submarine.hit()
        } else if (name === 'cruiser') {
            cruiser.hit()
        } else if (name === 'destroyer') {
            destoryer.hit()
        }
    }

    const receiveAttack = (x, y) => {
        board[x][y].isShot = true
        if (board[x][y].hasShip !== false) {
            let name = board[x][y].hasShip
            hitShip(name)
        }
    }
    
    const reportSunk = () => {
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                if (board[j][i].isShot === false && board[j][i].hasShip !== false)
                 return false
            }
        }
        return true
    }

    const getBoard = () => {
        return board;
    }

    return { placeShip, receiveAttack, reportSunk, getBoard }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/factories/gameboard.js");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/UI */ "./src/modules/UI.js");



const Player = () => {
    const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])()

    const attack = (x, y, opponentBoard) => {
        opponentBoard.receiveAttack(x, y)
        if (opponentBoard.getBoard()[x][y].hasShip) {
            _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].orders('player1 hit')
        } else {
            _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].orders('player1 missed')
        }
    }

    const isLegal = (opponentBoard, x, y) => {
        if (opponentBoard.getBoard()[x][y].isShot === false) {
            return true
        } else {
            return false
        }

    }

    const randomAttack = async (opponentBoard) => {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)

        while (!isLegal(opponentBoard, x, y)) {
            x = Math.floor(Math.random() * 10)
            y = Math.floor(Math.random() * 10)
        }

        opponentBoard.receiveAttack(x, y)
        _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].colorGrid()
        if (opponentBoard.getBoard()[x][y].hasShip) {
            await _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].orders('computer hit')
        } else {
            await _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].orders('computer misses')
        }
    }

    return { board, attack, randomAttack, isLegal }
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (len, nam) => {
    let length = len
    let name = nam;
    let numHits = 0
    let sunk = false

    const hit = () => numHits = numHits + 1

    const isSunk = () => numHits === length ? sunk = true : sunk = false

    return { length, name, hit, isSunk }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");


const UI = (() => {

    const loadHome = () => {
        homeScreen()
        initHome()
    }

    const loadShipScreen = () => {
        removeContent()
        shipScreen()
        loadMainGrid()
        initMainGrid()
        orders('player1 place carrier')
    }

    const loadMain = () => {
        removeContent()
        mainScreen()
        loadGrid()
        initGrid()
        showShips()
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].newGame()
    }

    const removeContent = () => {
        document.querySelector('main').remove()
    }

    const homeScreen = () => {
        const body = document.body

        let main = document.createElement('main')
        main.innerHTML = `
        <header>
            <div class="logo">
                <img id='logo' src="./logo.jpeg">
            </div>
        </header>
       <div class="home-inner">
            <div class="play-button">
                <h1>Play Game</h1>
            </div>
       </div>
        <footer>
            <span>Copyright © 2023 Declankb</span>
            <a href='https://github.com/DeclanKBrown' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                </svg>
            </a>
        </footer>
        `

        body.appendChild(main)
    }

    const initHome = () => {
        const play = document.querySelector('.play-button')
        play.addEventListener('click', () => loadShipScreen())
    }

    const shipScreen = () => {
        const body = document.body

        let main = document.createElement('main')
        main.innerHTML = `
        <header>
            <div class="logo">
                <img id='logo' src="./logo.jpeg">
            </div>
        </header>
        <div class="place-ships">
            <div class="switch-axis" id="x">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z" /></svg>
            </div>
            <div class="place-ships-inner">
                <h1 class="orders">Orders: Place Ships</h1>
            </div>
        </div>
        <div class="main-inner-ss">
            <div class="main-grid-outer">
                <div class="main-grid">
                </div>
            </div>
        </div>
        <footer>
            <span>Copyright © 2023 Declankb</span>
            <a href='https://github.com/DeclanKBrown' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                </svg>
            </a>
        </footer>
        `

        body.appendChild(main)
    } 

    const loadMainGrid = () => {
        let mainGrid = document.querySelector('.main-grid')
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                let gridCell = document.createElement('div')
                gridCell.classList.add('grid-cell')
                gridCell.id = `L-${j}-${i}`
                mainGrid.appendChild(gridCell)
            }
        }
    }

    const initMainGrid = () => {

        document.querySelector('.switch-axis').addEventListener('click', () => {
            switchAxis(); 
        })

        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                let gridCell = document.querySelector(`#L-${j}-${i}`)

                let x = parseInt(gridCell.id.split('-')[1])
                let y = parseInt(gridCell.id.split('-')[2])

                gridCell.addEventListener('mouseover', () => {
                    shipHover(x, y)
                })

                gridCell.addEventListener('click', () => {
                    p1PlaceShip(x, y)
                })
            }
        }
    }

    const switchAxis = () => {
        document.querySelector('.switch-axis').id === 'x' ? document.querySelector('.switch-axis').id = 'y' : document.querySelector('.switch-axis').id = 'x'
    }

    const shipHover = (x, y) => {
        removeHL()
        let direction = document.querySelector('.switch-axis').id
        let shipLength = getLength()
        if (direction === 'x') {
            for (let i = x; i < x + shipLength; ++i) {
                let gridCell = document.querySelector(`#L-${i}-${y}`)
                gridCell.classList.add('place-ship')
            }
        }
        if (direction === 'y') {
            for (let i = y; i < y + shipLength; ++i) {
                let gridCell = document.querySelector(`#L-${x}-${i}`)
                gridCell.classList.add('place-ship')
            }
        }
    }

    const removeHL = () => {
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                let gridCell = document.querySelector(`#L-${j}-${i}`)
                gridCell.classList.remove('place-ship')
            }
        }
    }

    const getLength = () => {
        if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isCarrierPlaced()) {
            return 5
        } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isBattleshipPlaced()) {
            return 4
        } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isCruiserPlaced()) {
            return 3
        } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isSubmarinePlaced()) {
            return 3
        } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isDestroyerPlaced()) {
            return 2
        } 
    }

    const mainScreen = () => {
        const body = document.body

        let main = document.createElement('main')
        main.innerHTML = `
        <header>
            <div class="logo">
                <img id='logo' src="./logo.jpeg">
            </div>
        </header>
        <div class="message">
            <div class="message-inner">
                <h1 class="orders">Orders: Fire Away</h1>
            </div>
        </div>
        <div class="main-inner">
            <div class="main-left">
                <h2>Friendly Waters</h2>
                <div class="left-grid-outer">
                    <div class="left-grid">
                    </div>
                </div>
            </div>
            <div class="main-right">
                <h2>Enemy Waters</h2>
                <div class="right-grid-outer">
                    <div class="right-grid">
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <span>Copyright © 2023 Declankb</span>
            <a href='https://github.com/DeclanKBrown' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                </svg>
            </a>
        </footer>
        `

        body.appendChild(main)
    }

    const loadGrid = () => {
        let leftGrid = document.querySelector('.left-grid')
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                let gridCell = document.createElement('div')
                gridCell.classList.add('grid-cell')
                gridCell.id = `L-${j}-${i}`
                leftGrid.appendChild(gridCell)
            }
        }

        let rightGrid = document.querySelector('.right-grid')
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                let gridCell = document.createElement('div')
                gridCell.classList.add('grid-cell')
                gridCell.id = `R-${j}-${i}`
                rightGrid.appendChild(gridCell)
            }
        }
    }

    const initGrid = () => {
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                let gridCell = document.querySelector(`#R-${j}-${i}`)

                let x = gridCell.id.split('-')[1]
                let y = gridCell.id.split('-')[2]

                gridCell.addEventListener('click', () => {
                    if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].gameEnded() && _game__WEBPACK_IMPORTED_MODULE_0__["default"].canPlay()) {
                        if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].player1.isLegal(_game__WEBPACK_IMPORTED_MODULE_0__["default"].computer.board, x, y)) {
                            _game__WEBPACK_IMPORTED_MODULE_0__["default"].player1.attack(x, y, _game__WEBPACK_IMPORTED_MODULE_0__["default"].computer.board)
                            colorGrid()
                            _game__WEBPACK_IMPORTED_MODULE_0__["default"].flow(true)
                        } else {
                            orders('player1 already shot')
                        }
                    }
                })
            }
        }
    }

    const showShips = () => {
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].player1.board.getBoard()[j][i].hasShip) {
                    let gridCell = document.querySelector(`#L-${j}-${i}`)
                    gridCell.classList.add('hasShip')
                }
            }
        }
    }

    const colorGrid = () => {
        for (let i = 0; i < 10; ++i) {
            for (let j = 0; j < 10; ++j) {
                if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].computer.board.getBoard()[j][i].isShot) {
                    let gridCell = document.querySelector(`#R-${j}-${i}`)
                    gridCell.classList.add('isShot')
                }
                if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].player1.board.getBoard()[j][i].isShot) {
                    let gridCell = document.querySelector(`#L-${j}-${i}`)
                    gridCell.classList.add('isShot')
                }
            }
        }
    }

    const placeShip = (x, y, direction, ship, player) => {
        if (direction === 'x') {
            for (let i = x; i < x + ship.length; ++i) {
                let gridCell = document.querySelector(`#${player}-${i}-${y}`)
                gridCell.classList.add('hasShip')
            }
        } else {
            for (let i = y; i < y + ship.length; ++i) {
                let gridCell = document.querySelector(`#${player}-${x}-${i}`)
                gridCell.classList.add('hasShip')
            }
        }
    } 

    const orders = async (order) => {
        if (order === 'compAttacking') {
            document.querySelector('.orders').innerHTML = 'Enemy Attacking'
        } else if (order === 'computer hit') {
            document.querySelector('.orders').innerHTML = 'Enemy Hits'
        } else if (order === 'computer misses') {
            document.querySelector('.orders').innerHTML = 'Enemy Misses'
        } else if (order === 'player1 turn') {
            document.querySelector('.orders').innerHTML = 'Your Turn'
        } else if (order === 'player1 hit') {
            document.querySelector('.orders').innerHTML = 'You Hit'
        } else if (order === 'player1 misses') {
            document.querySelector('.orders').innerHTML = 'You Missed'
        } else if (order === 'player1 place carrier') {
            document.querySelector('.orders').innerHTML = 'Place Carrier'
        } else if (order === 'player1 place battleship') {
            document.querySelector('.orders').innerHTML = 'Place Battleship'
        } else if (order === 'player1 place cruiser') {
            document.querySelector('.orders').innerHTML = 'Place Cruiser'
        } else if (order === 'player1 place submarine') {
            document.querySelector('.orders').innerHTML = 'Place Submarine'
        } else if (order === 'player1 place destroyer') {
            document.querySelector('.orders').innerHTML = 'Place Destroyer'
        } else if (order === 'ships placed') {
            document.querySelector('.orders').innerHTML = 'Ships Placed'
        } else if (order === 'player1 win') {
            document.querySelector('.orders').innerHTML = 'You Win'
        } else if (order === 'computer wins') {
            document.querySelector('.orders').innerHTML = 'Computer Wins'
        } else if (order === 'player1 already shot') {
            document.querySelector('.orders').innerHTML = 'Already Attacked Postion'
        } 
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    const p1PlaceShip = (x, y) => {
        if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isCarrierPlaced()) {
            _game__WEBPACK_IMPORTED_MODULE_0__["default"].placeCarrier(x, y)
        } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isBattleshipPlaced()) {
            _game__WEBPACK_IMPORTED_MODULE_0__["default"].placeBattleship(x, y)
        } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isCruiserPlaced()) {
            _game__WEBPACK_IMPORTED_MODULE_0__["default"].placeCruiser(x, y)
        } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isSubmarinePlaced()) {
            _game__WEBPACK_IMPORTED_MODULE_0__["default"].placeSubmarine(x, y)
        } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isDestroyerPlaced()) {
            _game__WEBPACK_IMPORTED_MODULE_0__["default"].placeDestroyer(x, y)
        }
    }

    return { loadHome, placeShip, colorGrid, orders, loadMain }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/player */ "./src/factories/player.js");
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/ship */ "./src/factories/ship.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");




const game = (() => {
    const player1 = (0,_factories_player__WEBPACK_IMPORTED_MODULE_0__["default"])()
    const computer = (0,_factories_player__WEBPACK_IMPORTED_MODULE_0__["default"])()
    let waiting = false
    let carrierPlaced = false
    let battleShipPlaced = false
    let cruiserPlaced = false
    let submarinePlaced = false
    let destroyerPlaced = false
    
    const newGame = () => {
        computerShips()
    }

    const flow = async (P1played) => {
        if (!gameEnded()) {
            if (P1played) {
                waiting = true
                await _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('compAttacking');
                await computer.randomAttack(player1.board);
                _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 turn');
                waiting = false
            }
        }
    }

    const canPlay = () => {
        if (waiting) {
            return false
        } 
        return true
    }

    const gameEnded = () => {
        if (player1.board.reportSunk()) {
            _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('computer wins')
            return true
        } else if (computer.board.reportSunk()) {
            _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 win')
            return true
        }
        return false
    }

    const placeCarrier = (x, y) => {
        player1.board.placeShip(x, y, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, 'carrier'))
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(x, y, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, 'carrier'), 'L')
        carrierPlaced = true
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 place battleship')
    }

    const isCarrierPlaced = () => {
        return carrierPlaced
    }

    const placeBattleship = (x, y) => {
        player1.board.placeShip(x, y, 'y', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 'battleship'))
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(x, y, 'y', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 'battleship'), 'L')
        battleShipPlaced = true
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 place cruiser')
    }

    const isBattleshipPlaced = () => {
        return battleShipPlaced
    }

    const placeCruiser = (x, y) => {
        player1.board.placeShip(x, y, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'cruiser'))
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(x, y, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'cruiser'), 'L')
        cruiserPlaced = true
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 place submarine')
    }

    const isCruiserPlaced = () => {
        return cruiserPlaced
    }

    const placeSubmarine = (x, y) => {
        player1.board.placeShip(x, y, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'submarine'))
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(x, y, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'submarine'), 'L')
        submarinePlaced = true
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 place destroyer')
    }

    const isSubmarinePlaced = () => {
        return submarinePlaced
    }

    const placeDestroyer = async (x, y) => {
        player1.board.placeShip(x, y, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, 'destroyer'))
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(x, y, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, 'destroyer'), 'L')
        destroyerPlaced = true
        await _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('ships placed')
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].loadMain()
    }

    const isDestroyerPlaced = () => {
        return destroyerPlaced
    }

    const computerShips = () => {
        computer.board.placeShip(0, 0, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, 'carrier'))
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(0, 0, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, 'carrier'), 'R')

        computer.board.placeShip(9, 5, 'y', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 'battleship'))
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(9, 5, 'y', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 'battleship'), 'R')

        computer.board.placeShip(3, 6, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'cruiser'))
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(3, 6, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'cruiser'), 'R')

        computer.board.placeShip(1, 3, 'y', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'submarine'))
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(1, 3, 'y', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'submarine'), 'R')

        computer.board.placeShip(8, 2, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, 'destroyer'))
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(8, 2, 'x', (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, 'destroyer'), 'R')
    }

    return { player1, computer, newGame, flow, gameEnded, canPlay, placeCarrier, isCarrierPlaced, placeBattleship, isBattleshipPlaced, placeCruiser, isCruiserPlaced, placeSubmarine, isSubmarinePlaced, placeDestroyer, isDestroyerPlaced }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");




document.addEventListener('DOMContentLoaded', () => {
    _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].loadHome()
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUs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ZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjMDcxMDJjLCAjMDAwNjE5KTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxubWFpbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDdyZW0gNXJlbSAxZnIgM3JlbTtcbn1cblxuaGVhZGVyIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG5cbiNsb2dvIHtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbi5tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWVzc2FnZS1pbm5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcblxufVxuXG4ubWFpbi1pbm5lciB7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tbGVmdCwgLm1haW4tcmlnaHQge1xuICAgIGhlaWdodDogODAlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5sZWZ0LWdyaWQtb3V0ZXIsIC5yaWdodC1ncmlkLW91dGVyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0LWdyaWQsIC5yaWdodC1ncmlkIHtcbiAgICB3aWR0aDogOTklO1xuICAgIGhlaWdodDogOTklO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ2FwOiAwLjFyZW07XG59XG5cbi5ncmlkLWNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA2MTk7XG59XG5cbi5ncmlkLWNlbGw6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLnBsYWNlLXNoaXAge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLmhhc1NoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmlzU2hvdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmZvb3RlciBzdmcge1xuICAgIGZpbGw6IHdoaXRlO1xufVxuXG4uaG9tZS1pbm5lciB7XG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGF5LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjEwcyBlYXNlLWluO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG59XG5cbi5wbGF5LWJ1dHRvbjpob3ZlciB7XG4gICAgc2NhbGU6IDEuMjtcbn1cblxuLm1haW4taW5uZXItc3Mge1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5tYWluLWdyaWQtb3V0ZXIge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tZ3JpZCB7XG4gICAgd2lkdGg6IDk5JTtcbiAgICBoZWlnaHQ6IDk5JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdhcDogMC4xcmVtO1xufVxuXG4ucGxhY2Utc2hpcHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXJlbSAyMHJlbSAxZnI7XG59XG5cbi5zd2l0Y2gtYXhpcyB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGhlaWdodDogNC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzEwMmM7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxufVxuXG4ucGxhY2Utc2hpcHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVyZW0gbWluLWNvbnRlbnQgMWZyO1xufVxuXG4ucGxhY2Utc2hpcHMtaW5uZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjMsIDYzKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xufVxuXG4ub3JkZXJzIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscURBQXFEO0lBQ3JELHFDQUFxQztJQUNyQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixTQUFTO0lBQ1QsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmlsbDogd2hpdGU7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCMwNzEwMmMsICMwMDA2MTkpO1xcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm1haW4ge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogN3JlbSA1cmVtIDFmciAzcmVtO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGhlaWdodDogODAlO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZXNzYWdlLWlubmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuXFxufVxcblxcbi5tYWluLWlubmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWxlZnQsIC5tYWluLXJpZ2h0IHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubGVmdC1ncmlkLW91dGVyLCAucmlnaHQtZ3JpZC1vdXRlciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0LWdyaWQsIC5yaWdodC1ncmlkIHtcXG4gICAgd2lkdGg6IDk5JTtcXG4gICAgaGVpZ2h0OiA5OSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMC4xcmVtO1xcbn1cXG5cXG4uZ3JpZC1jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDYxOTtcXG59XFxuXFxuLmdyaWQtY2VsbDpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLnBsYWNlLXNoaXAge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5oYXNTaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaXNTaG90IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHN2ZyB7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZS1pbm5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDAuMTBzIGVhc2UtaW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4ucGxheS1idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4yO1xcbn1cXG5cXG4ubWFpbi1pbm5lci1zcyB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4ubWFpbi1ncmlkLW91dGVyIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWdyaWQge1xcbiAgICB3aWR0aDogOTklO1xcbiAgICBoZWlnaHQ6IDk5JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAwLjFyZW07XFxufVxcblxcbi5wbGFjZS1zaGlwcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXJlbSAyMHJlbSAxZnI7XFxufVxcblxcbi5zd2l0Y2gtYXhpcyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgaGVpZ2h0OiA0LjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzEwMmM7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5wbGFjZS1zaGlwcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXJlbSBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5wbGFjZS1zaGlwcy1pbm5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxufVxcblxcbi5vcmRlcnMge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIC8vSW5pdGlhbGl6ZSBib2FyZFxuICAgIGxldCBib2FyZCA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICAgIGJvYXJkW2ldID0gW11cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgICAgICBib2FyZFtpXVtqXSA9IHsgaGFzU2hpcDogZmFsc2UsIGlzU2hvdDogZmFsc2UgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vU2hpcHNcbiAgICBsZXQgY2FycmllclxuICAgIGxldCBiYXR0bGVTaGlwXG4gICAgbGV0IHN1Ym1hcmluZVxuICAgIGxldCBjcnVpc2VyXG4gICAgbGV0IGRlc3RvcnllclxuXG4gICAgY29uc3QgYXNzaWduU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLm5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgICAgICAgICAgY2FycmllciA9IHNoaXBcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLm5hbWUgPSAnYmF0dGxlU2hpcCcpIHtcbiAgICAgICAgICAgIGJhdHRsZVNoaXAgPSBzaGlwXG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcC5uYW1lID09PSAnc3VibWFyaW5lJykge1xuICAgICAgICAgICAgc3VibWFyaW5lID0gc2hpcFxuICAgICAgICB9IGVsc2UgaWYgKHNoaXAubmFtZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgICAgICAgICBjcnVpc2VyID0gc2hpcFxuICAgICAgICB9IGVsc2UgaWYgKHNoaXAubmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgICAgICAgIGRlc3RvcnllciA9IHNoaXBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh4LHksIGRpcmVjdGlvbiwgc2hpcCkgPT4ge1xuICAgICAgICBhc3NpZ25TaGlwKHNoaXApIFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAneCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBib2FyZFtpXVt5XS5oYXNTaGlwID0gc2hpcC5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbeF1baV0uaGFzU2hpcCA9IHNoaXAubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGl0U2hpcCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lID09PSAnY2FycmllcicpIHtcbiAgICAgICAgICAgIGNhcnJpZXIuaGl0KClcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnYmF0dGxlU2hpcCcpIHtcbiAgICAgICAgICAgIGJhdHRsZVNoaXAuaGl0KClcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAnc3VibWFyaW5lJykge1xuICAgICAgICAgICAgc3VibWFyaW5lLmhpdCgpXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgICAgICAgICBjcnVpc2VyLmhpdCgpXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICAgICAgICAgIGRlc3Rvcnllci5oaXQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGJvYXJkW3hdW3ldLmlzU2hvdCA9IHRydWVcbiAgICAgICAgaWYgKGJvYXJkW3hdW3ldLmhhc1NoaXAgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGJvYXJkW3hdW3ldLmhhc1NoaXBcbiAgICAgICAgICAgIGhpdFNoaXAobmFtZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCByZXBvcnRTdW5rID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICsraikge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtqXVtpXS5pc1Nob3QgPT09IGZhbHNlICYmIGJvYXJkW2pdW2ldLmhhc1NoaXAgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCByZXBvcnRTdW5rLCBnZXRCb2FyZCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZCIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnXG5pbXBvcnQgVUkgZnJvbSAnLi4vbW9kdWxlcy9VSSdcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKClcblxuICAgIGNvbnN0IGF0dGFjayA9ICh4LCB5LCBvcHBvbmVudEJvYXJkKSA9PiB7XG4gICAgICAgIG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KVxuICAgICAgICBpZiAob3Bwb25lbnRCb2FyZC5nZXRCb2FyZCgpW3hdW3ldLmhhc1NoaXApIHtcbiAgICAgICAgICAgIFVJLm9yZGVycygncGxheWVyMSBoaXQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVUkub3JkZXJzKCdwbGF5ZXIxIG1pc3NlZCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0xlZ2FsID0gKG9wcG9uZW50Qm9hcmQsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKG9wcG9uZW50Qm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5pc1Nob3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUF0dGFjayA9IGFzeW5jIChvcHBvbmVudEJvYXJkKSA9PiB7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cbiAgICAgICAgd2hpbGUgKCFpc0xlZ2FsKG9wcG9uZW50Qm9hcmQsIHgsIHkpKSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIH1cblxuICAgICAgICBvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSlcbiAgICAgICAgVUkuY29sb3JHcmlkKClcbiAgICAgICAgaWYgKG9wcG9uZW50Qm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XS5oYXNTaGlwKSB7XG4gICAgICAgICAgICBhd2FpdCBVSS5vcmRlcnMoJ2NvbXB1dGVyIGhpdCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCBVSS5vcmRlcnMoJ2NvbXB1dGVyIG1pc3NlcycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBib2FyZCwgYXR0YWNrLCByYW5kb21BdHRhY2ssIGlzTGVnYWwgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyXG4iLCJjb25zdCBTaGlwID0gKGxlbiwgbmFtKSA9PiB7XG4gICAgbGV0IGxlbmd0aCA9IGxlblxuICAgIGxldCBuYW1lID0gbmFtO1xuICAgIGxldCBudW1IaXRzID0gMFxuICAgIGxldCBzdW5rID0gZmFsc2VcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IG51bUhpdHMgPSBudW1IaXRzICsgMVxuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4gbnVtSGl0cyA9PT0gbGVuZ3RoID8gc3VuayA9IHRydWUgOiBzdW5rID0gZmFsc2VcblxuICAgIHJldHVybiB7IGxlbmd0aCwgbmFtZSwgaGl0LCBpc1N1bmsgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXAiLCJpbXBvcnQgZ2FtZSBmcm9tIFwiLi9nYW1lXCJcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gICAgICAgIGhvbWVTY3JlZW4oKVxuICAgICAgICBpbml0SG9tZSgpXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFNoaXBTY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUNvbnRlbnQoKVxuICAgICAgICBzaGlwU2NyZWVuKClcbiAgICAgICAgbG9hZE1haW5HcmlkKClcbiAgICAgICAgaW5pdE1haW5HcmlkKClcbiAgICAgICAgb3JkZXJzKCdwbGF5ZXIxIHBsYWNlIGNhcnJpZXInKVxuICAgIH1cblxuICAgIGNvbnN0IGxvYWRNYWluID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVDb250ZW50KClcbiAgICAgICAgbWFpblNjcmVlbigpXG4gICAgICAgIGxvYWRHcmlkKClcbiAgICAgICAgaW5pdEdyaWQoKVxuICAgICAgICBzaG93U2hpcHMoKVxuICAgICAgICBnYW1lLm5ld0dhbWUoKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5yZW1vdmUoKVxuICAgIH1cblxuICAgIGNvbnN0IGhvbWVTY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG5cbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgaWQ9J2xvZ28nIHNyYz1cIi4vbG9nby5qcGVnXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgPGRpdiBjbGFzcz1cImhvbWUtaW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxoMT5QbGF5IEdhbWU8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgMjAyMyBEZWNsYW5rYjwvc3Bhbj5cbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9EZWNsYW5LQnJvd24nIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTIsMkExMCwxMCAwIDAsMCAyLDEyQzIsMTYuNDIgNC44NywyMC4xNyA4Ljg0LDIxLjVDOS4zNCwyMS41OCA5LjUsMjEuMjcgOS41LDIxQzkuNSwyMC43NyA5LjUsMjAuMTQgOS41LDE5LjMxQzYuNzMsMTkuOTEgNi4xNCwxNy45NyA2LjE0LDE3Ljk3QzUuNjgsMTYuODEgNS4wMywxNi41IDUuMDMsMTYuNUM0LjEyLDE1Ljg4IDUuMSwxNS45IDUuMSwxNS45QzYuMSwxNS45NyA2LjYzLDE2LjkzIDYuNjMsMTYuOTNDNy41LDE4LjQ1IDguOTcsMTggOS41NCwxNy43NkM5LjYzLDE3LjExIDkuODksMTYuNjcgMTAuMTcsMTYuNDJDNy45NSwxNi4xNyA1LjYyLDE1LjMxIDUuNjIsMTEuNUM1LjYyLDEwLjM5IDYsOS41IDYuNjUsOC43OUM2LjU1LDguNTQgNi4yLDcuNSA2Ljc1LDYuMTVDNi43NSw2LjE1IDcuNTksNS44OCA5LjUsNy4xN0MxMC4yOSw2Ljk1IDExLjE1LDYuODQgMTIsNi44NEMxMi44NSw2Ljg0IDEzLjcxLDYuOTUgMTQuNSw3LjE3QzE2LjQxLDUuODggMTcuMjUsNi4xNSAxNy4yNSw2LjE1QzE3LjgsNy41IDE3LjQ1LDguNTQgMTcuMzUsOC43OUMxOCw5LjUgMTguMzgsMTAuMzkgMTguMzgsMTEuNUMxOC4zOCwxNS4zMiAxNi4wNCwxNi4xNiAxMy44MSwxNi40MUMxNC4xNywxNi43MiAxNC41LDE3LjMzIDE0LjUsMTguMjZDMTQuNSwxOS42IDE0LjUsMjAuNjggMTQuNSwyMUMxNC41LDIxLjI3IDE0LjY2LDIxLjU5IDE1LjE3LDIxLjVDMTkuMTQsMjAuMTYgMjIsMTYuNDIgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlonIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgICBgXG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYWluKVxuICAgIH1cblxuICAgIGNvbnN0IGluaXRIb21lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYnV0dG9uJylcbiAgICAgICAgcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvYWRTaGlwU2NyZWVuKCkpXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcFNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcblxuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgICAgICBtYWluLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBpZD0nbG9nbycgc3JjPVwiLi9sb2dvLmpwZWdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlLXNoaXBzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpdGNoLWF4aXNcIiBpZD1cInhcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0yMSw5TDE3LDVWOEgxMFYxMEgxN1YxM003LDExTDMsMTVMNywxOVYxNkgxNFYxNEg3VjExWlwiIC8+PC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZS1zaGlwcy1pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm9yZGVyc1wiPk9yZGVyczogUGxhY2UgU2hpcHM8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1pbm5lci1zc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tZ3JpZC1vdXRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWdyaWRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDIzIERlY2xhbmtiPC9zcGFuPlxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0RlY2xhbktCcm93bicgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCc+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWicgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIGBcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pXG4gICAgfSBcblxuICAgIGNvbnN0IGxvYWRNYWluR3JpZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1haW5HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ3JpZCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdncmlkLWNlbGwnKVxuICAgICAgICAgICAgICAgIGdyaWRDZWxsLmlkID0gYEwtJHtqfS0ke2l9YFxuICAgICAgICAgICAgICAgIG1haW5HcmlkLmFwcGVuZENoaWxkKGdyaWRDZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdE1haW5HcmlkID0gKCkgPT4ge1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtYXhpcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoQXhpcygpOyBcbiAgICAgICAgfSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICsraikge1xuICAgICAgICAgICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNMLSR7an0tJHtpfWApXG5cbiAgICAgICAgICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGdyaWRDZWxsLmlkLnNwbGl0KCctJylbMV0pXG4gICAgICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChncmlkQ2VsbC5pZC5zcGxpdCgnLScpWzJdKVxuXG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaGlwSG92ZXIoeCwgeSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHAxUGxhY2VTaGlwKHgsIHkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN3aXRjaEF4aXMgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtYXhpcycpLmlkID09PSAneCcgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLWF4aXMnKS5pZCA9ICd5JyA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtYXhpcycpLmlkID0gJ3gnXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcEhvdmVyID0gKHgsIHkpID0+IHtcbiAgICAgICAgcmVtb3ZlSEwoKVxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1heGlzJykuaWRcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBnZXRMZW5ndGgoKVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAneCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXBMZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNMLSR7aX0tJHt5fWApXG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2Utc2hpcCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3knKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ3JpZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjTC0ke3h9LSR7aX1gKVxuICAgICAgICAgICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXAnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlSEwgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0wtJHtqfS0ke2l9YClcbiAgICAgICAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZS1zaGlwJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lLmlzQ2FycmllclBsYWNlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gNVxuICAgICAgICB9IGVsc2UgaWYgKCFnYW1lLmlzQmF0dGxlc2hpcFBsYWNlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gNFxuICAgICAgICB9IGVsc2UgaWYgKCFnYW1lLmlzQ3J1aXNlclBsYWNlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gM1xuICAgICAgICB9IGVsc2UgaWYgKCFnYW1lLmlzU3VibWFyaW5lUGxhY2VkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAzXG4gICAgICAgIH0gZWxzZSBpZiAoIWdhbWUuaXNEZXN0cm95ZXJQbGFjZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIDJcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb25zdCBtYWluU2NyZWVuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuXG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gYFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGlkPSdsb2dvJyBzcmM9XCIuL2xvZ28uanBlZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJvcmRlcnNcIj5PcmRlcnM6IEZpcmUgQXdheTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGgyPkZyaWVuZGx5IFdhdGVyczwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtZ3JpZC1vdXRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxoMj5FbmVteSBXYXRlcnM8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1ncmlkLW91dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPHNwYW4+Q29weXJpZ2h0IMKpIDIwMjMgRGVjbGFua2I8L3NwYW4+XG4gICAgICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vRGVjbGFuS0Jyb3duJyB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz5cbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0Jz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkMyLDE2LjQyIDQuODcsMjAuMTcgOC44NCwyMS41QzkuMzQsMjEuNTggOS41LDIxLjI3IDkuNSwyMUM5LjUsMjAuNzcgOS41LDIwLjE0IDkuNSwxOS4zMUM2LjczLDE5LjkxIDYuMTQsMTcuOTcgNi4xNCwxNy45N0M1LjY4LDE2LjgxIDUuMDMsMTYuNSA1LjAzLDE2LjVDNC4xMiwxNS44OCA1LjEsMTUuOSA1LjEsMTUuOUM2LjEsMTUuOTcgNi42MywxNi45MyA2LjYzLDE2LjkzQzcuNSwxOC40NSA4Ljk3LDE4IDkuNTQsMTcuNzZDOS42MywxNy4xMSA5Ljg5LDE2LjY3IDEwLjE3LDE2LjQyQzcuOTUsMTYuMTcgNS42MiwxNS4zMSA1LjYyLDExLjVDNS42MiwxMC4zOSA2LDkuNSA2LjY1LDguNzlDNi41NSw4LjU0IDYuMiw3LjUgNi43NSw2LjE1QzYuNzUsNi4xNSA3LjU5LDUuODggOS41LDcuMTdDMTAuMjksNi45NSAxMS4xNSw2Ljg0IDEyLDYuODRDMTIuODUsNi44NCAxMy43MSw2Ljk1IDE0LjUsNy4xN0MxNi40MSw1Ljg4IDE3LjI1LDYuMTUgMTcuMjUsNi4xNUMxNy44LDcuNSAxNy40NSw4LjU0IDE3LjM1LDguNzlDMTgsOS41IDE4LjM4LDEwLjM5IDE4LjM4LDExLjVDMTguMzgsMTUuMzIgMTYuMDQsMTYuMTYgMTMuODEsMTYuNDFDMTQuMTcsMTYuNzIgMTQuNSwxNy4zMyAxNC41LDE4LjI2QzE0LjUsMTkuNiAxNC41LDIwLjY4IDE0LjUsMjFDMTQuNSwyMS4yNyAxNC42NiwyMS41OSAxNS4xNywyMS41QzE5LjE0LDIwLjE2IDIyLDE2LjQyIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaJyAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgYFxuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbilcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkR3JpZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGxlZnRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtZ3JpZCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdncmlkLWNlbGwnKVxuICAgICAgICAgICAgICAgIGdyaWRDZWxsLmlkID0gYEwtJHtqfS0ke2l9YFxuICAgICAgICAgICAgICAgIGxlZnRHcmlkLmFwcGVuZENoaWxkKGdyaWRDZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJpZ2h0R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1ncmlkJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyArK2opIHtcbiAgICAgICAgICAgICAgICBsZXQgZ3JpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY2VsbCcpXG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuaWQgPSBgUi0ke2p9LSR7aX1gXG4gICAgICAgICAgICAgICAgcmlnaHRHcmlkLmFwcGVuZENoaWxkKGdyaWRDZWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdEdyaWQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1ItJHtqfS0ke2l9YClcblxuICAgICAgICAgICAgICAgIGxldCB4ID0gZ3JpZENlbGwuaWQuc3BsaXQoJy0nKVsxXVxuICAgICAgICAgICAgICAgIGxldCB5ID0gZ3JpZENlbGwuaWQuc3BsaXQoJy0nKVsyXVxuXG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2FtZS5nYW1lRW5kZWQoKSAmJiBnYW1lLmNhblBsYXkoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUucGxheWVyMS5pc0xlZ2FsKGdhbWUuY29tcHV0ZXIuYm9hcmQsIHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5wbGF5ZXIxLmF0dGFjayh4LCB5LCBnYW1lLmNvbXB1dGVyLmJvYXJkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yR3JpZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5mbG93KHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVycygncGxheWVyMSBhbHJlYWR5IHNob3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbal1baV0uaGFzU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JpZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjTC0ke2p9LSR7aX1gKVxuICAgICAgICAgICAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdoYXNTaGlwJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb2xvckdyaWQgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWUuY29tcHV0ZXIuYm9hcmQuZ2V0Qm9hcmQoKVtqXVtpXS5pc1Nob3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1ItJHtqfS0ke2l9YClcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZCgnaXNTaG90JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGdhbWUucGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpW2pdW2ldLmlzU2hvdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZ3JpZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjTC0ke2p9LSR7aX1gKVxuICAgICAgICAgICAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdpc1Nob3QnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBkaXJlY3Rpb24sIHNoaXAsIHBsYXllcikgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAneCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgZ3JpZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwbGF5ZXJ9LSR7aX0tJHt5fWApXG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZCgnaGFzU2hpcCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cGxheWVyfS0ke3h9LSR7aX1gKVxuICAgICAgICAgICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hhc1NoaXAnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBcblxuICAgIGNvbnN0IG9yZGVycyA9IGFzeW5jIChvcmRlcikgPT4ge1xuICAgICAgICBpZiAob3JkZXIgPT09ICdjb21wQXR0YWNraW5nJykge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVycycpLmlubmVySFRNTCA9ICdFbmVteSBBdHRhY2tpbmcnXG4gICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdjb21wdXRlciBoaXQnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzJykuaW5uZXJIVE1MID0gJ0VuZW15IEhpdHMnXG4gICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdjb21wdXRlciBtaXNzZXMnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzJykuaW5uZXJIVE1MID0gJ0VuZW15IE1pc3NlcydcbiAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ3BsYXllcjEgdHVybicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnWW91ciBUdXJuJ1xuICAgICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAncGxheWVyMSBoaXQnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzJykuaW5uZXJIVE1MID0gJ1lvdSBIaXQnXG4gICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdwbGF5ZXIxIG1pc3NlcycpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnWW91IE1pc3NlZCdcbiAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ3BsYXllcjEgcGxhY2UgY2FycmllcicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnUGxhY2UgQ2FycmllcidcbiAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ3BsYXllcjEgcGxhY2UgYmF0dGxlc2hpcCcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnUGxhY2UgQmF0dGxlc2hpcCdcbiAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ3BsYXllcjEgcGxhY2UgY3J1aXNlcicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnUGxhY2UgQ3J1aXNlcidcbiAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ3BsYXllcjEgcGxhY2Ugc3VibWFyaW5lJykge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVycycpLmlubmVySFRNTCA9ICdQbGFjZSBTdWJtYXJpbmUnXG4gICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdwbGF5ZXIxIHBsYWNlIGRlc3Ryb3llcicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnUGxhY2UgRGVzdHJveWVyJ1xuICAgICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnc2hpcHMgcGxhY2VkJykge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVycycpLmlubmVySFRNTCA9ICdTaGlwcyBQbGFjZWQnXG4gICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdwbGF5ZXIxIHdpbicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnWW91IFdpbidcbiAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2NvbXB1dGVyIHdpbnMnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzJykuaW5uZXJIVE1MID0gJ0NvbXB1dGVyIFdpbnMnXG4gICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdwbGF5ZXIxIGFscmVhZHkgc2hvdCcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnQWxyZWFkeSBBdHRhY2tlZCBQb3N0aW9uJ1xuICAgICAgICB9IFxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHAxUGxhY2VTaGlwID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lLmlzQ2FycmllclBsYWNlZCgpKSB7XG4gICAgICAgICAgICBnYW1lLnBsYWNlQ2Fycmllcih4LCB5KVxuICAgICAgICB9IGVsc2UgaWYgKCFnYW1lLmlzQmF0dGxlc2hpcFBsYWNlZCgpKSB7XG4gICAgICAgICAgICBnYW1lLnBsYWNlQmF0dGxlc2hpcCh4LCB5KVxuICAgICAgICB9IGVsc2UgaWYgKCFnYW1lLmlzQ3J1aXNlclBsYWNlZCgpKSB7XG4gICAgICAgICAgICBnYW1lLnBsYWNlQ3J1aXNlcih4LCB5KVxuICAgICAgICB9IGVsc2UgaWYgKCFnYW1lLmlzU3VibWFyaW5lUGxhY2VkKCkpIHtcbiAgICAgICAgICAgIGdhbWUucGxhY2VTdWJtYXJpbmUoeCwgeSlcbiAgICAgICAgfSBlbHNlIGlmICghZ2FtZS5pc0Rlc3Ryb3llclBsYWNlZCgpKSB7XG4gICAgICAgICAgICBnYW1lLnBsYWNlRGVzdHJveWVyKHgsIHkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBsb2FkSG9tZSwgcGxhY2VTaGlwLCBjb2xvckdyaWQsIG9yZGVycywgbG9hZE1haW4gfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBVSSIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZmFjdG9yaWVzL3BsYXllcidcbmltcG9ydCBTaGlwIGZyb20gJy4uL2ZhY3Rvcmllcy9zaGlwJ1xuaW1wb3J0IFVJIGZyb20gJy4vVUknXG5cbmNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoKVxuICAgIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKClcbiAgICBsZXQgd2FpdGluZyA9IGZhbHNlXG4gICAgbGV0IGNhcnJpZXJQbGFjZWQgPSBmYWxzZVxuICAgIGxldCBiYXR0bGVTaGlwUGxhY2VkID0gZmFsc2VcbiAgICBsZXQgY3J1aXNlclBsYWNlZCA9IGZhbHNlXG4gICAgbGV0IHN1Ym1hcmluZVBsYWNlZCA9IGZhbHNlXG4gICAgbGV0IGRlc3Ryb3llclBsYWNlZCA9IGZhbHNlXG4gICAgXG4gICAgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgICAgICAgY29tcHV0ZXJTaGlwcygpXG4gICAgfVxuXG4gICAgY29uc3QgZmxvdyA9IGFzeW5jIChQMXBsYXllZCkgPT4ge1xuICAgICAgICBpZiAoIWdhbWVFbmRlZCgpKSB7XG4gICAgICAgICAgICBpZiAoUDFwbGF5ZWQpIHtcbiAgICAgICAgICAgICAgICB3YWl0aW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGF3YWl0IFVJLm9yZGVycygnY29tcEF0dGFja2luZycpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXIxLmJvYXJkKTtcbiAgICAgICAgICAgICAgICBVSS5vcmRlcnMoJ3BsYXllcjEgdHVybicpO1xuICAgICAgICAgICAgICAgIHdhaXRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FuUGxheSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHdhaXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IFxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGdhbWVFbmRlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBsYXllcjEuYm9hcmQucmVwb3J0U3VuaygpKSB7XG4gICAgICAgICAgICBVSS5vcmRlcnMoJ2NvbXB1dGVyIHdpbnMnKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlci5ib2FyZC5yZXBvcnRTdW5rKCkpIHtcbiAgICAgICAgICAgIFVJLm9yZGVycygncGxheWVyMSB3aW4nKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZUNhcnJpZXIgPSAoeCwgeSkgPT4ge1xuICAgICAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh4LCB5LCAneCcsIFNoaXAoNSwgJ2NhcnJpZXInKSlcbiAgICAgICAgVUkucGxhY2VTaGlwKHgsIHksICd4JywgU2hpcCg1LCAnY2FycmllcicpLCAnTCcpXG4gICAgICAgIGNhcnJpZXJQbGFjZWQgPSB0cnVlXG4gICAgICAgIFVJLm9yZGVycygncGxheWVyMSBwbGFjZSBiYXR0bGVzaGlwJylcbiAgICB9XG5cbiAgICBjb25zdCBpc0NhcnJpZXJQbGFjZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjYXJyaWVyUGxhY2VkXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VCYXR0bGVzaGlwID0gKHgsIHkpID0+IHtcbiAgICAgICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoeCwgeSwgJ3knLCBTaGlwKDQsICdiYXR0bGVzaGlwJykpXG4gICAgICAgIFVJLnBsYWNlU2hpcCh4LCB5LCAneScsIFNoaXAoNCwgJ2JhdHRsZXNoaXAnKSwgJ0wnKVxuICAgICAgICBiYXR0bGVTaGlwUGxhY2VkID0gdHJ1ZVxuICAgICAgICBVSS5vcmRlcnMoJ3BsYXllcjEgcGxhY2UgY3J1aXNlcicpXG4gICAgfVxuXG4gICAgY29uc3QgaXNCYXR0bGVzaGlwUGxhY2VkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYmF0dGxlU2hpcFBsYWNlZFxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlQ3J1aXNlciA9ICh4LCB5KSA9PiB7XG4gICAgICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHgsIHksICd4JywgU2hpcCgzLCAnY3J1aXNlcicpKVxuICAgICAgICBVSS5wbGFjZVNoaXAoeCwgeSwgJ3gnLCBTaGlwKDMsICdjcnVpc2VyJyksICdMJylcbiAgICAgICAgY3J1aXNlclBsYWNlZCA9IHRydWVcbiAgICAgICAgVUkub3JkZXJzKCdwbGF5ZXIxIHBsYWNlIHN1Ym1hcmluZScpXG4gICAgfVxuXG4gICAgY29uc3QgaXNDcnVpc2VyUGxhY2VkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU3VibWFyaW5lID0gKHgsIHkpID0+IHtcbiAgICAgICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoeCwgeSwgJ3gnLCBTaGlwKDMsICdzdWJtYXJpbmUnKSlcbiAgICAgICAgVUkucGxhY2VTaGlwKHgsIHksICd4JywgU2hpcCgzLCAnc3VibWFyaW5lJyksICdMJylcbiAgICAgICAgc3VibWFyaW5lUGxhY2VkID0gdHJ1ZVxuICAgICAgICBVSS5vcmRlcnMoJ3BsYXllcjEgcGxhY2UgZGVzdHJveWVyJylcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1Ym1hcmluZVBsYWNlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1Ym1hcmluZVBsYWNlZFxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlRGVzdHJveWVyID0gYXN5bmMgKHgsIHkpID0+IHtcbiAgICAgICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoeCwgeSwgJ3gnLCBTaGlwKDIsICdkZXN0cm95ZXInKSlcbiAgICAgICAgVUkucGxhY2VTaGlwKHgsIHksICd4JywgU2hpcCgyLCAnZGVzdHJveWVyJyksICdMJylcbiAgICAgICAgZGVzdHJveWVyUGxhY2VkID0gdHJ1ZVxuICAgICAgICBhd2FpdCBVSS5vcmRlcnMoJ3NoaXBzIHBsYWNlZCcpXG4gICAgICAgIFVJLmxvYWRNYWluKClcbiAgICB9XG5cbiAgICBjb25zdCBpc0Rlc3Ryb3llclBsYWNlZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlc3Ryb3llclBsYWNlZFxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbXB1dGVyLmJvYXJkLnBsYWNlU2hpcCgwLCAwLCAneCcsIFNoaXAoNSwgJ2NhcnJpZXInKSlcbiAgICAgICAgVUkucGxhY2VTaGlwKDAsIDAsICd4JywgU2hpcCg1LCAnY2FycmllcicpLCAnUicpXG5cbiAgICAgICAgY29tcHV0ZXIuYm9hcmQucGxhY2VTaGlwKDksIDUsICd5JywgU2hpcCg0LCAnYmF0dGxlc2hpcCcpKVxuICAgICAgICBVSS5wbGFjZVNoaXAoOSwgNSwgJ3knLCBTaGlwKDQsICdiYXR0bGVzaGlwJyksICdSJylcblxuICAgICAgICBjb21wdXRlci5ib2FyZC5wbGFjZVNoaXAoMywgNiwgJ3gnLCBTaGlwKDMsICdjcnVpc2VyJykpXG4gICAgICAgIFVJLnBsYWNlU2hpcCgzLCA2LCAneCcsIFNoaXAoMywgJ2NydWlzZXInKSwgJ1InKVxuXG4gICAgICAgIGNvbXB1dGVyLmJvYXJkLnBsYWNlU2hpcCgxLCAzLCAneScsIFNoaXAoMywgJ3N1Ym1hcmluZScpKVxuICAgICAgICBVSS5wbGFjZVNoaXAoMSwgMywgJ3knLCBTaGlwKDMsICdzdWJtYXJpbmUnKSwgJ1InKVxuXG4gICAgICAgIGNvbXB1dGVyLmJvYXJkLnBsYWNlU2hpcCg4LCAyLCAneCcsIFNoaXAoMiwgJ2Rlc3Ryb3llcicpKVxuICAgICAgICBVSS5wbGFjZVNoaXAoOCwgMiwgJ3gnLCBTaGlwKDIsICdkZXN0cm95ZXInKSwgJ1InKVxuICAgIH1cblxuICAgIHJldHVybiB7IHBsYXllcjEsIGNvbXB1dGVyLCBuZXdHYW1lLCBmbG93LCBnYW1lRW5kZWQsIGNhblBsYXksIHBsYWNlQ2FycmllciwgaXNDYXJyaWVyUGxhY2VkLCBwbGFjZUJhdHRsZXNoaXAsIGlzQmF0dGxlc2hpcFBsYWNlZCwgcGxhY2VDcnVpc2VyLCBpc0NydWlzZXJQbGFjZWQsIHBsYWNlU3VibWFyaW5lLCBpc1N1Ym1hcmluZVBsYWNlZCwgcGxhY2VEZXN0cm95ZXIsIGlzRGVzdHJveWVyUGxhY2VkIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJ1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgVUkubG9hZEhvbWUoKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=