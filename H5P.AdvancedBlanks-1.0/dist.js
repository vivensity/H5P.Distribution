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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/dist.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/style.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/styles/style.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".h5p-advanced-blanks {\r\n    position: relative;\r\n}\r\n\r\n\r\n/* Text */\r\n\r\n.h5p-advanced-blanks #h5p-cloze-container p,\r\n.h5p-advanced-blanks #h5p-cloze-container div {\r\n    line-height: 1.8em;\r\n    margin: 0 0 1em;\r\n    text-align: justify;\r\n}\r\n\r\n@media only screen and (min-width: 480px) {\r\n    .h5p-advanced-blanks #h5p-cloze-container p,\r\n    .h5p-advanced-blanks #h5p-cloze-container div {\r\n        text-align: unset;\r\n    }\r\n}\r\n\r\n\r\n/* Input */\r\n\r\n.h5p-advanced-blanks .h5p-input-wrapper {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.h5p-advanced-blanks .blank .h5p-text-input {\r\n    font-family: H5PDroidSans, sans-serif;\r\n    font-size: 1em;\r\n    border-radius: 0.25em;\r\n    border: 1px solid #a0a0a0;\r\n    padding: 0.1875em 1.5em 0.1875em 0.5em;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n.h5p-advanced-blanks .blank input.h5p-text-input {\r\n  max-width: calc(100vw - 64px);\r\n}\r\n\r\n.h5p-advanced-blanks .blank select.h5p-text-input {\r\n  max-width: calc(100vw - 36px);\r\n}\r\n\r\n/* IE + Chrome specific fixes */\r\n\r\n.h5p-text-input::-ms-clear {\r\n    display: none;\r\n}\r\n\r\n:not(.correct).blank.has-tip button {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* Select mode */\r\n\r\nselect.h5p-text-input {\r\n    appearance: button;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: button;\r\n}\r\n\r\n\r\n/* Showing solution input */\r\n\r\n.h5p-advanced-blanks .blank.showing-solution .h5p-text-input {\r\n    border: 1px dashed #9dd8bb;\r\n    color: #255c41;\r\n    background: #FFFFFF;\r\n}\r\n\r\n\r\n/* Focussed input */\r\n\r\n.h5p-advanced-blanks .blank .h5p-text-input:focus {\r\n    outline: none;\r\n    box-shadow: 0 0 0.5em 0 #7fb8ff;\r\n    border-color: #7fb8ff;\r\n}\r\n\r\n\r\n/* Correctly answered input */\r\n\r\n.h5p-advanced-blanks .blank.correct .h5p-text-input {\r\n    background: #9dd8bb;\r\n    border: 1px solid #9dd8bb;\r\n    color: #255c41;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.correct .h5p-input-wrapper:after {\r\n    position: absolute;\r\n    right: 0.5em;    \r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    text-decoration: none;\r\n    content: \"\\f00c\";\r\n    font-family: 'H5PFontAwesome4';\r\n    color: #255c41;\r\n}\r\n\r\n\r\n/* Incorrect answers */\r\n\r\n.h5p-advanced-blanks .blank.error .h5p-text-input {\r\n    background-color: #f7d0d0;\r\n    border: 1px solid #f7d0d0;\r\n    color: #b71c1c;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.error .h5p-input-wrapper:after {\r\n    position: absolute;\r\n    right: 0.5em;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    font-family: 'H5PFontAwesome4';\r\n    text-decoration: none;\r\n    content: \"\\f00d\";\r\n    color: #b71c1c;\r\n}\r\n\r\n\r\n/* Spelling errors */\r\n\r\n.h5p-advanced-blanks .blank.retry .h5p-text-input {\r\n    background-color: #ffff99;\r\n    border: 1px solid #ffff99;\r\n    color: black;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.retry .h5p-input-wrapper:after {\r\n    position: absolute;\r\n    right: 0.5em;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    font-family: 'H5PFontAwesome4';\r\n    text-decoration: none;\r\n    content: \"\\f00d\";\r\n    color: #b71c1c;\r\n}\r\n\r\n\r\n/* Buttons */\r\n\r\n.h5p-advanced-blanks .blank button {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n\r\n/* Highlight in spelling mistake marker */\r\n\r\n.spelling-mistake .missing-character,\r\n.spelling-mistake .mistaken-character {\r\n    color: red;\r\n    font-weight: bold;\r\n    -webkit-animation-duration: 500ms;\r\n            animation-duration: 500ms;\r\n    -webkit-animation-name: blink-color;\r\n            animation-name: blink-color;\r\n    -webkit-animation-iteration-count: 13;\r\n            animation-iteration-count: 13;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n@-webkit-keyframes blink-color {\r\n    from {\r\n        color: initial;\r\n    }\r\n    to {\r\n        color: red;\r\n    }\r\n}\r\n\r\n@keyframes blink-color {\r\n    from {\r\n        color: initial;\r\n    }\r\n    to {\r\n        color: red;\r\n    }\r\n}\r\n\r\n.spelling-mistake .mistaken-character {\r\n    text-decoration: line-through;\r\n}\r\n\r\n\r\n/* Highlights in text */\r\n\r\n.h5p-advanced-blanks .highlighted {\r\n    background-color: rgba(255, 0, 0, 0.2);\r\n    padding: 0.4em;\r\n    margin: -0.4em;\r\n    -webkit-animation-duration: 1000ms;\r\n            animation-duration: 1000ms;\r\n    -webkit-animation-name: blink-background-color;\r\n            animation-name: blink-background-color;\r\n    -webkit-animation-iteration-count: 3;\r\n            animation-iteration-count: 3;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n@-webkit-keyframes blink-background-color {\r\n    from {\r\n        background-color: initial;\r\n    }\r\n    to {\r\n        background-color: rgba(255, 0, 0, 0.2);\r\n    }\r\n}\r\n\r\n@keyframes blink-background-color {\r\n    from {\r\n        background-color: initial;\r\n    }\r\n    to {\r\n        background-color: rgba(255, 0, 0, 0.2);\r\n    }\r\n}\r\n\r\n\r\n/* Others */\r\n\r\n.h5p-advanced-blanks .invisible {\r\n    visibility: collapse;\r\n}\r\n\r\n\r\n/* Tips */\r\n\r\n.h5p-advanced-blanks .h5p-tip-container {\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  right: 0.4em;\r\n  font-size: 1em;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.has-tip:not(.correct):not(.error):not(.retry) .h5p-text-input {\r\n    padding-right: 2.25em;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.has-tip.correct .h5p-input-wrapper:after,\r\n.h5p-advanced-blanks .blank.has-tip.error .h5p-input-wrapper:after,\r\n.h5p-advanced-blanks .blank.has-tip.retry .h5p-input-wrapper:after {\r\n    right: 2.25em;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.correct.has-tip .h5p-text-input,\r\n.h5p-advanced-blanks .blank.error.has-tip .h5p-text-input,\r\n.h5p-advanced-blanks .blank.retry.has-tip .h5p-text-input {\r\n    padding-right: 3.5em;\r\n}\r\n\r\n/* improves appearance of h5p tip shadows */\r\n.h5p-advanced-blanks .joubel-icon-tip-normal .h5p-icon-shadow:before {\r\n  color: black;\r\n  opacity: 0.13;\r\n}\r\n\r\n/* pending feedback marker */\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank:not(.has-pending-feedback) button.h5p-notification {\r\n    display: none;\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification {\r\n    font-size: large;    \r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification,\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\r\n    font-family: 'H5PFontAwesome4';\r\n    text-decoration: none;\r\n    animation: shake 3s cubic-bezier(.36, .07, .19, .97) reverse;\r\n    -webkit-animation-iteration-count: 2;\r\n            animation-iteration-count: 2;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px;\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\r\n    position: absolute;\r\n    left: -0.4em;\r\n    top: -0.7em;\r\n    content: \"\\f05a\";\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.error.has-pending-feedback button.h5p-notification,\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.error.has-pending-feedback .h5p-input-wrapper:before {\r\n    color: #b71c1c;\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.retry.has-pending-feedback button.h5p-notification,\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.retry.has-pending-feedback .h5p-input-wrapper:before {\r\n    color: #ffff00;\r\n    text-shadow: 0px 0px 0.5em black;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n    2%,\r\n    20% {\r\n        -webkit-transform: translate3d(-0.5px, 0, 0);\r\n                transform: translate3d(-0.5px, 0, 0);\r\n    }\r\n    4%,\r\n    17% {\r\n        -webkit-transform: translate3d(1px, 0, 0);\r\n                transform: translate3d(1px, 0, 0);\r\n    }\r\n    6%,\r\n    10%,\r\n    15% {\r\n        -webkit-transform: translate3d(-2px, 0, 0);\r\n                transform: translate3d(-2px, 0, 0);\r\n    }\r\n    9%,\r\n    13% {\r\n        -webkit-transform: translate3d(2px, 0, 0);\r\n                transform: translate3d(2px, 0, 0);\r\n    }\r\n}\r\n\r\n@keyframes shake {\r\n    2%,\r\n    20% {\r\n        -webkit-transform: translate3d(-0.5px, 0, 0);\r\n                transform: translate3d(-0.5px, 0, 0);\r\n    }\r\n    4%,\r\n    17% {\r\n        -webkit-transform: translate3d(1px, 0, 0);\r\n                transform: translate3d(1px, 0, 0);\r\n    }\r\n    6%,\r\n    10%,\r\n    15% {\r\n        -webkit-transform: translate3d(-2px, 0, 0);\r\n                transform: translate3d(-2px, 0, 0);\r\n    }\r\n    9%,\r\n    13% {\r\n        -webkit-transform: translate3d(2px, 0, 0);\r\n                transform: translate3d(2px, 0, 0);\r\n    }\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/diff/dist/diff.js":
/*!****************************************!*\
  !*** ./node_modules/diff/dist/diff.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!

 diff v4.0.1

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  function Diff() {}
  Diff.prototype = {
    diff: function diff(oldString, newString) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = options.callback;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = options;
      var self = this;

      function done(value) {
        if (callback) {
          setTimeout(function () {
            callback(undefined, value);
          }, 0);
          return true;
        } else {
          return value;
        }
      } // Allow subclasses to massage the input prior to running


      oldString = this.castInput(oldString);
      newString = this.castInput(newString);
      oldString = this.removeEmpty(this.tokenize(oldString));
      newString = this.removeEmpty(this.tokenize(newString));
      var newLen = newString.length,
          oldLen = oldString.length;
      var editLength = 1;
      var maxEditLength = newLen + oldLen;
      var bestPath = [{
        newPos: -1,
        components: []
      }]; // Seed editLength = 0, i.e. the content starts with the same values

      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        // Identity per the equality and tokenizer
        return done([{
          value: this.join(newString),
          count: newString.length
        }]);
      } // Main worker method. checks all permutations of a given edit length for acceptance.


      function execEditLength() {
        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
          var basePath = void 0;

          var addPath = bestPath[diagonalPath - 1],
              removePath = bestPath[diagonalPath + 1],
              _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

          if (addPath) {
            // No one else is going to attempt to use this value, clear it
            bestPath[diagonalPath - 1] = undefined;
          }

          var canAdd = addPath && addPath.newPos + 1 < newLen,
              canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

          if (!canAdd && !canRemove) {
            // If this path is a terminal then prune
            bestPath[diagonalPath] = undefined;
            continue;
          } // Select the diagonal that we want to branch from. We select the prior
          // path whose position in the new string is the farthest from the origin
          // and does not pass the bounds of the diff graph


          if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
            basePath = clonePath(removePath);
            self.pushComponent(basePath.components, undefined, true);
          } else {
            basePath = addPath; // No need to clone, we've pulled it from the list

            basePath.newPos++;
            self.pushComponent(basePath.components, true, undefined);
          }

          _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

          if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
            return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
          } else {
            // Otherwise track this path as a potential candidate and continue.
            bestPath[diagonalPath] = basePath;
          }
        }

        editLength++;
      } // Performs the length of edit iteration. Is a bit fugly as this has to support the
      // sync and async mode which is never fun. Loops over execEditLength until a value
      // is produced.


      if (callback) {
        (function exec() {
          setTimeout(function () {
            // This should not happen, but we want to be safe.

            /* istanbul ignore next */
            if (editLength > maxEditLength) {
              return callback();
            }

            if (!execEditLength()) {
              exec();
            }
          }, 0);
        })();
      } else {
        while (editLength <= maxEditLength) {
          var ret = execEditLength();

          if (ret) {
            return ret;
          }
        }
      }
    },
    pushComponent: function pushComponent(components, added, removed) {
      var last = components[components.length - 1];

      if (last && last.added === added && last.removed === removed) {
        // We need to clone here as the component clone operation is just
        // as shallow array clone
        components[components.length - 1] = {
          count: last.count + 1,
          added: added,
          removed: removed
        };
      } else {
        components.push({
          count: 1,
          added: added,
          removed: removed
        });
      }
    },
    extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
      var newLen = newString.length,
          oldLen = oldString.length,
          newPos = basePath.newPos,
          oldPos = newPos - diagonalPath,
          commonCount = 0;

      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
        newPos++;
        oldPos++;
        commonCount++;
      }

      if (commonCount) {
        basePath.components.push({
          count: commonCount
        });
      }

      basePath.newPos = newPos;
      return oldPos;
    },
    equals: function equals(left, right) {
      if (this.options.comparator) {
        return this.options.comparator(left, right);
      } else {
        return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
      }
    },
    removeEmpty: function removeEmpty(array) {
      var ret = [];

      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          ret.push(array[i]);
        }
      }

      return ret;
    },
    castInput: function castInput(value) {
      return value;
    },
    tokenize: function tokenize(value) {
      return value.split('');
    },
    join: function join(chars) {
      return chars.join('');
    }
  };

  function buildValues(diff, components, newString, oldString, useLongestToken) {
    var componentPos = 0,
        componentLen = components.length,
        newPos = 0,
        oldPos = 0;

    for (; componentPos < componentLen; componentPos++) {
      var component = components[componentPos];

      if (!component.removed) {
        if (!component.added && useLongestToken) {
          var value = newString.slice(newPos, newPos + component.count);
          value = value.map(function (value, i) {
            var oldValue = oldString[oldPos + i];
            return oldValue.length > value.length ? oldValue : value;
          });
          component.value = diff.join(value);
        } else {
          component.value = diff.join(newString.slice(newPos, newPos + component.count));
        }

        newPos += component.count; // Common case

        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
        oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
        // The diffing algorithm is tied to add then remove output and this is the simplest
        // route to get the desired output with minimal overhead.

        if (componentPos && components[componentPos - 1].added) {
          var tmp = components[componentPos - 1];
          components[componentPos - 1] = components[componentPos];
          components[componentPos] = tmp;
        }
      }
    } // Special case handle for when one terminal is ignored (i.e. whitespace).
    // For this case we merge the terminal into the prior string and drop the change.
    // This is only available for string mode.


    var lastComponent = components[componentLen - 1];

    if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
      components[componentLen - 2].value += lastComponent.value;
      components.pop();
    }

    return components;
  }

  function clonePath(path) {
    return {
      newPos: path.newPos,
      components: path.components.slice(0)
    };
  }

  var characterDiff = new Diff();
  function diffChars(oldStr, newStr, options) {
    return characterDiff.diff(oldStr, newStr, options);
  }

  function generateOptions(options, defaults) {
    if (typeof options === 'function') {
      defaults.callback = options;
    } else if (options) {
      for (var name in options) {
        /* istanbul ignore else */
        if (options.hasOwnProperty(name)) {
          defaults[name] = options[name];
        }
      }
    }

    return defaults;
  }

  //
  // Ranges and exceptions:
  // Latin-1 Supplement, 0080–00FF
  //  - U+00D7  × Multiplication sign
  //  - U+00F7  ÷ Division sign
  // Latin Extended-A, 0100–017F
  // Latin Extended-B, 0180–024F
  // IPA Extensions, 0250–02AF
  // Spacing Modifier Letters, 02B0–02FF
  //  - U+02C7  ˇ &#711;  Caron
  //  - U+02D8  ˘ &#728;  Breve
  //  - U+02D9  ˙ &#729;  Dot Above
  //  - U+02DA  ˚ &#730;  Ring Above
  //  - U+02DB  ˛ &#731;  Ogonek
  //  - U+02DC  ˜ &#732;  Small Tilde
  //  - U+02DD  ˝ &#733;  Double Acute Accent
  // Latin Extended Additional, 1E00–1EFF

  var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
  var reWhitespace = /\S/;
  var wordDiff = new Diff();

  wordDiff.equals = function (left, right) {
    if (this.options.ignoreCase) {
      left = left.toLowerCase();
      right = right.toLowerCase();
    }

    return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
  };

  wordDiff.tokenize = function (value) {
    var tokens = value.split(/(\s+|[()[\]{}'"]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

    for (var i = 0; i < tokens.length - 1; i++) {
      // If we have an empty string in the next field and we have only word chars before and after, merge
      if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
        tokens[i] += tokens[i + 2];
        tokens.splice(i + 1, 2);
        i--;
      }
    }

    return tokens;
  };

  function diffWords(oldStr, newStr, options) {
    options = generateOptions(options, {
      ignoreWhitespace: true
    });
    return wordDiff.diff(oldStr, newStr, options);
  }
  function diffWordsWithSpace(oldStr, newStr, options) {
    return wordDiff.diff(oldStr, newStr, options);
  }

  var lineDiff = new Diff();

  lineDiff.tokenize = function (value) {
    var retLines = [],
        linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    } // Merge the content and line separators into single tokens


    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];

      if (i % 2 && !this.options.newlineIsToken) {
        retLines[retLines.length - 1] += line;
      } else {
        if (this.options.ignoreWhitespace) {
          line = line.trim();
        }

        retLines.push(line);
      }
    }

    return retLines;
  };

  function diffLines(oldStr, newStr, callback) {
    return lineDiff.diff(oldStr, newStr, callback);
  }
  function diffTrimmedLines(oldStr, newStr, callback) {
    var options = generateOptions(callback, {
      ignoreWhitespace: true
    });
    return lineDiff.diff(oldStr, newStr, options);
  }

  var sentenceDiff = new Diff();

  sentenceDiff.tokenize = function (value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
  };

  function diffSentences(oldStr, newStr, callback) {
    return sentenceDiff.diff(oldStr, newStr, callback);
  }

  var cssDiff = new Diff();

  cssDiff.tokenize = function (value) {
    return value.split(/([{}:;,]|\s+)/);
  };

  function diffCss(oldStr, newStr, callback) {
    return cssDiff.diff(oldStr, newStr, callback);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var objectPrototypeToString = Object.prototype.toString;
  var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

  jsonDiff.useLongestToken = true;
  jsonDiff.tokenize = lineDiff.tokenize;

  jsonDiff.castInput = function (value) {
    var _this$options = this.options,
        undefinedReplacement = _this$options.undefinedReplacement,
        _this$options$stringi = _this$options.stringifyReplacer,
        stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
      return typeof v === 'undefined' ? undefinedReplacement : v;
    } : _this$options$stringi;
    return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
  };

  jsonDiff.equals = function (left, right) {
    return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
  };

  function diffJson(oldObj, newObj, options) {
    return jsonDiff.diff(oldObj, newObj, options);
  } // This function handles the presence of circular references by bailing out when encountering an
  // object that is already on the "stack" of items being processed. Accepts an optional replacer

  function canonicalize(obj, stack, replacementStack, replacer, key) {
    stack = stack || [];
    replacementStack = replacementStack || [];

    if (replacer) {
      obj = replacer(key, obj);
    }

    var i;

    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }

    var canonicalizedObj;

    if ('[object Array]' === objectPrototypeToString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);

      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
      }

      stack.pop();
      replacementStack.pop();
      return canonicalizedObj;
    }

    if (obj && obj.toJSON) {
      obj = obj.toJSON();
    }

    if (_typeof(obj) === 'object' && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);

      var sortedKeys = [],
          _key;

      for (_key in obj) {
        /* istanbul ignore else */
        if (obj.hasOwnProperty(_key)) {
          sortedKeys.push(_key);
        }
      }

      sortedKeys.sort();

      for (i = 0; i < sortedKeys.length; i += 1) {
        _key = sortedKeys[i];
        canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
      }

      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }

    return canonicalizedObj;
  }

  var arrayDiff = new Diff();

  arrayDiff.tokenize = function (value) {
    return value.slice();
  };

  arrayDiff.join = arrayDiff.removeEmpty = function (value) {
    return value;
  };

  function diffArrays(oldArr, newArr, callback) {
    return arrayDiff.diff(oldArr, newArr, callback);
  }

  function parsePatch(uniDiff) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        list = [],
        i = 0;

    function parseIndex() {
      var index = {};
      list.push(index); // Parse diff metadata

      while (i < diffstr.length) {
        var line = diffstr[i]; // File header found, end parsing diff metadata

        if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
          break;
        } // Diff index


        var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);

        if (header) {
          index.index = header[1];
        }

        i++;
      } // Parse file headers if they are defined. Unified diff requires them, but
      // there's no technical issues to have an isolated hunk without file header


      parseFileHeader(index);
      parseFileHeader(index); // Parse hunks

      index.hunks = [];

      while (i < diffstr.length) {
        var _line = diffstr[i];

        if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
          break;
        } else if (/^@@/.test(_line)) {
          index.hunks.push(parseHunk());
        } else if (_line && options.strict) {
          // Ignore unexpected content unless in strict mode
          throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
        } else {
          i++;
        }
      }
    } // Parses the --- and +++ headers, if none are found, no lines
    // are consumed.


    function parseFileHeader(index) {
      var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);

      if (fileHeader) {
        var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
        var data = fileHeader[2].split('\t', 2);
        var fileName = data[0].replace(/\\\\/g, '\\');

        if (/^".*"$/.test(fileName)) {
          fileName = fileName.substr(1, fileName.length - 2);
        }

        index[keyPrefix + 'FileName'] = fileName;
        index[keyPrefix + 'Header'] = (data[1] || '').trim();
        i++;
      }
    } // Parses a hunk
    // This assumes that we are at the start of a hunk.


    function parseHunk() {
      var chunkHeaderIndex = i,
          chunkHeaderLine = diffstr[i++],
          chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      var hunk = {
        oldStart: +chunkHeader[1],
        oldLines: +chunkHeader[2] || 1,
        newStart: +chunkHeader[3],
        newLines: +chunkHeader[4] || 1,
        lines: [],
        linedelimiters: []
      };
      var addCount = 0,
          removeCount = 0;

      for (; i < diffstr.length; i++) {
        // Lines starting with '---' could be mistaken for the "remove line" operation
        // But they could be the header for the next file. Therefore prune such cases out.
        if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
          break;
        }

        var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? ' ' : diffstr[i][0];

        if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
          hunk.lines.push(diffstr[i]);
          hunk.linedelimiters.push(delimiters[i] || '\n');

          if (operation === '+') {
            addCount++;
          } else if (operation === '-') {
            removeCount++;
          } else if (operation === ' ') {
            addCount++;
            removeCount++;
          }
        } else {
          break;
        }
      } // Handle the empty block count case


      if (!addCount && hunk.newLines === 1) {
        hunk.newLines = 0;
      }

      if (!removeCount && hunk.oldLines === 1) {
        hunk.oldLines = 0;
      } // Perform optional sanity checking


      if (options.strict) {
        if (addCount !== hunk.newLines) {
          throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }

        if (removeCount !== hunk.oldLines) {
          throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }
      }

      return hunk;
    }

    while (i < diffstr.length) {
      parseIndex();
    }

    return list;
  }

  // Iterator that traverses in the range of [min, max], stepping
  // by distance from a given start position. I.e. for [0, 4], with
  // start of 2, this will iterate 2, 3, 1, 4, 0.
  function distanceIterator (start, minLine, maxLine) {
    var wantForward = true,
        backwardExhausted = false,
        forwardExhausted = false,
        localOffset = 1;
    return function iterator() {
      if (wantForward && !forwardExhausted) {
        if (backwardExhausted) {
          localOffset++;
        } else {
          wantForward = false;
        } // Check if trying to fit beyond text length, and if not, check it fits
        // after offset location (or desired location on first iteration)


        if (start + localOffset <= maxLine) {
          return localOffset;
        }

        forwardExhausted = true;
      }

      if (!backwardExhausted) {
        if (!forwardExhausted) {
          wantForward = true;
        } // Check if trying to fit before text beginning, and if not, check it fits
        // before offset location


        if (minLine <= start - localOffset) {
          return -localOffset++;
        }

        backwardExhausted = true;
        return iterator();
      } // We tried to fit hunk before text beginning and beyond text length, then
      // hunk can't fit on the text. Return undefined

    };
  }

  function applyPatch(source, uniDiff) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof uniDiff === 'string') {
      uniDiff = parsePatch(uniDiff);
    }

    if (Array.isArray(uniDiff)) {
      if (uniDiff.length > 1) {
        throw new Error('applyPatch only works with a single input.');
      }

      uniDiff = uniDiff[0];
    } // Apply the diff to the input


    var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        hunks = uniDiff.hunks,
        compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) {
      return line === patchContent;
    },
        errorCount = 0,
        fuzzFactor = options.fuzzFactor || 0,
        minLine = 0,
        offset = 0,
        removeEOFNL,
        addEOFNL;
    /**
     * Checks if the hunk exactly fits on the provided location
     */


    function hunkFits(hunk, toPos) {
      for (var j = 0; j < hunk.lines.length; j++) {
        var line = hunk.lines[j],
            operation = line.length > 0 ? line[0] : ' ',
            content = line.length > 0 ? line.substr(1) : line;

        if (operation === ' ' || operation === '-') {
          // Context sanity check
          if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
            errorCount++;

            if (errorCount > fuzzFactor) {
              return false;
            }
          }

          toPos++;
        }
      }

      return true;
    } // Search best fit offsets for each hunk based on the previous ones


    for (var i = 0; i < hunks.length; i++) {
      var hunk = hunks[i],
          maxLine = lines.length - hunk.oldLines,
          localOffset = 0,
          toPos = offset + hunk.oldStart - 1;
      var iterator = distanceIterator(toPos, minLine, maxLine);

      for (; localOffset !== undefined; localOffset = iterator()) {
        if (hunkFits(hunk, toPos + localOffset)) {
          hunk.offset = offset += localOffset;
          break;
        }
      }

      if (localOffset === undefined) {
        return false;
      } // Set lower text limit to end of the current hunk, so next ones don't try
      // to fit over already patched text


      minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
    } // Apply patch hunks


    var diffOffset = 0;

    for (var _i = 0; _i < hunks.length; _i++) {
      var _hunk = hunks[_i],
          _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;

      diffOffset += _hunk.newLines - _hunk.oldLines;

      if (_toPos < 0) {
        // Creating a new file
        _toPos = 0;
      }

      for (var j = 0; j < _hunk.lines.length; j++) {
        var line = _hunk.lines[j],
            operation = line.length > 0 ? line[0] : ' ',
            content = line.length > 0 ? line.substr(1) : line,
            delimiter = _hunk.linedelimiters[j];

        if (operation === ' ') {
          _toPos++;
        } else if (operation === '-') {
          lines.splice(_toPos, 1);
          delimiters.splice(_toPos, 1);
          /* istanbul ignore else */
        } else if (operation === '+') {
          lines.splice(_toPos, 0, content);
          delimiters.splice(_toPos, 0, delimiter);
          _toPos++;
        } else if (operation === '\\') {
          var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;

          if (previousOperation === '+') {
            removeEOFNL = true;
          } else if (previousOperation === '-') {
            addEOFNL = true;
          }
        }
      }
    } // Handle EOFNL insertion/removal


    if (removeEOFNL) {
      while (!lines[lines.length - 1]) {
        lines.pop();
        delimiters.pop();
      }
    } else if (addEOFNL) {
      lines.push('');
      delimiters.push('\n');
    }

    for (var _k = 0; _k < lines.length - 1; _k++) {
      lines[_k] = lines[_k] + delimiters[_k];
    }

    return lines.join('');
  } // Wrapper that supports multiple file patches via callbacks.

  function applyPatches(uniDiff, options) {
    if (typeof uniDiff === 'string') {
      uniDiff = parsePatch(uniDiff);
    }

    var currentIndex = 0;

    function processIndex() {
      var index = uniDiff[currentIndex++];

      if (!index) {
        return options.complete();
      }

      options.loadFile(index, function (err, data) {
        if (err) {
          return options.complete(err);
        }

        var updatedContent = applyPatch(data, index, options);
        options.patched(index, updatedContent, function (err) {
          if (err) {
            return options.complete(err);
          }

          processIndex();
        });
      });
    }

    processIndex();
  }

  function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    if (!options) {
      options = {};
    }

    if (typeof options.context === 'undefined') {
      options.context = 4;
    }

    var diff = diffLines(oldStr, newStr, options);
    diff.push({
      value: '',
      lines: []
    }); // Append an empty value to make cleanup easier

    function contextLines(lines) {
      return lines.map(function (entry) {
        return ' ' + entry;
      });
    }

    var hunks = [];
    var oldRangeStart = 0,
        newRangeStart = 0,
        curRange = [],
        oldLine = 1,
        newLine = 1;

    var _loop = function _loop(i) {
      var current = diff[i],
          lines = current.lines || current.value.replace(/\n$/, '').split('\n');
      current.lines = lines;

      if (current.added || current.removed) {
        var _curRange;

        // If we have previous context, start with that
        if (!oldRangeStart) {
          var prev = diff[i - 1];
          oldRangeStart = oldLine;
          newRangeStart = newLine;

          if (prev) {
            curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
            oldRangeStart -= curRange.length;
            newRangeStart -= curRange.length;
          }
        } // Output our changes


        (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function (entry) {
          return (current.added ? '+' : '-') + entry;
        }))); // Track the updated file position


        if (current.added) {
          newLine += lines.length;
        } else {
          oldLine += lines.length;
        }
      } else {
        // Identical context lines. Track line changes
        if (oldRangeStart) {
          // Close out any changes that have been output (or join overlapping)
          if (lines.length <= options.context * 2 && i < diff.length - 2) {
            var _curRange2;

            // Overlapping
            (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
          } else {
            var _curRange3;

            // end the range and output
            var contextSize = Math.min(lines.length, options.context);

            (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));

            var hunk = {
              oldStart: oldRangeStart,
              oldLines: oldLine - oldRangeStart + contextSize,
              newStart: newRangeStart,
              newLines: newLine - newRangeStart + contextSize,
              lines: curRange
            };

            if (i >= diff.length - 2 && lines.length <= options.context) {
              // EOF is inside this hunk
              var oldEOFNewline = /\n$/.test(oldStr);
              var newEOFNewline = /\n$/.test(newStr);
              var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;

              if (!oldEOFNewline && noNlBeforeAdds) {
                // special case: old has no eol and no trailing context; no-nl can end up before adds
                curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
              }

              if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
                curRange.push('\\ No newline at end of file');
              }
            }

            hunks.push(hunk);
            oldRangeStart = 0;
            newRangeStart = 0;
            curRange = [];
          }
        }

        oldLine += lines.length;
        newLine += lines.length;
      }
    };

    for (var i = 0; i < diff.length; i++) {
      _loop(i);
    }

    return {
      oldFileName: oldFileName,
      newFileName: newFileName,
      oldHeader: oldHeader,
      newHeader: newHeader,
      hunks: hunks
    };
  }
  function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);
    var ret = [];

    if (oldFileName == newFileName) {
      ret.push('Index: ' + oldFileName);
    }

    ret.push('===================================================================');
    ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
    ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

    for (var i = 0; i < diff.hunks.length; i++) {
      var hunk = diff.hunks[i];
      ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
      ret.push.apply(ret, hunk.lines);
    }

    return ret.join('\n') + '\n';
  }
  function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
    return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
  }

  function arrayEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    return arrayStartsWith(a, b);
  }
  function arrayStartsWith(array, start) {
    if (start.length > array.length) {
      return false;
    }

    for (var i = 0; i < start.length; i++) {
      if (start[i] !== array[i]) {
        return false;
      }
    }

    return true;
  }

  function calcLineCount(hunk) {
    var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines),
        oldLines = _calcOldNewLineCount.oldLines,
        newLines = _calcOldNewLineCount.newLines;

    if (oldLines !== undefined) {
      hunk.oldLines = oldLines;
    } else {
      delete hunk.oldLines;
    }

    if (newLines !== undefined) {
      hunk.newLines = newLines;
    } else {
      delete hunk.newLines;
    }
  }
  function merge(mine, theirs, base) {
    mine = loadPatch(mine, base);
    theirs = loadPatch(theirs, base);
    var ret = {}; // For index we just let it pass through as it doesn't have any necessary meaning.
    // Leaving sanity checks on this to the API consumer that may know more about the
    // meaning in their own context.

    if (mine.index || theirs.index) {
      ret.index = mine.index || theirs.index;
    }

    if (mine.newFileName || theirs.newFileName) {
      if (!fileNameChanged(mine)) {
        // No header or no change in ours, use theirs (and ours if theirs does not exist)
        ret.oldFileName = theirs.oldFileName || mine.oldFileName;
        ret.newFileName = theirs.newFileName || mine.newFileName;
        ret.oldHeader = theirs.oldHeader || mine.oldHeader;
        ret.newHeader = theirs.newHeader || mine.newHeader;
      } else if (!fileNameChanged(theirs)) {
        // No header or no change in theirs, use ours
        ret.oldFileName = mine.oldFileName;
        ret.newFileName = mine.newFileName;
        ret.oldHeader = mine.oldHeader;
        ret.newHeader = mine.newHeader;
      } else {
        // Both changed... figure it out
        ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
        ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
        ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
        ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
      }
    }

    ret.hunks = [];
    var mineIndex = 0,
        theirsIndex = 0,
        mineOffset = 0,
        theirsOffset = 0;

    while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
      var mineCurrent = mine.hunks[mineIndex] || {
        oldStart: Infinity
      },
          theirsCurrent = theirs.hunks[theirsIndex] || {
        oldStart: Infinity
      };

      if (hunkBefore(mineCurrent, theirsCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
        mineIndex++;
        theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
      } else if (hunkBefore(theirsCurrent, mineCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
        theirsIndex++;
        mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
      } else {
        // Overlap, merge as best we can
        var mergedHunk = {
          oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
          oldLines: 0,
          newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
          newLines: 0,
          lines: []
        };
        mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
        theirsIndex++;
        mineIndex++;
        ret.hunks.push(mergedHunk);
      }
    }

    return ret;
  }

  function loadPatch(param, base) {
    if (typeof param === 'string') {
      if (/^@@/m.test(param) || /^Index:/m.test(param)) {
        return parsePatch(param)[0];
      }

      if (!base) {
        throw new Error('Must provide a base reference or pass in a patch');
      }

      return structuredPatch(undefined, undefined, base, param);
    }

    return param;
  }

  function fileNameChanged(patch) {
    return patch.newFileName && patch.newFileName !== patch.oldFileName;
  }

  function selectField(index, mine, theirs) {
    if (mine === theirs) {
      return mine;
    } else {
      index.conflict = true;
      return {
        mine: mine,
        theirs: theirs
      };
    }
  }

  function hunkBefore(test, check) {
    return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
  }

  function cloneHunk(hunk, offset) {
    return {
      oldStart: hunk.oldStart,
      oldLines: hunk.oldLines,
      newStart: hunk.newStart + offset,
      newLines: hunk.newLines,
      lines: hunk.lines
    };
  }

  function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
    // This will generally result in a conflicted hunk, but there are cases where the context
    // is the only overlap where we can successfully merge the content here.
    var mine = {
      offset: mineOffset,
      lines: mineLines,
      index: 0
    },
        their = {
      offset: theirOffset,
      lines: theirLines,
      index: 0
    }; // Handle any leading content

    insertLeading(hunk, mine, their);
    insertLeading(hunk, their, mine); // Now in the overlap content. Scan through and select the best changes from each.

    while (mine.index < mine.lines.length && their.index < their.lines.length) {
      var mineCurrent = mine.lines[mine.index],
          theirCurrent = their.lines[their.index];

      if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
        // Both modified ...
        mutualChange(hunk, mine, their);
      } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
        var _hunk$lines;

        // Mine inserted
        (_hunk$lines = hunk.lines).push.apply(_hunk$lines, _toConsumableArray(collectChange(mine)));
      } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
        var _hunk$lines2;

        // Theirs inserted
        (_hunk$lines2 = hunk.lines).push.apply(_hunk$lines2, _toConsumableArray(collectChange(their)));
      } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
        // Mine removed or edited
        removal(hunk, mine, their);
      } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
        // Their removed or edited
        removal(hunk, their, mine, true);
      } else if (mineCurrent === theirCurrent) {
        // Context identity
        hunk.lines.push(mineCurrent);
        mine.index++;
        their.index++;
      } else {
        // Context mismatch
        conflict(hunk, collectChange(mine), collectChange(their));
      }
    } // Now push anything that may be remaining


    insertTrailing(hunk, mine);
    insertTrailing(hunk, their);
    calcLineCount(hunk);
  }

  function mutualChange(hunk, mine, their) {
    var myChanges = collectChange(mine),
        theirChanges = collectChange(their);

    if (allRemoves(myChanges) && allRemoves(theirChanges)) {
      // Special case for remove changes that are supersets of one another
      if (arrayStartsWith(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
        var _hunk$lines3;

        (_hunk$lines3 = hunk.lines).push.apply(_hunk$lines3, _toConsumableArray(myChanges));

        return;
      } else if (arrayStartsWith(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
        var _hunk$lines4;

        (_hunk$lines4 = hunk.lines).push.apply(_hunk$lines4, _toConsumableArray(theirChanges));

        return;
      }
    } else if (arrayEqual(myChanges, theirChanges)) {
      var _hunk$lines5;

      (_hunk$lines5 = hunk.lines).push.apply(_hunk$lines5, _toConsumableArray(myChanges));

      return;
    }

    conflict(hunk, myChanges, theirChanges);
  }

  function removal(hunk, mine, their, swap) {
    var myChanges = collectChange(mine),
        theirChanges = collectContext(their, myChanges);

    if (theirChanges.merged) {
      var _hunk$lines6;

      (_hunk$lines6 = hunk.lines).push.apply(_hunk$lines6, _toConsumableArray(theirChanges.merged));
    } else {
      conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
    }
  }

  function conflict(hunk, mine, their) {
    hunk.conflict = true;
    hunk.lines.push({
      conflict: true,
      mine: mine,
      theirs: their
    });
  }

  function insertLeading(hunk, insert, their) {
    while (insert.offset < their.offset && insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
      insert.offset++;
    }
  }

  function insertTrailing(hunk, insert) {
    while (insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
    }
  }

  function collectChange(state) {
    var ret = [],
        operation = state.lines[state.index][0];

    while (state.index < state.lines.length) {
      var line = state.lines[state.index]; // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.

      if (operation === '-' && line[0] === '+') {
        operation = '+';
      }

      if (operation === line[0]) {
        ret.push(line);
        state.index++;
      } else {
        break;
      }
    }

    return ret;
  }

  function collectContext(state, matchChanges) {
    var changes = [],
        merged = [],
        matchIndex = 0,
        contextChanges = false,
        conflicted = false;

    while (matchIndex < matchChanges.length && state.index < state.lines.length) {
      var change = state.lines[state.index],
          match = matchChanges[matchIndex]; // Once we've hit our add, then we are done

      if (match[0] === '+') {
        break;
      }

      contextChanges = contextChanges || change[0] !== ' ';
      merged.push(match);
      matchIndex++; // Consume any additions in the other block as a conflict to attempt
      // to pull in the remaining context after this

      if (change[0] === '+') {
        conflicted = true;

        while (change[0] === '+') {
          changes.push(change);
          change = state.lines[++state.index];
        }
      }

      if (match.substr(1) === change.substr(1)) {
        changes.push(change);
        state.index++;
      } else {
        conflicted = true;
      }
    }

    if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
      conflicted = true;
    }

    if (conflicted) {
      return changes;
    }

    while (matchIndex < matchChanges.length) {
      merged.push(matchChanges[matchIndex++]);
    }

    return {
      merged: merged,
      changes: changes
    };
  }

  function allRemoves(changes) {
    return changes.reduce(function (prev, change) {
      return prev && change[0] === '-';
    }, true);
  }

  function skipRemoveSuperset(state, removeChanges, delta) {
    for (var i = 0; i < delta; i++) {
      var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);

      if (state.lines[state.index + i] !== ' ' + changeContent) {
        return false;
      }
    }

    state.index += delta;
    return true;
  }

  function calcOldNewLineCount(lines) {
    var oldLines = 0;
    var newLines = 0;
    lines.forEach(function (line) {
      if (typeof line !== 'string') {
        var myCount = calcOldNewLineCount(line.mine);
        var theirCount = calcOldNewLineCount(line.theirs);

        if (oldLines !== undefined) {
          if (myCount.oldLines === theirCount.oldLines) {
            oldLines += myCount.oldLines;
          } else {
            oldLines = undefined;
          }
        }

        if (newLines !== undefined) {
          if (myCount.newLines === theirCount.newLines) {
            newLines += myCount.newLines;
          } else {
            newLines = undefined;
          }
        }
      } else {
        if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
          newLines++;
        }

        if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
          oldLines++;
        }
      }
    });
    return {
      oldLines: oldLines,
      newLines: newLines
    };
  }

  // See: http://code.google.com/p/google-diff-match-patch/wiki/API
  function convertChangesToDMP(changes) {
    var ret = [],
        change,
        operation;

    for (var i = 0; i < changes.length; i++) {
      change = changes[i];

      if (change.added) {
        operation = 1;
      } else if (change.removed) {
        operation = -1;
      } else {
        operation = 0;
      }

      ret.push([operation, change.value]);
    }

    return ret;
  }

  function convertChangesToXML(changes) {
    var ret = [];

    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];

      if (change.added) {
        ret.push('<ins>');
      } else if (change.removed) {
        ret.push('<del>');
      }

      ret.push(escapeHTML(change.value));

      if (change.added) {
        ret.push('</ins>');
      } else if (change.removed) {
        ret.push('</del>');
      }
    }

    return ret.join('');
  }

  function escapeHTML(s) {
    var n = s;
    n = n.replace(/&/g, '&amp;');
    n = n.replace(/</g, '&lt;');
    n = n.replace(/>/g, '&gt;');
    n = n.replace(/"/g, '&quot;');
    return n;
  }

  /* See LICENSE file for terms of use */

  exports.Diff = Diff;
  exports.diffChars = diffChars;
  exports.diffWords = diffWords;
  exports.diffWordsWithSpace = diffWordsWithSpace;
  exports.diffLines = diffLines;
  exports.diffTrimmedLines = diffTrimmedLines;
  exports.diffSentences = diffSentences;
  exports.diffCss = diffCss;
  exports.diffJson = diffJson;
  exports.diffArrays = diffArrays;
  exports.structuredPatch = structuredPatch;
  exports.createTwoFilesPatch = createTwoFilesPatch;
  exports.createPatch = createPatch;
  exports.applyPatch = applyPatch;
  exports.applyPatches = applyPatches;
  exports.parsePatch = parsePatch;
  exports.merge = merge;
  exports.convertChangesToDMP = convertChangesToDMP;
  exports.convertChangesToXML = convertChangesToXML;
  exports.canonicalize = canonicalize;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/entries/dist.ts":
/*!*****************************!*\
  !*** ./src/entries/dist.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
var app_1 = __webpack_require__(/*! ../scripts/app */ "./src/scripts/app.ts");
// Load library
H5P = H5P || {};
H5P.AdvancedBlanks = app_1.default;


/***/ }),

/***/ "./src/lib/helpers.ts":
/*!****************************!*\
  !*** ./src/lib/helpers.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getLongestString(strings) {
    return strings.reduce(function (prev, current) { return current.length > prev.length ? current : prev; }, "");
}
exports.getLongestString = getLongestString;
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
exports.shuffleArray = shuffleArray;


/***/ }),

/***/ "./src/lib/ractive-events-keys.ts":
/*!****************************************!*\
  !*** ./src/lib/ractive-events-keys.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// TODO can we just declare the keydownHandler once? using `this`?
function makeKeyDefinition(code) {
    return function (node, fire) {
        function keydownHandler(event) {
            var which = event.which || event.keyCode;
            if (code && which === code) {
                event.preventDefault();
                fire({
                    node: node,
                    original: event
                });
            }
            else if (!code && [16, 17, 18, 35, 36, 13, 9, 27, 32, 37, 39, 40, 38].filter(function (c) { return c === which; }).length === 0) {
                fire({
                    node: node,
                    original: event
                });
            }
        }
        node.addEventListener('keydown', keydownHandler, false);
        return {
            teardown: function () {
                node.removeEventListener('keydown', keydownHandler, false);
            }
        };
    };
}
exports.enter = makeKeyDefinition(13);
exports.tab = makeKeyDefinition(9);
exports.escape = makeKeyDefinition(27);
exports.space = makeKeyDefinition(32);
exports.leftarrow = makeKeyDefinition(37);
exports.rightarrow = makeKeyDefinition(39);
exports.downarrow = makeKeyDefinition(40);
exports.uparrow = makeKeyDefinition(38);
exports.anykey = makeKeyDefinition();


/***/ }),

/***/ "./src/scripts/app.ts":
/*!****************************!*\
  !*** ./src/scripts/app.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var blank_loader_1 = __webpack_require__(/*! ./content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var data_repository_1 = __webpack_require__(/*! ./services/data-repository */ "./src/scripts/services/data-repository.ts");
var cloze_controller_1 = __webpack_require__(/*! ./controllers/cloze-controller */ "./src/scripts/controllers/cloze-controller.ts");
var localization_1 = __webpack_require__(/*! ./services/localization */ "./src/scripts/services/localization.ts");
var settings_1 = __webpack_require__(/*! ./services/settings */ "./src/scripts/services/settings.ts");
var message_service_1 = __webpack_require__(/*! ./services/message-service */ "./src/scripts/services/message-service.ts");
var unwrapper_1 = __webpack_require__(/*! ./helpers/unwrapper */ "./src/scripts/helpers/unwrapper.ts");
var xapi_1 = __webpack_require__(/*! ./models/xapi */ "./src/scripts/models/xapi.ts");
var permutations_1 = __webpack_require__(/*! ./helpers/permutations */ "./src/scripts/helpers/permutations.ts");
var States;
(function (States) {
    States["ongoing"] = "ongoing";
    States["checking"] = "checking";
    States["showingSolutions"] = "showing-solution";
    States["finished"] = "finished";
    States["showingSolutionsEmbedded"] = "showing-solution-embedded";
})(States || (States = {}));
var AdvancedBlanks = /** @class */ (function (_super) {
    __extends(AdvancedBlanks, _super);
    /**
     * @constructor
     *
     * @param {object} config
     * @param {string} contentId
     * @param {object} contentData
     */
    function AdvancedBlanks(config, contentId, contentData) {
        if (contentData === void 0) { contentData = {}; }
        var _this = _super.call(this) || this;
        /**
         * Indicates if user has entered any answer so far.
         */
        _this.answered = false;
        /**
         * Called from outside when the score of the cloze has changed.
         */
        _this.onScoreChanged = function (score, maxScore) {
            if (_this.clozeController.isFullyFilledOut) {
                _this.transitionState();
                if (_this.state !== States.finished)
                    _this.state = States.checking;
                _this.showFeedback();
            }
            else {
                _this.setFeedback("", score, maxScore);
            }
            _this.transitionState();
            _this.toggleButtonVisibility(_this.state);
        };
        _this.onTyped = function () {
            if (_this.state === States.checking) {
                _this.state = States.ongoing;
                _this.toggleButtonVisibility(_this.state);
            }
            _this.triggerXAPI('interacted');
            _this.answered = true;
        };
        _this.onAutoChecked = function () {
            _this.triggerXAPI('interacted');
            _this.triggerXAPIAnswered();
        };
        /**
         * Overrides the attach method of the superclass (H5P.Question) and calls it
         * at the same time. (equivalent to super.attach($container)).
         * This is necessary, as Ractive needs to be initialized with an existing DOM
         * element. DOM elements are created in H5P.Question.attach, so initializing
         * Ractive in registerDomElements doesn't work.
         */
        _this.attach = (function (original) {
            return function ($container) {
                original($container);
                _this.clozeController.initialize(_this.container.get(0), $container);
                if (_this.clozeController.deserializeCloze(_this.previousState)) {
                    _this.answered = _this.clozeController.isFilledOut;
                    if (_this.settings.autoCheck)
                        _this.onCheckAnswer();
                    _this.toggleButtonVisibility(_this.state);
                }
            };
        })(_this.attach);
        /**
         * Called by H5P.Question.attach(). Creates all content elements and registers them
         * with H5P.Question.
         */
        _this.registerDomElements = function () {
            this.registerMedia();
            this.setIntroduction(this.repository.getTaskDescription());
            this.container = this.jQuery("<div/>", { "class": "h5p-advanced-blanks" });
            this.setContent(this.container);
            this.registerButtons();
            this.moveToState(States.ongoing);
        };
        _this.onCheckAnswer = function () {
            _this.clozeController.checkAll();
            _this.triggerXAPI('interacted');
            _this.triggerXAPIAnswered();
            _this.transitionState();
            if (_this.state !== States.finished)
                _this.state = States.checking;
            _this.showFeedback();
            _this.toggleButtonVisibility(_this.state);
            _this.triggerXAPIScored(_this.getScore(true), _this.getMaxScore(), "submitted-curriki");
        };
        _this.transitionState = function () {
            if (_this.clozeController.isSolved) {
                _this.moveToState(States.finished);
            }
        };
        _this.onShowSolution = function () {
            _this.moveToState(States.showingSolutions);
            _this.clozeController.showSolutions();
            _this.showFeedback();
        };
        _this.onRetry = function () {
            _this.removeFeedback();
            _this.clozeController.reset();
            _this.answered = false;
            _this.moveToState(States.ongoing);
        };
        _this.getCurrentState = function () {
            return _this.clozeController.serializeCloze();
        };
        /****************************************
         * Implementation of Question contract  *
         ****************************************/
        _this.getAnswerGiven = function () {
            return _this.answered || _this.clozeController.maxScore === 0;
        };
        _this.getScore = function (fromCheckAnswer) {
            if (!fromCheckAnswer) {
                _this.onCheckAnswer();
            }
            return _this.clozeController.currentScore;
        };
        _this.getMaxScore = function () {
            return _this.clozeController.maxScore;
        };
        _this.showSolutions = function () {
            _this.onCheckAnswer();
            _this.onShowSolution();
            _this.moveToState(States.showingSolutionsEmbedded);
        };
        _this.resetTask = function () {
            _this.onRetry();
        };
        /***
         * XApi implementation
         */
        /**
         * Trigger xAPI answered event
         */
        _this.triggerXAPIAnswered = function () {
            _this.answered = true;
            var xAPIEvent = _this.createXAPIEventTemplate('answered');
            _this.addQuestionToXAPI(xAPIEvent);
            _this.addResponseToXAPI(xAPIEvent);
            _this.trigger(xAPIEvent);
        };
        /**
         * Get xAPI data.
         * Contract used by report rendering engine.
         *
         * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
         */
        _this.getXAPIData = function () {
            var xAPIEvent = _this.createXAPIEventTemplate('answered');
            _this.addQuestionToXAPI(xAPIEvent);
            _this.addResponseToXAPI(xAPIEvent);
            return {
                statement: xAPIEvent.data.statement
            };
        };
        /**
         * Generate xAPI object definition used in xAPI statements.
         * @return {Object}
         */
        _this.getxAPIDefinition = function () {
            var definition = new xapi_1.XAPIActivityDefinition();
            definition.description = {
                'en-US': '<p>' + _this.repository.getTaskDescription() + '</p>' + _this.repository.getClozeText()
            };
            definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
            definition.interactionType = 'fill-in'; // We use the 'fill-in' type even in select mode, as the xAPI format for selections doesn't really cater for sequences.
            definition.correctResponsesPattern = [];
            var correctResponsesPatternPrefix = '{case_matters=' + _this.settings.caseSensitive + '}';
            // xAPI forces us to create solution patterns for all possible solution combinations
            var correctAnswerPermutations = permutations_1.createPermutations(_this.clozeController.getCorrectAnswerList());
            for (var _i = 0, correctAnswerPermutations_1 = correctAnswerPermutations; _i < correctAnswerPermutations_1.length; _i++) {
                var permutation = correctAnswerPermutations_1[_i];
                definition.correctResponsesPattern.push(correctResponsesPatternPrefix + permutation.join('[,]'));
            }
            return definition;
        };
        /**
         * Add the question itself to the definition part of an xAPIEvent
         */
        _this.addQuestionToXAPI = function (xAPIEvent) {
            var definition = xAPIEvent.getVerifiedStatementValue(['object', 'definition']);
            _this.jQuery.extend(definition, _this.getxAPIDefinition());
        };
        /**
         * Add the response part to an xAPI event
         *
         * @param {H5P.XAPIEvent} xAPIEvent
         *  The xAPI event we will add a response to
         */
        _this.addResponseToXAPI = function (xAPIEvent) {
            xAPIEvent.setScoredResult(_this.clozeController.currentScore, _this.clozeController.maxScore, _this);
            xAPIEvent.data.statement.result.response = _this.getxAPIResponse();
        };
        /**
         * Generate xAPI user response, used in xAPI statements.
         * @return {string} User answers separated by the "[,]" pattern
         */
        _this.getxAPIResponse = function () {
            var usersAnswers = _this.getCurrentState();
            return usersAnswers.join('[,]');
        };
        _this.jQuery = H5P.jQuery;
        _this.contentId = contentId;
        var unwrapper = new unwrapper_1.Unrwapper(_this.jQuery);
        _this.settings = new settings_1.H5PSettings(config);
        _this.localization = new localization_1.H5PLocalization(config);
        _this.repository = new data_repository_1.H5PDataRepository(config, _this.settings, _this.localization, _this.jQuery, unwrapper);
        _this.messageService = new message_service_1.MessageService(_this.jQuery);
        blank_loader_1.BlankLoader.initialize(_this.settings, _this.localization, _this.jQuery, _this.messageService);
        _this.clozeController = new cloze_controller_1.ClozeController(_this.repository, _this.settings, _this.localization, _this.messageService);
        _this.clozeController.onScoreChanged = _this.onScoreChanged;
        _this.clozeController.onSolved = _this.onSolved;
        _this.clozeController.onAutoChecked = _this.onAutoChecked;
        _this.clozeController.onTyped = _this.onTyped;
        if (contentData && contentData.previousState)
            _this.previousState = contentData.previousState;
        return _this;
    }
    AdvancedBlanks.prototype.onSolved = function () {
    };
    /**
     * @returns JQuery - The outer h5p container. The library can add dialogues to this
     * element.
     */
    AdvancedBlanks.prototype.getH5pContainer = function () {
        var $content = this.jQuery('[data-content-id="' + this.contentId + '"].h5p-content');
        var $containerParents = $content.parents('.h5p-container');
        // select find container to attach dialogs to
        var $container;
        if ($containerParents.length !== 0) {
            // use parent highest up if any
            $container = $containerParents.last();
        }
        else if ($content.length !== 0) {
            $container = $content;
        }
        else {
            $container = this.jQuery(document.body);
        }
        return $container;
    };
    AdvancedBlanks.prototype.registerMedia = function () {
        var media = this.repository.getMedia();
        if (!media || !media.library)
            return;
        var type = media.library.split(' ')[0];
        if (type === 'H5P.Image') {
            if (media.params.file) {
                this.setImage(media.params.file.path, {
                    disableImageZooming: this.settings.disableImageZooming,
                    alt: media.params.alt
                });
            }
        }
        else if (type === 'H5P.Video') {
            if (media.params.sources) {
                this.setVideo(media);
            }
        }
    };
    AdvancedBlanks.prototype.registerButtons = function () {
        var $container = this.getH5pContainer();
        if (!this.settings.autoCheck) {
            // Check answer button
            this.addButton('check-answer', 'Submit Answers', this.onCheckAnswer, true, {}, {
                confirmationDialog: {
                    enable: this.settings.confirmCheckDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmCheck),
                    instance: this,
                    $parentElement: $container
                }
            });
        }
        // Show solution button
        this.addButton('show-solution', this.localization.getTextFromLabel(localization_1.LocalizationLabels.showSolutionButton), this.onShowSolution, this.settings.enableSolutionsButton);
        // Try again button
        if (this.settings.enableRetry === true) {
            this.addButton('try-again', this.localization.getTextFromLabel(localization_1.LocalizationLabels.retryButton), this.onRetry, true, {}, {
                confirmationDialog: {
                    enable: this.settings.confirmRetryDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmRetry),
                    instance: this,
                    $parentElement: $container
                }
            });
        }
    };
    AdvancedBlanks.prototype.showFeedback = function () {
        var scoreText = H5P.Question.determineOverallFeedback(this.localization.getObjectForStructure(localization_1.LocalizationStructures.overallFeedback), this.clozeController.currentScore / this.clozeController.maxScore).replace('@score', this.clozeController.currentScore).replace('@total', this.clozeController.maxScore);
        this.setFeedback(scoreText, this.clozeController.currentScore, this.clozeController.maxScore, this.localization.getTextFromLabel(localization_1.LocalizationLabels.scoreBarLabel));
    };
    /**
     * Shows are hides buttons depending on the current state and settings made
     * by the content creator.
     * @param  {States} state
     */
    AdvancedBlanks.prototype.moveToState = function (state) {
        this.state = state;
        this.toggleButtonVisibility(state);
    };
    AdvancedBlanks.prototype.toggleButtonVisibility = function (state) {
        if (this.settings.enableSolutionsButton) {
            if (((state === States.checking)
                || (this.settings.autoCheck && state === States.ongoing))
                && (!this.settings.showSolutionsRequiresInput || this.clozeController.allBlanksEntered)) {
                this.showButton('show-solution');
            }
            else {
                this.hideButton('show-solution');
            }
        }
        if (this.settings.enableRetry && (state === States.checking || state === States.finished || state === States.showingSolutions)) {
            this.showButton('try-again');
        }
        else {
            this.hideButton('try-again');
        }
        if (state === States.ongoing && this.settings.enableCheckButton) {
            this.showButton('check-answer');
        }
        else {
            this.hideButton('check-answer');
        }
        if (state === States.showingSolutionsEmbedded) {
            this.hideButton('check-answer');
            this.hideButton('try-again');
            this.hideButton('show-solution');
        }
        this.trigger('resize');
    };
    return AdvancedBlanks;
}(H5P.Question));
exports.default = AdvancedBlanks;


/***/ }),

/***/ "./src/scripts/content-loaders/blank-loader.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content-loaders/blank-loader.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var answer_1 = __webpack_require__(/*! ../models/answer */ "./src/scripts/models/answer.ts");
var blank_1 = __webpack_require__(/*! ../models/blank */ "./src/scripts/models/blank.ts");
var message_1 = __webpack_require__(/*! ../models/message */ "./src/scripts/models/message.ts");
var BlankLoader = /** @class */ (function () {
    function BlankLoader(settings, localization, jquery, messageService) {
        this.settings = settings;
        this.localization = localization;
        this.jquery = jquery;
        this.messageService = messageService;
    }
    BlankLoader.initialize = function (settings, localization, jquery, messageService) {
        this._instance = new BlankLoader(settings, localization, jquery, messageService);
        return this._instance;
    };
    Object.defineProperty(BlankLoader, "instance", {
        get: function () {
            if (this._instance)
                return this._instance;
            throw "BlankLoader must be initialized before use.";
        },
        enumerable: true,
        configurable: true
    });
    BlankLoader.prototype.decodeHtml = function (html) {
        var elem = document.createElement('textarea');
        elem.innerHTML = html;
        return elem.value;
    };
    BlankLoader.prototype.createBlank = function (id, correctText, hintText, incorrectAnswers) {
        var blank = new blank_1.Blank(this.settings, this.localization, this.jquery, this.messageService, id);
        if (correctText) {
            correctText = this.decodeHtml(correctText);
            blank.addCorrectAnswer(new answer_1.Answer(correctText, "", false, 0, this.settings));
        }
        blank.setHint(new message_1.Message(hintText ? hintText : "", false, 0));
        if (incorrectAnswers) {
            for (var _i = 0, incorrectAnswers_1 = incorrectAnswers; _i < incorrectAnswers_1.length; _i++) {
                var h5pIncorrectAnswer = incorrectAnswers_1[_i];
                blank.addIncorrectAnswer(this.decodeHtml(h5pIncorrectAnswer.incorrectAnswerText), h5pIncorrectAnswer.incorrectAnswerFeedback, h5pIncorrectAnswer.showHighlight, h5pIncorrectAnswer.highlight);
            }
        }
        return blank;
    };
    BlankLoader.prototype.replaceSnippets = function (blank, snippets) {
        var _this = this;
        blank.correctAnswers.concat(blank.incorrectAnswers)
            .forEach(function (answer) { return answer.message.text = _this.getStringWithSnippets(answer.message.text, snippets); });
        blank.hint.text = this.getStringWithSnippets(blank.hint.text, snippets);
    };
    BlankLoader.prototype.getStringWithSnippets = function (text, snippets) {
        if (!text || text === undefined)
            return "";
        if (!snippets)
            return text;
        for (var _i = 0, snippets_1 = snippets; _i < snippets_1.length; _i++) {
            var snippet = snippets_1[_i];
            if (snippet.name === undefined || snippet.name === "" || snippet.text === undefined || snippet.text === "")
                continue;
            text = text.replace("@" + snippet.name, snippet.text);
        }
        return text;
    };
    /**
     * Adds the highlight objects to the answers in the correct and incorrect answer list.
     * @param  {Highlight[]} highlightsBefore - All highlights coming before the blank.
     * @param  {Highlight[]} highlightsAfter - All highlights coming after the blank.
     */
    BlankLoader.prototype.linkHighlightIdToObject = function (blank, highlightsBefore, highlightsAfter) {
        for (var _i = 0, _a = blank.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            answer.linkHighlightIdToObject(highlightsBefore, highlightsAfter);
        }
        for (var _b = 0, _c = blank.incorrectAnswers; _b < _c.length; _b++) {
            var answer = _c[_b];
            answer.linkHighlightIdToObject(highlightsBefore, highlightsAfter);
        }
        blank.hint.linkHighlight(highlightsBefore, highlightsAfter);
    };
    return BlankLoader;
}());
exports.BlankLoader = BlankLoader;


/***/ }),

/***/ "./src/scripts/content-loaders/cloze-loader.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content-loaders/cloze-loader.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blank_loader_1 = __webpack_require__(/*! ./blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var cloze_element_1 = __webpack_require__(/*! ../models/cloze-element */ "./src/scripts/models/cloze-element.ts");
var highlight_1 = __webpack_require__(/*! ../models/highlight */ "./src/scripts/models/highlight.ts");
var cloze_1 = __webpack_require__(/*! ../models/cloze */ "./src/scripts/models/cloze.ts");
/**
 * Loads a cloze object.
 */
var ClozeLoader = /** @class */ (function () {
    function ClozeLoader() {
    }
    /**
     * @param  {string} html - The html string that contains the cloze with blanks marking and highlight markings.
     * @param  {Blank[]} blanks - All blanks as entered by the content author.
     * @returns Cloze
     */
    ClozeLoader.createCloze = function (html, blanks) {
        var orderedAllElementsList = new Array();
        var highlightInstances = new Array();
        var blanksInstances = new Array();
        html = ClozeLoader.normalizeBlankMarkings(html);
        var conversionResult = ClozeLoader.convertMarkupToSpans(html, blanks);
        html = conversionResult.html;
        orderedAllElementsList = conversionResult.orderedAllElementsList;
        highlightInstances = conversionResult.highlightInstances;
        blanksInstances = conversionResult.blanksInstances;
        ClozeLoader.linkHighlightsObjects(orderedAllElementsList, highlightInstances, blanksInstances);
        var cloze = new cloze_1.Cloze();
        cloze.html = html;
        cloze.blanks = blanksInstances;
        cloze.highlights = highlightInstances;
        return cloze;
    };
    /**
    * Converts !!signal!! highlight markup and ___  blank markup into <span>...</span>.
    * Returns the resulting html string and three lists of all active elements used in the cloze:
    *    orderedAllElements: highlights and blanks in the order of appearance in the html.
    *    highlightInstances: only highlights in the order of appearance
    *    blanksInstances: only blanks in the order of appearance
    * @param  {string} html
    * @param  {Blank[]} blanks
    * @returns Lists of active elements (see description).
    */
    ClozeLoader.convertMarkupToSpans = function (html, blanks) {
        var orderedAllElementsList = new Array();
        var highlightInstances = new Array();
        var blanksInstances = new Array();
        var exclamationMarkRegExp = /!!(.{1,40}?)!!/i;
        var highlightCounter = 0;
        var blankCounter = 0;
        // Searches the html string for highlights and blanks and inserts spans. 
        do {
            var nextHighlightMatch = html.match(exclamationMarkRegExp);
            var nextBlankIndex = html.indexOf(ClozeLoader.normalizedBlankMarker);
            if (nextHighlightMatch && ((nextHighlightMatch.index < nextBlankIndex) || (nextBlankIndex < 0))) {
                // next active element is a highlight
                var highlight = new highlight_1.Highlight(nextHighlightMatch[1], "highlight_" + highlightCounter);
                highlightInstances.push(highlight);
                orderedAllElementsList.push(highlight);
                html = html.replace(exclamationMarkRegExp, "<span id='container_highlight_" + highlightCounter + "'></span>");
                highlightCounter++;
            }
            else if (nextBlankIndex >= 0) {
                // next active element is a blank
                if (blankCounter >= blanks.length) {
                    // if the blank is not in the repository (The content author has marked too many blanks in the text, but not entered correct answers.)
                    html = html.replace(ClozeLoader.normalizedBlankMarker, "<span></span>");
                }
                else {
                    var blank = blanks[blankCounter];
                    blanksInstances.push(blank);
                    orderedAllElementsList.push(blank);
                    html = html.replace(ClozeLoader.normalizedBlankMarker, "<span id='container_" + blank.id + "'></span>");
                    blankCounter++;
                }
            }
        } while (nextHighlightMatch || (nextBlankIndex >= 0));
        return {
            html: html,
            orderedAllElementsList: orderedAllElementsList,
            highlightInstances: highlightInstances,
            blanksInstances: blanksInstances
        };
    };
    /**
     * Looks for all instances of marked blanks and replaces them with ___.
     * @param  {string} html
     * @returns string
     */
    ClozeLoader.normalizeBlankMarkings = function (html) {
        var underlineBlankRegEx = /_{3,}/g;
        html = html.replace(underlineBlankRegEx, ClozeLoader.normalizedBlankMarker);
        return html;
    };
    /**
    * Iterates through all blanks and calls their linkHighlightIdsToObjects(...).
    * @param orderedAllElementsList
    * @param highlightInstances
    * @param blanksInstances
    */
    ClozeLoader.linkHighlightsObjects = function (orderedAllElementsList, highlightInstances, blanksInstances) {
        for (var _i = 0, blanksInstances_1 = blanksInstances; _i < blanksInstances_1.length; _i++) {
            var blank = blanksInstances_1[_i];
            var nextBlankIndexInArray = orderedAllElementsList.indexOf(blank);
            var highlightsBeforeBlank = orderedAllElementsList
                .slice(0, nextBlankIndexInArray)
                .filter(function (e) { return e.type === cloze_element_1.ClozeElementType.Highlight; })
                .map(function (e) { return e; })
                .reverse();
            var highlightsAfterBlank = orderedAllElementsList
                .slice(nextBlankIndexInArray + 1)
                .filter(function (e) { return e.type === cloze_element_1.ClozeElementType.Highlight; })
                .map(function (e) { return e; });
            blank_loader_1.BlankLoader.instance.linkHighlightIdToObject(blank, highlightsBeforeBlank, highlightsAfterBlank);
        }
    };
    ClozeLoader.normalizedBlankMarker = '___';
    return ClozeLoader;
}());
exports.ClozeLoader = ClozeLoader;


/***/ }),

/***/ "./src/scripts/controllers/cloze-controller.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/controllers/cloze-controller.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blank_loader_1 = __webpack_require__(/*! ../content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var cloze_loader_1 = __webpack_require__(/*! ../content-loaders/cloze-loader */ "./src/scripts/content-loaders/cloze-loader.ts");
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var RactiveEventsKeys = __webpack_require__(/*! ../../lib/ractive-events-keys */ "./src/lib/ractive-events-keys.ts");
var ClozeController = /** @class */ (function () {
    function ClozeController(repository, settings, localization, MessageService) {
        var _this = this;
        this.repository = repository;
        this.settings = settings;
        this.localization = localization;
        this.MessageService = MessageService;
        // Storage of the ractive objects that link models and views
        this.highlightRactives = {};
        this.blankRactives = {};
        this.checkAll = function () {
            _this.cloze.hideAllHighlights();
            for (var _i = 0, _a = _this.cloze.blanks; _i < _a.length; _i++) {
                var blank = _a[_i];
                if ((!blank.isCorrect) && blank.enteredText !== "")
                    blank.evaluateAttempt(true, true);
            }
            _this.refreshCloze();
            _this.checkAndNotifyCompleteness();
        };
        this.textTyped = function (blank) {
            blank.onTyped();
            if (_this.onTyped)
                _this.onTyped();
            _this.refreshCloze();
        };
        this.focus = function (blank) {
            blank.onFocussed();
            _this.refreshCloze();
        };
        this.displayFeedback = function (blank) {
            blank.onDisplayFeedback();
            _this.refreshCloze();
        };
        this.showHint = function (blank) {
            _this.cloze.hideAllHighlights();
            blank.showHint();
            _this.refreshCloze();
        };
        this.requestCloseTooltip = function (blank) {
            blank.removeTooltip();
            _this.refreshCloze();
            _this.jquery.find("#" + blank.id).focus();
        };
        this.checkBlank = function (blank, cause) {
            if ((cause === 'blur' || cause === 'change')) {
                blank.lostFocus();
            }
            if (cause === 'change' && _this.onTyped) {
                _this.onTyped();
            }
            if (_this.settings.autoCheck) {
                if (!blank.enteredText || blank.enteredText === "")
                    return;
                _this.cloze.hideAllHighlights();
                blank.evaluateAttempt(false);
                _this.checkAndNotifyCompleteness();
                _this.refreshCloze();
                _this.onAutoChecked();
            }
            if ((cause === 'enter')
                && ((_this.settings.autoCheck && blank.isCorrect && !_this.isSolved)
                    || !_this.settings.autoCheck)) {
                // move to next blank
                var index = _this.cloze.blanks.indexOf(blank);
                var nextId;
                while (index < _this.cloze.blanks.length - 1 && !nextId) {
                    index++;
                    if (!_this.cloze.blanks[index].isCorrect)
                        nextId = _this.cloze.blanks[index].id;
                }
                if (nextId)
                    _this.jquery.find("#" + nextId).focus();
            }
        };
        this.reset = function () {
            _this.cloze.reset();
            _this.refreshCloze();
        };
        this.showSolutions = function () {
            _this.cloze.showSolutions();
            _this.refreshCloze();
        };
        this.checkAndNotifyCompleteness = function () {
            if (_this.onScoreChanged)
                _this.onScoreChanged(_this.currentScore, _this.maxScore);
            if (_this.cloze.isSolved) {
                if (_this.onSolved)
                    _this.onSolved();
                return true;
            }
            return false;
        };
    }
    Object.defineProperty(ClozeController.prototype, "maxScore", {
        get: function () {
            return this.cloze.blanks.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "currentScore", {
        get: function () {
            var score = this.cloze.blanks.filter(function (b) { return b.isCorrect; }).length;
            return Math.max(0, score);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "allBlanksEntered", {
        get: function () {
            if (this.cloze)
                return this.cloze.blanks.every(function (blank) { return blank.isError || blank.isCorrect || blank.isRetry; });
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isSolved", {
        get: function () {
            return this.cloze.isSolved;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isFilledOut", {
        get: function () {
            if (!this.cloze || this.cloze.blanks.length === 0)
                return true;
            return this.cloze.blanks.some(function (b) { return b.enteredText !== ''; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isFullyFilledOut", {
        get: function () {
            if (!this.cloze || this.cloze.blanks.length === 0)
                return true;
            return this.cloze.blanks.every(function (b) { return b.enteredText !== ''; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets up all blanks, the cloze itself and the ractive bindings.
     * @param  {HTMLElement} root
     */
    ClozeController.prototype.initialize = function (root, jquery) {
        this.jquery = jquery;
        this.isSelectCloze = this.settings.clozeType === enums_1.ClozeType.Select ? true : false;
        var blanks = this.repository.getBlanks();
        if (this.isSelectCloze && this.settings.selectAlternatives === enums_1.SelectAlternatives.All) {
            for (var _i = 0, blanks_1 = blanks; _i < blanks_1.length; _i++) {
                var blank = blanks_1[_i];
                var otherBlanks = blanks.filter(function (v) { return v !== blank; });
                blank.loadChoicesFromOtherBlanks(otherBlanks);
            }
        }
        var snippets = this.repository.getSnippets();
        blanks.forEach(function (blank) { return blank_loader_1.BlankLoader.instance.replaceSnippets(blank, snippets); });
        this.cloze = cloze_loader_1.ClozeLoader.createCloze(this.repository.getClozeText(), blanks);
        var containers = this.createAndAddContainers(root);
        containers.cloze.innerHTML = this.cloze.html;
        this.createRactiveBindings();
    };
    ClozeController.prototype.createAndAddContainers = function (addTo) {
        var clozeContainerElement = document.createElement('div');
        clozeContainerElement.id = 'h5p-cloze-container';
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            clozeContainerElement.className = 'h5p-advanced-blanks-select-mode';
        }
        else {
            clozeContainerElement.className = 'h5p-advanced-blanks-type-mode';
        }
        addTo.appendChild(clozeContainerElement);
        return {
            cloze: clozeContainerElement
        };
    };
    ClozeController.prototype.createHighlightBinding = function (highlight) {
        this.highlightRactives[highlight.id] = new Ractive({
            el: '#container_' + highlight.id,
            template: __webpack_require__(/*! ../views/highlight.ractive.html */ "./src/scripts/views/highlight.ractive.html"),
            data: {
                object: highlight
            }
        });
    };
    ClozeController.prototype.createBlankBinding = function (blank) {
        var ractive = new Ractive({
            el: '#container_' + blank.id,
            template: __webpack_require__(/*! ../views/blank.ractive.html */ "./src/scripts/views/blank.ractive.html"),
            data: {
                isSelectCloze: this.isSelectCloze,
                blank: blank
            },
            events: {
                enter: RactiveEventsKeys.enter,
                escape: RactiveEventsKeys.escape,
                anykey: RactiveEventsKeys.anykey
            }
        });
        ractive.on("checkBlank", this.checkBlank);
        ractive.on("showHint", this.showHint);
        ractive.on("textTyped", this.textTyped);
        ractive.on("closeMessage", this.requestCloseTooltip);
        ractive.on("focus", this.focus);
        ractive.on("displayFeedback", this.displayFeedback);
        this.blankRactives[blank.id] = ractive;
    };
    ClozeController.prototype.createRactiveBindings = function () {
        for (var _i = 0, _a = this.cloze.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            this.createHighlightBinding(highlight);
        }
        for (var _b = 0, _c = this.cloze.blanks; _b < _c.length; _b++) {
            var blank = _c[_b];
            this.createBlankBinding(blank);
        }
    };
    /**
     * Updates all views of highlights and blanks. Can be called when a model
     * was changed
     */
    ClozeController.prototype.refreshCloze = function () {
        for (var _i = 0, _a = this.cloze.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            var highlightRactive = this.highlightRactives[highlight.id];
            highlightRactive.set("object", highlight);
        }
        for (var _b = 0, _c = this.cloze.blanks; _b < _c.length; _b++) {
            var blank = _c[_b];
            var blankRactive = this.blankRactives[blank.id];
            blankRactive.set("blank", blank);
        }
    };
    ClozeController.prototype.serializeCloze = function () {
        return this.cloze.serialize();
    };
    ClozeController.prototype.deserializeCloze = function (data) {
        if (!this.cloze || !data)
            return false;
        this.cloze.deserialize(data);
        this.refreshCloze();
        return true;
    };
    ClozeController.prototype.getCorrectAnswerList = function () {
        if (!this.cloze || this.cloze.blanks.length === 0)
            return [[]];
        var result = [];
        for (var _i = 0, _a = this.cloze.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            result.push(blank.getCorrectAnswers());
        }
        return result;
    };
    return ClozeController;
}());
exports.ClozeController = ClozeController;


/***/ }),

/***/ "./src/scripts/helpers/permutations.ts":
/*!*********************************************!*\
  !*** ./src/scripts/helpers/permutations.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a list of all possible permutations of a list of lists.
 * @param list The list to permute over.
 */
function createPermutations(list) {
    var output = [[]];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var currentSublist = list_1[_i];
        var newOutput = [];
        for (var _a = 0, currentSublist_1 = currentSublist; _a < currentSublist_1.length; _a++) {
            var sublistObject = currentSublist_1[_a];
            for (var _b = 0, output_1 = output; _b < output_1.length; _b++) {
                var o = output_1[_b];
                var newList = o.slice();
                newList.push(sublistObject);
                newOutput.push(newList);
            }
        }
        output = newOutput;
    }
    return output;
}
exports.createPermutations = createPermutations;


/***/ }),

/***/ "./src/scripts/helpers/unwrapper.ts":
/*!******************************************!*\
  !*** ./src/scripts/helpers/unwrapper.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class cleans html strings.
 */
var Unrwapper = /** @class */ (function () {
    function Unrwapper(jquery) {
        this.jquery = jquery;
    }
    /**
     * Cleans html strings by removing the outmost html tag of the string if there is only one tag.
     * Examples:  "<p>my text</p>"" becomes "my text"
     *            "<p>text 1</p><p>text 2</p2>" stays
     * @param html The html string
     * @returns the cleaned html string
     */
    Unrwapper.prototype.unwrap = function (html) {
        var parsed = this.jquery(html);
        if (parsed.length !== 1) {
            return html;
        }
        var unwrapped = parsed.unwrap().html();
        return unwrapped;
    };
    return Unrwapper;
}());
exports.Unrwapper = Unrwapper;


/***/ }),

/***/ "./src/scripts/models/answer.ts":
/*!**************************************!*\
  !*** ./src/scripts/models/answer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = __webpack_require__(/*! ./message */ "./src/scripts/models/message.ts");
var jsdiff = __webpack_require__(/*! diff */ "./node_modules/diff/dist/diff.js");
var Correctness;
(function (Correctness) {
    Correctness[Correctness["ExactMatch"] = 0] = "ExactMatch";
    Correctness[Correctness["CloseMatch"] = 1] = "CloseMatch";
    Correctness[Correctness["NoMatch"] = 2] = "NoMatch";
})(Correctness = exports.Correctness || (exports.Correctness = {}));
var Evaluation = /** @class */ (function () {
    function Evaluation(usedAnswer) {
        this.usedAnswer = usedAnswer;
        this.correctness = Correctness.NoMatch;
        this.characterDifferenceCount = 0;
        this.usedAlternative = "";
    }
    return Evaluation;
}());
exports.Evaluation = Evaluation;
/**
 * Represents a possible answer the content author enters for a blank, e.g. the correct or an incorrect answer.
 */
var Answer = /** @class */ (function () {
    /**
     * @param  {string} answerText - The expected answer. Alternatives are separated by | or ; . (e.g. "Alternative 1|Alternative 2|Alternative 3|..."  -or- "Alternative 1;Alternative 2;Alternative 3")
     * @param  {string} reaction - The tooltip that should be displayed. Format: Tooltip Text;!!-1!! !!+1!!
     */
    function Answer(answerText, reaction, showHighlight, highlight, settings) {
        this.settings = settings;
        this.alternatives = answerText.split(/\//).map(function (s) { return s.trim(); });
        this.message = new message_1.Message(reaction, showHighlight, highlight);
        if (answerText.trim() === "") {
            this.appliesAlways = true;
        }
        else {
            this.appliesAlways = false;
        }
    }
    /**
     * Looks through the object's message ids and stores the references to the highlight object for these ids.
     * @param  {Highlight[]} highlightsBefore
     * @param  {Highlight[]} highlightsAfter
     */
    Answer.prototype.linkHighlightIdToObject = function (highlightsBefore, highlightsAfter) {
        this.message.linkHighlight(highlightsBefore, highlightsAfter);
    };
    /**
     * Turns on the highlights set by the content author for this answer.
     */
    Answer.prototype.activateHighlight = function () {
        if (this.message.highlightedElement)
            this.message.highlightedElement.isHighlighted = true;
    };
    Answer.prototype.cleanString = function (text) {
        text = text.trim();
        return text.replace(/\s{2,}/g, " ");
    };
    /**
     * Looks through the diff and checks how many character change operations are needed to turn one string into the other. Should return the same results as the Levensthein distance.
     * @param  {[{added?:boolean, boolean: removed?, string: value}]} diff - as returned by jsdiff
     * @returns number - the count of changes (replace, add, delete) needed to change the text from one string to the other
     */
    Answer.prototype.getChangesCountFromDiff = function (diff) {
        var totalChangesCount = 0;
        var lastType = "";
        var lastCount = 0;
        for (var _i = 0, diff_1 = diff; _i < diff_1.length; _i++) {
            var element = diff_1[_i];
            if (element.removed) {
                totalChangesCount += element.value.length;
                lastType = "removed";
            }
            else if (element.added) {
                if (lastType === "removed") {
                    if (lastCount < element.value.length) {
                        totalChangesCount += element.value.length - lastCount;
                    }
                }
                else {
                    totalChangesCount += element.value.length;
                }
                lastType = "added";
            }
            else {
                lastType = "same";
            }
            lastCount = element.value.length;
        }
        return totalChangesCount;
    };
    /**
     * Returns how many characters can be wrong to still be counted as a spelling mistake.
     * If spelling mistakes are turned off through the settings, it will return 0.
     * @param  {string} text
     * @returns number
     */
    Answer.prototype.getAcceptableSpellingMistakes = function (text) {
        var acceptableTypoCount;
        if (this.settings.warnSpellingErrors || this.settings.acceptSpellingErrors) // TODO: consider removal
            acceptableTypoCount = Math.floor(text.length / 10) + 1;
        else
            acceptableTypoCount = 0;
        return acceptableTypoCount;
    };
    /**
     * Checks if the text entered by the user in an ettempt is matched by the answer,
     * @param  {string} attempt The text entered by the user.
     * @returns Evaluation indicates if the entered text is matched by the answer.
     */
    Answer.prototype.evaluateAttempt = function (attempt) {
        var cleanedAttempt = this.cleanString(attempt);
        var evaluation = new Evaluation(this);
        for (var _i = 0, _a = this.alternatives; _i < _a.length; _i++) {
            var alternative = _a[_i];
            var cleanedAlternative = this.cleanString(alternative);
            var diff = jsdiff.diffChars(cleanedAlternative, cleanedAttempt, { ignoreCase: !this.settings.caseSensitive });
            var changeCount = this.getChangesCountFromDiff(diff);
            if (changeCount === 0) {
                evaluation.usedAlternative = cleanedAlternative;
                evaluation.correctness = Correctness.ExactMatch;
                return evaluation;
            }
            if (changeCount <= this.getAcceptableSpellingMistakes(alternative)
                && (evaluation.characterDifferenceCount === 0 || changeCount < evaluation.characterDifferenceCount)) {
                evaluation.usedAlternative = cleanedAlternative;
                evaluation.correctness = Correctness.CloseMatch;
                evaluation.characterDifferenceCount = changeCount;
            }
        }
        return evaluation;
    };
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "./src/scripts/models/blank.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/blank.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cloze_element_1 = __webpack_require__(/*! ./cloze-element */ "./src/scripts/models/cloze-element.ts");
var answer_1 = __webpack_require__(/*! ./answer */ "./src/scripts/models/answer.ts");
var enums_1 = __webpack_require__(/*! ./enums */ "./src/scripts/models/enums.ts");
var localization_1 = __webpack_require__(/*! ../services/localization */ "./src/scripts/services/localization.ts");
var helpers_1 = __webpack_require__(/*! ../../lib/helpers */ "./src/lib/helpers.ts");
var jsdiff = __webpack_require__(/*! diff */ "./node_modules/diff/dist/diff.js");
var Blank = /** @class */ (function (_super) {
    __extends(Blank, _super);
    /**
     * Add incorrect answers after initializing the object. Call finishInitialization()
     * when done.
     * @param  {ISettings} settings
     * @param  {string} id
     * @param  {string} correctText?
     * @param  {string} hintText?
     */
    function Blank(settings, localization, jquery, messageService, id) {
        var _this = _super.call(this) || this;
        _this.settings = settings;
        _this.localization = localization;
        _this.jquery = jquery;
        _this.messageService = messageService;
        _this.enteredText = "";
        _this.correctAnswers = new Array();
        _this.incorrectAnswers = new Array();
        _this.choices = new Array();
        _this.type = cloze_element_1.ClozeElementType.Blank;
        _this.id = id;
        return _this;
    }
    /**
    * Call this method when all incorrect answers have been added.
    */
    Blank.prototype.finishInitialization = function () {
        if (this.settings.clozeType === enums_1.ClozeType.Select && this.settings.selectAlternatives === enums_1.SelectAlternatives.Alternatives) {
            this.loadChoicesFromOwnAlternatives();
        }
        this.calculateMinTextLength();
    };
    Blank.prototype.addCorrectAnswer = function (answer) {
        this.correctAnswers.push(answer);
    };
    Blank.prototype.getCorrectAnswers = function () {
        var result = [];
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            result = result.concat(answer.alternatives);
        }
        return result;
    };
    Blank.prototype.setHint = function (message) {
        this.hint = message;
        this.hasHint = this.hint.text !== "";
    };
    /**
     * Adds the incorrect answer to the list.
     * @param text - What the user must enter.
     * @param reaction  - What the user gets displayed when he enteres the text.
     */
    Blank.prototype.addIncorrectAnswer = function (text, reaction, showHighlight, highlight) {
        this.incorrectAnswers.push(new answer_1.Answer(text, reaction, showHighlight, highlight, this.settings));
    };
    /**
     * Returns how many characters the input box must have be to allow for all correct answers.
     */
    // TODO: refactor
    Blank.prototype.calculateMinTextLength = function () {
        var answers = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var correctAnswer = _a[_i];
            answers.push(helpers_1.getLongestString(correctAnswer.alternatives));
        }
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            for (var _b = 0, _c = this.incorrectAnswers; _b < _c.length; _b++) {
                var incorrectAnswer = _c[_b];
                answers.push(helpers_1.getLongestString(incorrectAnswer.alternatives));
            }
        }
        var longestAnswer = helpers_1.getLongestString(answers);
        var l = longestAnswer.length;
        this.minTextLength = Math.max(10, l - (l % 10) + 10);
    };
    /**
     * Creates a list of choices from all alternatives provided by
     * the correct and incorrect answers.
     */
    Blank.prototype.loadChoicesFromOwnAlternatives = function () {
        this.choices = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            for (var _b = 0, _c = answer.alternatives; _b < _c.length; _b++) {
                var alternative = _c[_b];
                this.choices.push(alternative);
            }
        }
        for (var _d = 0, _e = this.incorrectAnswers; _d < _e.length; _d++) {
            var answer = _e[_d];
            for (var _f = 0, _g = answer.alternatives; _f < _g.length; _f++) {
                var alternative = _g[_f];
                this.choices.push(alternative);
            }
        }
        this.choices = helpers_1.shuffleArray(this.choices);
        this.choices.unshift("");
        return this.choices;
    };
    /**
     * Creates a list of choices from all correct answers of the cloze.
     * @param otherBlanks All OTHER blanks in the cloze. (excludes the current one!)
     */
    Blank.prototype.loadChoicesFromOtherBlanks = function (otherBlanks) {
        var ownChoices = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            for (var _b = 0, _c = answer.alternatives; _b < _c.length; _b++) {
                var alternative = _c[_b];
                ownChoices.push(alternative);
            }
        }
        var otherChoices = new Array();
        for (var _d = 0, otherBlanks_1 = otherBlanks; _d < otherBlanks_1.length; _d++) {
            var otherBlank = otherBlanks_1[_d];
            for (var _e = 0, _f = otherBlank.correctAnswers; _e < _f.length; _e++) {
                var answer = _f[_e];
                for (var _g = 0, _h = answer.alternatives; _g < _h.length; _g++) {
                    var alternative = _h[_g];
                    otherChoices.push(alternative);
                }
            }
        }
        otherChoices = helpers_1.shuffleArray(otherChoices);
        var maxChoices = this.settings.selectAlternativeRestriction;
        if (maxChoices === undefined || maxChoices === 0)
            maxChoices = ownChoices.length + otherChoices.length;
        var leftOverChoices = maxChoices - ownChoices.length;
        for (var x = 0; x < leftOverChoices && x < otherChoices.length; x++) {
            if (ownChoices.indexOf(otherChoices[x]) >= 0) {
                leftOverChoices++;
            }
            else {
                ownChoices.push(otherChoices[x]);
            }
        }
        this.choices = helpers_1.shuffleArray(ownChoices);
        this.choices.unshift("");
        return this.choices;
    };
    /**
    * Clears the blank from all entered text and hides popups.
    */
    Blank.prototype.reset = function () {
        this.enteredText = "";
        this.lastCheckedText = "";
        this.removeTooltip();
        this.setAnswerState(enums_1.MessageType.None);
        this.hasPendingFeedback = false;
    };
    /**
     * Sets the blank to a state in which the correct solution if shown if the user
     * hasn't entered a correct one so far.
     */
    Blank.prototype.showSolution = function () {
        this.evaluateAttempt(true);
        this.removeTooltip();
        if (this.isCorrect)
            return;
        this.enteredText = this.correctAnswers[0].alternatives[0];
        this.setAnswerState(enums_1.MessageType.ShowSolution);
    };
    Blank.prototype.onFocussed = function () {
        if (this.hasPendingFeedback) {
            this.evaluateAttempt(false);
        }
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            this.setAnswerState(enums_1.MessageType.None);
            this.lastCheckedText = "";
        }
    };
    Blank.prototype.onDisplayFeedback = function () {
        if (this.hasPendingFeedback) {
            this.evaluateAttempt(false);
        }
    };
    Blank.prototype.displayTooltip = function (message, type, surpressTooltip, id) {
        if (!surpressTooltip)
            this.messageService.show(id ? id : this.id, message, this, type);
        else {
            this.hasPendingFeedback = true;
        }
    };
    Blank.prototype.removeTooltip = function () {
        this.messageService.hide();
    };
    Blank.prototype.setTooltipErrorText = function (message, surpressTooltip) {
        if (message.highlightedElement) {
            this.displayTooltip(message.text, enums_1.MessageType.Error, surpressTooltip, message.highlightedElement.id);
        }
        else {
            this.displayTooltip(message.text, enums_1.MessageType.Error, surpressTooltip);
        }
    };
    Blank.prototype.getSpellingMistakeMessage = function (expectedText, enteredText) {
        var message = this.localization.getTextFromLabel(localization_1.LocalizationLabels.typoMessage);
        var diff = jsdiff.diffChars(expectedText, enteredText, { ignoreCase: !this.settings.caseSensitive });
        var mistakeSpan = this.jquery("<span/>", { "class": "spelling-mistake" });
        for (var index = 0; index < diff.length; index++) {
            var part = diff[index];
            var spanClass = '';
            if (part.removed) {
                if (index === diff.length - 1 || !diff[index + 1].added) {
                    part.value = part.value.replace(/./g, "_");
                    spanClass = 'missing-character';
                }
                else {
                    continue;
                }
            }
            if (part.added) {
                spanClass = 'mistaken-character';
            }
            var span = this.jquery("<span/>", { "class": spanClass, "html": part.value.replace(" ", "&nbsp;") });
            mistakeSpan.append(span);
        }
        message = message.replace("@mistake", this.jquery("<span/>").append(mistakeSpan).html());
        return message;
    };
    /**
     * Checks if the entered text is the correct answer or one of the
     * incorrect ones and gives the user feedback accordingly.
     */
    Blank.prototype.evaluateAttempt = function (surpressTooltips, forceCheck) {
        var _this = this;
        if (!this.hasPendingFeedback && this.lastCheckedText === this.enteredText && !forceCheck)
            return;
        this.lastCheckedText = this.enteredText.toString();
        this.hasPendingFeedback = false;
        this.removeTooltip();
        var exactCorrectMatches = this.correctAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.ExactMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var closeCorrectMatches = this.correctAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var exactIncorrectMatches = this.incorrectAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.ExactMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var closeIncorrectMatches = this.incorrectAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        if (exactCorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Correct);
            if (!this.settings.caseSensitive) {
                this.enteredText = exactCorrectMatches[0].usedAlternative;
            }
            return;
        }
        if (exactIncorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Error);
            this.showErrorTooltip(exactIncorrectMatches[0].usedAnswer, surpressTooltips);
            return;
        }
        if (closeCorrectMatches.length > 0) {
            if (this.settings.warnSpellingErrors) {
                this.displayTooltip(this.getSpellingMistakeMessage(closeCorrectMatches[0].usedAlternative, this.enteredText), enums_1.MessageType.Retry, surpressTooltips);
                this.setAnswerState(enums_1.MessageType.Retry);
                return;
            }
            if (this.settings.acceptSpellingErrors) {
                this.setAnswerState(enums_1.MessageType.Correct);
                this.enteredText = closeCorrectMatches[0].usedAlternative;
                return;
            }
        }
        if (closeIncorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Error);
            this.showErrorTooltip(closeIncorrectMatches[0].usedAnswer, surpressTooltips);
            return;
        }
        var alwaysApplyingAnswers = this.incorrectAnswers.filter(function (a) { return a.appliesAlways; });
        if (alwaysApplyingAnswers && alwaysApplyingAnswers.length > 0) {
            this.showErrorTooltip(alwaysApplyingAnswers[0], surpressTooltips);
        }
        this.setAnswerState(enums_1.MessageType.Error);
    };
    Blank.prototype.onTyped = function () {
        this.setAnswerState(enums_1.MessageType.None);
        this.lastCheckedText = "";
        this.removeTooltip();
    };
    Blank.prototype.lostFocus = function () {
        if (this.messageService.isActive(this)) {
            this.messageService.hide();
        }
    };
    /**
     * Sets the boolean properties isCorrect, is Error and isRetry according to thepassed  messageType.
     * @param messageType
     */
    Blank.prototype.setAnswerState = function (messageType) {
        this.isCorrect = false;
        this.isError = false;
        this.isRetry = false;
        this.isShowingSolution = false;
        switch (messageType) {
            case enums_1.MessageType.Correct:
                this.isCorrect = true;
                break;
            case enums_1.MessageType.Error:
                this.isError = true;
                break;
            case enums_1.MessageType.Retry:
                this.isRetry = true;
                break;
            case enums_1.MessageType.ShowSolution:
                this.isShowingSolution = true;
                break;
        }
    };
    Blank.prototype.showErrorTooltip = function (answer, surpressTooltip) {
        if (answer.message && answer.message.text) {
            this.setTooltipErrorText(answer.message, surpressTooltip);
        }
        if (!surpressTooltip) {
            answer.activateHighlight();
        }
    };
    /**
     * Displays the hint in the tooltip.
     */
    Blank.prototype.showHint = function () {
        if (this.isShowingSolution || this.isCorrect)
            return;
        this.removeTooltip();
        if (this.hint && this.hint.text !== "") {
            this.displayTooltip(this.hint.text, enums_1.MessageType.Retry, false);
            if (this.hint.highlightedElement) {
                this.hint.highlightedElement.isHighlighted = true;
            }
        }
    };
    Blank.prototype.serialize = function () {
        return this.enteredText;
    };
    Blank.prototype.deserialize = function (data) {
        this.enteredText = data;
    };
    return Blank;
}(cloze_element_1.ClozeElement));
exports.Blank = Blank;


/***/ }),

/***/ "./src/scripts/models/cloze-element.ts":
/*!*********************************************!*\
  !*** ./src/scripts/models/cloze-element.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClozeElementType;
(function (ClozeElementType) {
    ClozeElementType[ClozeElementType["Blank"] = 0] = "Blank";
    ClozeElementType[ClozeElementType["Highlight"] = 1] = "Highlight";
})(ClozeElementType = exports.ClozeElementType || (exports.ClozeElementType = {}));
var ClozeElement = /** @class */ (function () {
    function ClozeElement() {
    }
    return ClozeElement;
}());
exports.ClozeElement = ClozeElement;


/***/ }),

/***/ "./src/scripts/models/cloze.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/cloze.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the cloze. Instantiate with static createCloze().
 */
var Cloze = /** @class */ (function () {
    function Cloze() {
    }
    Object.defineProperty(Cloze.prototype, "isSolved", {
        /**
         * Returns true if all blanks were entered correctly.
         * @returns boolean
         */
        get: function () {
            return this.blanks.every(function (b) { return b.isCorrect === true; });
        },
        enumerable: true,
        configurable: true
    });
    Cloze.prototype.hideAllHighlights = function () {
        for (var _i = 0, _a = this.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            highlight.isHighlighted = false;
        }
    };
    Cloze.prototype.reset = function () {
        this.hideAllHighlights();
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            blank.reset();
        }
    };
    Cloze.prototype.showSolutions = function () {
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            blank.showSolution();
        }
        this.hideAllHighlights();
    };
    Cloze.prototype.serialize = function () {
        var cloze = [];
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            cloze.push(blank.serialize());
        }
        return cloze;
    };
    Cloze.prototype.deserialize = function (data) {
        for (var index = 0; index < data.length; index++) {
            if (index >= this.blanks.length)
                return;
            var blank = this.blanks[index];
            blank.deserialize(data[index]);
        }
    };
    return Cloze;
}());
exports.Cloze = Cloze;


/***/ }),

/***/ "./src/scripts/models/enums.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/enums.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Error"] = 0] = "Error";
    MessageType[MessageType["Correct"] = 1] = "Correct";
    MessageType[MessageType["Retry"] = 2] = "Retry";
    MessageType[MessageType["ShowSolution"] = 3] = "ShowSolution";
    MessageType[MessageType["None"] = 4] = "None";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var ClozeType;
(function (ClozeType) {
    ClozeType[ClozeType["Type"] = 0] = "Type";
    ClozeType[ClozeType["Select"] = 1] = "Select";
})(ClozeType = exports.ClozeType || (exports.ClozeType = {}));
var SelectAlternatives;
(function (SelectAlternatives) {
    SelectAlternatives[SelectAlternatives["Alternatives"] = 0] = "Alternatives";
    SelectAlternatives[SelectAlternatives["All"] = 1] = "All";
})(SelectAlternatives = exports.SelectAlternatives || (exports.SelectAlternatives = {}));


/***/ }),

/***/ "./src/scripts/models/highlight.ts":
/*!*****************************************!*\
  !*** ./src/scripts/models/highlight.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cloze_element_1 = __webpack_require__(/*! ./cloze-element */ "./src/scripts/models/cloze-element.ts");
/**
 * Represents a highlight in the cloze.
 */
var Highlight = /** @class */ (function (_super) {
    __extends(Highlight, _super);
    function Highlight(text, id) {
        var _this = _super.call(this) || this;
        _this.type = cloze_element_1.ClozeElementType.Highlight;
        _this.text = text;
        _this.id = id;
        _this.isHighlighted = false;
        return _this;
    }
    return Highlight;
}(cloze_element_1.ClozeElement));
exports.Highlight = Highlight;


/***/ }),

/***/ "./src/scripts/models/message.ts":
/*!***************************************!*\
  !*** ./src/scripts/models/message.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a message that the content author has specified to be a reaction
 * to an user's answer.
 */
var Message = /** @class */ (function () {
    function Message(text, showHighlight, relativeHighlightPosition) {
        var _this = this;
        this.text = text;
        this.relativeHighlightPosition = relativeHighlightPosition;
        this.linkHighlight = function (highlightsBefore, highlightsAfter) {
            if (!_this.relativeHighlightPosition)
                return;
            if (_this.relativeHighlightPosition < 0 && (0 - _this.relativeHighlightPosition - 1) < highlightsBefore.length) {
                _this.highlightedElement = highlightsBefore[0 - _this.relativeHighlightPosition - 1];
            }
            else if (_this.relativeHighlightPosition > 0 && (_this.relativeHighlightPosition - 1 < highlightsAfter.length)) {
                _this.highlightedElement = highlightsAfter[_this.relativeHighlightPosition - 1];
            }
        };
        if (!showHighlight)
            this.relativeHighlightPosition = undefined;
    }
    return Message;
}());
exports.Message = Message;


/***/ }),

/***/ "./src/scripts/models/snippet.ts":
/*!***************************************!*\
  !*** ./src/scripts/models/snippet.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A snippet is a text block that is put into placed marked in feedback texts or hints.
 */
var Snippet = /** @class */ (function () {
    /**
     * Constructs the snippet.
     * @param name The name of the snippet that is used when it is referenced in a feedbacktext (without the snippet marker @)
     * @param text The snippet itself (html)
     */
    function Snippet(name, text) {
        this.name = name;
        this.text = text;
    }
    return Snippet;
}());
exports.Snippet = Snippet;


/***/ }),

/***/ "./src/scripts/models/xapi.ts":
/*!************************************!*\
  !*** ./src/scripts/models/xapi.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var XAPIActivityDefinition = /** @class */ (function () {
    function XAPIActivityDefinition() {
    }
    return XAPIActivityDefinition;
}());
exports.XAPIActivityDefinition = XAPIActivityDefinition;


/***/ }),

/***/ "./src/scripts/services/data-repository.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/data-repository.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blank_loader_1 = __webpack_require__(/*! ../content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var snippet_1 = __webpack_require__(/*! ../models/snippet */ "./src/scripts/models/snippet.ts");
/**
 * Wraps around the h5p config object and provides access to the content.
 */
var H5PDataRepository = /** @class */ (function () {
    function H5PDataRepository(h5pConfigData, settings, localization, jquery, unwrapper) {
        this.h5pConfigData = h5pConfigData;
        this.settings = settings;
        this.localization = localization;
        this.jquery = jquery;
        this.unwrapper = unwrapper;
    }
    /**
     * Returns the blank text of the cloze (as HTML markup).
     */
    H5PDataRepository.prototype.getClozeText = function () {
        return this.h5pConfigData.content.blanksText;
    };
    // TODO: remove or implement
    H5PDataRepository.prototype.getFeedbackText = function () {
        return "";
    };
    H5PDataRepository.prototype.getMedia = function () {
        return this.h5pConfigData.media;
    };
    H5PDataRepository.prototype.getTaskDescription = function () {
        return this.h5pConfigData.content.task;
    };
    H5PDataRepository.prototype.getBlanks = function () {
        var blanks = new Array();
        if (!this.h5pConfigData.content.blanksList)
            return blanks;
        for (var i = 0; i < this.h5pConfigData.content.blanksList.length; i++) {
            var h5pBlank = this.h5pConfigData.content.blanksList[i];
            var correctText = h5pBlank.correctAnswerText;
            if (correctText === "" || correctText === undefined)
                continue;
            var blank = blank_loader_1.BlankLoader.instance.createBlank("cloze" + i, correctText, h5pBlank.hint, h5pBlank.incorrectAnswersList);
            blank.finishInitialization();
            blanks.push(blank);
        }
        return blanks;
    };
    H5PDataRepository.prototype.getSnippets = function () {
        var snippets = new Array();
        if (!this.h5pConfigData.snippets)
            return snippets;
        for (var i = 0; i < this.h5pConfigData.snippets.length; i++) {
            var raw_snippet = this.h5pConfigData.snippets[i];
            var snippet = new snippet_1.Snippet(raw_snippet.snippetName, this.unwrapper.unwrap(raw_snippet.snippetText));
            snippets.push(snippet);
        }
        return snippets;
    };
    return H5PDataRepository;
}());
exports.H5PDataRepository = H5PDataRepository;


/***/ }),

/***/ "./src/scripts/services/localization.ts":
/*!**********************************************!*\
  !*** ./src/scripts/services/localization.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocalizationLabels;
(function (LocalizationLabels) {
    LocalizationLabels["showSolutionButton"] = "showSolutions";
    LocalizationLabels["retryButton"] = "tryAgain";
    LocalizationLabels["checkAllButton"] = "checkAnswer";
    LocalizationLabels["notFilledOutWarning"] = "notFilledOut";
    LocalizationLabels["tipButton"] = "tipLabel";
    LocalizationLabels["typoMessage"] = "spellingMistakeWarning";
    LocalizationLabels["scoreBarLabel"] = "scoreBarLabel";
})(LocalizationLabels = exports.LocalizationLabels || (exports.LocalizationLabels = {}));
var LocalizationStructures;
(function (LocalizationStructures) {
    LocalizationStructures["confirmCheck"] = "confirmCheck";
    LocalizationStructures["confirmRetry"] = "confirmRetry";
    LocalizationStructures["overallFeedback"] = "overallFeedback";
})(LocalizationStructures = exports.LocalizationStructures || (exports.LocalizationStructures = {}));
/**
 * Provides localization services.
 */
var H5PLocalization = /** @class */ (function () {
    function H5PLocalization(h5pConfiguration) {
        this.h5pConfiguration = h5pConfiguration;
    }
    /**
     * Returns the localized string that is represented by the identifier.
     * @param  {string} localizableStringIdentifier
     * @returns string
     */
    H5PLocalization.prototype.getText = function (localizableStringIdentifier) {
        return this.h5pConfiguration[localizableStringIdentifier];
    };
    H5PLocalization.prototype.labelToString = function (label) {
        return label.toString();
    };
    /**
     * Returns the localized string for the label.
     * @param  {LocalizationLabels} label
     * @returns string
     */
    H5PLocalization.prototype.getTextFromLabel = function (label) {
        return this.getText(this.labelToString(label));
    };
    H5PLocalization.prototype.getObjectForStructure = function (structure) {
        return this.h5pConfiguration[structure.toString()];
    };
    return H5PLocalization;
}());
exports.H5PLocalization = H5PLocalization;


/***/ }),

/***/ "./src/scripts/services/message-service.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/message-service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var MessageService = /** @class */ (function () {
    function MessageService(jQuery) {
        this.jQuery = jQuery;
    }
    MessageService.prototype.show = function (elementId, message, blank, type) {
        if (!type)
            type = enums_1.MessageType.None;
        var elements = this.jQuery("#" + elementId);
        if (elements.length > 0) {
            this.speechBubble = new H5P.JoubelSpeechBubble(elements, message);
            this.associatedBlank = blank;
        }
    };
    MessageService.prototype.hide = function () {
        if (this.speechBubble) {
            try {
                this.speechBubble.remove();
            }
            catch (exception) {
            }
        }
        this.speechBubble = undefined;
        this.associatedBlank = undefined;
    };
    MessageService.prototype.isActive = function (blank) {
        return this.associatedBlank === blank;
    };
    return MessageService;
}());
exports.MessageService = MessageService;


/***/ }),

/***/ "./src/scripts/services/settings.ts":
/*!******************************************!*\
  !*** ./src/scripts/services/settings.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var H5PSettings = /** @class */ (function () {
    function H5PSettings(h5pConfigData) {
        this.clozeType = enums_1.ClozeType.Type;
        this.selectAlternatives = enums_1.SelectAlternatives.Alternatives;
        this.selectAlternativeRestriction = 5;
        this.enableRetry = true;
        this.enableSolutionsButton = true;
        this.enableCheckButton = true;
        this.autoCheck = false;
        this.caseSensitive = false;
        this.warnSpellingErrors = true;
        this.acceptSpellingErrors = false;
        this.showSolutionsRequiresInput = true;
        this.confirmCheckDialog = false;
        this.confirmRetryDialog = false;
        this.disableImageZooming = false;
        if (h5pConfigData.behaviour.mode === 'selection') {
            this.clozeType = enums_1.ClozeType.Select;
        }
        else {
            this.clozeType = enums_1.ClozeType.Type;
        }
        if (h5pConfigData.behaviour.selectAlternatives === 'all') {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
        }
        else if (h5pConfigData.behaviour.selectAlternatives === 'alternatives') {
            this.selectAlternatives = enums_1.SelectAlternatives.Alternatives;
        }
        else {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
        }
        this.selectAlternativeRestriction = h5pConfigData.behaviour.selectAlternativeRestriction;
        this.enableRetry = h5pConfigData.behaviour.enableRetry;
        this.enableSolutionsButton = h5pConfigData.behaviour.enableSolutionsButton;
        this.enableCheckButton = h5pConfigData.behaviour.enableCheckButton;
        this.autoCheck = h5pConfigData.behaviour.autoCheck;
        this.caseSensitive = h5pConfigData.behaviour.caseSensitive;
        this.warnSpellingErrors = h5pConfigData.behaviour.spellingErrorBehaviour === "warn";
        this.acceptSpellingErrors = h5pConfigData.behaviour.spellingErrorBehaviour === "accept";
        this.showSolutionsRequiresInput = h5pConfigData.behaviour.showSolutionsRequiresInput;
        this.confirmCheckDialog = h5pConfigData.behaviour.confirmCheckDialog;
        this.confirmRetryDialog = h5pConfigData.behaviour.confirmRetryDialog;
        this.disableImageZooming = h5pConfigData.behaviour.disableImageZooming;
        this.enforceLogic();
    }
    /**
     * This method sets sensible default values for settings hidden with showWhen
     */
    H5PSettings.prototype.enforceLogic = function () {
        if (this.clozeType === enums_1.ClozeType.Type) {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
            this.selectAlternativeRestriction = 0;
        }
        else {
            if (this.selectAlternativeRestriction === enums_1.SelectAlternatives.Alternatives) {
                this.selectAlternativeRestriction = 0;
            }
            this.warnSpellingErrors = false;
            this.acceptSpellingErrors = false;
            this.caseSensitive = false;
        }
    };
    return H5PSettings;
}());
exports.H5PSettings = H5PSettings;


/***/ }),

/***/ "./src/scripts/views/blank.ractive.html":
/*!**********************************************!*\
  !*** ./src/scripts/views/blank.ractive.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span id=\"container{{id}}\" class=\"blank {{#blank.hasPendingFeedback}}has-pending-feedback{{/if}} {{#blank.hasHint}}has-tip{{/if}} {{#blank.isCorrect}}correct{{/if}} {{#blank.isError}}error{{/if}} {{#blank.isRetry}}retry{{/if}} {{#blank.isShowingSolution}}showing-solution{{/if}}\">\r\n  {{#unless isSelectCloze}}\r\n    <span class=\"h5p-input-wrapper\">\r\n      <input id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\" \r\n             size=\"{{blank.minTextLength}}\" on-escape=\"@this.fire('closeMessage', blank)\" \r\n             on-enter=\"@this.fire('checkBlank', blank, 'enter')\" \r\n             on-blur=\"@this.fire('checkBlank', blank, 'blur')\" \r\n             on-focus=\"@this.fire('focus', blank)\"\r\n             on-anykey=\"@this.fire('textTyped', blank)\"\r\n             {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}\r\n             class=\"h5p-text-input\"\r\n             autocomplete=\"off\"\r\n             autocapitalize=\"off\"/>\r\n      {{#blank.hasHint}}\r\n        <span class=\"h5p-tip-container\">\r\n          <button on-click=\"@this.fire('showHint', blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\" {{/if}}>\r\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\r\n          </button>\r\n        </span>\r\n        {{/if}}\r\n    </span>    \r\n  {{/unless}}\r\n  {{#if isSelectCloze}}\r\n      <button class=\"h5p-notification\" on-click=\"@this.fire('displayFeedback', blank)\">\r\n        &#xf05a;\r\n      </button>\r\n      <span class=\"h5p-input-wrapper\">      \r\n      <select id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\"\r\n              on-enter=\"@this.fire('checkBlank', blank, 'enter')\" \r\n              on-change=\"@this.fire('checkBlank', blank, 'change')\"\r\n              on-focus=\"@this.fire('focus', blank)\"              \r\n              {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}} \r\n              size=\"1\"\r\n              class=\"h5p-text-input\">\r\n        {{#each blank.choices}}\r\n          <option>{{this}}</option>\r\n        {{/each}}\r\n      </select>                     \r\n      {{#blank.hasHint}}\r\n        <span class=\"h5p-tip-container\">\r\n          <button on-click=\"@this.fire('showHint', blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}>\r\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\r\n          </button>\r\n        </span>\r\n      {{/if}}     \r\n    </span>\r\n  {{/if}}\r\n</span>";

/***/ }),

/***/ "./src/scripts/views/highlight.ractive.html":
/*!**************************************************!*\
  !*** ./src/scripts/views/highlight.ractive.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span {{#object.isHighlighted}}class=\"highlighted\"{{/if}} id=\"{{object.id}}\">{{{object.text}}}</span>";

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZi9kaXN0L2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvZGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yYWN0aXZlLWV2ZW50cy1rZXlzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnRlbnQtbG9hZGVycy9jbG96ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlcnMvY2xvemUtY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3Blcm11dGF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3Vud3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvYW5zd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9ibGFuay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvY2xvemUtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvY2xvemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2VudW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9oaWdobGlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL3hhcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvZGF0YS1yZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2xvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmlld3MvYmxhbmsucmFjdGl2ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZpZXdzL2hpZ2hsaWdodC5yYWN0aXZlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZTM4MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtQkFBbUIsV0FBVztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LEtBQUssV0FBVyx1QkFBdUIsa0VBQWtFLFVBQVUsMkJBQTJCLG1CQUFtQiw2QkFBNkIscUJBQXFCLHVVQUF1VSwrQ0FBK0MsdUJBQXVCLEtBQUssbUlBQW1JLGdCQUFnQixpSEFBaUgsK0NBQStDLHdCQUF3QixLQUFLLHFYQUFxWCxLQUFLLDJCQUEyQixTQUFTLFFBQVEsbUJBQW1CLG1IQUFtSCw4RkFBOEYsVUFBVSwyQkFBMkIsbUJBQW1CLDhPQUE4TywrQ0FBK0MsdUJBQXVCLEtBQUssc0ZBQXNGLHFCQUFxQix3QkFBd0IsTUFBTSx1QkFBdUIsT0FBTyxvREFBb0QsZ0JBQWdCLGlIQUFpSCwrQ0FBK0MsdUJBQXVCLEtBQUssbVhBQW1YLEtBQUssNEJBQTRCLEtBQUssYTs7Ozs7Ozs7Ozs7QUNBdGhHLDBCQUEwQix1QkFBdUIsdUJBQXVCLEtBQUssUUFBUSxXQUFXLE1BQU0sY0FBYyxTOzs7Ozs7Ozs7Ozs7QUNDcEgsY0FBYyxtQkFBTyxDQUFDLDZNQUF3Rzs7QUFFOUgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJkaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cmllcy9kaXN0LnRzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaDVwLWFkdmFuY2VkLWJsYW5rcyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogVGV4dCAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIHAsXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgI2g1cC1jbG96ZS1jb250YWluZXIgZGl2IHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcclxcbiAgICBtYXJnaW46IDAgMCAxZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgLmg1cC1hZHZhbmNlZC1ibGFua3MgI2g1cC1jbG96ZS1jb250YWluZXIgcCxcXHJcXG4gICAgLmg1cC1hZHZhbmNlZC1ibGFua3MgI2g1cC1jbG96ZS1jb250YWluZXIgZGl2IHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHVuc2V0O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIElucHV0ICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1pbnB1dC13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayAuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBmb250LWZhbWlseTogSDVQRHJvaWRTYW5zLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcclxcbiAgICBwYWRkaW5nOiAwLjE4NzVlbSAxLjVlbSAwLjE4NzVlbSAwLjVlbTtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayBpbnB1dC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA2NHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIHNlbGVjdC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSUUgKyBDaHJvbWUgc3BlY2lmaWMgZml4ZXMgKi9cXHJcXG5cXHJcXG4uaDVwLXRleHQtaW5wdXQ6Oi1tcy1jbGVhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbjpub3QoLmNvcnJlY3QpLmJsYW5rLmhhcy10aXAgYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBTZWxlY3QgbW9kZSAqL1xcclxcblxcclxcbnNlbGVjdC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogU2hvd2luZyBzb2x1dGlvbiBpbnB1dCAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5zaG93aW5nLXNvbHV0aW9uIC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOWRkOGJiO1xcclxcbiAgICBjb2xvcjogIzI1NWM0MTtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogRm9jdXNzZWQgaW5wdXQgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgLmg1cC10ZXh0LWlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIDAgIzdmYjhmZjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjN2ZiOGZmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBDb3JyZWN0bHkgYW5zd2VyZWQgaW5wdXQgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuY29ycmVjdCAuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOWRkOGJiO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWRkOGJiO1xcclxcbiAgICBjb2xvcjogIzI1NWM0MTtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmNvcnJlY3QgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMC41ZW07ICAgIFxcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAwY1xcXCI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXHJcXG4gICAgY29sb3I6ICMyNTVjNDE7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEluY29ycmVjdCBhbnN3ZXJzICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmVycm9yIC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2QwZDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2QwZDA7XFxyXFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmVycm9yIC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDAuNWVtO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXHJcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNwZWxsaW5nIGVycm9ycyAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5yZXRyeSAuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZjk5O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5yZXRyeSAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwLjVlbTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxyXFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBCdXR0b25zICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogSGlnaGxpZ2h0IGluIHNwZWxsaW5nIG1pc3Rha2UgbWFya2VyICovXFxyXFxuXFxyXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3NpbmctY2hhcmFjdGVyLFxcclxcbi5zcGVsbGluZy1taXN0YWtlIC5taXN0YWtlbi1jaGFyYWN0ZXIge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWNvbG9yO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBibGluay1jb2xvcjtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxMztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxMztcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstY29sb3Ige1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGluay1jb2xvciB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgY29sb3I6IHJlZDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzdGFrZW4tY2hhcmFjdGVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEhpZ2hsaWdodHMgaW4gdGV4dCAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oaWdobGlnaHRlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcclxcbiAgICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gICAgbWFyZ2luOiAtMC40ZW07XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWJhY2tncm91bmQtY29sb3I7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWJhY2tncm91bmQtY29sb3I7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBibGluay1iYWNrZ3JvdW5kLWNvbG9yIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmstYmFja2dyb3VuZC1jb2xvciB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBPdGhlcnMgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaW52aXNpYmxlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFRpcHMgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLXRpcC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgcmlnaHQ6IDAuNGVtO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwOm5vdCguY29ycmVjdCk6bm90KC5lcnJvcik6bm90KC5yZXRyeSkgLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMi4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcC5jb3JyZWN0IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlcixcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcC5lcnJvciAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIsXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAucmV0cnkgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXHJcXG4gICAgcmlnaHQ6IDIuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmNvcnJlY3QuaGFzLXRpcCAuaDVwLXRleHQtaW5wdXQsXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmVycm9yLmhhcy10aXAgLmg1cC10ZXh0LWlucHV0LFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5yZXRyeS5oYXMtdGlwIC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDMuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpbXByb3ZlcyBhcHBlYXJhbmNlIG9mIGg1cCB0aXAgc2hhZG93cyAqL1xcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5qb3ViZWwtaWNvbi10aXAtbm9ybWFsIC5oNXAtaWNvbi1zaGFkb3c6YmVmb3JlIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIG9wYWNpdHk6IDAuMTM7XFxyXFxufVxcclxcblxcclxcbi8qIHBlbmRpbmcgZmVlZGJhY2sgbWFya2VyICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rOm5vdCguaGFzLXBlbmRpbmctZmVlZGJhY2spIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTsgICAgXFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcclxcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAzcyBjdWJpYy1iZXppZXIoLjM2LCAuMDcsIC4xOSwgLjk3KSByZXZlcnNlO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDI7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogLTAuNGVtO1xcclxcbiAgICB0b3A6IC0wLjdlbTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDVhXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLmVycm9yLmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uLFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsuZXJyb3IuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxyXFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsucmV0cnkuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24sXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5yZXRyeS5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXHJcXG4gICAgY29sb3I6ICNmZmZmMDA7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDAuNWVtIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hha2Uge1xcclxcbiAgICAyJSxcXHJcXG4gICAgMjAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNCUsXFxyXFxuICAgIDE3JSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDYlLFxcclxcbiAgICAxMCUsXFxyXFxuICAgIDE1JSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgOSUsXFxyXFxuICAgIDEzJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hha2Uge1xcclxcbiAgICAyJSxcXHJcXG4gICAgMjAlIHtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNCUsXFxyXFxuICAgIDE3JSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDYlLFxcclxcbiAgICAxMCUsXFxyXFxuICAgIDE1JSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgOSUsXFxyXFxuICAgIDEzJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKiFcblxuIGRpZmYgdjQuMC4xXG5cblNvZnR3YXJlIExpY2Vuc2UgQWdyZWVtZW50IChCU0QgTGljZW5zZSlcblxuQ29weXJpZ2h0IChjKSAyMDA5LTIwMTUsIEtldmluIERlY2tlciA8a3BkZWNrZXJAZ21haWwuY29tPlxuXG5BbGwgcmlnaHRzIHJlc2VydmVkLlxuXG5SZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIG9mIHRoaXMgc29mdHdhcmUgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXG5hcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZVxuICBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlXG4gIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbiAgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZVxuICBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXJcbiAgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cblxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEtldmluIERlY2tlciBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXG4gIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3JcbiAgd3JpdHRlbiBwZXJtaXNzaW9uLlxuXG5USElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1JcbklNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1JcbkNPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbkRBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbkRBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSXG5JTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUXG5PRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5AbGljZW5zZVxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5EaWZmID0ge30pKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIERpZmYoKSB7fVxuICBEaWZmLnByb3RvdHlwZSA9IHtcbiAgICBkaWZmOiBmdW5jdGlvbiBkaWZmKG9sZFN0cmluZywgbmV3U3RyaW5nKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICB2YXIgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrO1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUodmFsdWUpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIHZhbHVlKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQWxsb3cgc3ViY2xhc3NlcyB0byBtYXNzYWdlIHRoZSBpbnB1dCBwcmlvciB0byBydW5uaW5nXG5cblxuICAgICAgb2xkU3RyaW5nID0gdGhpcy5jYXN0SW5wdXQob2xkU3RyaW5nKTtcbiAgICAgIG5ld1N0cmluZyA9IHRoaXMuY2FzdElucHV0KG5ld1N0cmluZyk7XG4gICAgICBvbGRTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUob2xkU3RyaW5nKSk7XG4gICAgICBuZXdTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUobmV3U3RyaW5nKSk7XG4gICAgICB2YXIgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoO1xuICAgICAgdmFyIGVkaXRMZW5ndGggPSAxO1xuICAgICAgdmFyIG1heEVkaXRMZW5ndGggPSBuZXdMZW4gKyBvbGRMZW47XG4gICAgICB2YXIgYmVzdFBhdGggPSBbe1xuICAgICAgICBuZXdQb3M6IC0xLFxuICAgICAgICBjb21wb25lbnRzOiBbXVxuICAgICAgfV07IC8vIFNlZWQgZWRpdExlbmd0aCA9IDAsIGkuZS4gdGhlIGNvbnRlbnQgc3RhcnRzIHdpdGggdGhlIHNhbWUgdmFsdWVzXG5cbiAgICAgIHZhciBvbGRQb3MgPSB0aGlzLmV4dHJhY3RDb21tb24oYmVzdFBhdGhbMF0sIG5ld1N0cmluZywgb2xkU3RyaW5nLCAwKTtcblxuICAgICAgaWYgKGJlc3RQYXRoWzBdLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIG9sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAgIC8vIElkZW50aXR5IHBlciB0aGUgZXF1YWxpdHkgYW5kIHRva2VuaXplclxuICAgICAgICByZXR1cm4gZG9uZShbe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLmpvaW4obmV3U3RyaW5nKSxcbiAgICAgICAgICBjb3VudDogbmV3U3RyaW5nLmxlbmd0aFxuICAgICAgICB9XSk7XG4gICAgICB9IC8vIE1haW4gd29ya2VyIG1ldGhvZC4gY2hlY2tzIGFsbCBwZXJtdXRhdGlvbnMgb2YgYSBnaXZlbiBlZGl0IGxlbmd0aCBmb3IgYWNjZXB0YW5jZS5cblxuXG4gICAgICBmdW5jdGlvbiBleGVjRWRpdExlbmd0aCgpIHtcbiAgICAgICAgZm9yICh2YXIgZGlhZ29uYWxQYXRoID0gLTEgKiBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggPD0gZWRpdExlbmd0aDsgZGlhZ29uYWxQYXRoICs9IDIpIHtcbiAgICAgICAgICB2YXIgYmFzZVBhdGggPSB2b2lkIDA7XG5cbiAgICAgICAgICB2YXIgYWRkUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCAtIDFdLFxuICAgICAgICAgICAgICByZW1vdmVQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoICsgMV0sXG4gICAgICAgICAgICAgIF9vbGRQb3MgPSAocmVtb3ZlUGF0aCA/IHJlbW92ZVBhdGgubmV3UG9zIDogMCkgLSBkaWFnb25hbFBhdGg7XG5cbiAgICAgICAgICBpZiAoYWRkUGF0aCkge1xuICAgICAgICAgICAgLy8gTm8gb25lIGVsc2UgaXMgZ29pbmcgdG8gYXR0ZW1wdCB0byB1c2UgdGhpcyB2YWx1ZSwgY2xlYXIgaXRcbiAgICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aCAtIDFdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjYW5BZGQgPSBhZGRQYXRoICYmIGFkZFBhdGgubmV3UG9zICsgMSA8IG5ld0xlbixcbiAgICAgICAgICAgICAgY2FuUmVtb3ZlID0gcmVtb3ZlUGF0aCAmJiAwIDw9IF9vbGRQb3MgJiYgX29sZFBvcyA8IG9sZExlbjtcblxuICAgICAgICAgIGlmICghY2FuQWRkICYmICFjYW5SZW1vdmUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgcGF0aCBpcyBhIHRlcm1pbmFsIHRoZW4gcHJ1bmVcbiAgICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IC8vIFNlbGVjdCB0aGUgZGlhZ29uYWwgdGhhdCB3ZSB3YW50IHRvIGJyYW5jaCBmcm9tLiBXZSBzZWxlY3QgdGhlIHByaW9yXG4gICAgICAgICAgLy8gcGF0aCB3aG9zZSBwb3NpdGlvbiBpbiB0aGUgbmV3IHN0cmluZyBpcyB0aGUgZmFydGhlc3QgZnJvbSB0aGUgb3JpZ2luXG4gICAgICAgICAgLy8gYW5kIGRvZXMgbm90IHBhc3MgdGhlIGJvdW5kcyBvZiB0aGUgZGlmZiBncmFwaFxuXG5cbiAgICAgICAgICBpZiAoIWNhbkFkZCB8fCBjYW5SZW1vdmUgJiYgYWRkUGF0aC5uZXdQb3MgPCByZW1vdmVQYXRoLm5ld1Bvcykge1xuICAgICAgICAgICAgYmFzZVBhdGggPSBjbG9uZVBhdGgocmVtb3ZlUGF0aCk7XG4gICAgICAgICAgICBzZWxmLnB1c2hDb21wb25lbnQoYmFzZVBhdGguY29tcG9uZW50cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFzZVBhdGggPSBhZGRQYXRoOyAvLyBObyBuZWVkIHRvIGNsb25lLCB3ZSd2ZSBwdWxsZWQgaXQgZnJvbSB0aGUgbGlzdFxuXG4gICAgICAgICAgICBiYXNlUGF0aC5uZXdQb3MrKztcbiAgICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB0cnVlLCB1bmRlZmluZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9vbGRQb3MgPSBzZWxmLmV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpOyAvLyBJZiB3ZSBoYXZlIGhpdCB0aGUgZW5kIG9mIGJvdGggc3RyaW5ncywgdGhlbiB3ZSBhcmUgZG9uZVxuXG4gICAgICAgICAgaWYgKGJhc2VQYXRoLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIF9vbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAgICAgcmV0dXJuIGRvbmUoYnVpbGRWYWx1ZXMoc2VsZiwgYmFzZVBhdGguY29tcG9uZW50cywgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIHNlbGYudXNlTG9uZ2VzdFRva2VuKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSB0cmFjayB0aGlzIHBhdGggYXMgYSBwb3RlbnRpYWwgY2FuZGlkYXRlIGFuZCBjb250aW51ZS5cbiAgICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSBiYXNlUGF0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0TGVuZ3RoKys7XG4gICAgICB9IC8vIFBlcmZvcm1zIHRoZSBsZW5ndGggb2YgZWRpdCBpdGVyYXRpb24uIElzIGEgYml0IGZ1Z2x5IGFzIHRoaXMgaGFzIHRvIHN1cHBvcnQgdGhlXG4gICAgICAvLyBzeW5jIGFuZCBhc3luYyBtb2RlIHdoaWNoIGlzIG5ldmVyIGZ1bi4gTG9vcHMgb3ZlciBleGVjRWRpdExlbmd0aCB1bnRpbCBhIHZhbHVlXG4gICAgICAvLyBpcyBwcm9kdWNlZC5cblxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgd2Ugd2FudCB0byBiZSBzYWZlLlxuXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgaWYgKGVkaXRMZW5ndGggPiBtYXhFZGl0TGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWV4ZWNFZGl0TGVuZ3RoKCkpIHtcbiAgICAgICAgICAgICAgZXhlYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKGVkaXRMZW5ndGggPD0gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgIHZhciByZXQgPSBleGVjRWRpdExlbmd0aCgpO1xuXG4gICAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHB1c2hDb21wb25lbnQ6IGZ1bmN0aW9uIHB1c2hDb21wb25lbnQoY29tcG9uZW50cywgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICAgIHZhciBsYXN0ID0gY29tcG9uZW50c1tjb21wb25lbnRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdCAmJiBsYXN0LmFkZGVkID09PSBhZGRlZCAmJiBsYXN0LnJlbW92ZWQgPT09IHJlbW92ZWQpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBjbG9uZSBoZXJlIGFzIHRoZSBjb21wb25lbnQgY2xvbmUgb3BlcmF0aW9uIGlzIGp1c3RcbiAgICAgICAgLy8gYXMgc2hhbGxvdyBhcnJheSBjbG9uZVxuICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV0gPSB7XG4gICAgICAgICAgY291bnQ6IGxhc3QuY291bnQgKyAxLFxuICAgICAgICAgIGFkZGVkOiBhZGRlZCxcbiAgICAgICAgICByZW1vdmVkOiByZW1vdmVkXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRzLnB1c2goe1xuICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgIGFkZGVkOiBhZGRlZCxcbiAgICAgICAgICByZW1vdmVkOiByZW1vdmVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXh0cmFjdENvbW1vbjogZnVuY3Rpb24gZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCkge1xuICAgICAgdmFyIG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsXG4gICAgICAgICAgb2xkTGVuID0gb2xkU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBuZXdQb3MgPSBiYXNlUGF0aC5uZXdQb3MsXG4gICAgICAgICAgb2xkUG9zID0gbmV3UG9zIC0gZGlhZ29uYWxQYXRoLFxuICAgICAgICAgIGNvbW1vbkNvdW50ID0gMDtcblxuICAgICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcbiAgICAgICAgbmV3UG9zKys7XG4gICAgICAgIG9sZFBvcysrO1xuICAgICAgICBjb21tb25Db3VudCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tbW9uQ291bnQpIHtcbiAgICAgICAgYmFzZVBhdGguY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgICBjb3VudDogY29tbW9uQ291bnRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGJhc2VQYXRoLm5ld1BvcyA9IG5ld1BvcztcbiAgICAgIHJldHVybiBvbGRQb3M7XG4gICAgfSxcbiAgICBlcXVhbHM6IGZ1bmN0aW9uIGVxdWFscyhsZWZ0LCByaWdodCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXJhdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29tcGFyYXRvcihsZWZ0LCByaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQgfHwgdGhpcy5vcHRpb25zLmlnbm9yZUNhc2UgJiYgbGVmdC50b0xvd2VyQ2FzZSgpID09PSByaWdodC50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlRW1wdHk6IGZ1bmN0aW9uIHJlbW92ZUVtcHR5KGFycmF5KSB7XG4gICAgICB2YXIgcmV0ID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycmF5W2ldKSB7XG4gICAgICAgICAgcmV0LnB1c2goYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBjYXN0SW5wdXQ6IGZ1bmN0aW9uIGNhc3RJbnB1dCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgdG9rZW5pemU6IGZ1bmN0aW9uIHRva2VuaXplKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpO1xuICAgIH0sXG4gICAgam9pbjogZnVuY3Rpb24gam9pbihjaGFycykge1xuICAgICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XG4gICAgdmFyIGNvbXBvbmVudFBvcyA9IDAsXG4gICAgICAgIGNvbXBvbmVudExlbiA9IGNvbXBvbmVudHMubGVuZ3RoLFxuICAgICAgICBuZXdQb3MgPSAwLFxuICAgICAgICBvbGRQb3MgPSAwO1xuXG4gICAgZm9yICg7IGNvbXBvbmVudFBvcyA8IGNvbXBvbmVudExlbjsgY29tcG9uZW50UG9zKyspIHtcbiAgICAgIHZhciBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG5cbiAgICAgIGlmICghY29tcG9uZW50LnJlbW92ZWQpIHtcbiAgICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQgJiYgdXNlTG9uZ2VzdFRva2VuKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gbmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KTtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IG9sZFN0cmluZ1tvbGRQb3MgKyBpXTtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS5sZW5ndGggPiB2YWx1ZS5sZW5ndGggPyBvbGRWYWx1ZSA6IHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbih2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3UG9zICs9IGNvbXBvbmVudC5jb3VudDsgLy8gQ29tbW9uIGNhc2VcblxuICAgICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCkge1xuICAgICAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihvbGRTdHJpbmcuc2xpY2Uob2xkUG9zLCBvbGRQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDsgLy8gUmV2ZXJzZSBhZGQgYW5kIHJlbW92ZSBzbyByZW1vdmVzIGFyZSBvdXRwdXQgZmlyc3QgdG8gbWF0Y2ggY29tbW9uIGNvbnZlbnRpb25cbiAgICAgICAgLy8gVGhlIGRpZmZpbmcgYWxnb3JpdGhtIGlzIHRpZWQgdG8gYWRkIHRoZW4gcmVtb3ZlIG91dHB1dCBhbmQgdGhpcyBpcyB0aGUgc2ltcGxlc3RcbiAgICAgICAgLy8gcm91dGUgdG8gZ2V0IHRoZSBkZXNpcmVkIG91dHB1dCB3aXRoIG1pbmltYWwgb3ZlcmhlYWQuXG5cbiAgICAgICAgaWYgKGNvbXBvbmVudFBvcyAmJiBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdLmFkZGVkKSB7XG4gICAgICAgICAgdmFyIHRtcCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV07XG4gICAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXSA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcbiAgICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvc10gPSB0bXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIFNwZWNpYWwgY2FzZSBoYW5kbGUgZm9yIHdoZW4gb25lIHRlcm1pbmFsIGlzIGlnbm9yZWQgKGkuZS4gd2hpdGVzcGFjZSkuXG4gICAgLy8gRm9yIHRoaXMgY2FzZSB3ZSBtZXJnZSB0aGUgdGVybWluYWwgaW50byB0aGUgcHJpb3Igc3RyaW5nIGFuZCBkcm9wIHRoZSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBpcyBvbmx5IGF2YWlsYWJsZSBmb3Igc3RyaW5nIG1vZGUuXG5cblxuICAgIHZhciBsYXN0Q29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAxXTtcblxuICAgIGlmIChjb21wb25lbnRMZW4gPiAxICYmIHR5cGVvZiBsYXN0Q29tcG9uZW50LnZhbHVlID09PSAnc3RyaW5nJyAmJiAobGFzdENvbXBvbmVudC5hZGRlZCB8fCBsYXN0Q29tcG9uZW50LnJlbW92ZWQpICYmIGRpZmYuZXF1YWxzKCcnLCBsYXN0Q29tcG9uZW50LnZhbHVlKSkge1xuICAgICAgY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAyXS52YWx1ZSArPSBsYXN0Q29tcG9uZW50LnZhbHVlO1xuICAgICAgY29tcG9uZW50cy5wb3AoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5ld1BvczogcGF0aC5uZXdQb3MsXG4gICAgICBjb21wb25lbnRzOiBwYXRoLmNvbXBvbmVudHMuc2xpY2UoMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNoYXJhY3RlckRpZmYgPSBuZXcgRGlmZigpO1xuICBmdW5jdGlvbiBkaWZmQ2hhcnMob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2hhcmFjdGVyRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlT3B0aW9ucyhvcHRpb25zLCBkZWZhdWx0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGVmYXVsdHMuY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucykge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgZGVmYXVsdHNbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgLy9cbiAgLy8gUmFuZ2VzIGFuZCBleGNlcHRpb25zOlxuICAvLyBMYXRpbi0xIFN1cHBsZW1lbnQsIDAwODDigJMwMEZGXG4gIC8vICAtIFUrMDBENyAgw5cgTXVsdGlwbGljYXRpb24gc2lnblxuICAvLyAgLSBVKzAwRjcgIMO3IERpdmlzaW9uIHNpZ25cbiAgLy8gTGF0aW4gRXh0ZW5kZWQtQSwgMDEwMOKAkzAxN0ZcbiAgLy8gTGF0aW4gRXh0ZW5kZWQtQiwgMDE4MOKAkzAyNEZcbiAgLy8gSVBBIEV4dGVuc2lvbnMsIDAyNTDigJMwMkFGXG4gIC8vIFNwYWNpbmcgTW9kaWZpZXIgTGV0dGVycywgMDJCMOKAkzAyRkZcbiAgLy8gIC0gVSswMkM3ICDLhyAmIzcxMTsgIENhcm9uXG4gIC8vICAtIFUrMDJEOCAgy5ggJiM3Mjg7ICBCcmV2ZVxuICAvLyAgLSBVKzAyRDkgIMuZICYjNzI5OyAgRG90IEFib3ZlXG4gIC8vICAtIFUrMDJEQSAgy5ogJiM3MzA7ICBSaW5nIEFib3ZlXG4gIC8vICAtIFUrMDJEQiAgy5sgJiM3MzE7ICBPZ29uZWtcbiAgLy8gIC0gVSswMkRDICDLnCAmIzczMjsgIFNtYWxsIFRpbGRlXG4gIC8vICAtIFUrMDJERCAgy50gJiM3MzM7ICBEb3VibGUgQWN1dGUgQWNjZW50XG4gIC8vIExhdGluIEV4dGVuZGVkIEFkZGl0aW9uYWwsIDFFMDDigJMxRUZGXG5cbiAgdmFyIGV4dGVuZGVkV29yZENoYXJzID0gL15bQS1aYS16XFx4QzAtXFx1MDJDNlxcdTAyQzgtXFx1MDJEN1xcdTAyREUtXFx1MDJGRlxcdTFFMDAtXFx1MUVGRl0rJC87XG4gIHZhciByZVdoaXRlc3BhY2UgPSAvXFxTLztcbiAgdmFyIHdvcmREaWZmID0gbmV3IERpZmYoKTtcblxuICB3b3JkRGlmZi5lcXVhbHMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZUNhc2UpIHtcbiAgICAgIGxlZnQgPSBsZWZ0LnRvTG93ZXJDYXNlKCk7XG4gICAgICByaWdodCA9IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0IHx8IHRoaXMub3B0aW9ucy5pZ25vcmVXaGl0ZXNwYWNlICYmICFyZVdoaXRlc3BhY2UudGVzdChsZWZ0KSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QocmlnaHQpO1xuICB9O1xuXG4gIHdvcmREaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHRva2VucyA9IHZhbHVlLnNwbGl0KC8oXFxzK3xbKClbXFxde30nXCJdfFxcYikvKTsgLy8gSm9pbiB0aGUgYm91bmRhcnkgc3BsaXRzIHRoYXQgd2UgZG8gbm90IGNvbnNpZGVyIHRvIGJlIGJvdW5kYXJpZXMuIFRoaXMgaXMgcHJpbWFyaWx5IHRoZSBleHRlbmRlZCBMYXRpbiBjaGFyYWN0ZXIgc2V0LlxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAvLyBJZiB3ZSBoYXZlIGFuIGVtcHR5IHN0cmluZyBpbiB0aGUgbmV4dCBmaWVsZCBhbmQgd2UgaGF2ZSBvbmx5IHdvcmQgY2hhcnMgYmVmb3JlIGFuZCBhZnRlciwgbWVyZ2VcbiAgICAgIGlmICghdG9rZW5zW2kgKyAxXSAmJiB0b2tlbnNbaSArIDJdICYmIGV4dGVuZGVkV29yZENoYXJzLnRlc3QodG9rZW5zW2ldKSAmJiBleHRlbmRlZFdvcmRDaGFycy50ZXN0KHRva2Vuc1tpICsgMl0pKSB7XG4gICAgICAgIHRva2Vuc1tpXSArPSB0b2tlbnNbaSArIDJdO1xuICAgICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAyKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZldvcmRzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyhvcHRpb25zLCB7XG4gICAgICBpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIHdvcmREaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICB9XG4gIGZ1bmN0aW9uIGRpZmZXb3Jkc1dpdGhTcGFjZShvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgfVxuXG4gIHZhciBsaW5lRGlmZiA9IG5ldyBEaWZmKCk7XG5cbiAgbGluZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgcmV0TGluZXMgPSBbXSxcbiAgICAgICAgbGluZXNBbmROZXdsaW5lcyA9IHZhbHVlLnNwbGl0KC8oXFxufFxcclxcbikvKTsgLy8gSWdub3JlIHRoZSBmaW5hbCBlbXB0eSB0b2tlbiB0aGF0IG9jY3VycyBpZiB0aGUgc3RyaW5nIGVuZHMgd2l0aCBhIG5ldyBsaW5lXG5cbiAgICBpZiAoIWxpbmVzQW5kTmV3bGluZXNbbGluZXNBbmROZXdsaW5lcy5sZW5ndGggLSAxXSkge1xuICAgICAgbGluZXNBbmROZXdsaW5lcy5wb3AoKTtcbiAgICB9IC8vIE1lcmdlIHRoZSBjb250ZW50IGFuZCBsaW5lIHNlcGFyYXRvcnMgaW50byBzaW5nbGUgdG9rZW5zXG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXNBbmROZXdsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpbmUgPSBsaW5lc0FuZE5ld2xpbmVzW2ldO1xuXG4gICAgICBpZiAoaSAlIDIgJiYgIXRoaXMub3B0aW9ucy5uZXdsaW5lSXNUb2tlbikge1xuICAgICAgICByZXRMaW5lc1tyZXRMaW5lcy5sZW5ndGggLSAxXSArPSBsaW5lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVXaGl0ZXNwYWNlKSB7XG4gICAgICAgICAgbGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0TGluZXMucHVzaChsaW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0TGluZXM7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7XG4gIH1cbiAgZnVuY3Rpb24gZGlmZlRyaW1tZWRMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgICB2YXIgb3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyhjYWxsYmFjaywge1xuICAgICAgaWdub3JlV2hpdGVzcGFjZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgfVxuXG4gIHZhciBzZW50ZW5jZURpZmYgPSBuZXcgRGlmZigpO1xuXG4gIHNlbnRlbmNlRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zcGxpdCgvKFxcUy4rP1suIT9dKSg/PVxccyt8JCkvKTtcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmU2VudGVuY2VzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBzZW50ZW5jZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGNzc0RpZmYgPSBuZXcgRGlmZigpO1xuXG4gIGNzc0RpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoLyhbe306OyxdfFxccyspLyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZkNzcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gY3NzRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgICByZXR1cm4gYXJyMjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgfVxuXG4gIHZhciBvYmplY3RQcm90b3R5cGVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBqc29uRGlmZiA9IG5ldyBEaWZmKCk7IC8vIERpc2NyaW1pbmF0ZSBiZXR3ZWVuIHR3byBsaW5lcyBvZiBwcmV0dHktcHJpbnRlZCwgc2VyaWFsaXplZCBKU09OIHdoZXJlIG9uZSBvZiB0aGVtIGhhcyBhXG4gIC8vIGRhbmdsaW5nIGNvbW1hIGFuZCB0aGUgb3RoZXIgZG9lc24ndC4gVHVybnMgb3V0IGluY2x1ZGluZyB0aGUgZGFuZ2xpbmcgY29tbWEgeWllbGRzIHRoZSBuaWNlc3Qgb3V0cHV0OlxuXG4gIGpzb25EaWZmLnVzZUxvbmdlc3RUb2tlbiA9IHRydWU7XG4gIGpzb25EaWZmLnRva2VuaXplID0gbGluZURpZmYudG9rZW5pemU7XG5cbiAganNvbkRpZmYuY2FzdElucHV0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHVuZGVmaW5lZFJlcGxhY2VtZW50ID0gX3RoaXMkb3B0aW9ucy51bmRlZmluZWRSZXBsYWNlbWVudCxcbiAgICAgICAgX3RoaXMkb3B0aW9ucyRzdHJpbmdpID0gX3RoaXMkb3B0aW9ucy5zdHJpbmdpZnlSZXBsYWNlcixcbiAgICAgICAgc3RyaW5naWZ5UmVwbGFjZXIgPSBfdGhpcyRvcHRpb25zJHN0cmluZ2kgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkUmVwbGFjZW1lbnQgOiB2O1xuICAgIH0gOiBfdGhpcyRvcHRpb25zJHN0cmluZ2k7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KGNhbm9uaWNhbGl6ZSh2YWx1ZSwgbnVsbCwgbnVsbCwgc3RyaW5naWZ5UmVwbGFjZXIpLCBzdHJpbmdpZnlSZXBsYWNlciwgJyAgJyk7XG4gIH07XG5cbiAganNvbkRpZmYuZXF1YWxzID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgcmV0dXJuIERpZmYucHJvdG90eXBlLmVxdWFscy5jYWxsKGpzb25EaWZmLCBsZWZ0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpLCByaWdodC5yZXBsYWNlKC8sKFtcXHJcXG5dKS9nLCAnJDEnKSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZkpzb24ob2xkT2JqLCBuZXdPYmosIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ganNvbkRpZmYuZGlmZihvbGRPYmosIG5ld09iaiwgb3B0aW9ucyk7XG4gIH0gLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBwcmVzZW5jZSBvZiBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGJhaWxpbmcgb3V0IHdoZW4gZW5jb3VudGVyaW5nIGFuXG4gIC8vIG9iamVjdCB0aGF0IGlzIGFscmVhZHkgb24gdGhlIFwic3RhY2tcIiBvZiBpdGVtcyBiZWluZyBwcm9jZXNzZWQuIEFjY2VwdHMgYW4gb3B0aW9uYWwgcmVwbGFjZXJcblxuICBmdW5jdGlvbiBjYW5vbmljYWxpemUob2JqLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjaywgcmVwbGFjZXIsIGtleSkge1xuICAgIHN0YWNrID0gc3RhY2sgfHwgW107XG4gICAgcmVwbGFjZW1lbnRTdGFjayA9IHJlcGxhY2VtZW50U3RhY2sgfHwgW107XG5cbiAgICBpZiAocmVwbGFjZXIpIHtcbiAgICAgIG9iaiA9IHJlcGxhY2VyKGtleSwgb2JqKTtcbiAgICB9XG5cbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhY2tbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNhbm9uaWNhbGl6ZWRPYmo7XG5cbiAgICBpZiAoJ1tvYmplY3QgQXJyYXldJyA9PT0gb2JqZWN0UHJvdG90eXBlVG9TdHJpbmcuY2FsbChvYmopKSB7XG4gICAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgICBjYW5vbmljYWxpemVkT2JqID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgICAgcmVwbGFjZW1lbnRTdGFjay5wdXNoKGNhbm9uaWNhbGl6ZWRPYmopO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNhbm9uaWNhbGl6ZWRPYmpbaV0gPSBjYW5vbmljYWxpemUob2JqW2ldLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjaywgcmVwbGFjZXIsIGtleSk7XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgICAgIHJldHVybiBjYW5vbmljYWxpemVkT2JqO1xuICAgIH1cblxuICAgIGlmIChvYmogJiYgb2JqLnRvSlNPTikge1xuICAgICAgb2JqID0gb2JqLnRvSlNPTigpO1xuICAgIH1cblxuICAgIGlmIChfdHlwZW9mKG9iaikgPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkge1xuICAgICAgc3RhY2sucHVzaChvYmopO1xuICAgICAgY2Fub25pY2FsaXplZE9iaiA9IHt9O1xuICAgICAgcmVwbGFjZW1lbnRTdGFjay5wdXNoKGNhbm9uaWNhbGl6ZWRPYmopO1xuXG4gICAgICB2YXIgc29ydGVkS2V5cyA9IFtdLFxuICAgICAgICAgIF9rZXk7XG5cbiAgICAgIGZvciAoX2tleSBpbiBvYmopIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICAgIHNvcnRlZEtleXMucHVzaChfa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzb3J0ZWRLZXlzLnNvcnQoKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHNvcnRlZEtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgX2tleSA9IHNvcnRlZEtleXNbaV07XG4gICAgICAgIGNhbm9uaWNhbGl6ZWRPYmpbX2tleV0gPSBjYW5vbmljYWxpemUob2JqW19rZXldLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjaywgcmVwbGFjZXIsIF9rZXkpO1xuICAgICAgfVxuXG4gICAgICBzdGFjay5wb3AoKTtcbiAgICAgIHJlcGxhY2VtZW50U3RhY2sucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG4gIH1cblxuICB2YXIgYXJyYXlEaWZmID0gbmV3IERpZmYoKTtcblxuICBhcnJheURpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoKTtcbiAgfTtcblxuICBhcnJheURpZmYuam9pbiA9IGFycmF5RGlmZi5yZW1vdmVFbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmQXJyYXlzKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBhcnJheURpZmYuZGlmZihvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VQYXRjaCh1bmlEaWZmKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBkaWZmc3RyID0gdW5pRGlmZi5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgICAgZGVsaW1pdGVycyA9IHVuaURpZmYubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgICBsaXN0ID0gW10sXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZnVuY3Rpb24gcGFyc2VJbmRleCgpIHtcbiAgICAgIHZhciBpbmRleCA9IHt9O1xuICAgICAgbGlzdC5wdXNoKGluZGV4KTsgLy8gUGFyc2UgZGlmZiBtZXRhZGF0YVxuXG4gICAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBsaW5lID0gZGlmZnN0cltpXTsgLy8gRmlsZSBoZWFkZXIgZm91bmQsIGVuZCBwYXJzaW5nIGRpZmYgbWV0YWRhdGFcblxuICAgICAgICBpZiAoL14oXFwtXFwtXFwtfFxcK1xcK1xcK3xAQClcXHMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBEaWZmIGluZGV4XG5cblxuICAgICAgICB2YXIgaGVhZGVyID0gL14oPzpJbmRleDp8ZGlmZig/OiAtciBcXHcrKSspXFxzKyguKz8pXFxzKiQvLmV4ZWMobGluZSk7XG5cbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgIGluZGV4LmluZGV4ID0gaGVhZGVyWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgaSsrO1xuICAgICAgfSAvLyBQYXJzZSBmaWxlIGhlYWRlcnMgaWYgdGhleSBhcmUgZGVmaW5lZC4gVW5pZmllZCBkaWZmIHJlcXVpcmVzIHRoZW0sIGJ1dFxuICAgICAgLy8gdGhlcmUncyBubyB0ZWNobmljYWwgaXNzdWVzIHRvIGhhdmUgYW4gaXNvbGF0ZWQgaHVuayB3aXRob3V0IGZpbGUgaGVhZGVyXG5cblxuICAgICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTtcbiAgICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7IC8vIFBhcnNlIGh1bmtzXG5cbiAgICAgIGluZGV4Lmh1bmtzID0gW107XG5cbiAgICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIF9saW5lID0gZGlmZnN0cltpXTtcblxuICAgICAgICBpZiAoL14oSW5kZXg6fGRpZmZ8XFwtXFwtXFwtfFxcK1xcK1xcKylcXHMvLnRlc3QoX2xpbmUpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoL15AQC8udGVzdChfbGluZSkpIHtcbiAgICAgICAgICBpbmRleC5odW5rcy5wdXNoKHBhcnNlSHVuaygpKTtcbiAgICAgICAgfSBlbHNlIGlmIChfbGluZSAmJiBvcHRpb25zLnN0cmljdCkge1xuICAgICAgICAgIC8vIElnbm9yZSB1bmV4cGVjdGVkIGNvbnRlbnQgdW5sZXNzIGluIHN0cmljdCBtb2RlXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxpbmUgJyArIChpICsgMSkgKyAnICcgKyBKU09OLnN0cmluZ2lmeShfbGluZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gUGFyc2VzIHRoZSAtLS0gYW5kICsrKyBoZWFkZXJzLCBpZiBub25lIGFyZSBmb3VuZCwgbm8gbGluZXNcbiAgICAvLyBhcmUgY29uc3VtZWQuXG5cblxuICAgIGZ1bmN0aW9uIHBhcnNlRmlsZUhlYWRlcihpbmRleCkge1xuICAgICAgdmFyIGZpbGVIZWFkZXIgPSAvXigtLS18XFwrXFwrXFwrKVxccysoLiopJC8uZXhlYyhkaWZmc3RyW2ldKTtcblxuICAgICAgaWYgKGZpbGVIZWFkZXIpIHtcbiAgICAgICAgdmFyIGtleVByZWZpeCA9IGZpbGVIZWFkZXJbMV0gPT09ICctLS0nID8gJ29sZCcgOiAnbmV3JztcbiAgICAgICAgdmFyIGRhdGEgPSBmaWxlSGVhZGVyWzJdLnNwbGl0KCdcXHQnLCAyKTtcbiAgICAgICAgdmFyIGZpbGVOYW1lID0gZGF0YVswXS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xuXG4gICAgICAgIGlmICgvXlwiLipcIiQvLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgICAgZmlsZU5hbWUgPSBmaWxlTmFtZS5zdWJzdHIoMSwgZmlsZU5hbWUubGVuZ3RoIC0gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleFtrZXlQcmVmaXggKyAnRmlsZU5hbWUnXSA9IGZpbGVOYW1lO1xuICAgICAgICBpbmRleFtrZXlQcmVmaXggKyAnSGVhZGVyJ10gPSAoZGF0YVsxXSB8fCAnJykudHJpbSgpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSAvLyBQYXJzZXMgYSBodW5rXG4gICAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgd2UgYXJlIGF0IHRoZSBzdGFydCBvZiBhIGh1bmsuXG5cblxuICAgIGZ1bmN0aW9uIHBhcnNlSHVuaygpIHtcbiAgICAgIHZhciBjaHVua0hlYWRlckluZGV4ID0gaSxcbiAgICAgICAgICBjaHVua0hlYWRlckxpbmUgPSBkaWZmc3RyW2krK10sXG4gICAgICAgICAgY2h1bmtIZWFkZXIgPSBjaHVua0hlYWRlckxpbmUuc3BsaXQoL0BAIC0oXFxkKykoPzosKFxcZCspKT8gXFwrKFxcZCspKD86LChcXGQrKSk/IEBALyk7XG4gICAgICB2YXIgaHVuayA9IHtcbiAgICAgICAgb2xkU3RhcnQ6ICtjaHVua0hlYWRlclsxXSxcbiAgICAgICAgb2xkTGluZXM6ICtjaHVua0hlYWRlclsyXSB8fCAxLFxuICAgICAgICBuZXdTdGFydDogK2NodW5rSGVhZGVyWzNdLFxuICAgICAgICBuZXdMaW5lczogK2NodW5rSGVhZGVyWzRdIHx8IDEsXG4gICAgICAgIGxpbmVzOiBbXSxcbiAgICAgICAgbGluZWRlbGltaXRlcnM6IFtdXG4gICAgICB9O1xuICAgICAgdmFyIGFkZENvdW50ID0gMCxcbiAgICAgICAgICByZW1vdmVDb3VudCA9IDA7XG5cbiAgICAgIGZvciAoOyBpIDwgZGlmZnN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBMaW5lcyBzdGFydGluZyB3aXRoICctLS0nIGNvdWxkIGJlIG1pc3Rha2VuIGZvciB0aGUgXCJyZW1vdmUgbGluZVwiIG9wZXJhdGlvblxuICAgICAgICAvLyBCdXQgdGhleSBjb3VsZCBiZSB0aGUgaGVhZGVyIGZvciB0aGUgbmV4dCBmaWxlLiBUaGVyZWZvcmUgcHJ1bmUgc3VjaCBjYXNlcyBvdXQuXG4gICAgICAgIGlmIChkaWZmc3RyW2ldLmluZGV4T2YoJy0tLSAnKSA9PT0gMCAmJiBpICsgMiA8IGRpZmZzdHIubGVuZ3RoICYmIGRpZmZzdHJbaSArIDFdLmluZGV4T2YoJysrKyAnKSA9PT0gMCAmJiBkaWZmc3RyW2kgKyAyXS5pbmRleE9mKCdAQCcpID09PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3BlcmF0aW9uID0gZGlmZnN0cltpXS5sZW5ndGggPT0gMCAmJiBpICE9IGRpZmZzdHIubGVuZ3RoIC0gMSA/ICcgJyA6IGRpZmZzdHJbaV1bMF07XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnIHx8IG9wZXJhdGlvbiA9PT0gJy0nIHx8IG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgaHVuay5saW5lcy5wdXNoKGRpZmZzdHJbaV0pO1xuICAgICAgICAgIGh1bmsubGluZWRlbGltaXRlcnMucHVzaChkZWxpbWl0ZXJzW2ldIHx8ICdcXG4nKTtcblxuICAgICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnICcpIHtcbiAgICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSAvLyBIYW5kbGUgdGhlIGVtcHR5IGJsb2NrIGNvdW50IGNhc2VcblxuXG4gICAgICBpZiAoIWFkZENvdW50ICYmIGh1bmsubmV3TGluZXMgPT09IDEpIHtcbiAgICAgICAgaHVuay5uZXdMaW5lcyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVtb3ZlQ291bnQgJiYgaHVuay5vbGRMaW5lcyA9PT0gMSkge1xuICAgICAgICBodW5rLm9sZExpbmVzID0gMDtcbiAgICAgIH0gLy8gUGVyZm9ybSBvcHRpb25hbCBzYW5pdHkgY2hlY2tpbmdcblxuXG4gICAgICBpZiAob3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgICAgaWYgKGFkZENvdW50ICE9PSBodW5rLm5ld0xpbmVzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZGRlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVtb3ZlQ291bnQgIT09IGh1bmsub2xkTGluZXMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZWQgbGluZSBjb3VudCBkaWQgbm90IG1hdGNoIGZvciBodW5rIGF0IGxpbmUgJyArIChjaHVua0hlYWRlckluZGV4ICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBodW5rO1xuICAgIH1cblxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgIHBhcnNlSW5kZXgoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIC8vIEl0ZXJhdG9yIHRoYXQgdHJhdmVyc2VzIGluIHRoZSByYW5nZSBvZiBbbWluLCBtYXhdLCBzdGVwcGluZ1xuICAvLyBieSBkaXN0YW5jZSBmcm9tIGEgZ2l2ZW4gc3RhcnQgcG9zaXRpb24uIEkuZS4gZm9yIFswLCA0XSwgd2l0aFxuICAvLyBzdGFydCBvZiAyLCB0aGlzIHdpbGwgaXRlcmF0ZSAyLCAzLCAxLCA0LCAwLlxuICBmdW5jdGlvbiBkaXN0YW5jZUl0ZXJhdG9yIChzdGFydCwgbWluTGluZSwgbWF4TGluZSkge1xuICAgIHZhciB3YW50Rm9yd2FyZCA9IHRydWUsXG4gICAgICAgIGJhY2t3YXJkRXhoYXVzdGVkID0gZmFsc2UsXG4gICAgICAgIGZvcndhcmRFeGhhdXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgbG9jYWxPZmZzZXQgPSAxO1xuICAgIHJldHVybiBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICAgIGlmICh3YW50Rm9yd2FyZCAmJiAhZm9yd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICBpZiAoYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgICBsb2NhbE9mZnNldCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdhbnRGb3J3YXJkID0gZmFsc2U7XG4gICAgICAgIH0gLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZXlvbmQgdGV4dCBsZW5ndGgsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgICAgLy8gYWZ0ZXIgb2Zmc2V0IGxvY2F0aW9uIChvciBkZXNpcmVkIGxvY2F0aW9uIG9uIGZpcnN0IGl0ZXJhdGlvbilcblxuXG4gICAgICAgIGlmIChzdGFydCArIGxvY2FsT2Zmc2V0IDw9IG1heExpbmUpIHtcbiAgICAgICAgICByZXR1cm4gbG9jYWxPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3J3YXJkRXhoYXVzdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICBpZiAoIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgICB3YW50Rm9yd2FyZCA9IHRydWU7XG4gICAgICAgIH0gLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZWZvcmUgdGV4dCBiZWdpbm5pbmcsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgICAgLy8gYmVmb3JlIG9mZnNldCBsb2NhdGlvblxuXG5cbiAgICAgICAgaWYgKG1pbkxpbmUgPD0gc3RhcnQgLSBsb2NhbE9mZnNldCkge1xuICAgICAgICAgIHJldHVybiAtbG9jYWxPZmZzZXQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGJhY2t3YXJkRXhoYXVzdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yKCk7XG4gICAgICB9IC8vIFdlIHRyaWVkIHRvIGZpdCBodW5rIGJlZm9yZSB0ZXh0IGJlZ2lubmluZyBhbmQgYmV5b25kIHRleHQgbGVuZ3RoLCB0aGVuXG4gICAgICAvLyBodW5rIGNhbid0IGZpdCBvbiB0aGUgdGV4dC4gUmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5UGF0Y2goc291cmNlLCB1bmlEaWZmKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgICAgdW5pRGlmZiA9IHBhcnNlUGF0Y2godW5pRGlmZik7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodW5pRGlmZikpIHtcbiAgICAgIGlmICh1bmlEaWZmLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcHBseVBhdGNoIG9ubHkgd29ya3Mgd2l0aCBhIHNpbmdsZSBpbnB1dC4nKTtcbiAgICAgIH1cblxuICAgICAgdW5pRGlmZiA9IHVuaURpZmZbMF07XG4gICAgfSAvLyBBcHBseSB0aGUgZGlmZiB0byB0aGUgaW5wdXRcblxuXG4gICAgdmFyIGxpbmVzID0gc291cmNlLnNwbGl0KC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS8pLFxuICAgICAgICBkZWxpbWl0ZXJzID0gc291cmNlLm1hdGNoKC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS9nKSB8fCBbXSxcbiAgICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuICAgICAgICBjb21wYXJlTGluZSA9IG9wdGlvbnMuY29tcGFyZUxpbmUgfHwgZnVuY3Rpb24gKGxpbmVOdW1iZXIsIGxpbmUsIG9wZXJhdGlvbiwgcGF0Y2hDb250ZW50KSB7XG4gICAgICByZXR1cm4gbGluZSA9PT0gcGF0Y2hDb250ZW50O1xuICAgIH0sXG4gICAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgICBmdXp6RmFjdG9yID0gb3B0aW9ucy5mdXp6RmFjdG9yIHx8IDAsXG4gICAgICAgIG1pbkxpbmUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwLFxuICAgICAgICByZW1vdmVFT0ZOTCxcbiAgICAgICAgYWRkRU9GTkw7XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBodW5rIGV4YWN0bHkgZml0cyBvbiB0aGUgcHJvdmlkZWQgbG9jYXRpb25cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaHVuay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbGluZSA9IGh1bmsubGluZXNbal0sXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lWzBdIDogJyAnLFxuICAgICAgICAgICAgY29udGVudCA9IGxpbmUubGVuZ3RoID4gMCA/IGxpbmUuc3Vic3RyKDEpIDogbGluZTtcblxuICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnICcgfHwgb3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICAvLyBDb250ZXh0IHNhbml0eSBjaGVja1xuICAgICAgICAgIGlmICghY29tcGFyZUxpbmUodG9Qb3MgKyAxLCBsaW5lc1t0b1Bvc10sIG9wZXJhdGlvbiwgY29udGVudCkpIHtcbiAgICAgICAgICAgIGVycm9yQ291bnQrKztcblxuICAgICAgICAgICAgaWYgKGVycm9yQ291bnQgPiBmdXp6RmFjdG9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0b1BvcysrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gU2VhcmNoIGJlc3QgZml0IG9mZnNldHMgZm9yIGVhY2ggaHVuayBiYXNlZCBvbiB0aGUgcHJldmlvdXMgb25lc1xuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaHVuayA9IGh1bmtzW2ldLFxuICAgICAgICAgIG1heExpbmUgPSBsaW5lcy5sZW5ndGggLSBodW5rLm9sZExpbmVzLFxuICAgICAgICAgIGxvY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgICB0b1BvcyA9IG9mZnNldCArIGh1bmsub2xkU3RhcnQgLSAxO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gZGlzdGFuY2VJdGVyYXRvcih0b1BvcywgbWluTGluZSwgbWF4TGluZSk7XG5cbiAgICAgIGZvciAoOyBsb2NhbE9mZnNldCAhPT0gdW5kZWZpbmVkOyBsb2NhbE9mZnNldCA9IGl0ZXJhdG9yKCkpIHtcbiAgICAgICAgaWYgKGh1bmtGaXRzKGh1bmssIHRvUG9zICsgbG9jYWxPZmZzZXQpKSB7XG4gICAgICAgICAgaHVuay5vZmZzZXQgPSBvZmZzZXQgKz0gbG9jYWxPZmZzZXQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxvY2FsT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSAvLyBTZXQgbG93ZXIgdGV4dCBsaW1pdCB0byBlbmQgb2YgdGhlIGN1cnJlbnQgaHVuaywgc28gbmV4dCBvbmVzIGRvbid0IHRyeVxuICAgICAgLy8gdG8gZml0IG92ZXIgYWxyZWFkeSBwYXRjaGVkIHRleHRcblxuXG4gICAgICBtaW5MaW5lID0gaHVuay5vZmZzZXQgKyBodW5rLm9sZFN0YXJ0ICsgaHVuay5vbGRMaW5lcztcbiAgICB9IC8vIEFwcGx5IHBhdGNoIGh1bmtzXG5cblxuICAgIHZhciBkaWZmT2Zmc2V0ID0gMDtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBodW5rcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaHVuayA9IGh1bmtzW19pXSxcbiAgICAgICAgICBfdG9Qb3MgPSBfaHVuay5vbGRTdGFydCArIF9odW5rLm9mZnNldCArIGRpZmZPZmZzZXQgLSAxO1xuXG4gICAgICBkaWZmT2Zmc2V0ICs9IF9odW5rLm5ld0xpbmVzIC0gX2h1bmsub2xkTGluZXM7XG5cbiAgICAgIGlmIChfdG9Qb3MgPCAwKSB7XG4gICAgICAgIC8vIENyZWF0aW5nIGEgbmV3IGZpbGVcbiAgICAgICAgX3RvUG9zID0gMDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfaHVuay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbGluZSA9IF9odW5rLmxpbmVzW2pdLFxuICAgICAgICAgICAgb3BlcmF0aW9uID0gbGluZS5sZW5ndGggPiAwID8gbGluZVswXSA6ICcgJyxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmUsXG4gICAgICAgICAgICBkZWxpbWl0ZXIgPSBfaHVuay5saW5lZGVsaW1pdGVyc1tqXTtcblxuICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnICcpIHtcbiAgICAgICAgICBfdG9Qb3MrKztcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgIGxpbmVzLnNwbGljZShfdG9Qb3MsIDEpO1xuICAgICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKF90b1BvcywgMSk7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIGxpbmVzLnNwbGljZShfdG9Qb3MsIDAsIGNvbnRlbnQpO1xuICAgICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKF90b1BvcywgMCwgZGVsaW1pdGVyKTtcbiAgICAgICAgICBfdG9Qb3MrKztcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICAgIHZhciBwcmV2aW91c09wZXJhdGlvbiA9IF9odW5rLmxpbmVzW2ogLSAxXSA/IF9odW5rLmxpbmVzW2ogLSAxXVswXSA6IG51bGw7XG5cbiAgICAgICAgICBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgICAgcmVtb3ZlRU9GTkwgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgICAgYWRkRU9GTkwgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gSGFuZGxlIEVPRk5MIGluc2VydGlvbi9yZW1vdmFsXG5cblxuICAgIGlmIChyZW1vdmVFT0ZOTCkge1xuICAgICAgd2hpbGUgKCFsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSkge1xuICAgICAgICBsaW5lcy5wb3AoKTtcbiAgICAgICAgZGVsaW1pdGVycy5wb3AoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFkZEVPRk5MKSB7XG4gICAgICBsaW5lcy5wdXNoKCcnKTtcbiAgICAgIGRlbGltaXRlcnMucHVzaCgnXFxuJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IGxpbmVzLmxlbmd0aCAtIDE7IF9rKyspIHtcbiAgICAgIGxpbmVzW19rXSA9IGxpbmVzW19rXSArIGRlbGltaXRlcnNbX2tdO1xuICAgIH1cblxuICAgIHJldHVybiBsaW5lcy5qb2luKCcnKTtcbiAgfSAvLyBXcmFwcGVyIHRoYXQgc3VwcG9ydHMgbXVsdGlwbGUgZmlsZSBwYXRjaGVzIHZpYSBjYWxsYmFja3MuXG5cbiAgZnVuY3Rpb24gYXBwbHlQYXRjaGVzKHVuaURpZmYsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHVuaURpZmYgPT09ICdzdHJpbmcnKSB7XG4gICAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gMDtcblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NJbmRleCgpIHtcbiAgICAgIHZhciBpbmRleCA9IHVuaURpZmZbY3VycmVudEluZGV4KytdO1xuXG4gICAgICBpZiAoIWluZGV4KSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMubG9hZEZpbGUoaW5kZXgsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXBkYXRlZENvbnRlbnQgPSBhcHBseVBhdGNoKGRhdGEsIGluZGV4LCBvcHRpb25zKTtcbiAgICAgICAgb3B0aW9ucy5wYXRjaGVkKGluZGV4LCB1cGRhdGVkQ29udGVudCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKGVycik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJvY2Vzc0luZGV4KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0luZGV4KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9wdGlvbnMuY29udGV4dCA9IDQ7XG4gICAgfVxuXG4gICAgdmFyIGRpZmYgPSBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICAgIGRpZmYucHVzaCh7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBsaW5lczogW11cbiAgICB9KTsgLy8gQXBwZW5kIGFuIGVtcHR5IHZhbHVlIHRvIG1ha2UgY2xlYW51cCBlYXNpZXJcblxuICAgIGZ1bmN0aW9uIGNvbnRleHRMaW5lcyhsaW5lcykge1xuICAgICAgcmV0dXJuIGxpbmVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuICcgJyArIGVudHJ5O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGh1bmtzID0gW107XG4gICAgdmFyIG9sZFJhbmdlU3RhcnQgPSAwLFxuICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gMCxcbiAgICAgICAgY3VyUmFuZ2UgPSBbXSxcbiAgICAgICAgb2xkTGluZSA9IDEsXG4gICAgICAgIG5ld0xpbmUgPSAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBkaWZmW2ldLFxuICAgICAgICAgIGxpbmVzID0gY3VycmVudC5saW5lcyB8fCBjdXJyZW50LnZhbHVlLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpO1xuICAgICAgY3VycmVudC5saW5lcyA9IGxpbmVzO1xuXG4gICAgICBpZiAoY3VycmVudC5hZGRlZCB8fCBjdXJyZW50LnJlbW92ZWQpIHtcbiAgICAgICAgdmFyIF9jdXJSYW5nZTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIHByZXZpb3VzIGNvbnRleHQsIHN0YXJ0IHdpdGggdGhhdFxuICAgICAgICBpZiAoIW9sZFJhbmdlU3RhcnQpIHtcbiAgICAgICAgICB2YXIgcHJldiA9IGRpZmZbaSAtIDFdO1xuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgPSBvbGRMaW5lO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgPSBuZXdMaW5lO1xuXG4gICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgIGN1clJhbmdlID0gb3B0aW9ucy5jb250ZXh0ID4gMCA/IGNvbnRleHRMaW5lcyhwcmV2LmxpbmVzLnNsaWNlKC1vcHRpb25zLmNvbnRleHQpKSA6IFtdO1xuICAgICAgICAgICAgb2xkUmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgICAgICBuZXdSYW5nZVN0YXJ0IC09IGN1clJhbmdlLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gT3V0cHV0IG91ciBjaGFuZ2VzXG5cblxuICAgICAgICAoX2N1clJhbmdlID0gY3VyUmFuZ2UpLnB1c2guYXBwbHkoX2N1clJhbmdlLCBfdG9Db25zdW1hYmxlQXJyYXkobGluZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgIHJldHVybiAoY3VycmVudC5hZGRlZCA/ICcrJyA6ICctJykgKyBlbnRyeTtcbiAgICAgICAgfSkpKTsgLy8gVHJhY2sgdGhlIHVwZGF0ZWQgZmlsZSBwb3NpdGlvblxuXG5cbiAgICAgICAgaWYgKGN1cnJlbnQuYWRkZWQpIHtcbiAgICAgICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWRlbnRpY2FsIGNvbnRleHQgbGluZXMuIFRyYWNrIGxpbmUgY2hhbmdlc1xuICAgICAgICBpZiAob2xkUmFuZ2VTdGFydCkge1xuICAgICAgICAgIC8vIENsb3NlIG91dCBhbnkgY2hhbmdlcyB0aGF0IGhhdmUgYmVlbiBvdXRwdXQgKG9yIGpvaW4gb3ZlcmxhcHBpbmcpXG4gICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQgKiAyICYmIGkgPCBkaWZmLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgIHZhciBfY3VyUmFuZ2UyO1xuXG4gICAgICAgICAgICAvLyBPdmVybGFwcGluZ1xuICAgICAgICAgICAgKF9jdXJSYW5nZTIgPSBjdXJSYW5nZSkucHVzaC5hcHBseShfY3VyUmFuZ2UyLCBfdG9Db25zdW1hYmxlQXJyYXkoY29udGV4dExpbmVzKGxpbmVzKSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgX2N1clJhbmdlMztcblxuICAgICAgICAgICAgLy8gZW5kIHRoZSByYW5nZSBhbmQgb3V0cHV0XG4gICAgICAgICAgICB2YXIgY29udGV4dFNpemUgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIG9wdGlvbnMuY29udGV4dCk7XG5cbiAgICAgICAgICAgIChfY3VyUmFuZ2UzID0gY3VyUmFuZ2UpLnB1c2guYXBwbHkoX2N1clJhbmdlMywgX3RvQ29uc3VtYWJsZUFycmF5KGNvbnRleHRMaW5lcyhsaW5lcy5zbGljZSgwLCBjb250ZXh0U2l6ZSkpKSk7XG5cbiAgICAgICAgICAgIHZhciBodW5rID0ge1xuICAgICAgICAgICAgICBvbGRTdGFydDogb2xkUmFuZ2VTdGFydCxcbiAgICAgICAgICAgICAgb2xkTGluZXM6IG9sZExpbmUgLSBvbGRSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUsXG4gICAgICAgICAgICAgIG5ld1N0YXJ0OiBuZXdSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgICBuZXdMaW5lczogbmV3TGluZSAtIG5ld1JhbmdlU3RhcnQgKyBjb250ZXh0U2l6ZSxcbiAgICAgICAgICAgICAgbGluZXM6IGN1clJhbmdlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoaSA+PSBkaWZmLmxlbmd0aCAtIDIgJiYgbGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCkge1xuICAgICAgICAgICAgICAvLyBFT0YgaXMgaW5zaWRlIHRoaXMgaHVua1xuICAgICAgICAgICAgICB2YXIgb2xkRU9GTmV3bGluZSA9IC9cXG4kLy50ZXN0KG9sZFN0cik7XG4gICAgICAgICAgICAgIHZhciBuZXdFT0ZOZXdsaW5lID0gL1xcbiQvLnRlc3QobmV3U3RyKTtcbiAgICAgICAgICAgICAgdmFyIG5vTmxCZWZvcmVBZGRzID0gbGluZXMubGVuZ3RoID09IDAgJiYgY3VyUmFuZ2UubGVuZ3RoID4gaHVuay5vbGRMaW5lcztcblxuICAgICAgICAgICAgICBpZiAoIW9sZEVPRk5ld2xpbmUgJiYgbm9ObEJlZm9yZUFkZHMpIHtcbiAgICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2U6IG9sZCBoYXMgbm8gZW9sIGFuZCBubyB0cmFpbGluZyBjb250ZXh0OyBuby1ubCBjYW4gZW5kIHVwIGJlZm9yZSBhZGRzXG4gICAgICAgICAgICAgICAgY3VyUmFuZ2Uuc3BsaWNlKGh1bmsub2xkTGluZXMsIDAsICdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghb2xkRU9GTmV3bGluZSAmJiAhbm9ObEJlZm9yZUFkZHMgfHwgIW5ld0VPRk5ld2xpbmUpIHtcbiAgICAgICAgICAgICAgICBjdXJSYW5nZS5wdXNoKCdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBodW5rcy5wdXNoKGh1bmspO1xuICAgICAgICAgICAgb2xkUmFuZ2VTdGFydCA9IDA7XG4gICAgICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICAgIGN1clJhbmdlID0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2xkTGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpZmYubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9sb29wKGkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbGRGaWxlTmFtZTogb2xkRmlsZU5hbWUsXG4gICAgICBuZXdGaWxlTmFtZTogbmV3RmlsZU5hbWUsXG4gICAgICBvbGRIZWFkZXI6IG9sZEhlYWRlcixcbiAgICAgIG5ld0hlYWRlcjogbmV3SGVhZGVyLFxuICAgICAgaHVua3M6IGh1bmtzXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVUd29GaWxlc1BhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gICAgdmFyIGRpZmYgPSBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xuICAgIHZhciByZXQgPSBbXTtcblxuICAgIGlmIChvbGRGaWxlTmFtZSA9PSBuZXdGaWxlTmFtZSkge1xuICAgICAgcmV0LnB1c2goJ0luZGV4OiAnICsgb2xkRmlsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldC5wdXNoKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgcmV0LnB1c2goJy0tLSAnICsgZGlmZi5vbGRGaWxlTmFtZSArICh0eXBlb2YgZGlmZi5vbGRIZWFkZXIgPT09ICd1bmRlZmluZWQnID8gJycgOiAnXFx0JyArIGRpZmYub2xkSGVhZGVyKSk7XG4gICAgcmV0LnB1c2goJysrKyAnICsgZGlmZi5uZXdGaWxlTmFtZSArICh0eXBlb2YgZGlmZi5uZXdIZWFkZXIgPT09ICd1bmRlZmluZWQnID8gJycgOiAnXFx0JyArIGRpZmYubmV3SGVhZGVyKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpZmYuaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBodW5rID0gZGlmZi5odW5rc1tpXTtcbiAgICAgIHJldC5wdXNoKCdAQCAtJyArIGh1bmsub2xkU3RhcnQgKyAnLCcgKyBodW5rLm9sZExpbmVzICsgJyArJyArIGh1bmsubmV3U3RhcnQgKyAnLCcgKyBodW5rLm5ld0xpbmVzICsgJyBAQCcpO1xuICAgICAgcmV0LnB1c2guYXBwbHkocmV0LCBodW5rLmxpbmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0LmpvaW4oJ1xcbicpICsgJ1xcbic7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlUGF0Y2goZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICAgIHJldHVybiBjcmVhdGVUd29GaWxlc1BhdGNoKGZpbGVOYW1lLCBmaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFycmF5RXF1YWwoYSwgYikge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlTdGFydHNXaXRoKGEsIGIpO1xuICB9XG4gIGZ1bmN0aW9uIGFycmF5U3RhcnRzV2l0aChhcnJheSwgc3RhcnQpIHtcbiAgICBpZiAoc3RhcnQubGVuZ3RoID4gYXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0YXJ0W2ldICE9PSBhcnJheVtpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjTGluZUNvdW50KGh1bmspIHtcbiAgICB2YXIgX2NhbGNPbGROZXdMaW5lQ291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGh1bmsubGluZXMpLFxuICAgICAgICBvbGRMaW5lcyA9IF9jYWxjT2xkTmV3TGluZUNvdW50Lm9sZExpbmVzLFxuICAgICAgICBuZXdMaW5lcyA9IF9jYWxjT2xkTmV3TGluZUNvdW50Lm5ld0xpbmVzO1xuXG4gICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGh1bmsub2xkTGluZXMgPSBvbGRMaW5lcztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGh1bmsub2xkTGluZXM7XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGh1bmsubmV3TGluZXMgPSBuZXdMaW5lcztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGh1bmsubmV3TGluZXM7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1lcmdlKG1pbmUsIHRoZWlycywgYmFzZSkge1xuICAgIG1pbmUgPSBsb2FkUGF0Y2gobWluZSwgYmFzZSk7XG4gICAgdGhlaXJzID0gbG9hZFBhdGNoKHRoZWlycywgYmFzZSk7XG4gICAgdmFyIHJldCA9IHt9OyAvLyBGb3IgaW5kZXggd2UganVzdCBsZXQgaXQgcGFzcyB0aHJvdWdoIGFzIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgbmVjZXNzYXJ5IG1lYW5pbmcuXG4gICAgLy8gTGVhdmluZyBzYW5pdHkgY2hlY2tzIG9uIHRoaXMgdG8gdGhlIEFQSSBjb25zdW1lciB0aGF0IG1heSBrbm93IG1vcmUgYWJvdXQgdGhlXG4gICAgLy8gbWVhbmluZyBpbiB0aGVpciBvd24gY29udGV4dC5cblxuICAgIGlmIChtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleCkge1xuICAgICAgcmV0LmluZGV4ID0gbWluZS5pbmRleCB8fCB0aGVpcnMuaW5kZXg7XG4gICAgfVxuXG4gICAgaWYgKG1pbmUubmV3RmlsZU5hbWUgfHwgdGhlaXJzLm5ld0ZpbGVOYW1lKSB7XG4gICAgICBpZiAoIWZpbGVOYW1lQ2hhbmdlZChtaW5lKSkge1xuICAgICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIG91cnMsIHVzZSB0aGVpcnMgKGFuZCBvdXJzIGlmIHRoZWlycyBkb2VzIG5vdCBleGlzdClcbiAgICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gdGhlaXJzLm9sZEZpbGVOYW1lIHx8IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICAgIHJldC5uZXdGaWxlTmFtZSA9IHRoZWlycy5uZXdGaWxlTmFtZSB8fCBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgICByZXQub2xkSGVhZGVyID0gdGhlaXJzLm9sZEhlYWRlciB8fCBtaW5lLm9sZEhlYWRlcjtcbiAgICAgICAgcmV0Lm5ld0hlYWRlciA9IHRoZWlycy5uZXdIZWFkZXIgfHwgbWluZS5uZXdIZWFkZXI7XG4gICAgICB9IGVsc2UgaWYgKCFmaWxlTmFtZUNoYW5nZWQodGhlaXJzKSkge1xuICAgICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIHRoZWlycywgdXNlIG91cnNcbiAgICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gbWluZS5vbGRGaWxlTmFtZTtcbiAgICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gbWluZS5uZXdGaWxlTmFtZTtcbiAgICAgICAgcmV0Lm9sZEhlYWRlciA9IG1pbmUub2xkSGVhZGVyO1xuICAgICAgICByZXQubmV3SGVhZGVyID0gbWluZS5uZXdIZWFkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCb3RoIGNoYW5nZWQuLi4gZmlndXJlIGl0IG91dFxuICAgICAgICByZXQub2xkRmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUub2xkRmlsZU5hbWUsIHRoZWlycy5vbGRGaWxlTmFtZSk7XG4gICAgICAgIHJldC5uZXdGaWxlTmFtZSA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdGaWxlTmFtZSwgdGhlaXJzLm5ld0ZpbGVOYW1lKTtcbiAgICAgICAgcmV0Lm9sZEhlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRIZWFkZXIsIHRoZWlycy5vbGRIZWFkZXIpO1xuICAgICAgICByZXQubmV3SGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0hlYWRlciwgdGhlaXJzLm5ld0hlYWRlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0Lmh1bmtzID0gW107XG4gICAgdmFyIG1pbmVJbmRleCA9IDAsXG4gICAgICAgIHRoZWlyc0luZGV4ID0gMCxcbiAgICAgICAgbWluZU9mZnNldCA9IDAsXG4gICAgICAgIHRoZWlyc09mZnNldCA9IDA7XG5cbiAgICB3aGlsZSAobWluZUluZGV4IDwgbWluZS5odW5rcy5sZW5ndGggfHwgdGhlaXJzSW5kZXggPCB0aGVpcnMuaHVua3MubGVuZ3RoKSB7XG4gICAgICB2YXIgbWluZUN1cnJlbnQgPSBtaW5lLmh1bmtzW21pbmVJbmRleF0gfHwge1xuICAgICAgICBvbGRTdGFydDogSW5maW5pdHlcbiAgICAgIH0sXG4gICAgICAgICAgdGhlaXJzQ3VycmVudCA9IHRoZWlycy5odW5rc1t0aGVpcnNJbmRleF0gfHwge1xuICAgICAgICBvbGRTdGFydDogSW5maW5pdHlcbiAgICAgIH07XG5cbiAgICAgIGlmIChodW5rQmVmb3JlKG1pbmVDdXJyZW50LCB0aGVpcnNDdXJyZW50KSkge1xuICAgICAgICAvLyBUaGlzIHBhdGNoIGRvZXMgbm90IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIG90aGVycywgeWF5LlxuICAgICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsobWluZUN1cnJlbnQsIG1pbmVPZmZzZXQpKTtcbiAgICAgICAgbWluZUluZGV4Kys7XG4gICAgICAgIHRoZWlyc09mZnNldCArPSBtaW5lQ3VycmVudC5uZXdMaW5lcyAtIG1pbmVDdXJyZW50Lm9sZExpbmVzO1xuICAgICAgfSBlbHNlIGlmIChodW5rQmVmb3JlKHRoZWlyc0N1cnJlbnQsIG1pbmVDdXJyZW50KSkge1xuICAgICAgICAvLyBUaGlzIHBhdGNoIGRvZXMgbm90IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIG90aGVycywgeWF5LlxuICAgICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsodGhlaXJzQ3VycmVudCwgdGhlaXJzT2Zmc2V0KSk7XG4gICAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICAgIG1pbmVPZmZzZXQgKz0gdGhlaXJzQ3VycmVudC5uZXdMaW5lcyAtIHRoZWlyc0N1cnJlbnQub2xkTGluZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdmVybGFwLCBtZXJnZSBhcyBiZXN0IHdlIGNhblxuICAgICAgICB2YXIgbWVyZ2VkSHVuayA9IHtcbiAgICAgICAgICBvbGRTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQub2xkU3RhcnQsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQpLFxuICAgICAgICAgIG9sZExpbmVzOiAwLFxuICAgICAgICAgIG5ld1N0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5uZXdTdGFydCArIG1pbmVPZmZzZXQsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQgKyB0aGVpcnNPZmZzZXQpLFxuICAgICAgICAgIG5ld0xpbmVzOiAwLFxuICAgICAgICAgIGxpbmVzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBtZXJnZUxpbmVzKG1lcmdlZEh1bmssIG1pbmVDdXJyZW50Lm9sZFN0YXJ0LCBtaW5lQ3VycmVudC5saW5lcywgdGhlaXJzQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5saW5lcyk7XG4gICAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICAgIG1pbmVJbmRleCsrO1xuICAgICAgICByZXQuaHVua3MucHVzaChtZXJnZWRIdW5rKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZFBhdGNoKHBhcmFtLCBiYXNlKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICgvXkBAL20udGVzdChwYXJhbSkgfHwgL15JbmRleDovbS50ZXN0KHBhcmFtKSkge1xuICAgICAgICByZXR1cm4gcGFyc2VQYXRjaChwYXJhbSlbMF07XG4gICAgICB9XG5cbiAgICAgIGlmICghYmFzZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcHJvdmlkZSBhIGJhc2UgcmVmZXJlbmNlIG9yIHBhc3MgaW4gYSBwYXRjaCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RydWN0dXJlZFBhdGNoKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBiYXNlLCBwYXJhbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsZU5hbWVDaGFuZ2VkKHBhdGNoKSB7XG4gICAgcmV0dXJuIHBhdGNoLm5ld0ZpbGVOYW1lICYmIHBhdGNoLm5ld0ZpbGVOYW1lICE9PSBwYXRjaC5vbGRGaWxlTmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdEZpZWxkKGluZGV4LCBtaW5lLCB0aGVpcnMpIHtcbiAgICBpZiAobWluZSA9PT0gdGhlaXJzKSB7XG4gICAgICByZXR1cm4gbWluZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXguY29uZmxpY3QgPSB0cnVlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluZTogbWluZSxcbiAgICAgICAgdGhlaXJzOiB0aGVpcnNcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaHVua0JlZm9yZSh0ZXN0LCBjaGVjaykge1xuICAgIHJldHVybiB0ZXN0Lm9sZFN0YXJ0IDwgY2hlY2sub2xkU3RhcnQgJiYgdGVzdC5vbGRTdGFydCArIHRlc3Qub2xkTGluZXMgPCBjaGVjay5vbGRTdGFydDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lSHVuayhodW5rLCBvZmZzZXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2xkU3RhcnQ6IGh1bmsub2xkU3RhcnQsXG4gICAgICBvbGRMaW5lczogaHVuay5vbGRMaW5lcyxcbiAgICAgIG5ld1N0YXJ0OiBodW5rLm5ld1N0YXJ0ICsgb2Zmc2V0LFxuICAgICAgbmV3TGluZXM6IGh1bmsubmV3TGluZXMsXG4gICAgICBsaW5lczogaHVuay5saW5lc1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUxpbmVzKGh1bmssIG1pbmVPZmZzZXQsIG1pbmVMaW5lcywgdGhlaXJPZmZzZXQsIHRoZWlyTGluZXMpIHtcbiAgICAvLyBUaGlzIHdpbGwgZ2VuZXJhbGx5IHJlc3VsdCBpbiBhIGNvbmZsaWN0ZWQgaHVuaywgYnV0IHRoZXJlIGFyZSBjYXNlcyB3aGVyZSB0aGUgY29udGV4dFxuICAgIC8vIGlzIHRoZSBvbmx5IG92ZXJsYXAgd2hlcmUgd2UgY2FuIHN1Y2Nlc3NmdWxseSBtZXJnZSB0aGUgY29udGVudCBoZXJlLlxuICAgIHZhciBtaW5lID0ge1xuICAgICAgb2Zmc2V0OiBtaW5lT2Zmc2V0LFxuICAgICAgbGluZXM6IG1pbmVMaW5lcyxcbiAgICAgIGluZGV4OiAwXG4gICAgfSxcbiAgICAgICAgdGhlaXIgPSB7XG4gICAgICBvZmZzZXQ6IHRoZWlyT2Zmc2V0LFxuICAgICAgbGluZXM6IHRoZWlyTGluZXMsXG4gICAgICBpbmRleDogMFxuICAgIH07IC8vIEhhbmRsZSBhbnkgbGVhZGluZyBjb250ZW50XG5cbiAgICBpbnNlcnRMZWFkaW5nKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICBpbnNlcnRMZWFkaW5nKGh1bmssIHRoZWlyLCBtaW5lKTsgLy8gTm93IGluIHRoZSBvdmVybGFwIGNvbnRlbnQuIFNjYW4gdGhyb3VnaCBhbmQgc2VsZWN0IHRoZSBiZXN0IGNoYW5nZXMgZnJvbSBlYWNoLlxuXG4gICAgd2hpbGUgKG1pbmUuaW5kZXggPCBtaW5lLmxpbmVzLmxlbmd0aCAmJiB0aGVpci5pbmRleCA8IHRoZWlyLmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIG1pbmVDdXJyZW50ID0gbWluZS5saW5lc1ttaW5lLmluZGV4XSxcbiAgICAgICAgICB0aGVpckN1cnJlbnQgPSB0aGVpci5saW5lc1t0aGVpci5pbmRleF07XG5cbiAgICAgIGlmICgobWluZUN1cnJlbnRbMF0gPT09ICctJyB8fCBtaW5lQ3VycmVudFswXSA9PT0gJysnKSAmJiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgfHwgdGhlaXJDdXJyZW50WzBdID09PSAnKycpKSB7XG4gICAgICAgIC8vIEJvdGggbW9kaWZpZWQgLi4uXG4gICAgICAgIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnKycgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgICAgdmFyIF9odW5rJGxpbmVzO1xuXG4gICAgICAgIC8vIE1pbmUgaW5zZXJ0ZWRcbiAgICAgICAgKF9odW5rJGxpbmVzID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lcywgX3RvQ29uc3VtYWJsZUFycmF5KGNvbGxlY3RDaGFuZ2UobWluZSkpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnKycgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgICB2YXIgX2h1bmskbGluZXMyO1xuXG4gICAgICAgIC8vIFRoZWlycyBpbnNlcnRlZFxuICAgICAgICAoX2h1bmskbGluZXMyID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczIsIF90b0NvbnN1bWFibGVBcnJheShjb2xsZWN0Q2hhbmdlKHRoZWlyKSkpO1xuICAgICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJy0nICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAgIC8vIE1pbmUgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgICAgcmVtb3ZhbChodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgICAgLy8gVGhlaXIgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgICAgcmVtb3ZhbChodW5rLCB0aGVpciwgbWluZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50ID09PSB0aGVpckN1cnJlbnQpIHtcbiAgICAgICAgLy8gQ29udGV4dCBpZGVudGl0eVxuICAgICAgICBodW5rLmxpbmVzLnB1c2gobWluZUN1cnJlbnQpO1xuICAgICAgICBtaW5lLmluZGV4Kys7XG4gICAgICAgIHRoZWlyLmluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDb250ZXh0IG1pc21hdGNoXG4gICAgICAgIGNvbmZsaWN0KGh1bmssIGNvbGxlY3RDaGFuZ2UobWluZSksIGNvbGxlY3RDaGFuZ2UodGhlaXIpKTtcbiAgICAgIH1cbiAgICB9IC8vIE5vdyBwdXNoIGFueXRoaW5nIHRoYXQgbWF5IGJlIHJlbWFpbmluZ1xuXG5cbiAgICBpbnNlcnRUcmFpbGluZyhodW5rLCBtaW5lKTtcbiAgICBpbnNlcnRUcmFpbGluZyhodW5rLCB0aGVpcik7XG4gICAgY2FsY0xpbmVDb3VudChodW5rKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcikge1xuICAgIHZhciBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKHRoZWlyKTtcblxuICAgIGlmIChhbGxSZW1vdmVzKG15Q2hhbmdlcykgJiYgYWxsUmVtb3Zlcyh0aGVpckNoYW5nZXMpKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHJlbW92ZSBjaGFuZ2VzIHRoYXQgYXJlIHN1cGVyc2V0cyBvZiBvbmUgYW5vdGhlclxuICAgICAgaWYgKGFycmF5U3RhcnRzV2l0aChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcykgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KHRoZWlyLCBteUNoYW5nZXMsIG15Q2hhbmdlcy5sZW5ndGggLSB0aGVpckNoYW5nZXMubGVuZ3RoKSkge1xuICAgICAgICB2YXIgX2h1bmskbGluZXMzO1xuXG4gICAgICAgIChfaHVuayRsaW5lczMgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzMywgX3RvQ29uc3VtYWJsZUFycmF5KG15Q2hhbmdlcykpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoYXJyYXlTdGFydHNXaXRoKHRoZWlyQ2hhbmdlcywgbXlDaGFuZ2VzKSAmJiBza2lwUmVtb3ZlU3VwZXJzZXQobWluZSwgdGhlaXJDaGFuZ2VzLCB0aGVpckNoYW5nZXMubGVuZ3RoIC0gbXlDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIF9odW5rJGxpbmVzNDtcblxuICAgICAgICAoX2h1bmskbGluZXM0ID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczQsIF90b0NvbnN1bWFibGVBcnJheSh0aGVpckNoYW5nZXMpKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcnJheUVxdWFsKG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKSkge1xuICAgICAgdmFyIF9odW5rJGxpbmVzNTtcblxuICAgICAgKF9odW5rJGxpbmVzNSA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXM1LCBfdG9Db25zdW1hYmxlQXJyYXkobXlDaGFuZ2VzKSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25mbGljdChodW5rLCBteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyLCBzd2FwKSB7XG4gICAgdmFyIG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDb250ZXh0KHRoZWlyLCBteUNoYW5nZXMpO1xuXG4gICAgaWYgKHRoZWlyQ2hhbmdlcy5tZXJnZWQpIHtcbiAgICAgIHZhciBfaHVuayRsaW5lczY7XG5cbiAgICAgIChfaHVuayRsaW5lczYgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzNiwgX3RvQ29uc3VtYWJsZUFycmF5KHRoZWlyQ2hhbmdlcy5tZXJnZWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmxpY3QoaHVuaywgc3dhcCA/IHRoZWlyQ2hhbmdlcyA6IG15Q2hhbmdlcywgc3dhcCA/IG15Q2hhbmdlcyA6IHRoZWlyQ2hhbmdlcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29uZmxpY3QoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgICBodW5rLmNvbmZsaWN0ID0gdHJ1ZTtcbiAgICBodW5rLmxpbmVzLnB1c2goe1xuICAgICAgY29uZmxpY3Q6IHRydWUsXG4gICAgICBtaW5lOiBtaW5lLFxuICAgICAgdGhlaXJzOiB0aGVpclxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0TGVhZGluZyhodW5rLCBpbnNlcnQsIHRoZWlyKSB7XG4gICAgd2hpbGUgKGluc2VydC5vZmZzZXQgPCB0aGVpci5vZmZzZXQgJiYgaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xuICAgICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICAgICAgaW5zZXJ0Lm9mZnNldCsrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydFRyYWlsaW5nKGh1bmssIGluc2VydCkge1xuICAgIHdoaWxlIChpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29sbGVjdENoYW5nZShzdGF0ZSkge1xuICAgIHZhciByZXQgPSBbXSxcbiAgICAgICAgb3BlcmF0aW9uID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdWzBdO1xuXG4gICAgd2hpbGUgKHN0YXRlLmluZGV4IDwgc3RhdGUubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbGluZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XTsgLy8gR3JvdXAgYWRkaXRpb25zIHRoYXQgYXJlIGltbWVkaWF0ZWx5IGFmdGVyIHN1YnRyYWN0aW9ucyBhbmQgdHJlYXQgdGhlbSBhcyBvbmUgXCJhdG9taWNcIiBtb2RpZnkgY2hhbmdlLlxuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnLScgJiYgbGluZVswXSA9PT0gJysnKSB7XG4gICAgICAgIG9wZXJhdGlvbiA9ICcrJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gbGluZVswXSkge1xuICAgICAgICByZXQucHVzaChsaW5lKTtcbiAgICAgICAgc3RhdGUuaW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBjb2xsZWN0Q29udGV4dChzdGF0ZSwgbWF0Y2hDaGFuZ2VzKSB7XG4gICAgdmFyIGNoYW5nZXMgPSBbXSxcbiAgICAgICAgbWVyZ2VkID0gW10sXG4gICAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgICBjb250ZXh0Q2hhbmdlcyA9IGZhbHNlLFxuICAgICAgICBjb25mbGljdGVkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGggJiYgc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF0sXG4gICAgICAgICAgbWF0Y2ggPSBtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF07IC8vIE9uY2Ugd2UndmUgaGl0IG91ciBhZGQsIHRoZW4gd2UgYXJlIGRvbmVcblxuICAgICAgaWYgKG1hdGNoWzBdID09PSAnKycpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHRDaGFuZ2VzID0gY29udGV4dENoYW5nZXMgfHwgY2hhbmdlWzBdICE9PSAnICc7XG4gICAgICBtZXJnZWQucHVzaChtYXRjaCk7XG4gICAgICBtYXRjaEluZGV4Kys7IC8vIENvbnN1bWUgYW55IGFkZGl0aW9ucyBpbiB0aGUgb3RoZXIgYmxvY2sgYXMgYSBjb25mbGljdCB0byBhdHRlbXB0XG4gICAgICAvLyB0byBwdWxsIGluIHRoZSByZW1haW5pbmcgY29udGV4dCBhZnRlciB0aGlzXG5cbiAgICAgIGlmIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgICBjb25mbGljdGVkID0gdHJ1ZTtcblxuICAgICAgICB3aGlsZSAoY2hhbmdlWzBdID09PSAnKycpIHtcbiAgICAgICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICBjaGFuZ2UgPSBzdGF0ZS5saW5lc1srK3N0YXRlLmluZGV4XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2guc3Vic3RyKDEpID09PSBjaGFuZ2Uuc3Vic3RyKDEpKSB7XG4gICAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICBzdGF0ZS5pbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF0gfHwgJycpWzBdID09PSAnKycgJiYgY29udGV4dENoYW5nZXMpIHtcbiAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb25mbGljdGVkKSB7XG4gICAgICByZXR1cm4gY2hhbmdlcztcbiAgICB9XG5cbiAgICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZC5wdXNoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4KytdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWVyZ2VkOiBtZXJnZWQsXG4gICAgICBjaGFuZ2VzOiBjaGFuZ2VzXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFJlbW92ZXMoY2hhbmdlcykge1xuICAgIHJldHVybiBjaGFuZ2VzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY2hhbmdlKSB7XG4gICAgICByZXR1cm4gcHJldiAmJiBjaGFuZ2VbMF0gPT09ICctJztcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBSZW1vdmVTdXBlcnNldChzdGF0ZSwgcmVtb3ZlQ2hhbmdlcywgZGVsdGEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlbHRhOyBpKyspIHtcbiAgICAgIHZhciBjaGFuZ2VDb250ZW50ID0gcmVtb3ZlQ2hhbmdlc1tyZW1vdmVDaGFuZ2VzLmxlbmd0aCAtIGRlbHRhICsgaV0uc3Vic3RyKDEpO1xuXG4gICAgICBpZiAoc3RhdGUubGluZXNbc3RhdGUuaW5kZXggKyBpXSAhPT0gJyAnICsgY2hhbmdlQ29udGVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUuaW5kZXggKz0gZGVsdGE7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmVzKSB7XG4gICAgdmFyIG9sZExpbmVzID0gMDtcbiAgICB2YXIgbmV3TGluZXMgPSAwO1xuICAgIGxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgIGlmICh0eXBlb2YgbGluZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIG15Q291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUubWluZSk7XG4gICAgICAgIHZhciB0aGVpckNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lLnRoZWlycyk7XG5cbiAgICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAobXlDb3VudC5vbGRMaW5lcyA9PT0gdGhlaXJDb3VudC5vbGRMaW5lcykge1xuICAgICAgICAgICAgb2xkTGluZXMgKz0gbXlDb3VudC5vbGRMaW5lcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2xkTGluZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAobXlDb3VudC5uZXdMaW5lcyA9PT0gdGhlaXJDb3VudC5uZXdMaW5lcykge1xuICAgICAgICAgICAgbmV3TGluZXMgKz0gbXlDb3VudC5uZXdMaW5lcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3TGluZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCAmJiAobGluZVswXSA9PT0gJysnIHx8IGxpbmVbMF0gPT09ICcgJykpIHtcbiAgICAgICAgICBuZXdMaW5lcysrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQgJiYgKGxpbmVbMF0gPT09ICctJyB8fCBsaW5lWzBdID09PSAnICcpKSB7XG4gICAgICAgICAgb2xkTGluZXMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBvbGRMaW5lczogb2xkTGluZXMsXG4gICAgICBuZXdMaW5lczogbmV3TGluZXNcbiAgICB9O1xuICB9XG5cbiAgLy8gU2VlOiBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLWRpZmYtbWF0Y2gtcGF0Y2gvd2lraS9BUElcbiAgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb0RNUChjaGFuZ2VzKSB7XG4gICAgdmFyIHJldCA9IFtdLFxuICAgICAgICBjaGFuZ2UsXG4gICAgICAgIG9wZXJhdGlvbjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhbmdlID0gY2hhbmdlc1tpXTtcblxuICAgICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgICBvcGVyYXRpb24gPSAxO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgICBvcGVyYXRpb24gPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZXJhdGlvbiA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKFtvcGVyYXRpb24sIGNoYW5nZS52YWx1ZV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0Q2hhbmdlc1RvWE1MKGNoYW5nZXMpIHtcbiAgICB2YXIgcmV0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuXG4gICAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICAgIHJldC5wdXNoKCc8aW5zPicpO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgICByZXQucHVzaCgnPGRlbD4nKTtcbiAgICAgIH1cblxuICAgICAgcmV0LnB1c2goZXNjYXBlSFRNTChjaGFuZ2UudmFsdWUpKTtcblxuICAgICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgICByZXQucHVzaCgnPC9pbnM+Jyk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICAgIHJldC5wdXNoKCc8L2RlbD4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0LmpvaW4oJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXNjYXBlSFRNTChzKSB7XG4gICAgdmFyIG4gPSBzO1xuICAgIG4gPSBuLnJlcGxhY2UoLyYvZywgJyZhbXA7Jyk7XG4gICAgbiA9IG4ucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xuICAgIG4gPSBuLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgICBuID0gbi5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgcmV0dXJuIG47XG4gIH1cblxuICAvKiBTZWUgTElDRU5TRSBmaWxlIGZvciB0ZXJtcyBvZiB1c2UgKi9cblxuICBleHBvcnRzLkRpZmYgPSBEaWZmO1xuICBleHBvcnRzLmRpZmZDaGFycyA9IGRpZmZDaGFycztcbiAgZXhwb3J0cy5kaWZmV29yZHMgPSBkaWZmV29yZHM7XG4gIGV4cG9ydHMuZGlmZldvcmRzV2l0aFNwYWNlID0gZGlmZldvcmRzV2l0aFNwYWNlO1xuICBleHBvcnRzLmRpZmZMaW5lcyA9IGRpZmZMaW5lcztcbiAgZXhwb3J0cy5kaWZmVHJpbW1lZExpbmVzID0gZGlmZlRyaW1tZWRMaW5lcztcbiAgZXhwb3J0cy5kaWZmU2VudGVuY2VzID0gZGlmZlNlbnRlbmNlcztcbiAgZXhwb3J0cy5kaWZmQ3NzID0gZGlmZkNzcztcbiAgZXhwb3J0cy5kaWZmSnNvbiA9IGRpZmZKc29uO1xuICBleHBvcnRzLmRpZmZBcnJheXMgPSBkaWZmQXJyYXlzO1xuICBleHBvcnRzLnN0cnVjdHVyZWRQYXRjaCA9IHN0cnVjdHVyZWRQYXRjaDtcbiAgZXhwb3J0cy5jcmVhdGVUd29GaWxlc1BhdGNoID0gY3JlYXRlVHdvRmlsZXNQYXRjaDtcbiAgZXhwb3J0cy5jcmVhdGVQYXRjaCA9IGNyZWF0ZVBhdGNoO1xuICBleHBvcnRzLmFwcGx5UGF0Y2ggPSBhcHBseVBhdGNoO1xuICBleHBvcnRzLmFwcGx5UGF0Y2hlcyA9IGFwcGx5UGF0Y2hlcztcbiAgZXhwb3J0cy5wYXJzZVBhdGNoID0gcGFyc2VQYXRjaDtcbiAgZXhwb3J0cy5tZXJnZSA9IG1lcmdlO1xuICBleHBvcnRzLmNvbnZlcnRDaGFuZ2VzVG9ETVAgPSBjb252ZXJ0Q2hhbmdlc1RvRE1QO1xuICBleHBvcnRzLmNvbnZlcnRDaGFuZ2VzVG9YTUwgPSBjb252ZXJ0Q2hhbmdlc1RvWE1MO1xuICBleHBvcnRzLmNhbm9uaWNhbGl6ZSA9IGNhbm9uaWNhbGl6ZTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBBZHZhbmNlZEJsYW5rcyBmcm9tICcuLi9zY3JpcHRzL2FwcCc7XHJcblxyXG4vLyBMb2FkIGxpYnJhcnlcclxuSDVQID0gSDVQIHx8IHt9O1xyXG5INVAuQWR2YW5jZWRCbGFua3MgPSBBZHZhbmNlZEJsYW5rczsiLCJleHBvcnQgZnVuY3Rpb24gZ2V0TG9uZ2VzdFN0cmluZyhzdHJpbmdzOiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHN0cmluZ3MucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50Lmxlbmd0aCA+IHByZXYubGVuZ3RoID8gY3VycmVudCA6IHByZXYsIFwiXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5OiBhbnlbXSkge1xyXG4gIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcclxuICAgIGFycmF5W2ldID0gYXJyYXlbal07XHJcbiAgICBhcnJheVtqXSA9IHRlbXA7XHJcbiAgfVxyXG4gIHJldHVybiBhcnJheTtcclxufSIsIi8vIFRPRE8gY2FuIHdlIGp1c3QgZGVjbGFyZSB0aGUga2V5ZG93bkhhbmRsZXIgb25jZT8gdXNpbmcgYHRoaXNgP1xyXG5mdW5jdGlvbiBtYWtlS2V5RGVmaW5pdGlvbihjb2RlPzogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIChub2RlLCBmaXJlKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihldmVudCkge1xyXG4gICAgICB2YXIgd2hpY2ggPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xyXG5cclxuICAgICAgaWYgKGNvZGUgJiYgd2hpY2ggPT09IGNvZGUpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBmaXJlKHtcclxuICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICBvcmlnaW5hbDogZXZlbnRcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghY29kZSAmJiBbMTYsIDE3LCAxOCwgMzUsIDM2LCAxMywgOSwgMjcsIDMyLCAzNywgMzksIDQwLCAzOF0uZmlsdGVyKGMgPT4gYyA9PT0gd2hpY2gpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGZpcmUoe1xyXG4gICAgICAgICAgbm9kZSxcclxuICAgICAgICAgIG9yaWdpbmFsOiBldmVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0ZWFyZG93bigpIHtcclxuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnRlciA9IG1ha2VLZXlEZWZpbml0aW9uKDEzKTtcclxuZXhwb3J0IGNvbnN0IHRhYiA9IG1ha2VLZXlEZWZpbml0aW9uKDkpO1xyXG5leHBvcnQgY29uc3QgZXNjYXBlID0gbWFrZUtleURlZmluaXRpb24oMjcpO1xyXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBtYWtlS2V5RGVmaW5pdGlvbigzMik7XHJcblxyXG5leHBvcnQgY29uc3QgbGVmdGFycm93ID0gbWFrZUtleURlZmluaXRpb24oMzcpO1xyXG5leHBvcnQgY29uc3QgcmlnaHRhcnJvdyA9IG1ha2VLZXlEZWZpbml0aW9uKDM5KTtcclxuZXhwb3J0IGNvbnN0IGRvd25hcnJvdyA9IG1ha2VLZXlEZWZpbml0aW9uKDQwKTtcclxuZXhwb3J0IGNvbnN0IHVwYXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzOCk7XHJcblxyXG5leHBvcnQgY29uc3QgYW55a2V5ID0gbWFrZUtleURlZmluaXRpb24oKTsiLCJpbXBvcnQgeyBCbGFua0xvYWRlciB9IGZyb20gJy4vY29udGVudC1sb2FkZXJzL2JsYW5rLWxvYWRlcic7XHJcbmltcG9ydCB7IEg1UERhdGFSZXBvc2l0b3J5LCBJRGF0YVJlcG9zaXRvcnkgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IENsb3plQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvY2xvemUtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiwgTG9jYWxpemF0aW9uTGFiZWxzLCBMb2NhbGl6YXRpb25TdHJ1Y3R1cmVzIH0gZnJvbSBcIi4vc2VydmljZXMvbG9jYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IElTZXR0aW5ncywgSDVQU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgVW5yd2FwcGVyIH0gZnJvbSAnLi9oZWxwZXJzL3Vud3JhcHBlcic7XHJcbmltcG9ydCB7IFhBUElBY3Rpdml0eURlZmluaXRpb24gfSBmcm9tICcuL21vZGVscy94YXBpJztcclxuaW1wb3J0IHsgY3JlYXRlUGVybXV0YXRpb25zIH0gZnJvbSAnLi9oZWxwZXJzL3Blcm11dGF0aW9ucyc7XHJcblxyXG5cclxuZW51bSBTdGF0ZXMge1xyXG4gIG9uZ29pbmcgPSAnb25nb2luZycsXHJcbiAgY2hlY2tpbmcgPSAnY2hlY2tpbmcnLFxyXG4gIHNob3dpbmdTb2x1dGlvbnMgPSAnc2hvd2luZy1zb2x1dGlvbicsXHJcbiAgZmluaXNoZWQgPSAnZmluaXNoZWQnLFxyXG4gIHNob3dpbmdTb2x1dGlvbnNFbWJlZGRlZCA9ICdzaG93aW5nLXNvbHV0aW9uLWVtYmVkZGVkJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZHZhbmNlZEJsYW5rcyBleHRlbmRzIChINVAuUXVlc3Rpb24gYXMgeyBuZXcoKTogYW55OyB9KSB7XHJcblxyXG4gIHByaXZhdGUgY2xvemVDb250cm9sbGVyOiBDbG96ZUNvbnRyb2xsZXI7XHJcbiAgcHJpdmF0ZSByZXBvc2l0b3J5OiBJRGF0YVJlcG9zaXRvcnk7XHJcbiAgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzO1xyXG4gIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb247XHJcbiAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgalF1ZXJ5O1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRJZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcHJldmlvdXNTdGF0ZTogYW55O1xyXG4gIHByaXZhdGUgc3RhdGU6IFN0YXRlcztcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIHVzZXIgaGFzIGVudGVyZWQgYW55IGFuc3dlciBzbyBmYXIuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhbnN3ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudElkXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRlbnREYXRhXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBhbnksIGNvbnRlbnRJZDogc3RyaW5nLCBjb250ZW50RGF0YTogYW55ID0ge30pIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5qUXVlcnkgPSBINVAualF1ZXJ5O1xyXG4gICAgdGhpcy5jb250ZW50SWQgPSBjb250ZW50SWQ7XHJcblxyXG4gICAgbGV0IHVud3JhcHBlciA9IG5ldyBVbnJ3YXBwZXIodGhpcy5qUXVlcnkpO1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgSDVQU2V0dGluZ3MoY29uZmlnKTtcclxuICAgIHRoaXMubG9jYWxpemF0aW9uID0gbmV3IEg1UExvY2FsaXphdGlvbihjb25maWcpO1xyXG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gbmV3IEg1UERhdGFSZXBvc2l0b3J5KGNvbmZpZywgdGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIDxKUXVlcnlTdGF0aWM+dGhpcy5qUXVlcnksIHVud3JhcHBlcik7XHJcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlID0gbmV3IE1lc3NhZ2VTZXJ2aWNlKHRoaXMualF1ZXJ5KTtcclxuICAgIEJsYW5rTG9hZGVyLmluaXRpYWxpemUodGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIHRoaXMualF1ZXJ5LCB0aGlzLm1lc3NhZ2VTZXJ2aWNlKTtcclxuXHJcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlciA9IG5ldyBDbG96ZUNvbnRyb2xsZXIodGhpcy5yZXBvc2l0b3J5LCB0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgdGhpcy5tZXNzYWdlU2VydmljZSk7XHJcblxyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25TY29yZUNoYW5nZWQgPSB0aGlzLm9uU2NvcmVDaGFuZ2VkO1xyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25Tb2x2ZWQgPSB0aGlzLm9uU29sdmVkO1xyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25BdXRvQ2hlY2tlZCA9IHRoaXMub25BdXRvQ2hlY2tlZDtcclxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uVHlwZWQgPSB0aGlzLm9uVHlwZWQ7XHJcblxyXG4gICAgaWYgKGNvbnRlbnREYXRhICYmIGNvbnRlbnREYXRhLnByZXZpb3VzU3RhdGUpXHJcbiAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IGNvbnRlbnREYXRhLnByZXZpb3VzU3RhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgZnJvbSBvdXRzaWRlIHdoZW4gdGhlIHNjb3JlIG9mIHRoZSBjbG96ZSBoYXMgY2hhbmdlZC5cclxuICAgKi9cclxuICBwcml2YXRlIG9uU2NvcmVDaGFuZ2VkID0gKHNjb3JlOiBudW1iZXIsIG1heFNjb3JlOiBudW1iZXIpID0+IHtcclxuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5pc0Z1bGx5RmlsbGVkT3V0KSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvblN0YXRlKCk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZXMuZmluaXNoZWQpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5jaGVja2luZztcclxuICAgICAgdGhpcy5zaG93RmVlZGJhY2soKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnNldEZlZWRiYWNrKFwiXCIsIHNjb3JlLCBtYXhTY29yZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSgpO1xyXG4gICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNvbHZlZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uVHlwZWQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU3RhdGVzLmNoZWNraW5nKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMub25nb2luZztcclxuICAgICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmlnZ2VyWEFQSSgnaW50ZXJhY3RlZCcpO1xyXG4gICAgdGhpcy5hbnN3ZXJlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQXV0b0NoZWNrZWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnRyaWdnZXJYQVBJKCdpbnRlcmFjdGVkJyk7XHJcbiAgICB0aGlzLnRyaWdnZXJYQVBJQW5zd2VyZWQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE92ZXJyaWRlcyB0aGUgYXR0YWNoIG1ldGhvZCBvZiB0aGUgc3VwZXJjbGFzcyAoSDVQLlF1ZXN0aW9uKSBhbmQgY2FsbHMgaXRcclxuICAgKiBhdCB0aGUgc2FtZSB0aW1lLiAoZXF1aXZhbGVudCB0byBzdXBlci5hdHRhY2goJGNvbnRhaW5lcikpLlxyXG4gICAqIFRoaXMgaXMgbmVjZXNzYXJ5LCBhcyBSYWN0aXZlIG5lZWRzIHRvIGJlIGluaXRpYWxpemVkIHdpdGggYW4gZXhpc3RpbmcgRE9NXHJcbiAgICogZWxlbWVudC4gRE9NIGVsZW1lbnRzIGFyZSBjcmVhdGVkIGluIEg1UC5RdWVzdGlvbi5hdHRhY2gsIHNvIGluaXRpYWxpemluZyBcclxuICAgKiBSYWN0aXZlIGluIHJlZ2lzdGVyRG9tRWxlbWVudHMgZG9lc24ndCB3b3JrLlxyXG4gICAqL1xyXG4gIGF0dGFjaCA9ICgob3JpZ2luYWwpID0+IHtcclxuICAgIHJldHVybiAoJGNvbnRhaW5lcikgPT4ge1xyXG4gICAgICBvcmlnaW5hbCgkY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuaW5pdGlhbGl6ZSh0aGlzLmNvbnRhaW5lci5nZXQoMCksICRjb250YWluZXIpO1xyXG4gICAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuZGVzZXJpYWxpemVDbG96ZSh0aGlzLnByZXZpb3VzU3RhdGUpKSB7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJlZCA9IHRoaXMuY2xvemVDb250cm9sbGVyLmlzRmlsbGVkT3V0O1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9DaGVjaylcclxuICAgICAgICAgIHRoaXMub25DaGVja0Fuc3dlcigpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pKHRoaXMuYXR0YWNoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIGJ5IEg1UC5RdWVzdGlvbi5hdHRhY2goKS4gQ3JlYXRlcyBhbGwgY29udGVudCBlbGVtZW50cyBhbmQgcmVnaXN0ZXJzIHRoZW1cclxuICAgKiB3aXRoIEg1UC5RdWVzdGlvbi5cclxuICAgKi9cclxuICByZWdpc3RlckRvbUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5yZWdpc3Rlck1lZGlhKCk7XHJcbiAgICB0aGlzLnNldEludHJvZHVjdGlvbih0aGlzLnJlcG9zaXRvcnkuZ2V0VGFza0Rlc2NyaXB0aW9uKCkpO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qUXVlcnkoXCI8ZGl2Lz5cIiwgeyBcImNsYXNzXCI6IFwiaDVwLWFkdmFuY2VkLWJsYW5rc1wiIH0pO1xyXG4gICAgdGhpcy5zZXRDb250ZW50KHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMucmVnaXN0ZXJCdXR0b25zKCk7XHJcblxyXG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMub25nb2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyBKUXVlcnkgLSBUaGUgb3V0ZXIgaDVwIGNvbnRhaW5lci4gVGhlIGxpYnJhcnkgY2FuIGFkZCBkaWFsb2d1ZXMgdG8gdGhpc1xyXG4gICAqIGVsZW1lbnQuIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0SDVwQ29udGFpbmVyKCk6IEpRdWVyeSB7XHJcbiAgICB2YXIgJGNvbnRlbnQgPSB0aGlzLmpRdWVyeSgnW2RhdGEtY29udGVudC1pZD1cIicgKyB0aGlzLmNvbnRlbnRJZCArICdcIl0uaDVwLWNvbnRlbnQnKTtcclxuICAgIHZhciAkY29udGFpbmVyUGFyZW50cyA9ICRjb250ZW50LnBhcmVudHMoJy5oNXAtY29udGFpbmVyJyk7XHJcblxyXG4gICAgLy8gc2VsZWN0IGZpbmQgY29udGFpbmVyIHRvIGF0dGFjaCBkaWFsb2dzIHRvXHJcbiAgICB2YXIgJGNvbnRhaW5lcjtcclxuICAgIGlmICgkY29udGFpbmVyUGFyZW50cy5sZW5ndGggIT09IDApIHtcclxuICAgICAgLy8gdXNlIHBhcmVudCBoaWdoZXN0IHVwIGlmIGFueVxyXG4gICAgICAkY29udGFpbmVyID0gJGNvbnRhaW5lclBhcmVudHMubGFzdCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoJGNvbnRlbnQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICRjb250YWluZXIgPSAkY29udGVudDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAkY29udGFpbmVyID0gdGhpcy5qUXVlcnkoZG9jdW1lbnQuYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICRjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyTWVkaWEoKSB7XHJcbiAgICB2YXIgbWVkaWEgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0TWVkaWEoKTtcclxuICAgIGlmICghbWVkaWEgfHwgIW1lZGlhLmxpYnJhcnkpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgdHlwZSA9IG1lZGlhLmxpYnJhcnkuc3BsaXQoJyAnKVswXTtcclxuICAgIGlmICh0eXBlID09PSAnSDVQLkltYWdlJykge1xyXG4gICAgICBpZiAobWVkaWEucGFyYW1zLmZpbGUpIHtcclxuICAgICAgICB0aGlzLnNldEltYWdlKG1lZGlhLnBhcmFtcy5maWxlLnBhdGgsIHtcclxuICAgICAgICAgIGRpc2FibGVJbWFnZVpvb21pbmc6IHRoaXMuc2V0dGluZ3MuZGlzYWJsZUltYWdlWm9vbWluZyxcclxuICAgICAgICAgIGFsdDogbWVkaWEucGFyYW1zLmFsdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnSDVQLlZpZGVvJykge1xyXG4gICAgICBpZiAobWVkaWEucGFyYW1zLnNvdXJjZXMpIHtcclxuICAgICAgICB0aGlzLnNldFZpZGVvKG1lZGlhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckJ1dHRvbnMoKSB7XHJcbiAgICB2YXIgJGNvbnRhaW5lciA9IHRoaXMuZ2V0SDVwQ29udGFpbmVyKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLmF1dG9DaGVjaykge1xyXG4gICAgICAvLyBDaGVjayBhbnN3ZXIgYnV0dG9uXHJcbiAgICAgIHRoaXMuYWRkQnV0dG9uKCdjaGVjay1hbnN3ZXInLCAnU3VibWl0IEFuc3dlcnMnLFxyXG4gICAgICAgIHRoaXMub25DaGVja0Fuc3dlciwgdHJ1ZSwge30sIHtcclxuICAgICAgICAgIGNvbmZpcm1hdGlvbkRpYWxvZzoge1xyXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuc2V0dGluZ3MuY29uZmlybUNoZWNrRGlhbG9nLFxyXG4gICAgICAgICAgICBsMTBuOiB0aGlzLmxvY2FsaXphdGlvbi5nZXRPYmplY3RGb3JTdHJ1Y3R1cmUoTG9jYWxpemF0aW9uU3RydWN0dXJlcy5jb25maXJtQ2hlY2spLFxyXG4gICAgICAgICAgICBpbnN0YW5jZTogdGhpcyxcclxuICAgICAgICAgICAgJHBhcmVudEVsZW1lbnQ6ICRjb250YWluZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaG93IHNvbHV0aW9uIGJ1dHRvblxyXG4gICAgdGhpcy5hZGRCdXR0b24oJ3Nob3ctc29sdXRpb24nLCB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy5zaG93U29sdXRpb25CdXR0b24pLFxyXG4gICAgICB0aGlzLm9uU2hvd1NvbHV0aW9uLCB0aGlzLnNldHRpbmdzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbik7XHJcblxyXG4gICAgLy8gVHJ5IGFnYWluIGJ1dHRvblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlUmV0cnkgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5hZGRCdXR0b24oJ3RyeS1hZ2FpbicsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnJldHJ5QnV0dG9uKSxcclxuICAgICAgICB0aGlzLm9uUmV0cnksIHRydWUsIHt9LCB7XHJcbiAgICAgICAgICBjb25maXJtYXRpb25EaWFsb2c6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0aGlzLnNldHRpbmdzLmNvbmZpcm1SZXRyeURpYWxvZyxcclxuICAgICAgICAgICAgbDEwbjogdGhpcy5sb2NhbGl6YXRpb24uZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKExvY2FsaXphdGlvblN0cnVjdHVyZXMuY29uZmlybVJldHJ5KSxcclxuICAgICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXHJcbiAgICAgICAgICAgICRwYXJlbnRFbGVtZW50OiAkY29udGFpbmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2hlY2tBbnN3ZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5jaGVja0FsbCgpO1xyXG5cclxuICAgIHRoaXMudHJpZ2dlclhBUEkoJ2ludGVyYWN0ZWQnKTtcclxuICAgIHRoaXMudHJpZ2dlclhBUElBbnN3ZXJlZCgpO1xyXG5cclxuICAgIHRoaXMudHJhbnNpdGlvblN0YXRlKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGVzLmZpbmlzaGVkKVxyXG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLmNoZWNraW5nO1xyXG5cclxuICAgIHRoaXMuc2hvd0ZlZWRiYWNrKCk7XHJcblxyXG4gICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHRoaXMuc3RhdGUpO1xyXG4gICAgdGhpcy50cmlnZ2VyWEFQSVNjb3JlZCh0aGlzLmdldFNjb3JlKHRydWUpLCB0aGlzLmdldE1heFNjb3JlKCksIFwic3VibWl0dGVkLWN1cnJpa2lcIik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYW5zaXRpb25TdGF0ZSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5pc1NvbHZlZCkge1xyXG4gICAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5maW5pc2hlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMuc2hvd2luZ1NvbHV0aW9ucyk7XHJcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5zaG93U29sdXRpb25zKCk7XHJcbiAgICB0aGlzLnNob3dGZWVkYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblJldHJ5ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5yZW1vdmVGZWVkYmFjaygpO1xyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIucmVzZXQoKTtcclxuICAgIHRoaXMuYW5zd2VyZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLm9uZ29pbmcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RmVlZGJhY2soKSB7XHJcbiAgICB2YXIgc2NvcmVUZXh0ID0gSDVQLlF1ZXN0aW9uLmRldGVybWluZU92ZXJhbGxGZWVkYmFjayh0aGlzLmxvY2FsaXphdGlvbi5nZXRPYmplY3RGb3JTdHJ1Y3R1cmUoTG9jYWxpemF0aW9uU3RydWN0dXJlcy5vdmVyYWxsRmVlZGJhY2spLCB0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUgLyB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSkucmVwbGFjZSgnQHNjb3JlJywgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlKS5yZXBsYWNlKCdAdG90YWwnLCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSk7XHJcbiAgICB0aGlzLnNldEZlZWRiYWNrKHNjb3JlVGV4dCwgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlLCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSwgdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMuc2NvcmVCYXJMYWJlbCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvd3MgYXJlIGhpZGVzIGJ1dHRvbnMgZGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IHN0YXRlIGFuZCBzZXR0aW5ncyBtYWRlXHJcbiAgICogYnkgdGhlIGNvbnRlbnQgY3JlYXRvci5cclxuICAgKiBAcGFyYW0gIHtTdGF0ZXN9IHN0YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBtb3ZlVG9TdGF0ZShzdGF0ZTogU3RhdGVzKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVCdXR0b25WaXNpYmlsaXR5KHN0YXRlOiBTdGF0ZXMpIHtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbikge1xyXG4gICAgICBpZiAoKChzdGF0ZSA9PT0gU3RhdGVzLmNoZWNraW5nKVxyXG4gICAgICAgIHx8ICh0aGlzLnNldHRpbmdzLmF1dG9DaGVjayAmJiBzdGF0ZSA9PT0gU3RhdGVzLm9uZ29pbmcpKVxyXG4gICAgICAgICYmICghdGhpcy5zZXR0aW5ncy5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dCB8fCB0aGlzLmNsb3plQ29udHJvbGxlci5hbGxCbGFua3NFbnRlcmVkKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0J1dHRvbignc2hvdy1zb2x1dGlvbicpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbignc2hvdy1zb2x1dGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlUmV0cnkgJiYgKHN0YXRlID09PSBTdGF0ZXMuY2hlY2tpbmcgfHwgc3RhdGUgPT09IFN0YXRlcy5maW5pc2hlZCB8fCBzdGF0ZSA9PT0gU3RhdGVzLnNob3dpbmdTb2x1dGlvbnMpKSB7XHJcbiAgICAgIHRoaXMuc2hvd0J1dHRvbigndHJ5LWFnYWluJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5oaWRlQnV0dG9uKCd0cnktYWdhaW4nKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHN0YXRlID09PSBTdGF0ZXMub25nb2luZyAmJiB0aGlzLnNldHRpbmdzLmVuYWJsZUNoZWNrQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuc2hvd0J1dHRvbignY2hlY2stYW5zd2VyJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5oaWRlQnV0dG9uKCdjaGVjay1hbnN3ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdGUgPT09IFN0YXRlcy5zaG93aW5nU29sdXRpb25zRW1iZWRkZWQpIHtcclxuICAgICAgdGhpcy5oaWRlQnV0dG9uKCdjaGVjay1hbnN3ZXInKTtcclxuICAgICAgdGhpcy5oaWRlQnV0dG9uKCd0cnktYWdhaW4nKTtcclxuICAgICAgdGhpcy5oaWRlQnV0dG9uKCdzaG93LXNvbHV0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cmlnZ2VyKCdyZXNpemUnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDdXJyZW50U3RhdGUgPSAoKTogc3RyaW5nW10gPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvemVDb250cm9sbGVyLnNlcmlhbGl6ZUNsb3plKCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBRdWVzdGlvbiBjb250cmFjdCAgKlxyXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIHB1YmxpYyBnZXRBbnN3ZXJHaXZlbiA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiB0aGlzLmFuc3dlcmVkIHx8IHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlID09PSAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFNjb3JlID0gKGZyb21DaGVja0Fuc3dlcik6IG51bWJlciA9PiB7XHJcbiAgICBpZighZnJvbUNoZWNrQW5zd2VyKSB7XHJcbiAgICAgIHRoaXMub25DaGVja0Fuc3dlcigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRNYXhTY29yZSA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dTb2x1dGlvbnMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLm9uQ2hlY2tBbnN3ZXIoKTtcclxuICAgIHRoaXMub25TaG93U29sdXRpb24oKTtcclxuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLnNob3dpbmdTb2x1dGlvbnNFbWJlZGRlZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXRUYXNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5vblJldHJ5KCk7XHJcbiAgfVxyXG5cclxuICAvKioqXHJcbiAgICogWEFwaSBpbXBsZW1lbnRhdGlvblxyXG4gICAqL1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciB4QVBJIGFuc3dlcmVkIGV2ZW50XHJcbiAgICovXHJcbiAgcHVibGljIHRyaWdnZXJYQVBJQW5zd2VyZWQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLmFuc3dlcmVkID0gdHJ1ZTtcclxuICAgIHZhciB4QVBJRXZlbnQgPSB0aGlzLmNyZWF0ZVhBUElFdmVudFRlbXBsYXRlKCdhbnN3ZXJlZCcpO1xyXG4gICAgdGhpcy5hZGRRdWVzdGlvblRvWEFQSSh4QVBJRXZlbnQpO1xyXG4gICAgdGhpcy5hZGRSZXNwb25zZVRvWEFQSSh4QVBJRXZlbnQpO1xyXG4gICAgdGhpcy50cmlnZ2VyKHhBUElFdmVudCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHhBUEkgZGF0YS5cclxuICAgKiBDb250cmFjdCB1c2VkIGJ5IHJlcG9ydCByZW5kZXJpbmcgZW5naW5lLlxyXG4gICAqXHJcbiAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci02fVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRYQVBJRGF0YSA9ICgpID0+IHtcclxuICAgIHZhciB4QVBJRXZlbnQgPSB0aGlzLmNyZWF0ZVhBUElFdmVudFRlbXBsYXRlKCdhbnN3ZXJlZCcpO1xyXG4gICAgdGhpcy5hZGRRdWVzdGlvblRvWEFQSSh4QVBJRXZlbnQpO1xyXG4gICAgdGhpcy5hZGRSZXNwb25zZVRvWEFQSSh4QVBJRXZlbnQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhdGVtZW50OiB4QVBJRXZlbnQuZGF0YS5zdGF0ZW1lbnRcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGUgeEFQSSBvYmplY3QgZGVmaW5pdGlvbiB1c2VkIGluIHhBUEkgc3RhdGVtZW50cy5cclxuICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICovXHJcbiAgcHVibGljIGdldHhBUElEZWZpbml0aW9uID0gKCk6IFhBUElBY3Rpdml0eURlZmluaXRpb24gPT4ge1xyXG4gICAgdmFyIGRlZmluaXRpb24gPSBuZXcgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbigpO1xyXG4gICAgZGVmaW5pdGlvbi5kZXNjcmlwdGlvbiA9IHtcclxuICAgICAgJ2VuLVVTJzogJzxwPicgKyB0aGlzLnJlcG9zaXRvcnkuZ2V0VGFza0Rlc2NyaXB0aW9uKCkgKyAnPC9wPicgKyB0aGlzLnJlcG9zaXRvcnkuZ2V0Q2xvemVUZXh0KClcclxuICAgIH07XHJcbiAgICBkZWZpbml0aW9uLnR5cGUgPSAnaHR0cDovL2FkbG5ldC5nb3YvZXhwYXBpL2FjdGl2aXRpZXMvY21pLmludGVyYWN0aW9uJztcclxuICAgIGRlZmluaXRpb24uaW50ZXJhY3Rpb25UeXBlID0gJ2ZpbGwtaW4nOyAvLyBXZSB1c2UgdGhlICdmaWxsLWluJyB0eXBlIGV2ZW4gaW4gc2VsZWN0IG1vZGUsIGFzIHRoZSB4QVBJIGZvcm1hdCBmb3Igc2VsZWN0aW9ucyBkb2Vzbid0IHJlYWxseSBjYXRlciBmb3Igc2VxdWVuY2VzLlxyXG4gICAgZGVmaW5pdGlvbi5jb3JyZWN0UmVzcG9uc2VzUGF0dGVybiA9IFtdO1xyXG4gICAgbGV0IGNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuUHJlZml4ID0gJ3tjYXNlX21hdHRlcnM9JyArIHRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSArICd9JztcclxuXHJcbiAgICAvLyB4QVBJIGZvcmNlcyB1cyB0byBjcmVhdGUgc29sdXRpb24gcGF0dGVybnMgZm9yIGFsbCBwb3NzaWJsZSBzb2x1dGlvbiBjb21iaW5hdGlvbnNcclxuICAgIGxldCBjb3JyZWN0QW5zd2VyUGVybXV0YXRpb25zID0gY3JlYXRlUGVybXV0YXRpb25zKHRoaXMuY2xvemVDb250cm9sbGVyLmdldENvcnJlY3RBbnN3ZXJMaXN0KCkpO1xyXG4gICAgZm9yIChsZXQgcGVybXV0YXRpb24gb2YgY29ycmVjdEFuc3dlclBlcm11dGF0aW9ucykge1xyXG4gICAgICBkZWZpbml0aW9uLmNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuLnB1c2goY29ycmVjdFJlc3BvbnNlc1BhdHRlcm5QcmVmaXggKyBwZXJtdXRhdGlvbi5qb2luKCdbLF0nKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgdGhlIHF1ZXN0aW9uIGl0c2VsZiB0byB0aGUgZGVmaW5pdGlvbiBwYXJ0IG9mIGFuIHhBUElFdmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRRdWVzdGlvblRvWEFQSSA9ICh4QVBJRXZlbnQpID0+IHtcclxuICAgIHZhciBkZWZpbml0aW9uID0geEFQSUV2ZW50LmdldFZlcmlmaWVkU3RhdGVtZW50VmFsdWUoWydvYmplY3QnLCAnZGVmaW5pdGlvbiddKTtcclxuICAgIHRoaXMualF1ZXJ5LmV4dGVuZChkZWZpbml0aW9uLCB0aGlzLmdldHhBUElEZWZpbml0aW9uKCkpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCB0aGUgcmVzcG9uc2UgcGFydCB0byBhbiB4QVBJIGV2ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0g1UC5YQVBJRXZlbnR9IHhBUElFdmVudFxyXG4gICAqICBUaGUgeEFQSSBldmVudCB3ZSB3aWxsIGFkZCBhIHJlc3BvbnNlIHRvXHJcbiAgICovXHJcbiAgcHVibGljIGFkZFJlc3BvbnNlVG9YQVBJID0gKHhBUElFdmVudCkgPT4ge1xyXG4gICAgeEFQSUV2ZW50LnNldFNjb3JlZFJlc3VsdCh0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlLCB0aGlzKTtcclxuICAgIHhBUElFdmVudC5kYXRhLnN0YXRlbWVudC5yZXN1bHQucmVzcG9uc2UgPSB0aGlzLmdldHhBUElSZXNwb25zZSgpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIHhBUEkgdXNlciByZXNwb25zZSwgdXNlZCBpbiB4QVBJIHN0YXRlbWVudHMuXHJcbiAgICogQHJldHVybiB7c3RyaW5nfSBVc2VyIGFuc3dlcnMgc2VwYXJhdGVkIGJ5IHRoZSBcIlssXVwiIHBhdHRlcm5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0eEFQSVJlc3BvbnNlID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICB2YXIgdXNlcnNBbnN3ZXJzID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcclxuICAgIHJldHVybiB1c2Vyc0Fuc3dlcnMuam9pbignWyxdJyk7XHJcbiAgfTtcclxufSIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnLi4vbW9kZWxzL2hpZ2hsaWdodCc7XHJcbmltcG9ydCB7IEFuc3dlciB9IGZyb20gJy4uL21vZGVscy9hbnN3ZXInO1xyXG5pbXBvcnQgeyBCbGFuayB9IGZyb20gJy4uL21vZGVscy9ibGFuayc7XHJcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbic7XHJcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuLi9tb2RlbHMvbWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBTbmlwcGV0IH0gZnJvbSAnLi4vbW9kZWxzL3NuaXBwZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsYW5rTG9hZGVyIHtcclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBCbGFua0xvYWRlcjtcclxuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoc2V0dGluZ3M6IElTZXR0aW5ncywgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpOiBCbGFua0xvYWRlciB7XHJcbiAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBCbGFua0xvYWRlcihzZXR0aW5ncywgbG9jYWxpemF0aW9uLCBqcXVlcnksIG1lc3NhZ2VTZXJ2aWNlKTtcclxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEJsYW5rTG9hZGVyIHtcclxuICAgIGlmICh0aGlzLl9pbnN0YW5jZSlcclxuICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG5cclxuICAgIHRocm93IFwiQmxhbmtMb2FkZXIgbXVzdCBiZSBpbml0aWFsaXplZCBiZWZvcmUgdXNlLlwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWNvZGVIdG1sKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBlbGVtLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICByZXR1cm4gZWxlbS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVCbGFuayhpZDogc3RyaW5nLCBjb3JyZWN0VGV4dDogc3RyaW5nLCBoaW50VGV4dDogc3RyaW5nLCBpbmNvcnJlY3RBbnN3ZXJzOiBhbnlbXSk6IEJsYW5rIHtcclxuICAgIHZhciBibGFuayA9IG5ldyBCbGFuayh0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgdGhpcy5qcXVlcnksIHRoaXMubWVzc2FnZVNlcnZpY2UsIGlkKVxyXG4gICAgaWYgKGNvcnJlY3RUZXh0KSB7XHJcbiAgICAgIGNvcnJlY3RUZXh0ID0gdGhpcy5kZWNvZGVIdG1sKGNvcnJlY3RUZXh0KTtcclxuICAgICAgYmxhbmsuYWRkQ29ycmVjdEFuc3dlcihuZXcgQW5zd2VyKGNvcnJlY3RUZXh0LCBcIlwiLCBmYWxzZSwgMCwgdGhpcy5zZXR0aW5ncykpO1xyXG4gICAgfVxyXG4gICAgYmxhbmsuc2V0SGludChuZXcgTWVzc2FnZShoaW50VGV4dCA/IGhpbnRUZXh0IDogXCJcIiwgZmFsc2UsIDApKTtcclxuXHJcbiAgICBpZiAoaW5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICBmb3IgKHZhciBoNXBJbmNvcnJlY3RBbnN3ZXIgb2YgaW5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICAgIGJsYW5rLmFkZEluY29ycmVjdEFuc3dlcih0aGlzLmRlY29kZUh0bWwoaDVwSW5jb3JyZWN0QW5zd2VyLmluY29ycmVjdEFuc3dlclRleHQpLCBoNXBJbmNvcnJlY3RBbnN3ZXIuaW5jb3JyZWN0QW5zd2VyRmVlZGJhY2ssIGg1cEluY29ycmVjdEFuc3dlci5zaG93SGlnaGxpZ2h0LCBoNXBJbmNvcnJlY3RBbnN3ZXIuaGlnaGxpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBibGFuaztcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXBsYWNlU25pcHBldHMoYmxhbms6IEJsYW5rLCBzbmlwcGV0czogU25pcHBldFtdKSB7XHJcbiAgICBibGFuay5jb3JyZWN0QW5zd2Vycy5jb25jYXQoYmxhbmsuaW5jb3JyZWN0QW5zd2VycylcclxuICAgICAgLmZvckVhY2goYW5zd2VyID0+IGFuc3dlci5tZXNzYWdlLnRleHQgPSB0aGlzLmdldFN0cmluZ1dpdGhTbmlwcGV0cyhhbnN3ZXIubWVzc2FnZS50ZXh0LCBzbmlwcGV0cykpO1xyXG4gICAgYmxhbmsuaGludC50ZXh0ID0gdGhpcy5nZXRTdHJpbmdXaXRoU25pcHBldHMoYmxhbmsuaGludC50ZXh0LCBzbmlwcGV0cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN0cmluZ1dpdGhTbmlwcGV0cyh0ZXh0OiBzdHJpbmcsIHNuaXBwZXRzOiBTbmlwcGV0W10pOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0ZXh0IHx8IHRleHQgPT09IHVuZGVmaW5lZClcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgaWYoIXNuaXBwZXRzKVxyXG4gICAgICByZXR1cm4gdGV4dDsgICAgXHJcblxyXG4gICAgZm9yICh2YXIgc25pcHBldCBvZiBzbmlwcGV0cykge1xyXG4gICAgICBpZiAoc25pcHBldC5uYW1lID09PSB1bmRlZmluZWQgfHwgc25pcHBldC5uYW1lID09PSBcIlwiIHx8IHNuaXBwZXQudGV4dCA9PT0gdW5kZWZpbmVkIHx8IHNuaXBwZXQudGV4dCA9PT0gXCJcIilcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShcIkBcIiArIHNuaXBwZXQubmFtZSwgc25pcHBldC50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgdGhlIGhpZ2hsaWdodCBvYmplY3RzIHRvIHRoZSBhbnN3ZXJzIGluIHRoZSBjb3JyZWN0IGFuZCBpbmNvcnJlY3QgYW5zd2VyIGxpc3QuXHJcbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNCZWZvcmUgLSBBbGwgaGlnaGxpZ2h0cyBjb21pbmcgYmVmb3JlIHRoZSBibGFuay5cclxuICAgKiBAcGFyYW0gIHtIaWdobGlnaHRbXX0gaGlnaGxpZ2h0c0FmdGVyIC0gQWxsIGhpZ2hsaWdodHMgY29taW5nIGFmdGVyIHRoZSBibGFuay5cclxuICAgKi9cclxuICBwdWJsaWMgbGlua0hpZ2hsaWdodElkVG9PYmplY3QoYmxhbms6IEJsYW5rLCBoaWdobGlnaHRzQmVmb3JlOiBIaWdobGlnaHRbXSwgaGlnaGxpZ2h0c0FmdGVyOiBIaWdobGlnaHRbXSkge1xyXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIGJsYW5rLmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgIGFuc3dlci5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGFuc3dlciBvZiBibGFuay5pbmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgIGFuc3dlci5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJsYW5rLmhpbnQubGlua0hpZ2hsaWdodChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBCbGFua0xvYWRlciB9IGZyb20gJy4vYmxhbmstbG9hZGVyJztcclxuaW1wb3J0IHsgQ2xvemVFbGVtZW50LCBDbG96ZUVsZW1lbnRUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2Nsb3plLWVsZW1lbnQnO1xyXG5pbXBvcnQgeyBCbGFuayB9IGZyb20gJy4uL21vZGVscy9ibGFuayc7XHJcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gJy4uL21vZGVscy9oaWdobGlnaHQnO1xyXG5pbXBvcnQgeyBDbG96ZSB9IGZyb20gXCIuLi9tb2RlbHMvY2xvemVcIjtcclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBhIGNsb3plIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbG96ZUxvYWRlciB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgbm9ybWFsaXplZEJsYW5rTWFya2VyID0gJ19fXyc7XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sIC0gVGhlIGh0bWwgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIGNsb3plIHdpdGggYmxhbmtzIG1hcmtpbmcgYW5kIGhpZ2hsaWdodCBtYXJraW5ncy5cclxuICAgKiBAcGFyYW0gIHtCbGFua1tdfSBibGFua3MgLSBBbGwgYmxhbmtzIGFzIGVudGVyZWQgYnkgdGhlIGNvbnRlbnQgYXV0aG9yLlxyXG4gICAqIEByZXR1cm5zIENsb3plXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVDbG96ZShodG1sOiBzdHJpbmcsIGJsYW5rczogQmxhbmtbXSk6IENsb3plIHtcclxuICAgIHZhciBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10gPSBuZXcgQXJyYXkoKTtcclxuICAgIHZhciBibGFua3NJbnN0YW5jZXM6IEJsYW5rW10gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICBodG1sID0gQ2xvemVMb2FkZXIubm9ybWFsaXplQmxhbmtNYXJraW5ncyhodG1sKTtcclxuXHJcbiAgICB2YXIgY29udmVyc2lvblJlc3VsdCA9IENsb3plTG9hZGVyLmNvbnZlcnRNYXJrdXBUb1NwYW5zKGh0bWwsIGJsYW5rcyk7XHJcbiAgICBodG1sID0gY29udmVyc2lvblJlc3VsdC5odG1sO1xyXG4gICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCA9IGNvbnZlcnNpb25SZXN1bHQub3JkZXJlZEFsbEVsZW1lbnRzTGlzdDtcclxuICAgIGhpZ2hsaWdodEluc3RhbmNlcyA9IGNvbnZlcnNpb25SZXN1bHQuaGlnaGxpZ2h0SW5zdGFuY2VzO1xyXG4gICAgYmxhbmtzSW5zdGFuY2VzID0gY29udmVyc2lvblJlc3VsdC5ibGFua3NJbnN0YW5jZXM7XHJcblxyXG4gICAgQ2xvemVMb2FkZXIubGlua0hpZ2hsaWdodHNPYmplY3RzKG9yZGVyZWRBbGxFbGVtZW50c0xpc3QsIGhpZ2hsaWdodEluc3RhbmNlcywgYmxhbmtzSW5zdGFuY2VzKTtcclxuXHJcbiAgICB2YXIgY2xvemUgPSBuZXcgQ2xvemUoKTtcclxuICAgIGNsb3plLmh0bWwgPSBodG1sO1xyXG4gICAgY2xvemUuYmxhbmtzID0gYmxhbmtzSW5zdGFuY2VzO1xyXG4gICAgY2xvemUuaGlnaGxpZ2h0cyA9IGhpZ2hsaWdodEluc3RhbmNlcztcclxuXHJcbiAgICByZXR1cm4gY2xvemU7XHJcbiAgfVxyXG5cclxuICAgLyoqXHJcbiAgICogQ29udmVydHMgISFzaWduYWwhISBoaWdobGlnaHQgbWFya3VwIGFuZCBfX18gIGJsYW5rIG1hcmt1cCBpbnRvIDxzcGFuPi4uLjwvc3Bhbj4uXHJcbiAgICogUmV0dXJucyB0aGUgcmVzdWx0aW5nIGh0bWwgc3RyaW5nIGFuZCB0aHJlZSBsaXN0cyBvZiBhbGwgYWN0aXZlIGVsZW1lbnRzIHVzZWQgaW4gdGhlIGNsb3plOlxyXG4gICAqICAgIG9yZGVyZWRBbGxFbGVtZW50czogaGlnaGxpZ2h0cyBhbmQgYmxhbmtzIGluIHRoZSBvcmRlciBvZiBhcHBlYXJhbmNlIGluIHRoZSBodG1sLlxyXG4gICAqICAgIGhpZ2hsaWdodEluc3RhbmNlczogb25seSBoaWdobGlnaHRzIGluIHRoZSBvcmRlciBvZiBhcHBlYXJhbmNlXHJcbiAgICogICAgYmxhbmtzSW5zdGFuY2VzOiBvbmx5IGJsYW5rcyBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZVxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbFxyXG4gICAqIEBwYXJhbSAge0JsYW5rW119IGJsYW5rc1xyXG4gICAqIEByZXR1cm5zIExpc3RzIG9mIGFjdGl2ZSBlbGVtZW50cyAoc2VlIGRlc2NyaXB0aW9uKS5cclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyBjb252ZXJ0TWFya3VwVG9TcGFucyhodG1sOiBzdHJpbmcsIGJsYW5rczogQmxhbmtbXSk6IHsgaHRtbDogc3RyaW5nLCBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSwgaGlnaGxpZ2h0SW5zdGFuY2VzOiBIaWdobGlnaHRbXSwgYmxhbmtzSW5zdGFuY2VzOiBCbGFua1tdIH0ge1xyXG4gICAgdmFyIG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IENsb3plRWxlbWVudFtdID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgaGlnaGxpZ2h0SW5zdGFuY2VzOiBIaWdobGlnaHRbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgIHZhciBleGNsYW1hdGlvbk1hcmtSZWdFeHAgPSAvISEoLnsxLDQwfT8pISEvaTtcclxuICAgIHZhciBoaWdobGlnaHRDb3VudGVyID0gMDtcclxuICAgIGxldCBibGFua0NvdW50ZXIgPSAwO1xyXG5cclxuICAgIC8vIFNlYXJjaGVzIHRoZSBodG1sIHN0cmluZyBmb3IgaGlnaGxpZ2h0cyBhbmQgYmxhbmtzIGFuZCBpbnNlcnRzIHNwYW5zLiBcclxuICAgIGRvIHtcclxuICAgICAgdmFyIG5leHRIaWdobGlnaHRNYXRjaCA9IGh0bWwubWF0Y2goZXhjbGFtYXRpb25NYXJrUmVnRXhwKTtcclxuICAgICAgdmFyIG5leHRCbGFua0luZGV4ID0gaHRtbC5pbmRleE9mKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlcik7XHJcblxyXG4gICAgICBpZiAobmV4dEhpZ2hsaWdodE1hdGNoICYmICgobmV4dEhpZ2hsaWdodE1hdGNoLmluZGV4IDwgbmV4dEJsYW5rSW5kZXgpIHx8IChuZXh0QmxhbmtJbmRleCA8IDApKSkge1xyXG4gICAgICAgIC8vIG5leHQgYWN0aXZlIGVsZW1lbnQgaXMgYSBoaWdobGlnaHRcclxuICAgICAgICB2YXIgaGlnaGxpZ2h0ID0gbmV3IEhpZ2hsaWdodChuZXh0SGlnaGxpZ2h0TWF0Y2hbMV0sIGBoaWdobGlnaHRfJHtoaWdobGlnaHRDb3VudGVyfWApO1xyXG4gICAgICAgIGhpZ2hsaWdodEluc3RhbmNlcy5wdXNoKGhpZ2hsaWdodCk7XHJcbiAgICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5wdXNoKGhpZ2hsaWdodCk7XHJcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShleGNsYW1hdGlvbk1hcmtSZWdFeHAsIGA8c3BhbiBpZD0nY29udGFpbmVyX2hpZ2hsaWdodF8ke2hpZ2hsaWdodENvdW50ZXJ9Jz48L3NwYW4+YCk7XHJcbiAgICAgICAgaGlnaGxpZ2h0Q291bnRlcisrO1xyXG4gICAgICB9IGVsc2UgaWYgKG5leHRCbGFua0luZGV4ID49IDApIHtcclxuICAgICAgICAvLyBuZXh0IGFjdGl2ZSBlbGVtZW50IGlzIGEgYmxhbmtcclxuICAgICAgICBpZiAoYmxhbmtDb3VudGVyID49IGJsYW5rcy5sZW5ndGgpIHtcclxuICAgICAgICAgIC8vIGlmIHRoZSBibGFuayBpcyBub3QgaW4gdGhlIHJlcG9zaXRvcnkgKFRoZSBjb250ZW50IGF1dGhvciBoYXMgbWFya2VkIHRvbyBtYW55IGJsYW5rcyBpbiB0aGUgdGV4dCwgYnV0IG5vdCBlbnRlcmVkIGNvcnJlY3QgYW5zd2Vycy4pXHJcbiAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlciwgXCI8c3Bhbj48L3NwYW4+XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHZhciBibGFuayA9IGJsYW5rc1tibGFua0NvdW50ZXJdO1xyXG4gICAgICAgICAgYmxhbmtzSW5zdGFuY2VzLnB1c2goYmxhbmspO1xyXG4gICAgICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5wdXNoKGJsYW5rKTtcclxuICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoQ2xvemVMb2FkZXIubm9ybWFsaXplZEJsYW5rTWFya2VyLCBgPHNwYW4gaWQ9J2NvbnRhaW5lcl8ke2JsYW5rLmlkfSc+PC9zcGFuPmApO1xyXG4gICAgICAgICAgYmxhbmtDb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aGlsZSAobmV4dEhpZ2hsaWdodE1hdGNoIHx8IChuZXh0QmxhbmtJbmRleCA+PSAwKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaHRtbDogaHRtbCxcclxuICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCxcclxuICAgICAgaGlnaGxpZ2h0SW5zdGFuY2VzOiBoaWdobGlnaHRJbnN0YW5jZXMsXHJcbiAgICAgIGJsYW5rc0luc3RhbmNlczogYmxhbmtzSW5zdGFuY2VzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9va3MgZm9yIGFsbCBpbnN0YW5jZXMgb2YgbWFya2VkIGJsYW5rcyBhbmQgcmVwbGFjZXMgdGhlbSB3aXRoIF9fXy4gXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sXHJcbiAgICogQHJldHVybnMgc3RyaW5nXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgbm9ybWFsaXplQmxhbmtNYXJraW5ncyhodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdmFyIHVuZGVybGluZUJsYW5rUmVnRXggPSAvX3szLH0vZztcclxuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UodW5kZXJsaW5lQmxhbmtSZWdFeCwgQ2xvemVMb2FkZXIubm9ybWFsaXplZEJsYW5rTWFya2VyKTtcclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxuXHJcbiAgIC8qKlxyXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIGJsYW5rcyBhbmQgY2FsbHMgdGhlaXIgbGlua0hpZ2hsaWdodElkc1RvT2JqZWN0cyguLi4pLlxyXG4gICAqIEBwYXJhbSBvcmRlcmVkQWxsRWxlbWVudHNMaXN0IFxyXG4gICAqIEBwYXJhbSBoaWdobGlnaHRJbnN0YW5jZXMgXHJcbiAgICogQHBhcmFtIGJsYW5rc0luc3RhbmNlcyBcclxuICAgKi9cclxuICBwcml2YXRlIHN0YXRpYyBsaW5rSGlnaGxpZ2h0c09iamVjdHMob3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogQ2xvemVFbGVtZW50W10sIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10sIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSk6IHZvaWQge1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgYmxhbmtzSW5zdGFuY2VzKSB7XHJcbiAgICAgIHZhciBuZXh0QmxhbmtJbmRleEluQXJyYXkgPSBvcmRlcmVkQWxsRWxlbWVudHNMaXN0LmluZGV4T2YoYmxhbmspO1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0c0JlZm9yZUJsYW5rID0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdFxyXG4gICAgICAgIC5zbGljZSgwLCBuZXh0QmxhbmtJbmRleEluQXJyYXkpXHJcbiAgICAgICAgLmZpbHRlcihlID0+IGUudHlwZSA9PT0gQ2xvemVFbGVtZW50VHlwZS5IaWdobGlnaHQpXHJcbiAgICAgICAgLm1hcChlID0+IGUgYXMgSGlnaGxpZ2h0KVxyXG4gICAgICAgIC5yZXZlcnNlKCk7XHJcbiAgICAgIHZhciBoaWdobGlnaHRzQWZ0ZXJCbGFuayA9IG9yZGVyZWRBbGxFbGVtZW50c0xpc3RcclxuICAgICAgICAuc2xpY2UobmV4dEJsYW5rSW5kZXhJbkFycmF5ICsgMSlcclxuICAgICAgICAuZmlsdGVyKGUgPT4gZS50eXBlID09PSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodClcclxuICAgICAgICAubWFwKGUgPT4gZSBhcyBIaWdobGlnaHQpO1xyXG4gICAgICBCbGFua0xvYWRlci5pbnN0YW5jZS5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChibGFuaywgaGlnaGxpZ2h0c0JlZm9yZUJsYW5rLCBoaWdobGlnaHRzQWZ0ZXJCbGFuayk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCbGFua0xvYWRlciB9IGZyb20gJy4uL2NvbnRlbnQtbG9hZGVycy9ibGFuay1sb2FkZXInO1xyXG5pbXBvcnQgeyBDbG96ZUxvYWRlciB9IGZyb20gJy4uL2NvbnRlbnQtbG9hZGVycy9jbG96ZS1sb2FkZXInO1xyXG5pbXBvcnQgeyBDbG96ZSB9IGZyb20gXCIuLi9tb2RlbHMvY2xvemVcIjtcclxuaW1wb3J0IHsgSURhdGFSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBDbG96ZVR5cGUsIFNlbGVjdEFsdGVybmF0aXZlcyB9IGZyb20gXCIuLi9tb2RlbHMvZW51bXNcIjtcclxuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSBcIi4uL21vZGVscy9oaWdobGlnaHRcIjtcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi4vbW9kZWxzL2JsYW5rXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBSYWN0aXZlRXZlbnRzS2V5cyBmcm9tICcuLi8uLi9saWIvcmFjdGl2ZS1ldmVudHMta2V5cyc7XHJcblxyXG5pbnRlcmZhY2UgU2NvcmVDaGFuZ2VkIHtcclxuICAoc2NvcmU6IG51bWJlciwgbWF4U2NvcmU6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBdXRvQ2hlY2tlZCB7XHJcbiAgKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTb2x2ZWQge1xyXG4gICgpOiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVHlwZWQge1xyXG4gICgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvemVDb250cm9sbGVyIHtcclxuICBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5O1xyXG5cclxuICBwcml2YXRlIGNsb3plOiBDbG96ZTtcclxuICBwcml2YXRlIGlzU2VsZWN0Q2xvemU6IGJvb2xlYW47XHJcblxyXG4gIHB1YmxpYyBvblNjb3JlQ2hhbmdlZDogU2NvcmVDaGFuZ2VkO1xyXG4gIHB1YmxpYyBvbkF1dG9DaGVja2VkOiBBdXRvQ2hlY2tlZDtcclxuICBwdWJsaWMgb25Tb2x2ZWQ6IFNvbHZlZDtcclxuICBwdWJsaWMgb25UeXBlZDogVHlwZWQ7XHJcblxyXG4gIC8vIFN0b3JhZ2Ugb2YgdGhlIHJhY3RpdmUgb2JqZWN0cyB0aGF0IGxpbmsgbW9kZWxzIGFuZCB2aWV3c1xyXG4gIHByaXZhdGUgaGlnaGxpZ2h0UmFjdGl2ZXM6IHsgW2lkOiBzdHJpbmddOiBSYWN0aXZlLlJhY3RpdmUgfSA9IHt9O1xyXG4gIHByaXZhdGUgYmxhbmtSYWN0aXZlczogeyBbaWQ6IHN0cmluZ106IFJhY3RpdmUuUmFjdGl2ZSB9ID0ge307XHJcblxyXG4gIHB1YmxpYyBnZXQgbWF4U2NvcmUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGN1cnJlbnRTY29yZSgpOiBudW1iZXIge1xyXG4gICAgdmFyIHNjb3JlID0gdGhpcy5jbG96ZS5ibGFua3MuZmlsdGVyKGIgPT4gYi5pc0NvcnJlY3QpLmxlbmd0aDtcclxuICAgIHJldHVybiBNYXRoLm1heCgwLCBzY29yZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGFsbEJsYW5rc0VudGVyZWQoKSB7XHJcbiAgICBpZiAodGhpcy5jbG96ZSlcclxuICAgICAgcmV0dXJuIHRoaXMuY2xvemUuYmxhbmtzLmV2ZXJ5KGJsYW5rID0+IGJsYW5rLmlzRXJyb3IgfHwgYmxhbmsuaXNDb3JyZWN0IHx8IGJsYW5rLmlzUmV0cnkpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc1NvbHZlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNsb3plLmlzU29sdmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0ZpbGxlZE91dCgpIHtcclxuICAgIGlmICghdGhpcy5jbG96ZSB8fCB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGggPT09IDApXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvemUuYmxhbmtzLnNvbWUoYiA9PiBiLmVudGVyZWRUZXh0ICE9PSAnJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzRnVsbHlGaWxsZWRPdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoID09PSAwKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5ldmVyeShiID0+IGIuZW50ZXJlZFRleHQgIT09ICcnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVwb3NpdG9yeTogSURhdGFSZXBvc2l0b3J5LCBwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUgTWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHVwIGFsbCBibGFua3MsIHRoZSBjbG96ZSBpdHNlbGYgYW5kIHRoZSByYWN0aXZlIGJpbmRpbmdzLlxyXG4gICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSByb290XHJcbiAgICovXHJcbiAgaW5pdGlhbGl6ZShyb290OiBIVE1MRWxlbWVudCwganF1ZXJ5OiBKUXVlcnkpIHtcclxuICAgIHRoaXMuanF1ZXJ5ID0ganF1ZXJ5O1xyXG4gICAgdGhpcy5pc1NlbGVjdENsb3plID0gdGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgdmFyIGJsYW5rcyA9IHRoaXMucmVwb3NpdG9yeS5nZXRCbGFua3MoKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1NlbGVjdENsb3plICYmIHRoaXMuc2V0dGluZ3Muc2VsZWN0QWx0ZXJuYXRpdmVzID09PSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWxsKSB7XHJcbiAgICAgIGZvciAodmFyIGJsYW5rIG9mIGJsYW5rcykge1xyXG4gICAgICAgIGxldCBvdGhlckJsYW5rcyA9IGJsYW5rcy5maWx0ZXIodiA9PiB2ICE9PSBibGFuayk7XHJcbiAgICAgICAgYmxhbmsubG9hZENob2ljZXNGcm9tT3RoZXJCbGFua3Mob3RoZXJCbGFua3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHNuaXBwZXRzID0gdGhpcy5yZXBvc2l0b3J5LmdldFNuaXBwZXRzKCk7XHJcbiAgICBibGFua3MuZm9yRWFjaChibGFuayA9PiBCbGFua0xvYWRlci5pbnN0YW5jZS5yZXBsYWNlU25pcHBldHMoYmxhbmssIHNuaXBwZXRzKSk7XHJcblxyXG4gICAgdGhpcy5jbG96ZSA9IENsb3plTG9hZGVyLmNyZWF0ZUNsb3plKHRoaXMucmVwb3NpdG9yeS5nZXRDbG96ZVRleHQoKSwgYmxhbmtzKTtcclxuXHJcbiAgICB2YXIgY29udGFpbmVycyA9IHRoaXMuY3JlYXRlQW5kQWRkQ29udGFpbmVycyhyb290KTtcclxuICAgIGNvbnRhaW5lcnMuY2xvemUuaW5uZXJIVE1MID0gdGhpcy5jbG96ZS5odG1sO1xyXG4gICAgdGhpcy5jcmVhdGVSYWN0aXZlQmluZGluZ3MoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQWxsID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbG96ZS5oaWRlQWxsSGlnaGxpZ2h0cygpO1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcclxuICAgICAgaWYgKCghYmxhbmsuaXNDb3JyZWN0KSAmJiBibGFuay5lbnRlcmVkVGV4dCAhPT0gXCJcIilcclxuICAgICAgICBibGFuay5ldmFsdWF0ZUF0dGVtcHQodHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gICAgdGhpcy5jaGVja0FuZE5vdGlmeUNvbXBsZXRlbmVzcygpO1xyXG4gIH1cclxuXHJcbiAgdGV4dFR5cGVkID0gKGJsYW5rOiBCbGFuaykgPT4ge1xyXG4gICAgYmxhbmsub25UeXBlZCgpO1xyXG4gICAgaWYgKHRoaXMub25UeXBlZClcclxuICAgICAgdGhpcy5vblR5cGVkKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMgPSAoYmxhbms6IEJsYW5rKSA9PiB7XHJcbiAgICBibGFuay5vbkZvY3Vzc2VkKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheUZlZWRiYWNrID0gKGJsYW5rOiBCbGFuaykgPT4ge1xyXG4gICAgYmxhbmsub25EaXNwbGF5RmVlZGJhY2soKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgfVxyXG5cclxuICBzaG93SGludCA9IChibGFuazogQmxhbmspID0+IHtcclxuICAgIHRoaXMuY2xvemUuaGlkZUFsbEhpZ2hsaWdodHMoKTtcclxuICAgIGJsYW5rLnNob3dIaW50KCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdENsb3NlVG9vbHRpcCA9IChibGFuazogQmxhbmspID0+IHtcclxuICAgIGJsYW5rLnJlbW92ZVRvb2x0aXAoKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgICB0aGlzLmpxdWVyeS5maW5kKFwiI1wiICsgYmxhbmsuaWQpLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0JsYW5rID0gKGJsYW5rOiBCbGFuaywgY2F1c2U6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKChjYXVzZSA9PT0gJ2JsdXInIHx8IGNhdXNlID09PSAnY2hhbmdlJykpIHtcclxuICAgICAgYmxhbmsubG9zdEZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhdXNlID09PSAnY2hhbmdlJyAmJiB0aGlzLm9uVHlwZWQpIHtcclxuICAgICAgdGhpcy5vblR5cGVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSB7XHJcbiAgICAgIGlmICghYmxhbmsuZW50ZXJlZFRleHQgfHwgYmxhbmsuZW50ZXJlZFRleHQgPT09IFwiXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5jbG96ZS5oaWRlQWxsSGlnaGxpZ2h0cygpO1xyXG4gICAgICBibGFuay5ldmFsdWF0ZUF0dGVtcHQoZmFsc2UpO1xyXG4gICAgICB0aGlzLmNoZWNrQW5kTm90aWZ5Q29tcGxldGVuZXNzKCk7XHJcbiAgICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgICAgIHRoaXMub25BdXRvQ2hlY2tlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKChjYXVzZSA9PT0gJ2VudGVyJylcclxuICAgICAgJiYgKCh0aGlzLnNldHRpbmdzLmF1dG9DaGVjayAmJiBibGFuay5pc0NvcnJlY3QgJiYgIXRoaXMuaXNTb2x2ZWQpXHJcbiAgICAgICAgfHwgIXRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSkge1xyXG4gICAgICAvLyBtb3ZlIHRvIG5leHQgYmxhbmtcclxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5jbG96ZS5ibGFua3MuaW5kZXhPZihibGFuayk7XHJcbiAgICAgIHZhciBuZXh0SWQ7XHJcbiAgICAgIHdoaWxlIChpbmRleCA8IHRoaXMuY2xvemUuYmxhbmtzLmxlbmd0aCAtIDEgJiYgIW5leHRJZCkge1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsb3plLmJsYW5rc1tpbmRleF0uaXNDb3JyZWN0KVxyXG4gICAgICAgICAgbmV4dElkID0gdGhpcy5jbG96ZS5ibGFua3NbaW5kZXhdLmlkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmV4dElkKVxyXG4gICAgICAgIHRoaXMuanF1ZXJ5LmZpbmQoXCIjXCIgKyBuZXh0SWQpLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xvemUucmVzZXQoKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgfVxyXG5cclxuICBzaG93U29sdXRpb25zID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbG96ZS5zaG93U29sdXRpb25zKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVBbmRBZGRDb250YWluZXJzKGFkZFRvOiBIVE1MRWxlbWVudCk6IHsgY2xvemU6IEhUTUxEaXZFbGVtZW50IH0ge1xyXG4gICAgdmFyIGNsb3plQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2xvemVDb250YWluZXJFbGVtZW50LmlkID0gJ2g1cC1jbG96ZS1jb250YWluZXInO1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgIGNsb3plQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbG96ZUNvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2g1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlJztcclxuICAgIH1cclxuICAgIGFkZFRvLmFwcGVuZENoaWxkKGNsb3plQ29udGFpbmVyRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2xvemU6IGNsb3plQ29udGFpbmVyRWxlbWVudFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSGlnaGxpZ2h0QmluZGluZyhoaWdobGlnaHQ6IEhpZ2hsaWdodCkge1xyXG4gICAgdGhpcy5oaWdobGlnaHRSYWN0aXZlc1toaWdobGlnaHQuaWRdID0gbmV3IFJhY3RpdmUoe1xyXG4gICAgICBlbDogJyNjb250YWluZXJfJyArIGhpZ2hsaWdodC5pZCxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4uL3ZpZXdzL2hpZ2hsaWdodC5yYWN0aXZlLmh0bWwnKSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG9iamVjdDogaGlnaGxpZ2h0XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVCbGFua0JpbmRpbmcoYmxhbms6IEJsYW5rKSB7XHJcbiAgICB2YXIgcmFjdGl2ZSA9IG5ldyBSYWN0aXZlKHtcclxuICAgICAgZWw6ICcjY29udGFpbmVyXycgKyBibGFuay5pZCxcclxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4uL3ZpZXdzL2JsYW5rLnJhY3RpdmUuaHRtbCcpLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaXNTZWxlY3RDbG96ZTogdGhpcy5pc1NlbGVjdENsb3plLFxyXG4gICAgICAgIGJsYW5rOiBibGFua1xyXG4gICAgICB9LFxyXG4gICAgICBldmVudHM6IHtcclxuICAgICAgICBlbnRlcjogUmFjdGl2ZUV2ZW50c0tleXMuZW50ZXIsXHJcbiAgICAgICAgZXNjYXBlOiBSYWN0aXZlRXZlbnRzS2V5cy5lc2NhcGUsXHJcbiAgICAgICAgYW55a2V5OiBSYWN0aXZlRXZlbnRzS2V5cy5hbnlrZXlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByYWN0aXZlLm9uKFwiY2hlY2tCbGFua1wiLCB0aGlzLmNoZWNrQmxhbmspO1xyXG4gICAgcmFjdGl2ZS5vbihcInNob3dIaW50XCIsIHRoaXMuc2hvd0hpbnQpO1xyXG4gICAgcmFjdGl2ZS5vbihcInRleHRUeXBlZFwiLCB0aGlzLnRleHRUeXBlZCk7XHJcbiAgICByYWN0aXZlLm9uKFwiY2xvc2VNZXNzYWdlXCIsIHRoaXMucmVxdWVzdENsb3NlVG9vbHRpcCk7XHJcbiAgICByYWN0aXZlLm9uKFwiZm9jdXNcIiwgdGhpcy5mb2N1cyk7XHJcbiAgICByYWN0aXZlLm9uKFwiZGlzcGxheUZlZWRiYWNrXCIsIHRoaXMuZGlzcGxheUZlZWRiYWNrKTtcclxuXHJcbiAgICB0aGlzLmJsYW5rUmFjdGl2ZXNbYmxhbmsuaWRdID0gcmFjdGl2ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUmFjdGl2ZUJpbmRpbmdzKCkge1xyXG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuY2xvemUuaGlnaGxpZ2h0cykge1xyXG4gICAgICB0aGlzLmNyZWF0ZUhpZ2hsaWdodEJpbmRpbmcoaGlnaGxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmNsb3plLmJsYW5rcykge1xyXG4gICAgICB0aGlzLmNyZWF0ZUJsYW5rQmluZGluZyhibGFuayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGFsbCB2aWV3cyBvZiBoaWdobGlnaHRzIGFuZCBibGFua3MuIENhbiBiZSBjYWxsZWQgd2hlbiBhIG1vZGVsXHJcbiAgICogd2FzIGNoYW5nZWRcclxuICAgKi9cclxuICBwcml2YXRlIHJlZnJlc2hDbG96ZSgpIHtcclxuICAgIGZvciAodmFyIGhpZ2hsaWdodCBvZiB0aGlzLmNsb3plLmhpZ2hsaWdodHMpIHtcclxuICAgICAgdmFyIGhpZ2hsaWdodFJhY3RpdmUgPSB0aGlzLmhpZ2hsaWdodFJhY3RpdmVzW2hpZ2hsaWdodC5pZF07XHJcbiAgICAgIGhpZ2hsaWdodFJhY3RpdmUuc2V0KFwib2JqZWN0XCIsIGhpZ2hsaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcclxuICAgICAgdmFyIGJsYW5rUmFjdGl2ZSA9IHRoaXMuYmxhbmtSYWN0aXZlc1tibGFuay5pZF07XHJcbiAgICAgIGJsYW5rUmFjdGl2ZS5zZXQoXCJibGFua1wiLCBibGFuayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrQW5kTm90aWZ5Q29tcGxldGVuZXNzID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKHRoaXMub25TY29yZUNoYW5nZWQpXHJcbiAgICAgIHRoaXMub25TY29yZUNoYW5nZWQodGhpcy5jdXJyZW50U2NvcmUsIHRoaXMubWF4U2NvcmUpO1xyXG5cclxuICAgIGlmICh0aGlzLmNsb3plLmlzU29sdmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLm9uU29sdmVkKVxyXG4gICAgICAgIHRoaXMub25Tb2x2ZWQoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlcmlhbGl6ZUNsb3plKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLmNsb3plLnNlcmlhbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc2VyaWFsaXplQ2xvemUoZGF0YTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgIWRhdGEpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHRoaXMuY2xvemUuZGVzZXJpYWxpemUoZGF0YSk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29ycmVjdEFuc3dlckxpc3QoKTogc3RyaW5nW11bXSB7XHJcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoID09PSAwKVxyXG4gICAgICByZXR1cm4gW1tdXTtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGJsYW5rLmdldENvcnJlY3RBbnN3ZXJzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSAgXHJcbn0iLCIvKipcclxuICogQ3JlYXRlcyBhIGxpc3Qgb2YgYWxsIHBvc3NpYmxlIHBlcm11dGF0aW9ucyBvZiBhIGxpc3Qgb2YgbGlzdHMuXHJcbiAqIEBwYXJhbSBsaXN0IFRoZSBsaXN0IHRvIHBlcm11dGUgb3Zlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQZXJtdXRhdGlvbnMobGlzdDogYW55W11bXSk6IGFueVtdW10ge1xyXG4gIGxldCBvdXRwdXQ6IGFueVtdW10gPSBbW11dO1xyXG4gIGZvciAobGV0IGN1cnJlbnRTdWJsaXN0IG9mIGxpc3QpIHtcclxuICAgIGxldCBuZXdPdXRwdXQgPSBbXTtcclxuICAgIGZvciAobGV0IHN1Ymxpc3RPYmplY3Qgb2YgY3VycmVudFN1Ymxpc3QpIHtcclxuICAgICAgZm9yICh2YXIgbyBvZiBvdXRwdXQpIHtcclxuICAgICAgICB2YXIgbmV3TGlzdCA9IG8uc2xpY2UoKTtcclxuICAgICAgICBuZXdMaXN0LnB1c2goc3VibGlzdE9iamVjdClcclxuICAgICAgICBuZXdPdXRwdXQucHVzaChuZXdMaXN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3V0cHV0ID0gbmV3T3V0cHV0O1xyXG4gIH1cclxuICByZXR1cm4gb3V0cHV0O1xyXG59IiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgY2xlYW5zIGh0bWwgc3RyaW5ncy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBVbnJ3YXBwZXIge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQ2xlYW5zIGh0bWwgc3RyaW5ncyBieSByZW1vdmluZyB0aGUgb3V0bW9zdCBodG1sIHRhZyBvZiB0aGUgc3RyaW5nIGlmIHRoZXJlIGlzIG9ubHkgb25lIHRhZy5cclxuICAgKiBFeGFtcGxlczogIFwiPHA+bXkgdGV4dDwvcD5cIlwiIGJlY29tZXMgXCJteSB0ZXh0XCJcclxuICAgKiAgICAgICAgICAgIFwiPHA+dGV4dCAxPC9wPjxwPnRleHQgMjwvcDI+XCIgc3RheXNcclxuICAgKiBAcGFyYW0gaHRtbCBUaGUgaHRtbCBzdHJpbmdcclxuICAgKiBAcmV0dXJucyB0aGUgY2xlYW5lZCBodG1sIHN0cmluZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyB1bndyYXAoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhciBwYXJzZWQgPSB0aGlzLmpxdWVyeShodG1sKTtcclxuICAgIGlmIChwYXJzZWQubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG4gICAgbGV0IHVud3JhcHBlZCA9IHBhcnNlZC51bndyYXAoKS5odG1sKCk7XHJcbiAgICByZXR1cm4gdW53cmFwcGVkO1xyXG4gIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuL2hpZ2hsaWdodCc7XHJcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzJztcclxuaW1wb3J0ICogYXMganNkaWZmIGZyb20gJ2RpZmYnO1xyXG5cclxuZXhwb3J0IGVudW0gQ29ycmVjdG5lc3Mge1xyXG4gIEV4YWN0TWF0Y2gsXHJcbiAgQ2xvc2VNYXRjaCxcclxuICBOb01hdGNoXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmFsdWF0aW9uIHtcclxuICBwdWJsaWMgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzO1xyXG4gIHB1YmxpYyBjaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgdXNlZEFsdGVybmF0aXZlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VkQW5zd2VyOiBBbnN3ZXIpIHtcclxuICAgIHRoaXMuY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5Ob01hdGNoO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQgPSAwO1xyXG4gICAgdGhpcy51c2VkQWx0ZXJuYXRpdmUgPSBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBwb3NzaWJsZSBhbnN3ZXIgdGhlIGNvbnRlbnQgYXV0aG9yIGVudGVycyBmb3IgYSBibGFuaywgZS5nLiB0aGUgY29ycmVjdCBvciBhbiBpbmNvcnJlY3QgYW5zd2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuc3dlciB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFsdGVybmF0aXZlcyBhcmUgZXF1aXZhbGVudCBzdHJpbmdzIHRoYXQgdGhlIGxpYnJhcnkgc2hvdWxkIHRyZWF0IHRoZSBzYW1lIHdheSwgZS5nLiBzaG93IHRoZSBzYW1lIGZlZWRiYWNrLiBcclxuICAgKi9cclxuICBhbHRlcm5hdGl2ZXM6IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGlzIHRoZSBtZXNzYWdlIHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIGFuc3dlciB3YXMgZW50ZXJlZCBieSB0aGUgdXNlci5cclxuICAgKi9cclxuICBtZXNzYWdlOiBNZXNzYWdlO1xyXG5cclxuICAvKipcclxuICAgKiBJcyB0cnVlIGlmIHRoZSBleHBlY3RlZCB0ZXh0IGZvciB0aGlzIGFuc3dlciBpcyBlbXB0eS5cclxuICAgKi9cclxuICBhcHBsaWVzQWx3YXlzOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGFuc3dlclRleHQgLSBUaGUgZXhwZWN0ZWQgYW5zd2VyLiBBbHRlcm5hdGl2ZXMgYXJlIHNlcGFyYXRlZCBieSB8IG9yIDsgLiAoZS5nLiBcIkFsdGVybmF0aXZlIDF8QWx0ZXJuYXRpdmUgMnxBbHRlcm5hdGl2ZSAzfC4uLlwiICAtb3ItIFwiQWx0ZXJuYXRpdmUgMTtBbHRlcm5hdGl2ZSAyO0FsdGVybmF0aXZlIDNcIilcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHJlYWN0aW9uIC0gVGhlIHRvb2x0aXAgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkLiBGb3JtYXQ6IFRvb2x0aXAgVGV4dDshIS0xISEgISErMSEhXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoYW5zd2VyVGV4dDogc3RyaW5nLCByZWFjdGlvbjogc3RyaW5nLCBzaG93SGlnaGxpZ2h0OiBib29sZWFuLCBoaWdobGlnaHQ6IG51bWJlciwgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzKSB7XHJcbiAgICB0aGlzLmFsdGVybmF0aXZlcyA9IGFuc3dlclRleHQuc3BsaXQoL1xcLy8pLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJlYWN0aW9uLCBzaG93SGlnaGxpZ2h0LCBoaWdobGlnaHQpO1xyXG4gICAgaWYgKGFuc3dlclRleHQudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuYXBwbGllc0Fsd2F5cyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFwcGxpZXNBbHdheXMgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvb2tzIHRocm91Z2ggdGhlIG9iamVjdCdzIG1lc3NhZ2UgaWRzIGFuZCBzdG9yZXMgdGhlIHJlZmVyZW5jZXMgdG8gdGhlIGhpZ2hsaWdodCBvYmplY3QgZm9yIHRoZXNlIGlkcy5cclxuICAgKiBAcGFyYW0gIHtIaWdobGlnaHRbXX0gaGlnaGxpZ2h0c0JlZm9yZVxyXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQWZ0ZXJcclxuICAgKi9cclxuICBwdWJsaWMgbGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pIHtcclxuICAgIHRoaXMubWVzc2FnZS5saW5rSGlnaGxpZ2h0KGhpZ2hsaWdodHNCZWZvcmUsIGhpZ2hsaWdodHNBZnRlcik7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFR1cm5zIG9uIHRoZSBoaWdobGlnaHRzIHNldCBieSB0aGUgY29udGVudCBhdXRob3IgZm9yIHRoaXMgYW5zd2VyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3RpdmF0ZUhpZ2hsaWdodCgpIHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50KVxyXG4gICAgICB0aGlzLm1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50LmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhblN0cmluZyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdGV4dCA9IHRleHQudHJpbSgpO1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXFxzezIsfS9nLCBcIiBcIik7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIExvb2tzIHRocm91Z2ggdGhlIGRpZmYgYW5kIGNoZWNrcyBob3cgbWFueSBjaGFyYWN0ZXIgY2hhbmdlIG9wZXJhdGlvbnMgYXJlIG5lZWRlZCB0byB0dXJuIG9uZSBzdHJpbmcgaW50byB0aGUgb3RoZXIuIFNob3VsZCByZXR1cm4gdGhlIHNhbWUgcmVzdWx0cyBhcyB0aGUgTGV2ZW5zdGhlaW4gZGlzdGFuY2UuIFxyXG4gICAqIEBwYXJhbSAge1t7YWRkZWQ/OmJvb2xlYW4sIGJvb2xlYW46IHJlbW92ZWQ/LCBzdHJpbmc6IHZhbHVlfV19IGRpZmYgLSBhcyByZXR1cm5lZCBieSBqc2RpZmZcclxuICAgKiBAcmV0dXJucyBudW1iZXIgLSB0aGUgY291bnQgb2YgY2hhbmdlcyAocmVwbGFjZSwgYWRkLCBkZWxldGUpIG5lZWRlZCB0byBjaGFuZ2UgdGhlIHRleHQgZnJvbSBvbmUgc3RyaW5nIHRvIHRoZSBvdGhlciBcclxuICAgKi9cclxuICBwcml2YXRlIGdldENoYW5nZXNDb3VudEZyb21EaWZmKGRpZmY6IGpzZGlmZi5DaGFuZ2VbXSk6IG51bWJlciB7XHJcbiAgICB2YXIgdG90YWxDaGFuZ2VzQ291bnQgPSAwO1xyXG4gICAgdmFyIGxhc3RUeXBlID0gXCJcIjtcclxuICAgIHZhciBsYXN0Q291bnQgPSAwO1xyXG5cclxuICAgIGZvciAodmFyIGVsZW1lbnQgb2YgZGlmZikge1xyXG4gICAgICBpZiAoZWxlbWVudC5yZW1vdmVkKSB7XHJcbiAgICAgICAgdG90YWxDaGFuZ2VzQ291bnQgKz0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgbGFzdFR5cGUgPSBcInJlbW92ZWRcIjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChlbGVtZW50LmFkZGVkKSB7XHJcbiAgICAgICAgaWYgKGxhc3RUeXBlID09PSBcInJlbW92ZWRcIikge1xyXG4gICAgICAgICAgaWYgKGxhc3RDb3VudCA8IGVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ2hhbmdlc0NvdW50ICs9IGVsZW1lbnQudmFsdWUubGVuZ3RoIC0gbGFzdENvdW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b3RhbENoYW5nZXNDb3VudCArPSBlbGVtZW50LnZhbHVlLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdFR5cGUgPSBcImFkZGVkXCI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGFzdFR5cGUgPSBcInNhbWVcIjtcclxuICAgICAgfVxyXG4gICAgICBsYXN0Q291bnQgPSBlbGVtZW50LnZhbHVlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWxDaGFuZ2VzQ291bnQ7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaG93IG1hbnkgY2hhcmFjdGVycyBjYW4gYmUgd3JvbmcgdG8gc3RpbGwgYmUgY291bnRlZCBhcyBhIHNwZWxsaW5nIG1pc3Rha2UuXHJcbiAgICogSWYgc3BlbGxpbmcgbWlzdGFrZXMgYXJlIHR1cm5lZCBvZmYgdGhyb3VnaCB0aGUgc2V0dGluZ3MsIGl0IHdpbGwgcmV0dXJuIDAuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0ZXh0XHJcbiAgICogQHJldHVybnMgbnVtYmVyXHJcbiAgICovXHJcblxyXG4gIHByaXZhdGUgZ2V0QWNjZXB0YWJsZVNwZWxsaW5nTWlzdGFrZXModGV4dDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHZhciBhY2NlcHRhYmxlVHlwb0NvdW50OiBudW1iZXI7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy53YXJuU3BlbGxpbmdFcnJvcnMgfHwgdGhpcy5zZXR0aW5ncy5hY2NlcHRTcGVsbGluZ0Vycm9ycykgLy8gVE9ETzogY29uc2lkZXIgcmVtb3ZhbFxyXG4gICAgICBhY2NlcHRhYmxlVHlwb0NvdW50ID0gTWF0aC5mbG9vcih0ZXh0Lmxlbmd0aCAvIDEwKSArIDE7XHJcbiAgICBlbHNlXHJcbiAgICAgIGFjY2VwdGFibGVUeXBvQ291bnQgPSAwO1xyXG5cclxuICAgIHJldHVybiBhY2NlcHRhYmxlVHlwb0NvdW50O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHRleHQgZW50ZXJlZCBieSB0aGUgdXNlciBpbiBhbiBldHRlbXB0IGlzIG1hdGNoZWQgYnkgdGhlIGFuc3dlcixcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGF0dGVtcHQgVGhlIHRleHQgZW50ZXJlZCBieSB0aGUgdXNlci5cclxuICAgKiBAcmV0dXJucyBFdmFsdWF0aW9uIGluZGljYXRlcyBpZiB0aGUgZW50ZXJlZCB0ZXh0IGlzIG1hdGNoZWQgYnkgdGhlIGFuc3dlci5cclxuICAgKi9cclxuICBwdWJsaWMgZXZhbHVhdGVBdHRlbXB0KGF0dGVtcHQ6IHN0cmluZyk6IEV2YWx1YXRpb24ge1xyXG4gICAgdmFyIGNsZWFuZWRBdHRlbXB0ID0gdGhpcy5jbGVhblN0cmluZyhhdHRlbXB0KTtcclxuICAgIHZhciBldmFsdWF0aW9uID0gbmV3IEV2YWx1YXRpb24odGhpcyk7XHJcblxyXG4gICAgZm9yICh2YXIgYWx0ZXJuYXRpdmUgb2YgdGhpcy5hbHRlcm5hdGl2ZXMpIHtcclxuICAgICAgdmFyIGNsZWFuZWRBbHRlcm5hdGl2ZSA9IHRoaXMuY2xlYW5TdHJpbmcoYWx0ZXJuYXRpdmUpO1xyXG5cclxuICAgICAgdmFyIGRpZmYgPSBqc2RpZmYuZGlmZkNoYXJzKGNsZWFuZWRBbHRlcm5hdGl2ZSwgY2xlYW5lZEF0dGVtcHQsXHJcbiAgICAgICAgeyBpZ25vcmVDYXNlOiAhdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlIH0pO1xyXG4gICAgICB2YXIgY2hhbmdlQ291bnQgPSB0aGlzLmdldENoYW5nZXNDb3VudEZyb21EaWZmKGRpZmYpO1xyXG5cclxuICAgICAgaWYgKGNoYW5nZUNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgZXZhbHVhdGlvbi51c2VkQWx0ZXJuYXRpdmUgPSBjbGVhbmVkQWx0ZXJuYXRpdmU7XHJcbiAgICAgICAgZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9IENvcnJlY3RuZXNzLkV4YWN0TWF0Y2g7XHJcbiAgICAgICAgcmV0dXJuIGV2YWx1YXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaGFuZ2VDb3VudCA8PSB0aGlzLmdldEFjY2VwdGFibGVTcGVsbGluZ01pc3Rha2VzKGFsdGVybmF0aXZlKVxyXG4gICAgICAgICYmIChldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCA9PT0gMCB8fCBjaGFuZ2VDb3VudCA8IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KSkge1xyXG4gICAgICAgIGV2YWx1YXRpb24udXNlZEFsdGVybmF0aXZlID0gY2xlYW5lZEFsdGVybmF0aXZlO1xyXG4gICAgICAgIGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5DbG9zZU1hdGNoO1xyXG4gICAgICAgIGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50ID0gY2hhbmdlQ291bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBldmFsdWF0aW9uO1xyXG4gIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2xvemVFbGVtZW50LCBDbG96ZUVsZW1lbnRUeXBlIH0gZnJvbSAnLi9jbG96ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgQW5zd2VyLCBDb3JyZWN0bmVzcyB9IGZyb20gJy4vYW5zd2VyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlLCBDbG96ZVR5cGUsIFNlbGVjdEFsdGVybmF0aXZlcyB9IGZyb20gJy4vZW51bXMnO1xyXG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24sIExvY2FsaXphdGlvbkxhYmVscyB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbic7XHJcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBnZXRMb25nZXN0U3RyaW5nLCBzaHVmZmxlQXJyYXkgfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnNcIjtcclxuaW1wb3J0ICogYXMganNkaWZmIGZyb20gJ2RpZmYnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsYW5rIGV4dGVuZHMgQ2xvemVFbGVtZW50IHtcclxuICAvLyBjb250ZW50XHJcbiAgY29ycmVjdEFuc3dlcnM6IEFuc3dlcltdO1xyXG4gIGluY29ycmVjdEFuc3dlcnM6IEFuc3dlcltdO1xyXG4gIGhpbnQ6IE1lc3NhZ2U7XHJcbiAgaWQ6IHN0cmluZztcclxuICBjaG9pY2VzOiBzdHJpbmdbXTtcclxuICBoYXNIaW50OiBib29sZWFuO1xyXG5cclxuICAvLyB2aWV3bW9kZWwgc3R1ZmZcclxuXHJcbiAgbGFzdENoZWNrZWRUZXh0OiBzdHJpbmc7XHJcbiAgZW50ZXJlZFRleHQ6IHN0cmluZztcclxuICBpc0NvcnJlY3Q6IGJvb2xlYW47XHJcbiAgaXNFcnJvcjogYm9vbGVhbjtcclxuICBpc1JldHJ5OiBib29sZWFuO1xyXG4gIGhhc1BlbmRpbmdGZWVkYmFjazogYm9vbGVhbjtcclxuICBpc1Nob3dpbmdTb2x1dGlvbjogYm9vbGVhbjtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgbWluVGV4dExlbmd0aDogbnVtYmVyO1xyXG4gIHNwZWVjaEJ1YmJsZTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgaW5jb3JyZWN0IGFuc3dlcnMgYWZ0ZXIgaW5pdGlhbGl6aW5nIHRoZSBvYmplY3QuIENhbGwgZmluaXNoSW5pdGlhbGl6YXRpb24oKVxyXG4gICAqIHdoZW4gZG9uZS5cclxuICAgKiBAcGFyYW0gIHtJU2V0dGluZ3N9IHNldHRpbmdzXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBpZFxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY29ycmVjdFRleHQ/XHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBoaW50VGV4dD9cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLCBpZDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZW50ZXJlZFRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy5jb3JyZWN0QW5zd2VycyA9IG5ldyBBcnJheSgpO1xyXG4gICAgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzID0gbmV3IEFycmF5KCk7XHJcbiAgICB0aGlzLmNob2ljZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgIHRoaXMudHlwZSA9IENsb3plRWxlbWVudFR5cGUuQmxhbms7XHJcblxyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsIHRoaXMgbWV0aG9kIHdoZW4gYWxsIGluY29ycmVjdCBhbnN3ZXJzIGhhdmUgYmVlbiBhZGRlZC5cclxuICAqL1xyXG4gIHB1YmxpYyBmaW5pc2hJbml0aWFsaXphdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCAmJiB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsdGVybmF0aXZlcykge1xyXG4gICAgICB0aGlzLmxvYWRDaG9pY2VzRnJvbU93bkFsdGVybmF0aXZlcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYWxjdWxhdGVNaW5UZXh0TGVuZ3RoKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ29ycmVjdEFuc3dlcihhbnN3ZXI6IEFuc3dlcikge1xyXG4gICAgdGhpcy5jb3JyZWN0QW5zd2Vycy5wdXNoKGFuc3dlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29ycmVjdEFuc3dlcnMoKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhbnN3ZXIuYWx0ZXJuYXRpdmVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0SGludChtZXNzYWdlOiBNZXNzYWdlKSB7XHJcbiAgICB0aGlzLmhpbnQgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5oYXNIaW50ID0gdGhpcy5oaW50LnRleHQgIT09IFwiXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoZSBpbmNvcnJlY3QgYW5zd2VyIHRvIHRoZSBsaXN0LlxyXG4gICAqIEBwYXJhbSB0ZXh0IC0gV2hhdCB0aGUgdXNlciBtdXN0IGVudGVyLlxyXG4gICAqIEBwYXJhbSByZWFjdGlvbiAgLSBXaGF0IHRoZSB1c2VyIGdldHMgZGlzcGxheWVkIHdoZW4gaGUgZW50ZXJlcyB0aGUgdGV4dC5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkSW5jb3JyZWN0QW5zd2VyKHRleHQ6IHN0cmluZywgcmVhY3Rpb246IHN0cmluZywgc2hvd0hpZ2hsaWdodDogYm9vbGVhbiwgaGlnaGxpZ2h0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5wdXNoKFxyXG4gICAgICBuZXcgQW5zd2VyKHRleHQsIHJlYWN0aW9uLCBzaG93SGlnaGxpZ2h0LCBoaWdobGlnaHQsIHRoaXMuc2V0dGluZ3MpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaG93IG1hbnkgY2hhcmFjdGVycyB0aGUgaW5wdXQgYm94IG11c3QgaGF2ZSBiZSB0byBhbGxvdyBmb3IgYWxsIGNvcnJlY3QgYW5zd2Vycy5cclxuICAgKi9cclxuICAvLyBUT0RPOiByZWZhY3RvclxyXG4gIHByaXZhdGUgY2FsY3VsYXRlTWluVGV4dExlbmd0aCgpOiB2b2lkIHtcclxuICAgIHZhciBhbnN3ZXJzOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgZm9yIChsZXQgY29ycmVjdEFuc3dlciBvZiB0aGlzLmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgIGFuc3dlcnMucHVzaChnZXRMb25nZXN0U3RyaW5nKGNvcnJlY3RBbnN3ZXIuYWx0ZXJuYXRpdmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgIGZvciAobGV0IGluY29ycmVjdEFuc3dlciBvZiB0aGlzLmluY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgICBhbnN3ZXJzLnB1c2goZ2V0TG9uZ2VzdFN0cmluZyhpbmNvcnJlY3RBbnN3ZXIuYWx0ZXJuYXRpdmVzKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9uZ2VzdEFuc3dlciA9IGdldExvbmdlc3RTdHJpbmcoYW5zd2Vycyk7XHJcbiAgICB2YXIgbCA9IGxvbmdlc3RBbnN3ZXIubGVuZ3RoO1xyXG4gICAgdGhpcy5taW5UZXh0TGVuZ3RoID0gTWF0aC5tYXgoMTAsIGwgLSAobCAlIDEwKSArIDEwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGNob2ljZXMgZnJvbSBhbGwgYWx0ZXJuYXRpdmVzIHByb3ZpZGVkIGJ5XHJcbiAgICogdGhlIGNvcnJlY3QgYW5kIGluY29ycmVjdCBhbnN3ZXJzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZENob2ljZXNGcm9tT3duQWx0ZXJuYXRpdmVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHRoaXMuY2hvaWNlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xyXG4gICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGFuc3dlciBvZiB0aGlzLmluY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xyXG4gICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hvaWNlcyA9IHNodWZmbGVBcnJheSh0aGlzLmNob2ljZXMpO1xyXG4gICAgdGhpcy5jaG9pY2VzLnVuc2hpZnQoXCJcIik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2hvaWNlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGNob2ljZXMgZnJvbSBhbGwgY29ycmVjdCBhbnN3ZXJzIG9mIHRoZSBjbG96ZS5cclxuICAgKiBAcGFyYW0gb3RoZXJCbGFua3MgQWxsIE9USEVSIGJsYW5rcyBpbiB0aGUgY2xvemUuIChleGNsdWRlcyB0aGUgY3VycmVudCBvbmUhKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2FkQ2hvaWNlc0Zyb21PdGhlckJsYW5rcyhvdGhlckJsYW5rczogQmxhbmtbXSk6IHN0cmluZ1tdIHtcclxuICAgIGxldCBvd25DaG9pY2VzID0gbmV3IEFycmF5KCk7XHJcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgdGhpcy5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XHJcbiAgICAgICAgb3duQ2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvdGhlckNob2ljZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgIGZvciAobGV0IG90aGVyQmxhbmsgb2Ygb3RoZXJCbGFua3MpIHtcclxuICAgICAgZm9yIChsZXQgYW5zd2VyIG9mIG90aGVyQmxhbmsuY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XHJcbiAgICAgICAgICBvdGhlckNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJDaG9pY2VzID0gc2h1ZmZsZUFycmF5KG90aGVyQ2hvaWNlcyk7XHJcblxyXG4gICAgbGV0IG1heENob2ljZXMgPSB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb247XHJcbiAgICBpZiAobWF4Q2hvaWNlcyA9PT0gdW5kZWZpbmVkIHx8IG1heENob2ljZXMgPT09IDApXHJcbiAgICAgIG1heENob2ljZXMgPSBvd25DaG9pY2VzLmxlbmd0aCArIG90aGVyQ2hvaWNlcy5sZW5ndGg7XHJcblxyXG4gICAgbGV0IGxlZnRPdmVyQ2hvaWNlcyA9IG1heENob2ljZXMgLSBvd25DaG9pY2VzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVmdE92ZXJDaG9pY2VzICYmIHggPCBvdGhlckNob2ljZXMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgaWYgKG93bkNob2ljZXMuaW5kZXhPZihvdGhlckNob2ljZXNbeF0pID49IDApIHtcclxuICAgICAgICBsZWZ0T3ZlckNob2ljZXMrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvd25DaG9pY2VzLnB1c2gob3RoZXJDaG9pY2VzW3hdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hvaWNlcyA9IHNodWZmbGVBcnJheShvd25DaG9pY2VzKTtcclxuICAgIHRoaXMuY2hvaWNlcy51bnNoaWZ0KFwiXCIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNob2ljZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENsZWFycyB0aGUgYmxhbmsgZnJvbSBhbGwgZW50ZXJlZCB0ZXh0IGFuZCBoaWRlcyBwb3B1cHMuXHJcbiAgKi9cclxuICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gXCJcIjtcclxuICAgIHRoaXMubGFzdENoZWNrZWRUZXh0ID0gXCJcIjtcclxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xyXG4gICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Ob25lKTtcclxuICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBibGFuayB0byBhIHN0YXRlIGluIHdoaWNoIHRoZSBjb3JyZWN0IHNvbHV0aW9uIGlmIHNob3duIGlmIHRoZSB1c2VyXHJcbiAgICogaGFzbid0IGVudGVyZWQgYSBjb3JyZWN0IG9uZSBzbyBmYXIuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3dTb2x1dGlvbigpIHtcclxuICAgIHRoaXMuZXZhbHVhdGVBdHRlbXB0KHRydWUpO1xyXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XHJcbiAgICBpZiAodGhpcy5pc0NvcnJlY3QpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuZW50ZXJlZFRleHQgPSB0aGlzLmNvcnJlY3RBbnN3ZXJzWzBdLmFsdGVybmF0aXZlc1swXTtcclxuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuU2hvd1NvbHV0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZvY3Vzc2VkKCkge1xyXG4gICAgaWYgKHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrKSB7XHJcbiAgICAgIHRoaXMuZXZhbHVhdGVBdHRlbXB0KGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLk5vbmUpO1xyXG4gICAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25EaXNwbGF5RmVlZGJhY2soKSB7XHJcbiAgICBpZiAodGhpcy5oYXNQZW5kaW5nRmVlZGJhY2spIHtcclxuICAgICAgdGhpcy5ldmFsdWF0ZUF0dGVtcHQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwbGF5VG9vbHRpcChtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IE1lc3NhZ2VUeXBlLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4sIGlkPzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN1cnByZXNzVG9vbHRpcClcclxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zaG93KGlkID8gaWQgOiB0aGlzLmlkLCBtZXNzYWdlLCB0aGlzLCB0eXBlKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc1BlbmRpbmdGZWVkYmFjayA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVG9vbHRpcCgpIHtcclxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUb29sdGlwRXJyb3JUZXh0KG1lc3NhZ2U6IE1lc3NhZ2UsIHN1cnByZXNzVG9vbHRpcDogYm9vbGVhbikge1xyXG4gICAgaWYgKG1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAobWVzc2FnZS50ZXh0LCBNZXNzYWdlVHlwZS5FcnJvciwgc3VycHJlc3NUb29sdGlwLCBtZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudC5pZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcChtZXNzYWdlLnRleHQsIE1lc3NhZ2VUeXBlLkVycm9yLCBzdXJwcmVzc1Rvb2x0aXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTcGVsbGluZ01pc3Rha2VNZXNzYWdlKGV4cGVjdGVkVGV4dDogc3RyaW5nLCBlbnRlcmVkVGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMudHlwb01lc3NhZ2UpXHJcblxyXG4gICAgdmFyIGRpZmYgPSBqc2RpZmYuZGlmZkNoYXJzKGV4cGVjdGVkVGV4dCwgZW50ZXJlZFRleHQsIHsgaWdub3JlQ2FzZTogIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSB9KTtcclxuXHJcbiAgICB2YXIgbWlzdGFrZVNwYW4gPSB0aGlzLmpxdWVyeShcIjxzcGFuLz5cIiwgeyBcImNsYXNzXCI6IFwic3BlbGxpbmctbWlzdGFrZVwiIH0pO1xyXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRpZmYubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIHZhciBwYXJ0ID0gZGlmZltpbmRleF07XHJcbiAgICAgIHZhciBzcGFuQ2xhc3MgPSAnJztcclxuICAgICAgaWYgKHBhcnQucmVtb3ZlZCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gZGlmZi5sZW5ndGggLSAxIHx8ICFkaWZmW2luZGV4ICsgMV0uYWRkZWQpIHtcclxuICAgICAgICAgIHBhcnQudmFsdWUgPSBwYXJ0LnZhbHVlLnJlcGxhY2UoLy4vZywgXCJfXCIpO1xyXG4gICAgICAgICAgc3BhbkNsYXNzID0gJ21pc3NpbmctY2hhcmFjdGVyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhcnQuYWRkZWQpIHtcclxuICAgICAgICBzcGFuQ2xhc3MgPSAnbWlzdGFrZW4tY2hhcmFjdGVyJztcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHNwYW4gPSB0aGlzLmpxdWVyeShcIjxzcGFuLz5cIiwgeyBcImNsYXNzXCI6IHNwYW5DbGFzcywgXCJodG1sXCI6IHBhcnQudmFsdWUucmVwbGFjZShcIiBcIiwgXCImbmJzcDtcIikgfSk7XHJcbiAgICAgIG1pc3Rha2VTcGFuLmFwcGVuZChzcGFuKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFwiQG1pc3Rha2VcIiwgdGhpcy5qcXVlcnkoXCI8c3Bhbi8+XCIpLmFwcGVuZChtaXN0YWtlU3BhbikuaHRtbCgpKTtcclxuICAgIHJldHVybiBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBlbnRlcmVkIHRleHQgaXMgdGhlIGNvcnJlY3QgYW5zd2VyIG9yIG9uZSBvZiB0aGUgXHJcbiAgICogaW5jb3JyZWN0IG9uZXMgYW5kIGdpdmVzIHRoZSB1c2VyIGZlZWRiYWNrIGFjY29yZGluZ2x5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBldmFsdWF0ZUF0dGVtcHQoc3VycHJlc3NUb29sdGlwczogYm9vbGVhbiwgZm9yY2VDaGVjaz86IGJvb2xlYW4pIHtcclxuICAgIGlmICghdGhpcy5oYXNQZW5kaW5nRmVlZGJhY2sgJiYgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPT09IHRoaXMuZW50ZXJlZFRleHQgJiYgIWZvcmNlQ2hlY2spXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IHRoaXMuZW50ZXJlZFRleHQudG9TdHJpbmcoKTtcclxuICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcclxuXHJcbiAgICB2YXIgZXhhY3RDb3JyZWN0TWF0Y2hlcyA9IHRoaXMuY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xyXG4gICAgdmFyIGNsb3NlQ29ycmVjdE1hdGNoZXMgPSB0aGlzLmNvcnJlY3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdCh0aGlzLmVudGVyZWRUZXh0KSkuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuQ2xvc2VNYXRjaCkuc29ydChldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KTtcclxuICAgIHZhciBleGFjdEluY29ycmVjdE1hdGNoZXMgPSB0aGlzLmluY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xyXG4gICAgdmFyIGNsb3NlSW5jb3JyZWN0TWF0Y2hlcyA9IHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XHJcblxyXG4gICAgaWYgKGV4YWN0Q29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkNvcnJlY3QpO1xyXG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuZW50ZXJlZFRleHQgPSBleGFjdENvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4YWN0SW5jb3JyZWN0TWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuRXJyb3IpO1xyXG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoZXhhY3RJbmNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbnN3ZXIsIHN1cnByZXNzVG9vbHRpcHMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsb3NlQ29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy53YXJuU3BlbGxpbmdFcnJvcnMpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKHRoaXMuZ2V0U3BlbGxpbmdNaXN0YWtlTWVzc2FnZShjbG9zZUNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZSwgdGhpcy5lbnRlcmVkVGV4dCksIE1lc3NhZ2VUeXBlLlJldHJ5LCBzdXJwcmVzc1Rvb2x0aXBzKTtcclxuICAgICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLlJldHJ5KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWNjZXB0U3BlbGxpbmdFcnJvcnMpIHtcclxuICAgICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkNvcnJlY3QpO1xyXG4gICAgICAgIHRoaXMuZW50ZXJlZFRleHQgPSBjbG9zZUNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xvc2VJbmNvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5FcnJvcik7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yVG9vbHRpcChjbG9zZUluY29ycmVjdE1hdGNoZXNbMF0udXNlZEFuc3dlciwgc3VycHJlc3NUb29sdGlwcyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWx3YXlzQXBwbHlpbmdBbnN3ZXJzID0gdGhpcy5pbmNvcnJlY3RBbnN3ZXJzLmZpbHRlcihhID0+IGEuYXBwbGllc0Fsd2F5cyk7XHJcbiAgICBpZiAoYWx3YXlzQXBwbHlpbmdBbnN3ZXJzICYmIGFsd2F5c0FwcGx5aW5nQW5zd2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yVG9vbHRpcChhbHdheXNBcHBseWluZ0Fuc3dlcnNbMF0sIHN1cnByZXNzVG9vbHRpcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVHlwZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLk5vbmUpO1xyXG4gICAgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9zdEZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWVzc2FnZVNlcnZpY2UuaXNBY3RpdmUodGhpcykpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBib29sZWFuIHByb3BlcnRpZXMgaXNDb3JyZWN0LCBpcyBFcnJvciBhbmQgaXNSZXRyeSBhY2NvcmRpbmcgdG8gdGhlcGFzc2VkICBtZXNzYWdlVHlwZS5cclxuICAgKiBAcGFyYW0gbWVzc2FnZVR5cGUgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRBbnN3ZXJTdGF0ZShtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICAgIHRoaXMuaXNDb3JyZWN0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNSZXRyeSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1Nob3dpbmdTb2x1dGlvbiA9IGZhbHNlO1xyXG5cclxuICAgIHN3aXRjaCAobWVzc2FnZVR5cGUpIHtcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db3JyZWN0OlxyXG4gICAgICAgIHRoaXMuaXNDb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FcnJvcjpcclxuICAgICAgICB0aGlzLmlzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLlJldHJ5OlxyXG4gICAgICAgIHRoaXMuaXNSZXRyeSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU2hvd1NvbHV0aW9uOlxyXG4gICAgICAgIHRoaXMuaXNTaG93aW5nU29sdXRpb24gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RXJyb3JUb29sdGlwKGFuc3dlcjogQW5zd2VyLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4pIHtcclxuICAgIGlmIChhbnN3ZXIubWVzc2FnZSAmJiBhbnN3ZXIubWVzc2FnZS50ZXh0KSB7XHJcbiAgICAgIHRoaXMuc2V0VG9vbHRpcEVycm9yVGV4dChhbnN3ZXIubWVzc2FnZSwgc3VycHJlc3NUb29sdGlwKTtcclxuICAgIH1cclxuICAgIGlmICghc3VycHJlc3NUb29sdGlwKSB7XHJcbiAgICAgIGFuc3dlci5hY3RpdmF0ZUhpZ2hsaWdodCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheXMgdGhlIGhpbnQgaW4gdGhlIHRvb2x0aXAuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3dIaW50KCkge1xyXG4gICAgaWYgKHRoaXMuaXNTaG93aW5nU29sdXRpb24gfHwgdGhpcy5pc0NvcnJlY3QpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcclxuICAgIGlmICh0aGlzLmhpbnQgJiYgdGhpcy5oaW50LnRleHQgIT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcCh0aGlzLmhpbnQudGV4dCwgTWVzc2FnZVR5cGUuUmV0cnksIGZhbHNlKTtcclxuICAgICAgaWYgKHRoaXMuaGludC5oaWdobGlnaHRlZEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmhpbnQuaGlnaGxpZ2h0ZWRFbGVtZW50LmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VyaWFsaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW50ZXJlZFRleHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzZXJpYWxpemUoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gZGF0YTtcclxuICB9XHJcbn0iLCJleHBvcnQgZW51bSBDbG96ZUVsZW1lbnRUeXBlIHtcclxuICBCbGFuayxcclxuICBIaWdobGlnaHRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3plRWxlbWVudCB7XHJcbiAgcHVibGljIHR5cGU6IENsb3plRWxlbWVudFR5cGU7XHJcbn0iLCJpbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi9oaWdobGlnaHRcIjtcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi9ibGFua1wiO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGNsb3plLiBJbnN0YW50aWF0ZSB3aXRoIHN0YXRpYyBjcmVhdGVDbG96ZSgpLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb3plIHtcclxuICBwdWJsaWMgaHRtbDogc3RyaW5nO1xyXG4gIHB1YmxpYyBoaWdobGlnaHRzOiBIaWdobGlnaHRbXTtcclxuICBwdWJsaWMgYmxhbmtzOiBCbGFua1tdO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBibGFua3Mgd2VyZSBlbnRlcmVkIGNvcnJlY3RseS4gXHJcbiAgICogQHJldHVybnMgYm9vbGVhblxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaXNTb2x2ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5ibGFua3MuZXZlcnkoYiA9PiBiLmlzQ29ycmVjdCA9PT0gdHJ1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhpZGVBbGxIaWdobGlnaHRzKCk6IHZvaWQge1xyXG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuaGlnaGxpZ2h0cykge1xyXG4gICAgICBoaWdobGlnaHQuaXNIaWdobGlnaHRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgdGhpcy5oaWRlQWxsSGlnaGxpZ2h0cygpO1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcclxuICAgICAgYmxhbmsucmVzZXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93U29sdXRpb25zKCkge1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcclxuICAgICAgYmxhbmsuc2hvd1NvbHV0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhpZGVBbGxIaWdobGlnaHRzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VyaWFsaXplKCkgOiBzdHJpbmdbXSB7XHJcbiAgICB2YXIgY2xvemUgPSBbXTtcclxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuYmxhbmtzKSB7XHJcbiAgICAgIGNsb3plLnB1c2goYmxhbmsuc2VyaWFsaXplKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG96ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXNlcmlhbGl6ZShkYXRhOiBhbnkpIHtcclxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoaW5kZXggPj0gdGhpcy5ibGFua3MubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgdmFyIGJsYW5rID0gdGhpcy5ibGFua3NbaW5kZXhdO1xyXG4gICAgICBibGFuay5kZXNlcmlhbGl6ZShkYXRhW2luZGV4XSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xyXG4gIEVycm9yLFxyXG4gIENvcnJlY3QsXHJcbiAgUmV0cnksXHJcbiAgU2hvd1NvbHV0aW9uLFxyXG4gIE5vbmVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2xvemVUeXBlIHtcclxuICBUeXBlLFxyXG4gIFNlbGVjdFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTZWxlY3RBbHRlcm5hdGl2ZXMge1xyXG4gIEFsdGVybmF0aXZlcyxcclxuICBBbGxcclxufSIsImltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4vY2xvemUtZWxlbWVudCc7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGhpZ2hsaWdodCBpbiB0aGUgY2xvemUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0IGV4dGVuZHMgQ2xvemVFbGVtZW50IHtcclxuXHR0ZXh0OiBzdHJpbmc7XHJcblx0aXNIaWdobGlnaHRlZDogYm9vbGVhbjtcclxuXHRpZDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnR5cGUgPSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodDtcclxuXHRcdHRoaXMudGV4dCA9IHRleHQ7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLmlzSGlnaGxpZ2h0ZWQgPSBmYWxzZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi9oaWdobGlnaHRcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgbWVzc2FnZSB0aGF0IHRoZSBjb250ZW50IGF1dGhvciBoYXMgc3BlY2lmaWVkIHRvIGJlIGEgcmVhY3Rpb25cclxuICogdG8gYW4gdXNlcidzIGFuc3dlci4gXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcbiAgaGlnaGxpZ2h0ZWRFbGVtZW50OiBIaWdobGlnaHQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZXh0OiBzdHJpbmcsIHNob3dIaWdobGlnaHQ6IGJvb2xlYW4sIHByaXZhdGUgcmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbjogbnVtYmVyKSB7XHJcbiAgICBpZighc2hvd0hpZ2hsaWdodClcclxuICAgICAgdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgbGlua0hpZ2hsaWdodCA9IChoaWdobGlnaHRzQmVmb3JlOiBIaWdobGlnaHRbXSwgaGlnaGxpZ2h0c0FmdGVyOiBIaWdobGlnaHRbXSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24pXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGlmICh0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gPCAwICYmICgwIC0gdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMSkgPCBoaWdobGlnaHRzQmVmb3JlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRFbGVtZW50ID0gaGlnaGxpZ2h0c0JlZm9yZVswIC0gdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uID4gMCAmJiAodGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMSA8IGhpZ2hsaWdodHNBZnRlci5sZW5ndGgpKSB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZEVsZW1lbnQgPSBoaWdobGlnaHRzQWZ0ZXJbdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMV07XHJcbiAgICAgIH1cclxuICB9XHJcbn0iLCIvKipcclxuICogQSBzbmlwcGV0IGlzIGEgdGV4dCBibG9jayB0aGF0IGlzIHB1dCBpbnRvIHBsYWNlZCBtYXJrZWQgaW4gZmVlZGJhY2sgdGV4dHMgb3IgaGludHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU25pcHBldCB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0cyB0aGUgc25pcHBldC5cclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc25pcHBldCB0aGF0IGlzIHVzZWQgd2hlbiBpdCBpcyByZWZlcmVuY2VkIGluIGEgZmVlZGJhY2t0ZXh0ICh3aXRob3V0IHRoZSBzbmlwcGV0IG1hcmtlciBAKVxyXG4gICAqIEBwYXJhbSB0ZXh0IFRoZSBzbmlwcGV0IGl0c2VsZiAoaHRtbClcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdGV4dDogc3RyaW5nKSB7XHJcbiAgICBcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbiB7XHJcbiAgbmFtZTogYW55O1xyXG4gIGRlc2NyaXB0aW9uOiBhbnk7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGludGVyYWN0aW9uVHlwZTogXCJ0cnVlLWZhbHNlXCIgfCBcImNob2ljZVwiIHwgXCJmaWxsLWluXCIgfCBcImxvbmctZmlsbC1pblwiIHwgXCJtYXRjaGluZ1wiIHwgXCJwZXJmb3JtYW5jZVwiIHwgXCJzZXF1ZW5jaW5nXCIgfCBcImxpa2VydFwiIHwgXCJudW1lcmljXCIgfCBcIm90aGVyXCI7XHJcbiAgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm4/OiBzdHJpbmdbXVxyXG59IiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi4vbW9kZWxzL2JsYW5rXCI7XHJcbmltcG9ydCB7IFNuaXBwZXQgfSBmcm9tIFwiLi4vbW9kZWxzL3NuaXBwZXRcIjtcclxuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBVbnJ3YXBwZXIgfSBmcm9tICcuLi9oZWxwZXJzL3Vud3JhcHBlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhUmVwb3NpdG9yeSB7XHJcbiAgZ2V0QmxhbmtzKCk6IEJsYW5rW107XHJcbiAgZ2V0Q2xvemVUZXh0KCk6IHN0cmluZztcclxuICBnZXRGZWVkYmFja1RleHQoKTogc3RyaW5nO1xyXG4gIGdldE1lZGlhKCk6IGFueTtcclxuICBnZXRUYXNrRGVzY3JpcHRpb24oKTogc3RyaW5nO1xyXG4gIGdldFNuaXBwZXRzKCk6IFNuaXBwZXRbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGFyb3VuZCB0aGUgaDVwIGNvbmZpZyBvYmplY3QgYW5kIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgY29udGVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBINVBEYXRhUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElEYXRhUmVwb3NpdG9yeSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoNXBDb25maWdEYXRhOiBhbnksIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncyxcclxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIFxyXG4gICAgcHJpdmF0ZSB1bndyYXBwZXI6IFVucndhcHBlcikge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGJsYW5rIHRleHQgb2YgdGhlIGNsb3plIChhcyBIVE1MIG1hcmt1cCkuXHJcbiAgICovXHJcbiAgZ2V0Q2xvemVUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzVGV4dDtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHJlbW92ZSBvciBpbXBsZW1lbnRcclxuICBnZXRGZWVkYmFja1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVkaWEoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ0RhdGEubWVkaWE7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrRGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC50YXNrO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmxhbmtzKCk6IEJsYW5rW10ge1xyXG4gICAgdmFyIGJsYW5rczogQmxhbmtbXSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgIGlmICghdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzTGlzdClcclxuICAgICAgcmV0dXJuIGJsYW5rcztcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGg1cEJsYW5rID0gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzTGlzdFtpXTtcclxuXHJcbiAgICAgIHZhciBjb3JyZWN0VGV4dCA9IGg1cEJsYW5rLmNvcnJlY3RBbnN3ZXJUZXh0O1xyXG4gICAgICBpZiAoY29ycmVjdFRleHQgPT09IFwiXCIgfHwgY29ycmVjdFRleHQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgIHZhciBibGFuayA9IEJsYW5rTG9hZGVyLmluc3RhbmNlLmNyZWF0ZUJsYW5rKFwiY2xvemVcIiArIGksIGNvcnJlY3RUZXh0LFxyXG4gICAgICAgIGg1cEJsYW5rLmhpbnQsIGg1cEJsYW5rLmluY29ycmVjdEFuc3dlcnNMaXN0KTtcclxuXHJcbiAgICAgIGJsYW5rLmZpbmlzaEluaXRpYWxpemF0aW9uKCk7XHJcbiAgICAgIGJsYW5rcy5wdXNoKGJsYW5rKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmxhbmtzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U25pcHBldHMoKTogU25pcHBldFtdIHtcclxuICAgIHZhciBzbmlwcGV0czogU25pcHBldFtdID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmg1cENvbmZpZ0RhdGEuc25pcHBldHMpXHJcbiAgICAgIHJldHVybiBzbmlwcGV0cztcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaDVwQ29uZmlnRGF0YS5zbmlwcGV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgcmF3X3NuaXBwZXQgPSB0aGlzLmg1cENvbmZpZ0RhdGEuc25pcHBldHNbaV07XHJcbiAgICAgIHZhciBzbmlwcGV0ID0gbmV3IFNuaXBwZXQocmF3X3NuaXBwZXQuc25pcHBldE5hbWUsIHRoaXMudW53cmFwcGVyLnVud3JhcChyYXdfc25pcHBldC5zbmlwcGV0VGV4dCkpO1xyXG4gICAgICBzbmlwcGV0cy5wdXNoKHNuaXBwZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNuaXBwZXRzO1xyXG4gIH1cclxufSIsImV4cG9ydCBlbnVtIExvY2FsaXphdGlvbkxhYmVscyB7XHJcbiAgc2hvd1NvbHV0aW9uQnV0dG9uID0gXCJzaG93U29sdXRpb25zXCIsXHJcbiAgcmV0cnlCdXR0b24gPSBcInRyeUFnYWluXCIsXHJcbiAgY2hlY2tBbGxCdXR0b24gPSBcImNoZWNrQW5zd2VyXCIsXHJcbiAgbm90RmlsbGVkT3V0V2FybmluZyA9IFwibm90RmlsbGVkT3V0XCIsXHJcbiAgdGlwQnV0dG9uID1cInRpcExhYmVsXCIsXHJcbiAgdHlwb01lc3NhZ2UgPSBcInNwZWxsaW5nTWlzdGFrZVdhcm5pbmdcIixcclxuICBzY29yZUJhckxhYmVsID0gXCJzY29yZUJhckxhYmVsXCIgIFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMb2NhbGl6YXRpb25TdHJ1Y3R1cmVzIHtcclxuICBjb25maXJtQ2hlY2sgPSBcImNvbmZpcm1DaGVja1wiLFxyXG4gIGNvbmZpcm1SZXRyeSA9IFwiY29uZmlybVJldHJ5XCIsXHJcbiAgb3ZlcmFsbEZlZWRiYWNrID0gXCJvdmVyYWxsRmVlZGJhY2tcIlxyXG59XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgbG9jYWxpemF0aW9uIHNlcnZpY2VzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBINVBMb2NhbGl6YXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaDVwQ29uZmlndXJhdGlvbjogYW55KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIHN0cmluZyB0aGF0IGlzIHJlcHJlc2VudGVkIGJ5IHRoZSBpZGVudGlmaWVyLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbG9jYWxpemFibGVTdHJpbmdJZGVudGlmaWVyXHJcbiAgICogQHJldHVybnMgc3RyaW5nXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRUZXh0KGxvY2FsaXphYmxlU3RyaW5nSWRlbnRpZmllcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ3VyYXRpb25bbG9jYWxpemFibGVTdHJpbmdJZGVudGlmaWVyXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGFiZWxUb1N0cmluZyhsYWJlbDogTG9jYWxpemF0aW9uTGFiZWxzKSB7XHJcbiAgICByZXR1cm4gbGFiZWwudG9TdHJpbmcoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIHN0cmluZyBmb3IgdGhlIGxhYmVsLlxyXG4gICAqIEBwYXJhbSAge0xvY2FsaXphdGlvbkxhYmVsc30gbGFiZWxcclxuICAgKiBAcmV0dXJucyBzdHJpbmdcclxuICAgKi9cclxuICBnZXRUZXh0RnJvbUxhYmVsKGxhYmVsOiBMb2NhbGl6YXRpb25MYWJlbHMpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VGV4dCh0aGlzLmxhYmVsVG9TdHJpbmcobGFiZWwpKTtcclxuICB9XHJcblxyXG4gIGdldE9iamVjdEZvclN0cnVjdHVyZShzdHJ1Y3R1cmU6IExvY2FsaXphdGlvblN0cnVjdHVyZXMpIDogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ3VyYXRpb25bc3RydWN0dXJlLnRvU3RyaW5nKCldO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEJsYW5rIH0gZnJvbSAnLi4vbW9kZWxzL2JsYW5rJztcclxuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZW51bXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNwZWVjaEJ1YmJsZTogYW55O1xyXG4gIHByaXZhdGUgYXNzb2NpYXRlZEJsYW5rOiBCbGFuaztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqUXVlcnk6IEpRdWVyeVN0YXRpYykge1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93KGVsZW1lbnRJZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGJsYW5rOiBCbGFuaywgdHlwZT86IE1lc3NhZ2VUeXBlKSB7XHJcbiAgICBpZiAoIXR5cGUpXHJcbiAgICAgIHR5cGUgPSBNZXNzYWdlVHlwZS5Ob25lO1xyXG5cclxuICAgIHZhciBlbGVtZW50cyA9IHRoaXMualF1ZXJ5KFwiI1wiICsgZWxlbWVudElkKTtcclxuXHJcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNwZWVjaEJ1YmJsZSA9IG5ldyBINVAuSm91YmVsU3BlZWNoQnViYmxlKGVsZW1lbnRzLCBtZXNzYWdlKTtcclxuICAgICAgdGhpcy5hc3NvY2lhdGVkQmxhbmsgPSBibGFuaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlKCkge1xyXG4gICAgaWYgKHRoaXMuc3BlZWNoQnViYmxlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGhpcy5zcGVlY2hCdWJibGUucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNwZWVjaEJ1YmJsZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYXNzb2NpYXRlZEJsYW5rID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQWN0aXZlKGJsYW5rOiBCbGFuaykge1xyXG4gICAgcmV0dXJuIHRoaXMuYXNzb2NpYXRlZEJsYW5rID09PSBibGFuaztcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDbG96ZVR5cGUsIFNlbGVjdEFsdGVybmF0aXZlcyB9IGZyb20gXCIuLi9tb2RlbHMvZW51bXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNldHRpbmdzIHtcclxuICBjbG96ZVR5cGU6IENsb3plVHlwZTtcclxuICBzZWxlY3RBbHRlcm5hdGl2ZXM6IFNlbGVjdEFsdGVybmF0aXZlcztcclxuICBzZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uOiBudW1iZXI7XHJcbiAgZW5hYmxlUmV0cnk6IGJvb2xlYW47XHJcbiAgZW5hYmxlU29sdXRpb25zQnV0dG9uOiBib29sZWFuO1xyXG4gIGVuYWJsZUNoZWNrQnV0dG9uOiBib29sZWFuO1xyXG4gIGF1dG9DaGVjazogYm9vbGVhbjtcclxuICBjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xyXG4gIHdhcm5TcGVsbGluZ0Vycm9yczogYm9vbGVhbjtcclxuICBhY2NlcHRTcGVsbGluZ0Vycm9yczogYm9vbGVhbjtcclxuICBzaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dDogYm9vbGVhbjtcclxuICBjb25maXJtQ2hlY2tEaWFsb2c6IGJvb2xlYW47XHJcbiAgY29uZmlybVJldHJ5RGlhbG9nOiBib29sZWFuO1xyXG4gIGRpc2FibGVJbWFnZVpvb21pbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBINVBTZXR0aW5ncyBpbXBsZW1lbnRzIElTZXR0aW5ncyB7XHJcbiAgcHVibGljIGNsb3plVHlwZTogQ2xvemVUeXBlID0gQ2xvemVUeXBlLlR5cGU7XHJcbiAgcHVibGljIHNlbGVjdEFsdGVybmF0aXZlczogU2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsdGVybmF0aXZlcztcclxuICBwdWJsaWMgc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjogbnVtYmVyID0gNTtcclxuICBwdWJsaWMgZW5hYmxlUmV0cnk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBlbmFibGVTb2x1dGlvbnNCdXR0b246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBlbmFibGVDaGVja0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGF1dG9DaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBjYXNlU2Vuc2l0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHdhcm5TcGVsbGluZ0Vycm9yczogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGFjY2VwdFNwZWxsaW5nRXJyb3JzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0OiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgY29uZmlybUNoZWNrRGlhbG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGNvbmZpcm1SZXRyeURpYWxvZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBkaXNhYmxlSW1hZ2Vab29taW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGg1cENvbmZpZ0RhdGE6IGFueSkge1xyXG4gICAgaWYgKGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLm1vZGUgPT09ICdzZWxlY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuY2xvemVUeXBlID0gQ2xvemVUeXBlLlNlbGVjdDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmNsb3plVHlwZSA9IENsb3plVHlwZS5UeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zZWxlY3RBbHRlcm5hdGl2ZXMgPT09ICdhbGwnKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbDtcclxuICAgIH0gZWxzZSBpZiAoaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2VsZWN0QWx0ZXJuYXRpdmVzID09PSAnYWx0ZXJuYXRpdmVzJykge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlcyA9IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbiA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb247XHJcbiAgICB0aGlzLmVuYWJsZVJldHJ5ID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuZW5hYmxlUmV0cnk7XHJcbiAgICB0aGlzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbiA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmVuYWJsZVNvbHV0aW9uc0J1dHRvbjtcclxuICAgIHRoaXMuZW5hYmxlQ2hlY2tCdXR0b24gPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5lbmFibGVDaGVja0J1dHRvbjtcclxuICAgIHRoaXMuYXV0b0NoZWNrID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuYXV0b0NoZWNrO1xyXG4gICAgdGhpcy5jYXNlU2Vuc2l0aXZlID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuY2FzZVNlbnNpdGl2ZTtcclxuICAgIHRoaXMud2FyblNwZWxsaW5nRXJyb3JzID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc3BlbGxpbmdFcnJvckJlaGF2aW91ciA9PT0gXCJ3YXJuXCI7XHJcbiAgICB0aGlzLmFjY2VwdFNwZWxsaW5nRXJyb3JzID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc3BlbGxpbmdFcnJvckJlaGF2aW91ciA9PT0gXCJhY2NlcHRcIjtcclxuICAgIHRoaXMuc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dDtcclxuICAgIHRoaXMuY29uZmlybUNoZWNrRGlhbG9nID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuY29uZmlybUNoZWNrRGlhbG9nO1xyXG4gICAgdGhpcy5jb25maXJtUmV0cnlEaWFsb2cgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5jb25maXJtUmV0cnlEaWFsb2c7XHJcbiAgICB0aGlzLmRpc2FibGVJbWFnZVpvb21pbmcgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5kaXNhYmxlSW1hZ2Vab29taW5nO1xyXG5cclxuICAgIHRoaXMuZW5mb3JjZUxvZ2ljKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzZXRzIHNlbnNpYmxlIGRlZmF1bHQgdmFsdWVzIGZvciBzZXR0aW5ncyBoaWRkZW4gd2l0aCBzaG93V2hlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgZW5mb3JjZUxvZ2ljKCkge1xyXG4gICAgaWYgKHRoaXMuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuVHlwZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlcyA9IFNlbGVjdEFsdGVybmF0aXZlcy5BbGw7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbiA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID09PSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLndhcm5TcGVsbGluZ0Vycm9ycyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmFjY2VwdFNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiBpZD1cXFwiY29udGFpbmVye3tpZH19XFxcIiBjbGFzcz1cXFwiYmxhbmsge3sjYmxhbmsuaGFzUGVuZGluZ0ZlZWRiYWNrfX1oYXMtcGVuZGluZy1mZWVkYmFja3t7L2lmfX0ge3sjYmxhbmsuaGFzSGludH19aGFzLXRpcHt7L2lmfX0ge3sjYmxhbmsuaXNDb3JyZWN0fX1jb3JyZWN0e3svaWZ9fSB7eyNibGFuay5pc0Vycm9yfX1lcnJvcnt7L2lmfX0ge3sjYmxhbmsuaXNSZXRyeX19cmV0cnl7ey9pZn19IHt7I2JsYW5rLmlzU2hvd2luZ1NvbHV0aW9ufX1zaG93aW5nLXNvbHV0aW9ue3svaWZ9fVxcXCI+XFxyXFxuICB7eyN1bmxlc3MgaXNTZWxlY3RDbG96ZX19XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJoNXAtaW5wdXQtd3JhcHBlclxcXCI+XFxyXFxuICAgICAgPGlucHV0IGlkPVxcXCJ7e2JsYW5rLmlkfX1cXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2JsYW5rLmVudGVyZWRUZXh0fX1cXFwiIFxcclxcbiAgICAgICAgICAgICBzaXplPVxcXCJ7e2JsYW5rLm1pblRleHRMZW5ndGh9fVxcXCIgb24tZXNjYXBlPVxcXCJAdGhpcy5maXJlKCdjbG9zZU1lc3NhZ2UnLCBibGFuaylcXFwiIFxcclxcbiAgICAgICAgICAgICBvbi1lbnRlcj1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnZW50ZXInKVxcXCIgXFxyXFxuICAgICAgICAgICAgIG9uLWJsdXI9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCBibGFuaywgJ2JsdXInKVxcXCIgXFxyXFxuICAgICAgICAgICAgIG9uLWZvY3VzPVxcXCJAdGhpcy5maXJlKCdmb2N1cycsIGJsYW5rKVxcXCJcXHJcXG4gICAgICAgICAgICAgb24tYW55a2V5PVxcXCJAdGhpcy5maXJlKCd0ZXh0VHlwZWQnLCBibGFuaylcXFwiXFxyXFxuICAgICAgICAgICAgIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fVxcclxcbiAgICAgICAgICAgICBjbGFzcz1cXFwiaDVwLXRleHQtaW5wdXRcXFwiXFxyXFxuICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcclxcbiAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cXFwib2ZmXFxcIi8+XFxyXFxuICAgICAge3sjYmxhbmsuaGFzSGludH19XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLXRpcC1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdzaG93SGludCcsIGJsYW5rKVxcXCIge3sjKGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1Nob3dpbmdTb2x1dGlvbil9fWRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCIge3svaWZ9fT5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiam91YmVsLXRpcC1jb250YWluZXJcXFwiIHRpdGxlPVxcXCJUaXBcXFwiIGFyaWEtbGFiZWw9XFxcIlRpcFxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PHNwYW4gY2xhc3M9XFxcImpvdWJlbC1pY29uLXRpcC1ub3JtYWwgXFxcIj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc2hhZG93XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNwZWVjaC1idWJibGVcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24taW5mb1xcXCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAge3svaWZ9fVxcclxcbiAgICA8L3NwYW4+ICAgIFxcclxcbiAge3svdW5sZXNzfX1cXHJcXG4gIHt7I2lmIGlzU2VsZWN0Q2xvemV9fVxcclxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImg1cC1ub3RpZmljYXRpb25cXFwiIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdkaXNwbGF5RmVlZGJhY2snLCBibGFuaylcXFwiPlxcclxcbiAgICAgICAgJiN4ZjA1YTtcXHJcXG4gICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLWlucHV0LXdyYXBwZXJcXFwiPiAgICAgIFxcclxcbiAgICAgIDxzZWxlY3QgaWQ9XFxcInt7YmxhbmsuaWR9fVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7YmxhbmsuZW50ZXJlZFRleHR9fVxcXCJcXHJcXG4gICAgICAgICAgICAgIG9uLWVudGVyPVxcXCJAdGhpcy5maXJlKCdjaGVja0JsYW5rJywgYmxhbmssICdlbnRlcicpXFxcIiBcXHJcXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnY2hhbmdlJylcXFwiXFxyXFxuICAgICAgICAgICAgICBvbi1mb2N1cz1cXFwiQHRoaXMuZmlyZSgnZm9jdXMnLCBibGFuaylcXFwiICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fSBcXHJcXG4gICAgICAgICAgICAgIHNpemU9XFxcIjFcXFwiXFxyXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwiaDVwLXRleHQtaW5wdXRcXFwiPlxcclxcbiAgICAgICAge3sjZWFjaCBibGFuay5jaG9pY2VzfX1cXHJcXG4gICAgICAgICAgPG9wdGlvbj57e3RoaXN9fTwvb3B0aW9uPlxcclxcbiAgICAgICAge3svZWFjaH19XFxyXFxuICAgICAgPC9zZWxlY3Q+ICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAge3sjYmxhbmsuaGFzSGludH19XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLXRpcC1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdzaG93SGludCcsIGJsYW5rKVxcXCIge3sjKGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1Nob3dpbmdTb2x1dGlvbil9fWRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJ7ey9pZn19PlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJqb3ViZWwtdGlwLWNvbnRhaW5lclxcXCIgdGl0bGU9XFxcIlRpcFxcXCIgYXJpYS1sYWJlbD1cXFwiVGlwXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48c3BhbiBjbGFzcz1cXFwiam91YmVsLWljb24tdGlwLW5vcm1hbCBcXFwiPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1zaGFkb3dcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc3BlZWNoLWJ1YmJsZVxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1pbmZvXFxcIj48L3NwYW4+PC9zcGFuPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAge3svaWZ9fSAgICAgXFxyXFxuICAgIDwvc3Bhbj5cXHJcXG4gIHt7L2lmfX1cXHJcXG48L3NwYW4+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIHt7I29iamVjdC5pc0hpZ2hsaWdodGVkfX1jbGFzcz1cXFwiaGlnaGxpZ2h0ZWRcXFwie3svaWZ9fSBpZD1cXFwie3tvYmplY3QuaWR9fVxcXCI+e3t7b2JqZWN0LnRleHR9fX08L3NwYW4+XCI7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==