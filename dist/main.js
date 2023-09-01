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
    user-select: none;
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

.isShothasShip {
    background-color: red;
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

.switch:hover {
    opacity: 0.6;
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
    user-select: none;
}

.err {
    background-color: red;
    cursor:not-allowed;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,qDAAqD;IACrD,qCAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;;AAExB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,qCAAqC;IACrC,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,aAAa;IACb,mCAAmC;IACnC,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,yCAAyC;IACzC,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,yCAAyC;IACzC,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;IACf,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;;;AAGA;IACI,UAAU;IACV,WAAW;IACX,yCAAyC;IACzC,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,yCAAyC;IACzC,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,yCAAyC;AAC7C;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,yBAAyB;IACzB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;;AAEzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,SAAS;IACT,+CAA+C;AACnD;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,iCAAiC;IACjC,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    fill: white;\n    user-select: none;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    background: -webkit-radial-gradient(#07102c, #000619);\n    font-family: 'Courier New', monospace;\n    color: white;\n}\n\nmain {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 7rem 5rem 1fr 3rem;\n}\n\nheader {\n    grid-row: 1 / 2;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n}\n\n.logo {\n    height: 80%;\n}\n\n#logo {\n    width: 400px;\n}\n\n.message {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    padding-top: 3rem;\n    color: white;\n}\n\n.message-inner {\n    display: grid;\n    background-color: rgb(63, 63, 63);\n    border: 1px solid white;\n    border-radius: 2rem;\n    padding: 0.5rem 2rem;\n\n}\n\n.main-inner {\n    grid-row: 3 / 4;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n\n.main-left, .main-right {\n    height: 80%;\n    width: 80%;\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    justify-items: center;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\n.left-grid-outer, .right-grid-outer {\n    width: 90%;\n    background-color: rgb(255, 255, 255, 0.8);\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.left-grid, .right-grid {\n    width: 99%;\n    height: 99%;\n    background-color: rgb(255, 255, 255, 0.8);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 0.1rem;\n}\n\n.grid-cell {\n    background-color: #000619;\n}\n\n.grid-cell:hover {\n    opacity: 0.8;\n}\n\n.place-ship {\n    opacity: 0.8;\n}\n\n.hasShip {\n    background-color: red;\n}\n\n.isShot {\n    background-color: blue;\n}\n\n.isShothasShip {\n    background-color: red;\n}\n\nfooter {\n    display: grid;\n    grid-template-columns: auto 30px;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    font-size: 1rem;\n    color: white;\n    user-select: none;\n}\n\nfooter svg {\n    fill: white;\n}\n\n.home-inner {\n    grid-row: 2 / 4;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n.play-button {\n    background-color: rgb(63, 63, 63);\n    padding: 1rem 2rem;\n    border: 1px solid white;\n    transition: 0.10s ease-in;\n    cursor: pointer;\n    border-radius: 0.2rem;\n}\n\n.play-button:hover {\n    scale: 1.2;\n}\n\n.main-inner-ss {\n    grid-row: 3 / 4;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n\n.main-grid-outer {\n    width: 40%;\n    height: 80%;\n    background-color: rgb(255, 255, 255, 0.8);\n    display: grid;\n    align-items: center;\n    justify-items: center;\n}\n\n.main-grid {\n    width: 99%;\n    height: 99%;\n    background-color: rgb(255, 255, 255, 0.8);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    gap: 0.1rem;\n}\n\n.place-ships {\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    padding-top: 3rem;\n    color: white;\n    grid-template-columns: 1fr 5rem 20rem 1fr;\n}\n\n.switch-axis {\n    grid-column: 2 / 3;\n    height: 4.5rem;\n    background-color: #07102c;\n    border: 2px solid white;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n\n}\n\n.switch:hover {\n    opacity: 0.6;\n}\n\n.place-ships {\n    display: grid;\n    grid-auto-flow: column; \n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    padding-top: 3rem;\n    color: white;\n    gap: 2rem;\n    grid-template-columns: 1fr 5rem min-content 1fr;\n}\n\n.place-ships-inner {\n    display: grid;\n    grid-column: 3 / 4;\n    background-color: rgb(63, 63, 63);\n    border: 1px solid white;\n    border-radius: 2rem;\n    padding: 0.5rem 2rem;\n}\n\n.orders {\n    white-space: nowrap;\n    user-select: none;\n}\n\n.err {\n    background-color: red;\n    cursor:not-allowed;\n}"],"sourceRoot":""}]);
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
    } else if ((ship.name = 'battleShip')) {
      battleShip = ship
    } else if (ship.name === 'submarine') {
      submarine = ship
    } else if (ship.name === 'cruiser') {
      cruiser = ship
    } else if (ship.name === 'destroyer') {
      destoryer = ship
    }
  }

  const placeShip = (x, y, direction, ship) => {
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
    return board
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

  const attack = async (x, y, opponentBoard) => {
    opponentBoard.receiveAttack(x, y)
    _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].colorGrid()
    if (opponentBoard.getBoard()[x][y].hasShip) {
      await _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].orders('player1 hit')
    } else {
      await _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].orders('player1 missed')
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
  let name = nam
  let numHits = 0
  let sunk = false

  const hit = () => (numHits = numHits + 1)

  const isSunk = () => (numHits === length ? (sunk = true) : (sunk = false))

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
                <svg class="switch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,9L17,5V8H10V10H17V13M7,11L3,15L7,19V16H14V14H7V11Z" /></svg>
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
      switchAxis()
      rotate()
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
    document.querySelector('.switch-axis').id === 'x'
      ? (document.querySelector('.switch-axis').id = 'y')
      : (document.querySelector('.switch-axis').id = 'x')
  }

  const rotate = () => {
    const svg = document.querySelector('.switch')

    svg.style.transform !== 'scaleX(-1)'
      ? (svg.style.transform = 'scaleX(-1)')
      : (svg.style.transform = 'scaleX(1)')
  }

  const shipHover = (x, y) => {
    removeHL()
    let direction = document.querySelector('.switch-axis').id
    let shipLength = getLength()
    if (direction === 'x') {
      if (x + shipLength > 10) {
        let gridCell = document.querySelector(`#L-${x}-${y}`)
        gridCell.classList.add('err')
      } else {
        if (!shipCanBePlaced(x, y, direction, shipLength)) {
          let gridCell = document.querySelector(`#L-${x}-${y}`)
          gridCell.classList.add('err')
        } else {
          for (let i = x; i < x + shipLength; ++i) {
            let gridCell = document.querySelector(`#L-${i}-${y}`)
            gridCell.classList.add('place-ship')
          }
        }
      }
    }
    if (direction === 'y') {
      if (y + shipLength > 10) {
        let gridCell = document.querySelector(`#L-${x}-${y}`)
        gridCell.classList.add('err')
      } else {
        if (!shipCanBePlaced(x, y, direction, shipLength)) {
          let gridCell = document.querySelector(`#L-${x}-${y}`)
          gridCell.classList.add('err')
        } else {
          for (let i = y; i < y + shipLength; ++i) {
            let gridCell = document.querySelector(`#L-${x}-${i}`)
            gridCell.classList.add('place-ship')
          }
        }
      }
    }
  }

  const removeHL = () => {
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        let gridCell = document.querySelector(`#L-${j}-${i}`)
        gridCell.classList.remove('place-ship')
        gridCell.classList.remove('err')
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

        gridCell.addEventListener('click', async () => {
          if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].gameEnded() && _game__WEBPACK_IMPORTED_MODULE_0__["default"].canPlay()) {
            if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].player1.isLegal(_game__WEBPACK_IMPORTED_MODULE_0__["default"].computer.board, x, y)) {
              await _game__WEBPACK_IMPORTED_MODULE_0__["default"].player1.attack(x, y, _game__WEBPACK_IMPORTED_MODULE_0__["default"].computer.board)
              // colorGrid()
              _game__WEBPACK_IMPORTED_MODULE_0__["default"].flow(true)
            } else {
              await orders('player1 already shot')
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
        if (
          _game__WEBPACK_IMPORTED_MODULE_0__["default"].computer.board.getBoard()[j][i].isShot &&
          !_game__WEBPACK_IMPORTED_MODULE_0__["default"].computer.board.getBoard()[j][i].hasShip
        ) {
          let gridCell = document.querySelector(`#R-${j}-${i}`)
          gridCell.classList.add('isShot')
        }
        if (
          _game__WEBPACK_IMPORTED_MODULE_0__["default"].computer.board.getBoard()[j][i].isShot &&
          _game__WEBPACK_IMPORTED_MODULE_0__["default"].computer.board.getBoard()[j][i].hasShip
        ) {
          let gridCell = document.querySelector(`#R-${j}-${i}`)
          gridCell.classList.add('isShothasShip')
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
        let gridCell = document.querySelector(`#L-${i}-${y}`)
        gridCell.classList.add('hasShip')
      }
    } else {
      for (let i = y; i < y + ship.length; ++i) {
        let gridCell = document.querySelector(`#L-${x}-${i}`)
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
    } else if (order === 'player1 missed') {
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
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  const p1PlaceShip = (x, y) => {
    let direction = document.querySelector('.switch-axis').id
    if (shipCanBePlaced(x, y, direction, 0)) {
      if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isCarrierPlaced()) {
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].placeCarrier(x, y, direction, 0)
      } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isBattleshipPlaced()) {
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].placeBattleship(x, y, direction, 0)
      } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isCruiserPlaced()) {
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].placeCruiser(x, y, direction, 0)
      } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isSubmarinePlaced()) {
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].placeSubmarine(x, y, direction, 0)
      } else if (!_game__WEBPACK_IMPORTED_MODULE_0__["default"].isDestroyerPlaced()) {
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].placeDestroyer(x, y, direction, 0)
      }
    }
  }

  const shipCanBePlaced = (x, y, direction, shipLength) => {
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 10; ++j) {
        let gridCell = document.querySelector(`#L-${j}-${i}`)
        if (gridCell.classList.contains('err')) {
          return false
        }
      }
    }
    if (!shipLength !== 0) {
      if (direction === 'x') {
        for (let i = x; i < x + shipLength; ++i) {
          if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].player1.board.getBoard()[i][y].hasShip) {
            return false
          }
        }
      }
      if (direction === 'y') {
        for (let i = y; i < y + shipLength; ++i) {
          if (_game__WEBPACK_IMPORTED_MODULE_0__["default"].player1.board.getBoard()[x][i].hasShip) {
            return false
          }
        }
      }
      return true
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
        await _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('compAttacking')
        await computer.randomAttack(player1.board)
        _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 turn')
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

  const placeCarrier = (x, y, direction) => {
    player1.board.placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, 'carrier'))
    _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, 'carrier'), 'L')
    carrierPlaced = true
    _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 place battleship')
  }

  const isCarrierPlaced = () => {
    return carrierPlaced
  }

  const placeBattleship = (x, y, direction) => {
    player1.board.placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 'battleship'))
    _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 'battleship'), 'L')
    battleShipPlaced = true
    _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 place cruiser')
  }

  const isBattleshipPlaced = () => {
    return battleShipPlaced
  }

  const placeCruiser = (x, y, direction) => {
    player1.board.placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'cruiser'))
    _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'cruiser'), 'L')
    cruiserPlaced = true
    _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 place submarine')
  }

  const isCruiserPlaced = () => {
    return cruiserPlaced
  }

  const placeSubmarine = (x, y, direction) => {
    player1.board.placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'submarine'))
    _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'submarine'), 'L')
    submarinePlaced = true
    _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('player1 place destroyer')
  }

  const isSubmarinePlaced = () => {
    return submarinePlaced
  }

  const placeDestroyer = async (x, y, direction) => {
    player1.board.placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, 'destroyer'))
    _UI__WEBPACK_IMPORTED_MODULE_2__["default"].placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, 'destroyer'), 'L')
    destroyerPlaced = true
    await _UI__WEBPACK_IMPORTED_MODULE_2__["default"].orders('ships placed')
    _UI__WEBPACK_IMPORTED_MODULE_2__["default"].loadMain()
  }

  const isDestroyerPlaced = () => {
    return destroyerPlaced
  }

  const computerShips = () => {
    //CARRIER
    let x = Math.floor(Math.random() * 10)
    let y = Math.floor(Math.random() * 10)
    let direction = Math.floor(Math.random() * 2)
    direction === 0 ? (direction = 'x') : (direction = 'y')

    while (!isLegal(x, y, direction, 5)) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    }
    computer.board.placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5, 'carrier'))

    // BATTLESHIP
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * 10)
    direction = Math.floor(Math.random() * 2)
    direction === 0 ? (direction = 'x') : (direction = 'y')

    while (!isLegal(x, y, direction, 5)) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    }
    computer.board.placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4, 'battleship'))

    //CRUISER
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * 10)
    direction = Math.floor(Math.random() * 2)
    direction === 0 ? (direction = 'x') : (direction = 'y')

    while (!isLegal(x, y, direction, 5)) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    }
    computer.board.placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'cruiser'))

    //SUBMARINE
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * 10)
    direction = Math.floor(Math.random() * 2)
    direction === 0 ? (direction = 'x') : (direction = 'y')

    while (!isLegal(x, y, direction, 5)) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    }
    computer.board.placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3, 'submarine'))

    //DESTORYER
    x = Math.floor(Math.random() * 10)
    y = Math.floor(Math.random() * 10)
    direction = Math.floor(Math.random() * 2)
    direction === 0 ? (direction = 'x') : (direction = 'y')

    while (!isLegal(x, y, direction, 5)) {
      x = Math.floor(Math.random() * 10)
      y = Math.floor(Math.random() * 10)
    }
    computer.board.placeShip(x, y, direction, (0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2, 'destroyer'))
  }

  const isLegal = (x, y, direction, shipLength) => {
    if (x + shipLength > 10) {
      return false
    }
    if (y + shipLength > 10) {
      return false
    }
    if (direction === 'x') {
      for (let i = x; i < x + shipLength; ++i) {
        if (computer.board.getBoard()[i][y].hasShip) {
          return false
        }
      }
    }
    if (direction === 'y') {
      for (let i = y; i < y + shipLength; ++i) {
        if (computer.board.getBoard()[x][i].hasShip) {
          return false
        }
      }
    }
    return true
  }

  return {
    player1,
    computer,
    newGame,
    flow,
    gameEnded,
    canPlay,
    placeCarrier,
    isCarrierPlaced,
    placeBattleship,
    isBattleshipPlaced,
    placeCruiser,
    isCruiserPlaced,
    placeSubmarine,
    isSubmarinePlaced,
    placeDestroyer,
    isDestroyerPlaced,
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtB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QTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDUzs7QUFFN0I7QUFDQSxFQUFFLG1EQUFFO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuYm9keSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzA3MTAyYywgIzAwMDYxOSk7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbm1haW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3cmVtIDVyZW0gMWZyIDNyZW07XG59XG5cbmhlYWRlciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICAgIGhlaWdodDogODAlO1xufVxuXG4jbG9nbyB7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuXG4ubWVzc2FnZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lc3NhZ2UtaW5uZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XG5cbn1cblxuLm1haW4taW5uZXIge1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLWxlZnQsIC5tYWluLXJpZ2h0IHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubGVmdC1ncmlkLW91dGVyLCAucmlnaHQtZ3JpZC1vdXRlciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdC1ncmlkLCAucmlnaHQtZ3JpZCB7XG4gICAgd2lkdGg6IDk5JTtcbiAgICBoZWlnaHQ6IDk5JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdhcDogMC4xcmVtO1xufVxuXG4uZ3JpZC1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNjE5O1xufVxuXG4uZ3JpZC1jZWxsOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5wbGFjZS1zaGlwIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5oYXNTaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5pc1Nob3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5pc1Nob3RoYXNTaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbmZvb3RlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5mb290ZXIgc3ZnIHtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cblxuLmhvbWUtaW5uZXIge1xuICAgIGdyaWQtcm93OiAyIC8gNDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjMsIDYzKTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogMC4xMHMgZWFzZS1pbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuXG4ucGxheS1idXR0b246aG92ZXIge1xuICAgIHNjYWxlOiAxLjI7XG59XG5cbi5tYWluLWlubmVyLXNzIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4ubWFpbi1ncmlkLW91dGVyIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLWdyaWQge1xuICAgIHdpZHRoOiA5OSU7XG4gICAgaGVpZ2h0OiA5OSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBnYXA6IDAuMXJlbTtcbn1cblxuLnBsYWNlLXNoaXBzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVyZW0gMjByZW0gMWZyO1xufVxuXG4uc3dpdGNoLWF4aXMge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBoZWlnaHQ6IDQuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcxMDJjO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLnN3aXRjaDpob3ZlciB7XG4gICAgb3BhY2l0eTogMC42O1xufVxuXG4ucGxhY2Utc2hpcHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVyZW0gbWluLWNvbnRlbnQgMWZyO1xufVxuXG4ucGxhY2Utc2hpcHMtaW5uZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2MywgNjMsIDYzKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xufVxuXG4ub3JkZXJzIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZXJyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFEQUFxRDtJQUNyRCxxQ0FBcUM7SUFDckMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFD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c2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzA3MTAyYywgIzAwMDYxOSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3cmVtIDVyZW0gMWZyIDNyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lc3NhZ2UtaW5uZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG5cXG59XFxuXFxuLm1haW4taW5uZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbGVmdCwgLm1haW4tcmlnaHQge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5sZWZ0LWdyaWQtb3V0ZXIsIC5yaWdodC1ncmlkLW91dGVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQtZ3JpZCwgLnJpZ2h0LWdyaWQge1xcbiAgICB3aWR0aDogOTklO1xcbiAgICBoZWlnaHQ6IDk5JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAwLjFyZW07XFxufVxcblxcbi5ncmlkLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwNjE5O1xcbn1cXG5cXG4uZ3JpZC1jZWxsOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ucGxhY2Utc2hpcCB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmhhc1NoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5pc1Nob3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaXNTaG90aGFzU2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHN2ZyB7XFxuICAgIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZS1pbm5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjMsIDYzLCA2Myk7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDAuMTBzIGVhc2UtaW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4ucGxheS1idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4yO1xcbn1cXG5cXG4ubWFpbi1pbm5lci1zcyB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4ubWFpbi1ncmlkLW91dGVyIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWdyaWQge1xcbiAgICB3aWR0aDogOTklO1xcbiAgICBoZWlnaHQ6IDk5JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAwLjFyZW07XFxufVxcblxcbi5wbGFjZS1zaGlwcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXJlbSAyMHJlbSAxZnI7XFxufVxcblxcbi5zd2l0Y2gtYXhpcyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgaGVpZ2h0OiA0LjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzEwMmM7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5zd2l0Y2g6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5wbGFjZS1zaGlwcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXJlbSBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5wbGFjZS1zaGlwcy1pbm5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA2MywgNjMpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxufVxcblxcbi5vcmRlcnMge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmVyciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAvL0luaXRpYWxpemUgYm9hcmRcbiAgbGV0IGJvYXJkID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgYm9hcmRbaV0gPSBbXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICsraikge1xuICAgICAgYm9hcmRbaV1bal0gPSB7IGhhc1NoaXA6IGZhbHNlLCBpc1Nob3Q6IGZhbHNlIH1cbiAgICB9XG4gIH1cbiAgLy9TaGlwc1xuICBsZXQgY2FycmllclxuICBsZXQgYmF0dGxlU2hpcFxuICBsZXQgc3VibWFyaW5lXG4gIGxldCBjcnVpc2VyXG4gIGxldCBkZXN0b3J5ZXJcblxuICBjb25zdCBhc3NpZ25TaGlwID0gKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5uYW1lID09PSAnY2FycmllcicpIHtcbiAgICAgIGNhcnJpZXIgPSBzaGlwXG4gICAgfSBlbHNlIGlmICgoc2hpcC5uYW1lID0gJ2JhdHRsZVNoaXAnKSkge1xuICAgICAgYmF0dGxlU2hpcCA9IHNoaXBcbiAgICB9IGVsc2UgaWYgKHNoaXAubmFtZSA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICAgIHN1Ym1hcmluZSA9IHNoaXBcbiAgICB9IGVsc2UgaWYgKHNoaXAubmFtZSA9PT0gJ2NydWlzZXInKSB7XG4gICAgICBjcnVpc2VyID0gc2hpcFxuICAgIH0gZWxzZSBpZiAoc2hpcC5uYW1lID09PSAnZGVzdHJveWVyJykge1xuICAgICAgZGVzdG9yeWVyID0gc2hpcFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4LCB5LCBkaXJlY3Rpb24sIHNoaXApID0+IHtcbiAgICBhc3NpZ25TaGlwKHNoaXApXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSB7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGJvYXJkW2ldW3ldLmhhc1NoaXAgPSBzaGlwLm5hbWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgc2hpcC5sZW5ndGg7ICsraSkge1xuICAgICAgICBib2FyZFt4XVtpXS5oYXNTaGlwID0gc2hpcC5uYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGl0U2hpcCA9IChuYW1lKSA9PiB7XG4gICAgaWYgKG5hbWUgPT09ICdjYXJyaWVyJykge1xuICAgICAgY2Fycmllci5oaXQoKVxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2JhdHRsZVNoaXAnKSB7XG4gICAgICBiYXR0bGVTaGlwLmhpdCgpXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnc3VibWFyaW5lJykge1xuICAgICAgc3VibWFyaW5lLmhpdCgpXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnY3J1aXNlcicpIHtcbiAgICAgIGNydWlzZXIuaGl0KClcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgICBkZXN0b3J5ZXIuaGl0KClcbiAgICB9XG4gIH1cblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBib2FyZFt4XVt5XS5pc1Nob3QgPSB0cnVlXG4gICAgaWYgKGJvYXJkW3hdW3ldLmhhc1NoaXAgIT09IGZhbHNlKSB7XG4gICAgICBsZXQgbmFtZSA9IGJvYXJkW3hdW3ldLmhhc1NoaXBcbiAgICAgIGhpdFNoaXAobmFtZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCByZXBvcnRTdW5rID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgIGlmIChib2FyZFtqXVtpXS5pc1Nob3QgPT09IGZhbHNlICYmIGJvYXJkW2pdW2ldLmhhc1NoaXAgIT09IGZhbHNlKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkXG4gIH1cblxuICByZXR1cm4geyBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIHJlcG9ydFN1bmssIGdldEJvYXJkIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJ1xuaW1wb3J0IFVJIGZyb20gJy4uL21vZHVsZXMvVUknXG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKVxuXG4gIGNvbnN0IGF0dGFjayA9IGFzeW5jICh4LCB5LCBvcHBvbmVudEJvYXJkKSA9PiB7XG4gICAgb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpXG4gICAgVUkuY29sb3JHcmlkKClcbiAgICBpZiAob3Bwb25lbnRCb2FyZC5nZXRCb2FyZCgpW3hdW3ldLmhhc1NoaXApIHtcbiAgICAgIGF3YWl0IFVJLm9yZGVycygncGxheWVyMSBoaXQnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBVSS5vcmRlcnMoJ3BsYXllcjEgbWlzc2VkJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBpc0xlZ2FsID0gKG9wcG9uZW50Qm9hcmQsIHgsIHkpID0+IHtcbiAgICBpZiAob3Bwb25lbnRCb2FyZC5nZXRCb2FyZCgpW3hdW3ldLmlzU2hvdCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IGFzeW5jIChvcHBvbmVudEJvYXJkKSA9PiB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuXG4gICAgd2hpbGUgKCFpc0xlZ2FsKG9wcG9uZW50Qm9hcmQsIHgsIHkpKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgfVxuXG4gICAgb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpXG4gICAgVUkuY29sb3JHcmlkKClcbiAgICBpZiAob3Bwb25lbnRCb2FyZC5nZXRCb2FyZCgpW3hdW3ldLmhhc1NoaXApIHtcbiAgICAgIGF3YWl0IFVJLm9yZGVycygnY29tcHV0ZXIgaGl0JylcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgVUkub3JkZXJzKCdjb21wdXRlciBtaXNzZXMnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGJvYXJkLCBhdHRhY2ssIHJhbmRvbUF0dGFjaywgaXNMZWdhbCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllclxuIiwiY29uc3QgU2hpcCA9IChsZW4sIG5hbSkgPT4ge1xuICBsZXQgbGVuZ3RoID0gbGVuXG4gIGxldCBuYW1lID0gbmFtXG4gIGxldCBudW1IaXRzID0gMFxuICBsZXQgc3VuayA9IGZhbHNlXG5cbiAgY29uc3QgaGl0ID0gKCkgPT4gKG51bUhpdHMgPSBudW1IaXRzICsgMSlcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiAobnVtSGl0cyA9PT0gbGVuZ3RoID8gKHN1bmsgPSB0cnVlKSA6IChzdW5rID0gZmFsc2UpKVxuXG4gIHJldHVybiB7IGxlbmd0aCwgbmFtZSwgaGl0LCBpc1N1bmsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwXG4iLCJpbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUnXG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gICAgaG9tZVNjcmVlbigpXG4gICAgaW5pdEhvbWUoKVxuICB9XG5cbiAgY29uc3QgbG9hZFNoaXBTY3JlZW4gPSAoKSA9PiB7XG4gICAgcmVtb3ZlQ29udGVudCgpXG4gICAgc2hpcFNjcmVlbigpXG4gICAgbG9hZE1haW5HcmlkKClcbiAgICBpbml0TWFpbkdyaWQoKVxuICAgIG9yZGVycygncGxheWVyMSBwbGFjZSBjYXJyaWVyJylcbiAgfVxuXG4gIGNvbnN0IGxvYWRNYWluID0gKCkgPT4ge1xuICAgIHJlbW92ZUNvbnRlbnQoKVxuICAgIG1haW5TY3JlZW4oKVxuICAgIGxvYWRHcmlkKClcbiAgICBpbml0R3JpZCgpXG4gICAgc2hvd1NoaXBzKClcbiAgICBnYW1lLm5ld0dhbWUoKVxuICB9XG5cbiAgY29uc3QgcmVtb3ZlQ29udGVudCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykucmVtb3ZlKClcbiAgfVxuXG4gIGNvbnN0IGhvbWVTY3JlZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgaWQ9J2xvZ28nIHNyYz1cIi4vbG9nby5qcGVnXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgPGRpdiBjbGFzcz1cImhvbWUtaW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxoMT5QbGF5IEdhbWU8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgMjAyMyBEZWNsYW5rYjwvc3Bhbj5cbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9EZWNsYW5LQnJvd24nIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTIsMkExMCwxMCAwIDAsMCAyLDEyQzIsMTYuNDIgNC44NywyMC4xNyA4Ljg0LDIxLjVDOS4zNCwyMS41OCA5LjUsMjEuMjcgOS41LDIxQzkuNSwyMC43NyA5LjUsMjAuMTQgOS41LDE5LjMxQzYuNzMsMTkuOTEgNi4xNCwxNy45NyA2LjE0LDE3Ljk3QzUuNjgsMTYuODEgNS4wMywxNi41IDUuMDMsMTYuNUM0LjEyLDE1Ljg4IDUuMSwxNS45IDUuMSwxNS45QzYuMSwxNS45NyA2LjYzLDE2LjkzIDYuNjMsMTYuOTNDNy41LDE4LjQ1IDguOTcsMTggOS41NCwxNy43NkM5LjYzLDE3LjExIDkuODksMTYuNjcgMTAuMTcsMTYuNDJDNy45NSwxNi4xNyA1LjYyLDE1LjMxIDUuNjIsMTEuNUM1LjYyLDEwLjM5IDYsOS41IDYuNjUsOC43OUM2LjU1LDguNTQgNi4yLDcuNSA2Ljc1LDYuMTVDNi43NSw2LjE1IDcuNTksNS44OCA5LjUsNy4xN0MxMC4yOSw2Ljk1IDExLjE1LDYuODQgMTIsNi44NEMxMi44NSw2Ljg0IDEzLjcxLDYuOTUgMTQuNSw3LjE3QzE2LjQxLDUuODggMTcuMjUsNi4xNSAxNy4yNSw2LjE1QzE3LjgsNy41IDE3LjQ1LDguNTQgMTcuMzUsOC43OUMxOCw5LjUgMTguMzgsMTAuMzkgMTguMzgsMTEuNUMxOC4zOCwxNS4zMiAxNi4wNCwxNi4xNiAxMy44MSwxNi40MUMxNC4xNywxNi43MiAxNC41LDE3LjMzIDE0LjUsMTguMjZDMTQuNSwxOS42IDE0LjUsMjAuNjggMTQuNSwyMUMxNC41LDIxLjI3IDE0LjY2LDIxLjU5IDE1LjE3LDIxLjVDMTkuMTQsMjAuMTYgMjIsMTYuNDIgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlonIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgICBgXG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pXG4gIH1cblxuICBjb25zdCBpbml0SG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYnV0dG9uJylcbiAgICBwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9hZFNoaXBTY3JlZW4oKSlcbiAgfVxuXG4gIGNvbnN0IHNoaXBTY3JlZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgaWQ9J2xvZ28nIHNyYz1cIi4vbG9nby5qcGVnXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZS1zaGlwc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXRjaC1heGlzXCIgaWQ9XCJ4XCI+XG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInN3aXRjaFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0yMSw5TDE3LDVWOEgxMFYxMEgxN1YxM003LDExTDMsMTVMNywxOVYxNkgxNFYxNEg3VjExWlwiIC8+PC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZS1zaGlwcy1pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm9yZGVyc1wiPk9yZGVyczogUGxhY2UgU2hpcHM8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1pbm5lci1zc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tZ3JpZC1vdXRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWdyaWRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDIzIERlY2xhbmtiPC9zcGFuPlxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0RlY2xhbktCcm93bicgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCc+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWicgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIGBcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbilcbiAgfVxuXG4gIGNvbnN0IGxvYWRNYWluR3JpZCA9ICgpID0+IHtcbiAgICBsZXQgbWFpbkdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ncmlkJylcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICsraikge1xuICAgICAgICBsZXQgZ3JpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdncmlkLWNlbGwnKVxuICAgICAgICBncmlkQ2VsbC5pZCA9IGBMLSR7an0tJHtpfWBcbiAgICAgICAgbWFpbkdyaWQuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5pdE1haW5HcmlkID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtYXhpcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc3dpdGNoQXhpcygpXG4gICAgICByb3RhdGUoKVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICsraikge1xuICAgICAgICBsZXQgZ3JpZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjTC0ke2p9LSR7aX1gKVxuXG4gICAgICAgIGxldCB4ID0gcGFyc2VJbnQoZ3JpZENlbGwuaWQuc3BsaXQoJy0nKVsxXSlcbiAgICAgICAgbGV0IHkgPSBwYXJzZUludChncmlkQ2VsbC5pZC5zcGxpdCgnLScpWzJdKVxuXG4gICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICBzaGlwSG92ZXIoeCwgeSlcbiAgICAgICAgfSlcblxuICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBwMVBsYWNlU2hpcCh4LCB5KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN3aXRjaEF4aXMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1heGlzJykuaWQgPT09ICd4J1xuICAgICAgPyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1heGlzJykuaWQgPSAneScpXG4gICAgICA6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLWF4aXMnKS5pZCA9ICd4JylcbiAgfVxuXG4gIGNvbnN0IHJvdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoJylcblxuICAgIHN2Zy5zdHlsZS50cmFuc2Zvcm0gIT09ICdzY2FsZVgoLTEpJ1xuICAgICAgPyAoc3ZnLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZVgoLTEpJylcbiAgICAgIDogKHN2Zy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGVYKDEpJylcbiAgfVxuXG4gIGNvbnN0IHNoaXBIb3ZlciA9ICh4LCB5KSA9PiB7XG4gICAgcmVtb3ZlSEwoKVxuICAgIGxldCBkaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLWF4aXMnKS5pZFxuICAgIGxldCBzaGlwTGVuZ3RoID0gZ2V0TGVuZ3RoKClcbiAgICBpZiAoZGlyZWN0aW9uID09PSAneCcpIHtcbiAgICAgIGlmICh4ICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNMLSR7eH0tJHt5fWApXG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2VycicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXNoaXBDYW5CZVBsYWNlZCh4LCB5LCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpKSB7XG4gICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0wtJHt4fS0ke3l9YClcbiAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdlcnInKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXBMZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0wtJHtpfS0ke3l9YClcbiAgICAgICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXAnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAneScpIHtcbiAgICAgIGlmICh5ICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNMLSR7eH0tJHt5fWApXG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2VycicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXNoaXBDYW5CZVBsYWNlZCh4LCB5LCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpKSB7XG4gICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0wtJHt4fS0ke3l9YClcbiAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdlcnInKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIHNoaXBMZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0wtJHt4fS0ke2l9YClcbiAgICAgICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlLXNoaXAnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUhMID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNMLSR7an0tJHtpfWApXG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlLXNoaXAnKVxuICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdlcnInKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICBpZiAoIWdhbWUuaXNDYXJyaWVyUGxhY2VkKCkpIHtcbiAgICAgIHJldHVybiA1XG4gICAgfSBlbHNlIGlmICghZ2FtZS5pc0JhdHRsZXNoaXBQbGFjZWQoKSkge1xuICAgICAgcmV0dXJuIDRcbiAgICB9IGVsc2UgaWYgKCFnYW1lLmlzQ3J1aXNlclBsYWNlZCgpKSB7XG4gICAgICByZXR1cm4gM1xuICAgIH0gZWxzZSBpZiAoIWdhbWUuaXNTdWJtYXJpbmVQbGFjZWQoKSkge1xuICAgICAgcmV0dXJuIDNcbiAgICB9IGVsc2UgaWYgKCFnYW1lLmlzRGVzdHJveWVyUGxhY2VkKCkpIHtcbiAgICAgIHJldHVybiAyXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWFpblNjcmVlbiA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxuXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICBtYWluLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBpZD0nbG9nbycgc3JjPVwiLi9sb2dvLmpwZWdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwib3JkZXJzXCI+T3JkZXJzOiBGaXJlIEF3YXk8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1pbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxoMj5GcmllbmRseSBXYXRlcnM8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWdyaWQtb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aDI+RW5lbXkgV2F0ZXJzPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtZ3JpZC1vdXRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDIzIERlY2xhbmtiPC9zcGFuPlxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0RlY2xhbktCcm93bicgdGFyZ2V0PSdfYmxhbmsnIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcic+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCc+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9J00xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWicgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIGBcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbilcbiAgfVxuXG4gIGNvbnN0IGxvYWRHcmlkID0gKCkgPT4ge1xuICAgIGxldCBsZWZ0R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWdyaWQnKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY2VsbCcpXG4gICAgICAgIGdyaWRDZWxsLmlkID0gYEwtJHtqfS0ke2l9YFxuICAgICAgICBsZWZ0R3JpZC5hcHBlbmRDaGlsZChncmlkQ2VsbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmlnaHRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWdyaWQnKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY2VsbCcpXG4gICAgICAgIGdyaWRDZWxsLmlkID0gYFItJHtqfS0ke2l9YFxuICAgICAgICByaWdodEdyaWQuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5pdEdyaWQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyArK2opIHtcbiAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1ItJHtqfS0ke2l9YClcblxuICAgICAgICBsZXQgeCA9IGdyaWRDZWxsLmlkLnNwbGl0KCctJylbMV1cbiAgICAgICAgbGV0IHkgPSBncmlkQ2VsbC5pZC5zcGxpdCgnLScpWzJdXG5cbiAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKCFnYW1lLmdhbWVFbmRlZCgpICYmIGdhbWUuY2FuUGxheSgpKSB7XG4gICAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXIxLmlzTGVnYWwoZ2FtZS5jb21wdXRlci5ib2FyZCwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgYXdhaXQgZ2FtZS5wbGF5ZXIxLmF0dGFjayh4LCB5LCBnYW1lLmNvbXB1dGVyLmJvYXJkKVxuICAgICAgICAgICAgICAvLyBjb2xvckdyaWQoKVxuICAgICAgICAgICAgICBnYW1lLmZsb3codHJ1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF3YWl0IG9yZGVycygncGxheWVyMSBhbHJlYWR5IHNob3QnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG93U2hpcHMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyArK2opIHtcbiAgICAgICAgaWYgKGdhbWUucGxheWVyMS5ib2FyZC5nZXRCb2FyZCgpW2pdW2ldLmhhc1NoaXApIHtcbiAgICAgICAgICBsZXQgZ3JpZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjTC0ke2p9LSR7aX1gKVxuICAgICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hhc1NoaXAnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29sb3JHcmlkID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBnYW1lLmNvbXB1dGVyLmJvYXJkLmdldEJvYXJkKClbal1baV0uaXNTaG90ICYmXG4gICAgICAgICAgIWdhbWUuY29tcHV0ZXIuYm9hcmQuZ2V0Qm9hcmQoKVtqXVtpXS5oYXNTaGlwXG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNSLSR7an0tJHtpfWApXG4gICAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZCgnaXNTaG90JylcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZS5jb21wdXRlci5ib2FyZC5nZXRCb2FyZCgpW2pdW2ldLmlzU2hvdCAmJlxuICAgICAgICAgIGdhbWUuY29tcHV0ZXIuYm9hcmQuZ2V0Qm9hcmQoKVtqXVtpXS5oYXNTaGlwXG4gICAgICAgICkge1xuICAgICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNSLSR7an0tJHtpfWApXG4gICAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZCgnaXNTaG90aGFzU2hpcCcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2FtZS5wbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbal1baV0uaXNTaG90KSB7XG4gICAgICAgICAgbGV0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI0wtJHtqfS0ke2l9YClcbiAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdpc1Nob3QnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHgsIHksIGRpcmVjdGlvbiwgc2hpcCwgcGxheWVyKSA9PiB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSB7XG4gICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBzaGlwLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNMLSR7aX0tJHt5fWApXG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hhc1NoaXAnKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBncmlkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNMLSR7eH0tJHtpfWApXG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hhc1NoaXAnKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9yZGVycyA9IGFzeW5jIChvcmRlcikgPT4ge1xuICAgIGlmIChvcmRlciA9PT0gJ2NvbXBBdHRhY2tpbmcnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzJykuaW5uZXJIVE1MID0gJ0VuZW15IEF0dGFja2luZydcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnY29tcHV0ZXIgaGl0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVycycpLmlubmVySFRNTCA9ICdFbmVteSBIaXRzJ1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdjb21wdXRlciBtaXNzZXMnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzJykuaW5uZXJIVE1MID0gJ0VuZW15IE1pc3NlcydcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAncGxheWVyMSB0dXJuJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVycycpLmlubmVySFRNTCA9ICdZb3VyIFR1cm4nXG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ3BsYXllcjEgaGl0Jykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVycycpLmlubmVySFRNTCA9ICdZb3UgSGl0J1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdwbGF5ZXIxIG1pc3NlZCcpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnWW91IE1pc3NlZCdcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAncGxheWVyMSBwbGFjZSBjYXJyaWVyJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVycycpLmlubmVySFRNTCA9ICdQbGFjZSBDYXJyaWVyJ1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdwbGF5ZXIxIHBsYWNlIGJhdHRsZXNoaXAnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzJykuaW5uZXJIVE1MID0gJ1BsYWNlIEJhdHRsZXNoaXAnXG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ3BsYXllcjEgcGxhY2UgY3J1aXNlcicpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnUGxhY2UgQ3J1aXNlcidcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAncGxheWVyMSBwbGFjZSBzdWJtYXJpbmUnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzJykuaW5uZXJIVE1MID0gJ1BsYWNlIFN1Ym1hcmluZSdcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAncGxheWVyMSBwbGFjZSBkZXN0cm95ZXInKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJzJykuaW5uZXJIVE1MID0gJ1BsYWNlIERlc3Ryb3llcidcbiAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnc2hpcHMgcGxhY2VkJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVycycpLmlubmVySFRNTCA9ICdTaGlwcyBQbGFjZWQnXG4gICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ3BsYXllcjEgd2luJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVycycpLmlubmVySFRNTCA9ICdZb3UgV2luJ1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdjb21wdXRlciB3aW5zJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVycycpLmlubmVySFRNTCA9ICdDb21wdXRlciBXaW5zJ1xuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdwbGF5ZXIxIGFscmVhZHkgc2hvdCcpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcnMnKS5pbm5lckhUTUwgPSAnQWxyZWFkeSBBdHRhY2tlZCBQb3N0aW9uJ1xuICAgIH1cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcbiAgfVxuXG4gIGNvbnN0IHAxUGxhY2VTaGlwID0gKHgsIHkpID0+IHtcbiAgICBsZXQgZGlyZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1heGlzJykuaWRcbiAgICBpZiAoc2hpcENhbkJlUGxhY2VkKHgsIHksIGRpcmVjdGlvbiwgMCkpIHtcbiAgICAgIGlmICghZ2FtZS5pc0NhcnJpZXJQbGFjZWQoKSkge1xuICAgICAgICBnYW1lLnBsYWNlQ2Fycmllcih4LCB5LCBkaXJlY3Rpb24sIDApXG4gICAgICB9IGVsc2UgaWYgKCFnYW1lLmlzQmF0dGxlc2hpcFBsYWNlZCgpKSB7XG4gICAgICAgIGdhbWUucGxhY2VCYXR0bGVzaGlwKHgsIHksIGRpcmVjdGlvbiwgMClcbiAgICAgIH0gZWxzZSBpZiAoIWdhbWUuaXNDcnVpc2VyUGxhY2VkKCkpIHtcbiAgICAgICAgZ2FtZS5wbGFjZUNydWlzZXIoeCwgeSwgZGlyZWN0aW9uLCAwKVxuICAgICAgfSBlbHNlIGlmICghZ2FtZS5pc1N1Ym1hcmluZVBsYWNlZCgpKSB7XG4gICAgICAgIGdhbWUucGxhY2VTdWJtYXJpbmUoeCwgeSwgZGlyZWN0aW9uLCAwKVxuICAgICAgfSBlbHNlIGlmICghZ2FtZS5pc0Rlc3Ryb3llclBsYWNlZCgpKSB7XG4gICAgICAgIGdhbWUucGxhY2VEZXN0cm95ZXIoeCwgeSwgZGlyZWN0aW9uLCAwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNoaXBDYW5CZVBsYWNlZCA9ICh4LCB5LCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICsraikge1xuICAgICAgICBsZXQgZ3JpZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjTC0ke2p9LSR7aX1gKVxuICAgICAgICBpZiAoZ3JpZENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdlcnInKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc2hpcExlbmd0aCAhPT0gMCkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXBMZW5ndGg7ICsraSkge1xuICAgICAgICAgIGlmIChnYW1lLnBsYXllcjEuYm9hcmQuZ2V0Qm9hcmQoKVtpXVt5XS5oYXNTaGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd5Jykge1xuICAgICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBpZiAoZ2FtZS5wbGF5ZXIxLmJvYXJkLmdldEJvYXJkKClbeF1baV0uaGFzU2hpcCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGxvYWRIb21lLCBwbGFjZVNoaXAsIGNvbG9yR3JpZCwgb3JkZXJzLCBsb2FkTWFpbiB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IFVJXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4uL2ZhY3Rvcmllcy9wbGF5ZXInXG5pbXBvcnQgU2hpcCBmcm9tICcuLi9mYWN0b3JpZXMvc2hpcCdcbmltcG9ydCBVSSBmcm9tICcuL1VJJ1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcigpXG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKClcbiAgbGV0IHdhaXRpbmcgPSBmYWxzZVxuICBsZXQgY2FycmllclBsYWNlZCA9IGZhbHNlXG4gIGxldCBiYXR0bGVTaGlwUGxhY2VkID0gZmFsc2VcbiAgbGV0IGNydWlzZXJQbGFjZWQgPSBmYWxzZVxuICBsZXQgc3VibWFyaW5lUGxhY2VkID0gZmFsc2VcbiAgbGV0IGRlc3Ryb3llclBsYWNlZCA9IGZhbHNlXG5cbiAgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgICBjb21wdXRlclNoaXBzKClcbiAgfVxuXG4gIGNvbnN0IGZsb3cgPSBhc3luYyAoUDFwbGF5ZWQpID0+IHtcbiAgICBpZiAoIWdhbWVFbmRlZCgpKSB7XG4gICAgICBpZiAoUDFwbGF5ZWQpIHtcbiAgICAgICAgd2FpdGluZyA9IHRydWVcbiAgICAgICAgYXdhaXQgVUkub3JkZXJzKCdjb21wQXR0YWNraW5nJylcbiAgICAgICAgYXdhaXQgY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllcjEuYm9hcmQpXG4gICAgICAgIFVJLm9yZGVycygncGxheWVyMSB0dXJuJylcbiAgICAgICAgd2FpdGluZyA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2FuUGxheSA9ICgpID0+IHtcbiAgICBpZiAod2FpdGluZykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCBnYW1lRW5kZWQgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllcjEuYm9hcmQucmVwb3J0U3VuaygpKSB7XG4gICAgICBVSS5vcmRlcnMoJ2NvbXB1dGVyIHdpbnMnKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKGNvbXB1dGVyLmJvYXJkLnJlcG9ydFN1bmsoKSkge1xuICAgICAgVUkub3JkZXJzKCdwbGF5ZXIxIHdpbicpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IHBsYWNlQ2FycmllciA9ICh4LCB5LCBkaXJlY3Rpb24pID0+IHtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh4LCB5LCBkaXJlY3Rpb24sIFNoaXAoNSwgJ2NhcnJpZXInKSlcbiAgICBVSS5wbGFjZVNoaXAoeCwgeSwgZGlyZWN0aW9uLCBTaGlwKDUsICdjYXJyaWVyJyksICdMJylcbiAgICBjYXJyaWVyUGxhY2VkID0gdHJ1ZVxuICAgIFVJLm9yZGVycygncGxheWVyMSBwbGFjZSBiYXR0bGVzaGlwJylcbiAgfVxuXG4gIGNvbnN0IGlzQ2FycmllclBsYWNlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gY2FycmllclBsYWNlZFxuICB9XG5cbiAgY29uc3QgcGxhY2VCYXR0bGVzaGlwID0gKHgsIHksIGRpcmVjdGlvbikgPT4ge1xuICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHgsIHksIGRpcmVjdGlvbiwgU2hpcCg0LCAnYmF0dGxlc2hpcCcpKVxuICAgIFVJLnBsYWNlU2hpcCh4LCB5LCBkaXJlY3Rpb24sIFNoaXAoNCwgJ2JhdHRsZXNoaXAnKSwgJ0wnKVxuICAgIGJhdHRsZVNoaXBQbGFjZWQgPSB0cnVlXG4gICAgVUkub3JkZXJzKCdwbGF5ZXIxIHBsYWNlIGNydWlzZXInKVxuICB9XG5cbiAgY29uc3QgaXNCYXR0bGVzaGlwUGxhY2VkID0gKCkgPT4ge1xuICAgIHJldHVybiBiYXR0bGVTaGlwUGxhY2VkXG4gIH1cblxuICBjb25zdCBwbGFjZUNydWlzZXIgPSAoeCwgeSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoeCwgeSwgZGlyZWN0aW9uLCBTaGlwKDMsICdjcnVpc2VyJykpXG4gICAgVUkucGxhY2VTaGlwKHgsIHksIGRpcmVjdGlvbiwgU2hpcCgzLCAnY3J1aXNlcicpLCAnTCcpXG4gICAgY3J1aXNlclBsYWNlZCA9IHRydWVcbiAgICBVSS5vcmRlcnMoJ3BsYXllcjEgcGxhY2Ugc3VibWFyaW5lJylcbiAgfVxuXG4gIGNvbnN0IGlzQ3J1aXNlclBsYWNlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gY3J1aXNlclBsYWNlZFxuICB9XG5cbiAgY29uc3QgcGxhY2VTdWJtYXJpbmUgPSAoeCwgeSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoeCwgeSwgZGlyZWN0aW9uLCBTaGlwKDMsICdzdWJtYXJpbmUnKSlcbiAgICBVSS5wbGFjZVNoaXAoeCwgeSwgZGlyZWN0aW9uLCBTaGlwKDMsICdzdWJtYXJpbmUnKSwgJ0wnKVxuICAgIHN1Ym1hcmluZVBsYWNlZCA9IHRydWVcbiAgICBVSS5vcmRlcnMoJ3BsYXllcjEgcGxhY2UgZGVzdHJveWVyJylcbiAgfVxuXG4gIGNvbnN0IGlzU3VibWFyaW5lUGxhY2VkID0gKCkgPT4ge1xuICAgIHJldHVybiBzdWJtYXJpbmVQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IHBsYWNlRGVzdHJveWVyID0gYXN5bmMgKHgsIHksIGRpcmVjdGlvbikgPT4ge1xuICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHgsIHksIGRpcmVjdGlvbiwgU2hpcCgyLCAnZGVzdHJveWVyJykpXG4gICAgVUkucGxhY2VTaGlwKHgsIHksIGRpcmVjdGlvbiwgU2hpcCgyLCAnZGVzdHJveWVyJyksICdMJylcbiAgICBkZXN0cm95ZXJQbGFjZWQgPSB0cnVlXG4gICAgYXdhaXQgVUkub3JkZXJzKCdzaGlwcyBwbGFjZWQnKVxuICAgIFVJLmxvYWRNYWluKClcbiAgfVxuXG4gIGNvbnN0IGlzRGVzdHJveWVyUGxhY2VkID0gKCkgPT4ge1xuICAgIHJldHVybiBkZXN0cm95ZXJQbGFjZWRcbiAgfVxuXG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gICAgLy9DQVJSSUVSXG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgIGRpcmVjdGlvbiA9PT0gMCA/IChkaXJlY3Rpb24gPSAneCcpIDogKGRpcmVjdGlvbiA9ICd5JylcblxuICAgIHdoaWxlICghaXNMZWdhbCh4LCB5LCBkaXJlY3Rpb24sIDUpKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgfVxuICAgIGNvbXB1dGVyLmJvYXJkLnBsYWNlU2hpcCh4LCB5LCBkaXJlY3Rpb24sIFNoaXAoNSwgJ2NhcnJpZXInKSlcblxuICAgIC8vIEJBVFRMRVNISVBcbiAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXG4gICAgZGlyZWN0aW9uID09PSAwID8gKGRpcmVjdGlvbiA9ICd4JykgOiAoZGlyZWN0aW9uID0gJ3knKVxuXG4gICAgd2hpbGUgKCFpc0xlZ2FsKHgsIHksIGRpcmVjdGlvbiwgNSkpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICB9XG4gICAgY29tcHV0ZXIuYm9hcmQucGxhY2VTaGlwKHgsIHksIGRpcmVjdGlvbiwgU2hpcCg0LCAnYmF0dGxlc2hpcCcpKVxuXG4gICAgLy9DUlVJU0VSXG4gICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgIGRpcmVjdGlvbiA9PT0gMCA/IChkaXJlY3Rpb24gPSAneCcpIDogKGRpcmVjdGlvbiA9ICd5JylcblxuICAgIHdoaWxlICghaXNMZWdhbCh4LCB5LCBkaXJlY3Rpb24sIDUpKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgfVxuICAgIGNvbXB1dGVyLmJvYXJkLnBsYWNlU2hpcCh4LCB5LCBkaXJlY3Rpb24sIFNoaXAoMywgJ2NydWlzZXInKSlcblxuICAgIC8vU1VCTUFSSU5FXG4gICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgIGRpcmVjdGlvbiA9PT0gMCA/IChkaXJlY3Rpb24gPSAneCcpIDogKGRpcmVjdGlvbiA9ICd5JylcblxuICAgIHdoaWxlICghaXNMZWdhbCh4LCB5LCBkaXJlY3Rpb24sIDUpKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgfVxuICAgIGNvbXB1dGVyLmJvYXJkLnBsYWNlU2hpcCh4LCB5LCBkaXJlY3Rpb24sIFNoaXAoMywgJ3N1Ym1hcmluZScpKVxuXG4gICAgLy9ERVNUT1JZRVJcbiAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXG4gICAgZGlyZWN0aW9uID09PSAwID8gKGRpcmVjdGlvbiA9ICd4JykgOiAoZGlyZWN0aW9uID0gJ3knKVxuXG4gICAgd2hpbGUgKCFpc0xlZ2FsKHgsIHksIGRpcmVjdGlvbiwgNSkpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICB9XG4gICAgY29tcHV0ZXIuYm9hcmQucGxhY2VTaGlwKHgsIHksIGRpcmVjdGlvbiwgU2hpcCgyLCAnZGVzdHJveWVyJykpXG4gIH1cblxuICBjb25zdCBpc0xlZ2FsID0gKHgsIHksIGRpcmVjdGlvbiwgc2hpcExlbmd0aCkgPT4ge1xuICAgIGlmICh4ICsgc2hpcExlbmd0aCA+IDEwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKHkgKyBzaGlwTGVuZ3RoID4gMTApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAneCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXBMZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoY29tcHV0ZXIuYm9hcmQuZ2V0Qm9hcmQoKVtpXVt5XS5oYXNTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3knKSB7XG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwTGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKGNvbXB1dGVyLmJvYXJkLmdldEJvYXJkKClbeF1baV0uaGFzU2hpcCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYXllcjEsXG4gICAgY29tcHV0ZXIsXG4gICAgbmV3R2FtZSxcbiAgICBmbG93LFxuICAgIGdhbWVFbmRlZCxcbiAgICBjYW5QbGF5LFxuICAgIHBsYWNlQ2FycmllcixcbiAgICBpc0NhcnJpZXJQbGFjZWQsXG4gICAgcGxhY2VCYXR0bGVzaGlwLFxuICAgIGlzQmF0dGxlc2hpcFBsYWNlZCxcbiAgICBwbGFjZUNydWlzZXIsXG4gICAgaXNDcnVpc2VyUGxhY2VkLFxuICAgIHBsYWNlU3VibWFyaW5lLFxuICAgIGlzU3VibWFyaW5lUGxhY2VkLFxuICAgIHBsYWNlRGVzdHJveWVyLFxuICAgIGlzRGVzdHJveWVyUGxhY2VkLFxuICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBVSS5sb2FkSG9tZSgpXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9