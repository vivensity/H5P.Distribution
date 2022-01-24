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
    States["submittedAnswers"] = "submitted-answer";
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
         * Indicates if user has submitted answer.
         */
        _this.submitted = false;
        /**
         * Indicates if user is in show solution mode.
         */
        _this.showSolutionMode = false;
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
            if (_this.clozeController.isFullyFilledOut) {
                _this.triggerXAPICompleted();
            }
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
            if (_this.clozeController.isFullyFilledOut) {
                _this.triggerXAPICompleted();
            }
        };
        _this.onSubmitAnswer = function () {
            _this.submitted = true;
            _this.state = States.submittedAnswers;
            _this.toggleButtonVisibility(_this.state);
            _this.triggerXAPISubmittedCurriki();
            _this.addSubmitAnswerFeedback();
        };
        /**
         * Add submit answer feedback div
         */
        _this.addSubmitAnswerFeedback = function () {
            var $submit_message = '<div class="submit-answer-feedback" style = "color: red">Result has been submitted successfully</div>';
            H5P.jQuery('.h5p-question-buttons').after($submit_message);
        };
        /**
         * Remove submit answer feedback div
         */
        _this.removeSubmitAnswerFeedback = function () {
            H5P.jQuery('.submit-answer-feedback').remove();
        };
        _this.transitionState = function () {
            if (_this.clozeController.isSolved) {
                _this.moveToState(States.finished);
            }
        };
        _this.onShowSolution = function () {
            _this.showSolutionMode = true;
            _this.moveToState(States.showingSolutions);
            _this.clozeController.showSolutions();
            _this.showFeedback();
            if (_this.submitted) {
                _this.removeSubmitAnswerFeedback();
            }
        };
        _this.onRetry = function () {
            /* XAPI restart the activityStartTime */
            _this.setActivityStarted();
            _this.removeFeedback();
            _this.removeSubmitAnswerFeedback();
            _this.clozeController.reset();
            _this.answered = false;
            _this.showSolutionMode = false;
            _this.submitted = false;
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
         * Trigger xAPI completed event
         */
        _this.triggerXAPICompleted = function () {
            _this.triggerXAPIScored(_this.clozeController.currentScore, _this.clozeController.maxScore, 'completed');
        };
        /**
         * Trigger xAPI submitted curriki event
         */
        _this.triggerXAPISubmittedCurriki = function () {
            _this.triggerXAPIScored(_this.clozeController.currentScore, _this.clozeController.maxScore, 'submitted-curriki');
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
        config = H5P.jQuery.extend(true, {}, {
            currikisettings: {
                disableSubmitButton: false,
                currikil10n: {
                    submitAnswer: "Submit"
                }
            },
        }, config);
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
            this.addButton('check-answer', 'Check Answers', this.onCheckAnswer, true, {}, {
                confirmationDialog: {
                    enable: this.settings.confirmCheckDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmCheck),
                    instance: this,
                    $parentElement: $container
                }
            });
        }
        if (!this.settings.disableSubmitButton) {
            // Submit answer button
            this.addButton('submit-answer', this.localization.getObjectForStructure(localization_1.LocalizationStructures.currikiSettings).currikil10n.submitAnswer, this.onSubmitAnswer, true);
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
            if (!this.showSolutionMode && ((state === States.checking)
                || (this.settings.autoCheck && state === States.ongoing) || (state === States.submittedAnswers))
                && (!this.settings.showSolutionsRequiresInput || this.clozeController.allBlanksEntered)) {
                this.showButton('show-solution');
            }
            else {
                this.hideButton('show-solution');
            }
        }
        if (this.settings.enableRetry && (state === States.checking || state === States.finished || state === States.showingSolutions || state === States.submittedAnswers)) {
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
        if (!this.settings.disableSubmitButton) {
            if (!this.submitted && (state === States.checking || state === States.showingSolutions)) {
                this.showButton('submit-answer');
            }
            else {
                this.hideButton('submit-answer');
            }
        }
        if (state === States.showingSolutionsEmbedded) {
            this.hideButton('check-answer');
            this.hideButton('try-again');
            this.hideButton('show-solution');
            this.hideButton('submit-answer');
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
    LocalizationStructures["currikiSettings"] = "currikisettings";
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
        this.disableSubmitButton = false;
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
        if (h5pConfigData.currikisettings) {
            this.disableSubmitButton = h5pConfigData.currikisettings.disableSubmitButton;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZi9kaXN0L2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvZGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9yYWN0aXZlLWV2ZW50cy1rZXlzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnRlbnQtbG9hZGVycy9jbG96ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29udHJvbGxlcnMvY2xvemUtY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3Blcm11dGF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3Vud3JhcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvYW5zd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9ibGFuay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvY2xvemUtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvY2xvemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2VudW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9oaWdobGlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL3hhcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvZGF0YS1yZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2xvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmlld3MvYmxhbmsucmFjdGl2ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZpZXdzL2hpZ2hsaWdodC5yYWN0aXZlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZTM4MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtQkFBbUIsV0FBVztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsY0FBYzs7QUFFOUQsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaGpERDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJpZXMvZGlzdC50c1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmg1cC1hZHZhbmNlZC1ibGFua3Mge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFRleHQgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBwLFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIGRpdiB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIC5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIHAsXFxyXFxuICAgIC5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIGRpdiB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiB1bnNldDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBJbnB1dCAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtaW5wdXQtd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEg1UERyb2lkU2Fucywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDtcXHJcXG4gICAgcGFkZGluZzogMC4xODc1ZW0gMS41ZW0gMC4xODc1ZW0gMC41ZW07XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgaW5wdXQuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNjRweCk7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayBzZWxlY3QuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMzZweCk7XFxyXFxufVxcclxcblxcclxcbi8qIElFICsgQ2hyb21lIHNwZWNpZmljIGZpeGVzICovXFxyXFxuXFxyXFxuLmg1cC10ZXh0LWlucHV0OjotbXMtY2xlYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46bm90KC5jb3JyZWN0KS5ibGFuay5oYXMtdGlwIGJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogU2VsZWN0IG1vZGUgKi9cXHJcXG5cXHJcXG5zZWxlY3QuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBhcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNob3dpbmcgc29sdXRpb24gaW5wdXQgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuc2hvd2luZy1zb2x1dGlvbiAuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzlkZDhiYjtcXHJcXG4gICAgY29sb3I6ICMyNTVjNDE7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEZvY3Vzc2VkIGlucHV0ICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIC5oNXAtdGV4dC1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAwICM3ZmI4ZmY7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzdmYjhmZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQ29ycmVjdGx5IGFuc3dlcmVkIGlucHV0ICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmNvcnJlY3QgLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzlkZDhiYjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlkZDhiYjtcXHJcXG4gICAgY29sb3I6ICMyNTVjNDE7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDAuNWVtOyAgICBcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGNcXFwiO1xcclxcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxyXFxuICAgIGNvbG9yOiAjMjU1YzQxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBJbmNvcnJlY3QgYW5zd2VycyAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5lcnJvciAuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkMGQwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdkMGQwO1xcclxcbiAgICBjb2xvcjogI2I3MWMxYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5lcnJvciAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwLjVlbTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxyXFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBTcGVsbGluZyBlcnJvcnMgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsucmV0cnkgLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY5OTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmY5OTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsucmV0cnkgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMC41ZW07XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcclxcbiAgICBjb2xvcjogI2I3MWMxYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQnV0dG9ucyAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEhpZ2hsaWdodCBpbiBzcGVsbGluZyBtaXN0YWtlIG1hcmtlciAqL1xcclxcblxcclxcbi5zcGVsbGluZy1taXN0YWtlIC5taXNzaW5nLWNoYXJhY3RlcixcXHJcXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzdGFrZW4tY2hhcmFjdGVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBibGluay1jb2xvcjtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYmxpbmstY29sb3I7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTM7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWNvbG9yIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBjb2xvcjogaW5pdGlhbDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBjb2xvcjogcmVkO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmstY29sb3Ige1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3Rha2VuLWNoYXJhY3RlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBIaWdobGlnaHRzIGluIHRleHQgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaGlnaGxpZ2h0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXHJcXG4gICAgcGFkZGluZzogMC40ZW07XFxyXFxuICAgIG1hcmdpbjogLTAuNGVtO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBibGluay1iYWNrZ3JvdW5kLWNvbG9yO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBibGluay1iYWNrZ3JvdW5kLWNvbG9yO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstYmFja2dyb3VuZC1jb2xvciB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rLWJhY2tncm91bmQtY29sb3Ige1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogT3RoZXJzICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmludmlzaWJsZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUaXBzICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC10aXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gIHJpZ2h0OiAwLjRlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcDpub3QoLmNvcnJlY3QpOm5vdCguZXJyb3IpOm5vdCgucmV0cnkpIC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAuY29ycmVjdCAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIsXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAuZXJyb3IgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyLFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwLnJldHJ5IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxyXFxuICAgIHJpZ2h0OiAyLjI1ZW07XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0Lmhhcy10aXAgLmg1cC10ZXh0LWlucHV0LFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5lcnJvci5oYXMtdGlwIC5oNXAtdGV4dC1pbnB1dCxcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsucmV0cnkuaGFzLXRpcCAuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaW1wcm92ZXMgYXBwZWFyYW5jZSBvZiBoNXAgdGlwIHNoYWRvd3MgKi9cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuam91YmVsLWljb24tdGlwLW5vcm1hbCAuaDVwLWljb24tc2hhZG93OmJlZm9yZSB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBvcGFjaXR5OiAwLjEzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBwZW5kaW5nIGZlZWRiYWNrIG1hcmtlciAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuazpub3QoLmhhcy1wZW5kaW5nLWZlZWRiYWNrKSBidXR0b24uaDVwLW5vdGlmaWNhdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24sXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGFuaW1hdGlvbjogc2hha2UgM3MgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgcmV2ZXJzZTtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDI7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG4gICAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IC0wLjRlbTtcXHJcXG4gICAgdG9wOiAtMC43ZW07XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjA1YVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5lcnJvci5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmVycm9yLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcclxcbiAgICBjb2xvcjogI2I3MWMxYztcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLnJldHJ5Lmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uLFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsucmV0cnkuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmZjAwO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwLjVlbSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gICAgMiUsXFxyXFxuICAgIDIwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuNXB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDQlLFxcclxcbiAgICAxNyUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICA2JSxcXHJcXG4gICAgMTAlLFxcclxcbiAgICAxNSUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDklLFxcclxcbiAgICAxMyUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gICAgMiUsXFxyXFxuICAgIDIwJSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuNXB4LCAwLCAwKTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDQlLFxcclxcbiAgICAxNyUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXHJcXG4gICAgfVxcclxcbiAgICA2JSxcXHJcXG4gICAgMTAlLFxcclxcbiAgICAxNSUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDklLFxcclxcbiAgICAxMyUge1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLyohXG5cbiBkaWZmIHY0LjAuMVxuXG5Tb2Z0d2FyZSBMaWNlbnNlIEFncmVlbWVudCAoQlNEIExpY2Vuc2UpXG5cbkNvcHlyaWdodCAoYykgMjAwOS0yMDE1LCBLZXZpbiBEZWNrZXIgPGtwZGVja2VyQGdtYWlsLmNvbT5cblxuQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuUmVkaXN0cmlidXRpb24gYW5kIHVzZSBvZiB0aGlzIHNvZnR3YXJlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmVcbiAgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZVxuICBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4gIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGVcbiAgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyXG4gIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiogTmVpdGhlciB0aGUgbmFtZSBvZiBLZXZpbiBEZWNrZXIgbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xuICBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yXG4gIHdyaXR0ZW4gcGVybWlzc2lvbi5cblxuVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SXG5JTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkRcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SXG5DT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMXG5EQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG5EQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUlxuSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVFxuT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuQGxpY2Vuc2VcbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuRGlmZiA9IHt9KSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBEaWZmKCkge31cbiAgRGlmZi5wcm90b3R5cGUgPSB7XG4gICAgZGlmZjogZnVuY3Rpb24gZGlmZihvbGRTdHJpbmcsIG5ld1N0cmluZykge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdmFyIGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjaztcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBmdW5jdGlvbiBkb25lKHZhbHVlKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IC8vIEFsbG93IHN1YmNsYXNzZXMgdG8gbWFzc2FnZSB0aGUgaW5wdXQgcHJpb3IgdG8gcnVubmluZ1xuXG5cbiAgICAgIG9sZFN0cmluZyA9IHRoaXMuY2FzdElucHV0KG9sZFN0cmluZyk7XG4gICAgICBuZXdTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChuZXdTdHJpbmcpO1xuICAgICAgb2xkU3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKG9sZFN0cmluZykpO1xuICAgICAgbmV3U3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKG5ld1N0cmluZykpO1xuICAgICAgdmFyIG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsXG4gICAgICAgICAgb2xkTGVuID0gb2xkU3RyaW5nLmxlbmd0aDtcbiAgICAgIHZhciBlZGl0TGVuZ3RoID0gMTtcbiAgICAgIHZhciBtYXhFZGl0TGVuZ3RoID0gbmV3TGVuICsgb2xkTGVuO1xuICAgICAgdmFyIGJlc3RQYXRoID0gW3tcbiAgICAgICAgbmV3UG9zOiAtMSxcbiAgICAgICAgY29tcG9uZW50czogW11cbiAgICAgIH1dOyAvLyBTZWVkIGVkaXRMZW5ndGggPSAwLCBpLmUuIHRoZSBjb250ZW50IHN0YXJ0cyB3aXRoIHRoZSBzYW1lIHZhbHVlc1xuXG4gICAgICB2YXIgb2xkUG9zID0gdGhpcy5leHRyYWN0Q29tbW9uKGJlc3RQYXRoWzBdLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgMCk7XG5cbiAgICAgIGlmIChiZXN0UGF0aFswXS5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAvLyBJZGVudGl0eSBwZXIgdGhlIGVxdWFsaXR5IGFuZCB0b2tlbml6ZXJcbiAgICAgICAgcmV0dXJuIGRvbmUoW3tcbiAgICAgICAgICB2YWx1ZTogdGhpcy5qb2luKG5ld1N0cmluZyksXG4gICAgICAgICAgY291bnQ6IG5ld1N0cmluZy5sZW5ndGhcbiAgICAgICAgfV0pO1xuICAgICAgfSAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXG5cblxuICAgICAgZnVuY3Rpb24gZXhlY0VkaXRMZW5ndGgoKSB7XG4gICAgICAgIGZvciAodmFyIGRpYWdvbmFsUGF0aCA9IC0xICogZWRpdExlbmd0aDsgZGlhZ29uYWxQYXRoIDw9IGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCArPSAyKSB7XG4gICAgICAgICAgdmFyIGJhc2VQYXRoID0gdm9pZCAwO1xuXG4gICAgICAgICAgdmFyIGFkZFBhdGggPSBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSxcbiAgICAgICAgICAgICAgcmVtb3ZlUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCArIDFdLFxuICAgICAgICAgICAgICBfb2xkUG9zID0gKHJlbW92ZVBhdGggPyByZW1vdmVQYXRoLm5ld1BvcyA6IDApIC0gZGlhZ29uYWxQYXRoO1xuXG4gICAgICAgICAgaWYgKGFkZFBhdGgpIHtcbiAgICAgICAgICAgIC8vIE5vIG9uZSBlbHNlIGlzIGdvaW5nIHRvIGF0dGVtcHQgdG8gdXNlIHRoaXMgdmFsdWUsIGNsZWFyIGl0XG4gICAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY2FuQWRkID0gYWRkUGF0aCAmJiBhZGRQYXRoLm5ld1BvcyArIDEgPCBuZXdMZW4sXG4gICAgICAgICAgICAgIGNhblJlbW92ZSA9IHJlbW92ZVBhdGggJiYgMCA8PSBfb2xkUG9zICYmIF9vbGRQb3MgPCBvbGRMZW47XG5cbiAgICAgICAgICBpZiAoIWNhbkFkZCAmJiAhY2FuUmVtb3ZlKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIHBhdGggaXMgYSB0ZXJtaW5hbCB0aGVuIHBydW5lXG4gICAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSAvLyBTZWxlY3QgdGhlIGRpYWdvbmFsIHRoYXQgd2Ugd2FudCB0byBicmFuY2ggZnJvbS4gV2Ugc2VsZWN0IHRoZSBwcmlvclxuICAgICAgICAgIC8vIHBhdGggd2hvc2UgcG9zaXRpb24gaW4gdGhlIG5ldyBzdHJpbmcgaXMgdGhlIGZhcnRoZXN0IGZyb20gdGhlIG9yaWdpblxuICAgICAgICAgIC8vIGFuZCBkb2VzIG5vdCBwYXNzIHRoZSBib3VuZHMgb2YgdGhlIGRpZmYgZ3JhcGhcblxuXG4gICAgICAgICAgaWYgKCFjYW5BZGQgfHwgY2FuUmVtb3ZlICYmIGFkZFBhdGgubmV3UG9zIDwgcmVtb3ZlUGF0aC5uZXdQb3MpIHtcbiAgICAgICAgICAgIGJhc2VQYXRoID0gY2xvbmVQYXRoKHJlbW92ZVBhdGgpO1xuICAgICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJhc2VQYXRoID0gYWRkUGF0aDsgLy8gTm8gbmVlZCB0byBjbG9uZSwgd2UndmUgcHVsbGVkIGl0IGZyb20gdGhlIGxpc3RcblxuICAgICAgICAgICAgYmFzZVBhdGgubmV3UG9zKys7XG4gICAgICAgICAgICBzZWxmLnB1c2hDb21wb25lbnQoYmFzZVBhdGguY29tcG9uZW50cywgdHJ1ZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfb2xkUG9zID0gc2VsZi5leHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKTsgLy8gSWYgd2UgaGF2ZSBoaXQgdGhlIGVuZCBvZiBib3RoIHN0cmluZ3MsIHRoZW4gd2UgYXJlIGRvbmVcblxuICAgICAgICAgIGlmIChiYXNlUGF0aC5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBfb2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgdHJhY2sgdGhpcyBwYXRoIGFzIGEgcG90ZW50aWFsIGNhbmRpZGF0ZSBhbmQgY29udGludWUuXG4gICAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gYmFzZVBhdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWRpdExlbmd0aCsrO1xuICAgICAgfSAvLyBQZXJmb3JtcyB0aGUgbGVuZ3RoIG9mIGVkaXQgaXRlcmF0aW9uLiBJcyBhIGJpdCBmdWdseSBhcyB0aGlzIGhhcyB0byBzdXBwb3J0IHRoZVxuICAgICAgLy8gc3luYyBhbmQgYXN5bmMgbW9kZSB3aGljaCBpcyBuZXZlciBmdW4uIExvb3BzIG92ZXIgZXhlY0VkaXRMZW5ndGggdW50aWwgYSB2YWx1ZVxuICAgICAgLy8gaXMgcHJvZHVjZWQuXG5cblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIChmdW5jdGlvbiBleGVjKCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IHdlIHdhbnQgdG8gYmUgc2FmZS5cblxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICAgIGV4ZWMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgICB2YXIgcmV0ID0gZXhlY0VkaXRMZW5ndGgoKTtcblxuICAgICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBwdXNoQ29tcG9uZW50OiBmdW5jdGlvbiBwdXNoQ29tcG9uZW50KGNvbXBvbmVudHMsIGFkZGVkLCByZW1vdmVkKSB7XG4gICAgICB2YXIgbGFzdCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKGxhc3QgJiYgbGFzdC5hZGRlZCA9PT0gYWRkZWQgJiYgbGFzdC5yZW1vdmVkID09PSByZW1vdmVkKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgaGVyZSBhcyB0aGUgY29tcG9uZW50IGNsb25lIG9wZXJhdGlvbiBpcyBqdXN0XG4gICAgICAgIC8vIGFzIHNoYWxsb3cgYXJyYXkgY2xvbmVcbiAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRzLmxlbmd0aCAtIDFdID0ge1xuICAgICAgICAgIGNvdW50OiBsYXN0LmNvdW50ICsgMSxcbiAgICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgICAgcmVtb3ZlZDogcmVtb3ZlZFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgICAgcmVtb3ZlZDogcmVtb3ZlZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGV4dHJhY3RDb21tb246IGZ1bmN0aW9uIGV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpIHtcbiAgICAgIHZhciBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgbmV3UG9zID0gYmFzZVBhdGgubmV3UG9zLFxuICAgICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcbiAgICAgICAgICBjb21tb25Db3VudCA9IDA7XG5cbiAgICAgIHdoaWxlIChuZXdQb3MgKyAxIDwgbmV3TGVuICYmIG9sZFBvcyArIDEgPCBvbGRMZW4gJiYgdGhpcy5lcXVhbHMobmV3U3RyaW5nW25ld1BvcyArIDFdLCBvbGRTdHJpbmdbb2xkUG9zICsgMV0pKSB7XG4gICAgICAgIG5ld1BvcysrO1xuICAgICAgICBvbGRQb3MrKztcbiAgICAgICAgY29tbW9uQ291bnQrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbW1vbkNvdW50KSB7XG4gICAgICAgIGJhc2VQYXRoLmNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgY291bnQ6IGNvbW1vbkNvdW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBiYXNlUGF0aC5uZXdQb3MgPSBuZXdQb3M7XG4gICAgICByZXR1cm4gb2xkUG9zO1xuICAgIH0sXG4gICAgZXF1YWxzOiBmdW5jdGlvbiBlcXVhbHMobGVmdCwgcmlnaHQpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGFyYXRvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNvbXBhcmF0b3IobGVmdCwgcmlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0IHx8IHRoaXMub3B0aW9ucy5pZ25vcmVDYXNlICYmIGxlZnQudG9Mb3dlckNhc2UoKSA9PT0gcmlnaHQudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbW92ZUVtcHR5OiBmdW5jdGlvbiByZW1vdmVFbXB0eShhcnJheSkge1xuICAgICAgdmFyIHJldCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJheVtpXSkge1xuICAgICAgICAgIHJldC5wdXNoKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG4gICAgY2FzdElucHV0OiBmdW5jdGlvbiBjYXN0SW5wdXQodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHRva2VuaXplOiBmdW5jdGlvbiB0b2tlbml6ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KCcnKTtcbiAgICB9LFxuICAgIGpvaW46IGZ1bmN0aW9uIGpvaW4oY2hhcnMpIHtcbiAgICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRWYWx1ZXMoZGlmZiwgY29tcG9uZW50cywgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIHVzZUxvbmdlc3RUb2tlbikge1xuICAgIHZhciBjb21wb25lbnRQb3MgPSAwLFxuICAgICAgICBjb21wb25lbnRMZW4gPSBjb21wb25lbnRzLmxlbmd0aCxcbiAgICAgICAgbmV3UG9zID0gMCxcbiAgICAgICAgb2xkUG9zID0gMDtcblxuICAgIGZvciAoOyBjb21wb25lbnRQb3MgPCBjb21wb25lbnRMZW47IGNvbXBvbmVudFBvcysrKSB7XG4gICAgICB2YXIgY29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRQb3NdO1xuXG4gICAgICBpZiAoIWNvbXBvbmVudC5yZW1vdmVkKSB7XG4gICAgICAgIGlmICghY29tcG9uZW50LmFkZGVkICYmIHVzZUxvbmdlc3RUb2tlbikge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCk7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBvbGRTdHJpbmdbb2xkUG9zICsgaV07XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWUubGVuZ3RoID4gdmFsdWUubGVuZ3RoID8gb2xkVmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4odmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihuZXdTdHJpbmcuc2xpY2UobmV3UG9zLCBuZXdQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1BvcyArPSBjb21wb25lbnQuY291bnQ7IC8vIENvbW1vbiBjYXNlXG5cbiAgICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQpIHtcbiAgICAgICAgICBvbGRQb3MgKz0gY29tcG9uZW50LmNvdW50O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4ob2xkU3RyaW5nLnNsaWNlKG9sZFBvcywgb2xkUG9zICsgY29tcG9uZW50LmNvdW50KSk7XG4gICAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7IC8vIFJldmVyc2UgYWRkIGFuZCByZW1vdmUgc28gcmVtb3ZlcyBhcmUgb3V0cHV0IGZpcnN0IHRvIG1hdGNoIGNvbW1vbiBjb252ZW50aW9uXG4gICAgICAgIC8vIFRoZSBkaWZmaW5nIGFsZ29yaXRobSBpcyB0aWVkIHRvIGFkZCB0aGVuIHJlbW92ZSBvdXRwdXQgYW5kIHRoaXMgaXMgdGhlIHNpbXBsZXN0XG4gICAgICAgIC8vIHJvdXRlIHRvIGdldCB0aGUgZGVzaXJlZCBvdXRwdXQgd2l0aCBtaW5pbWFsIG92ZXJoZWFkLlxuXG4gICAgICAgIGlmIChjb21wb25lbnRQb3MgJiYgY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXS5hZGRlZCkge1xuICAgICAgICAgIHZhciB0bXAgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdO1xuICAgICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0gPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRQb3NdID0gdG1wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBTcGVjaWFsIGNhc2UgaGFuZGxlIGZvciB3aGVuIG9uZSB0ZXJtaW5hbCBpcyBpZ25vcmVkIChpLmUuIHdoaXRlc3BhY2UpLlxuICAgIC8vIEZvciB0aGlzIGNhc2Ugd2UgbWVyZ2UgdGhlIHRlcm1pbmFsIGludG8gdGhlIHByaW9yIHN0cmluZyBhbmQgZHJvcCB0aGUgY2hhbmdlLlxuICAgIC8vIFRoaXMgaXMgb25seSBhdmFpbGFibGUgZm9yIHN0cmluZyBtb2RlLlxuXG5cbiAgICB2YXIgbGFzdENvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50TGVuIC0gMV07XG5cbiAgICBpZiAoY29tcG9uZW50TGVuID4gMSAmJiB0eXBlb2YgbGFzdENvbXBvbmVudC52YWx1ZSA9PT0gJ3N0cmluZycgJiYgKGxhc3RDb21wb25lbnQuYWRkZWQgfHwgbGFzdENvbXBvbmVudC5yZW1vdmVkKSAmJiBkaWZmLmVxdWFscygnJywgbGFzdENvbXBvbmVudC52YWx1ZSkpIHtcbiAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50TGVuIC0gMl0udmFsdWUgKz0gbGFzdENvbXBvbmVudC52YWx1ZTtcbiAgICAgIGNvbXBvbmVudHMucG9wKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZVBhdGgocGF0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBuZXdQb3M6IHBhdGgubmV3UG9zLFxuICAgICAgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjaGFyYWN0ZXJEaWZmID0gbmV3IERpZmYoKTtcbiAgZnVuY3Rpb24gZGlmZkNoYXJzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNoYXJhY3RlckRpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRlZmF1bHRzLmNhbGxiYWNrID0gb3B0aW9ucztcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgIGRlZmF1bHRzW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIC8vXG4gIC8vIFJhbmdlcyBhbmQgZXhjZXB0aW9uczpcbiAgLy8gTGF0aW4tMSBTdXBwbGVtZW50LCAwMDgw4oCTMDBGRlxuICAvLyAgLSBVKzAwRDcgIMOXIE11bHRpcGxpY2F0aW9uIHNpZ25cbiAgLy8gIC0gVSswMEY3ICDDtyBEaXZpc2lvbiBzaWduXG4gIC8vIExhdGluIEV4dGVuZGVkLUEsIDAxMDDigJMwMTdGXG4gIC8vIExhdGluIEV4dGVuZGVkLUIsIDAxODDigJMwMjRGXG4gIC8vIElQQSBFeHRlbnNpb25zLCAwMjUw4oCTMDJBRlxuICAvLyBTcGFjaW5nIE1vZGlmaWVyIExldHRlcnMsIDAyQjDigJMwMkZGXG4gIC8vICAtIFUrMDJDNyAgy4cgJiM3MTE7ICBDYXJvblxuICAvLyAgLSBVKzAyRDggIMuYICYjNzI4OyAgQnJldmVcbiAgLy8gIC0gVSswMkQ5ICDLmSAmIzcyOTsgIERvdCBBYm92ZVxuICAvLyAgLSBVKzAyREEgIMuaICYjNzMwOyAgUmluZyBBYm92ZVxuICAvLyAgLSBVKzAyREIgIMubICYjNzMxOyAgT2dvbmVrXG4gIC8vICAtIFUrMDJEQyAgy5wgJiM3MzI7ICBTbWFsbCBUaWxkZVxuICAvLyAgLSBVKzAyREQgIMudICYjNzMzOyAgRG91YmxlIEFjdXRlIEFjY2VudFxuICAvLyBMYXRpbiBFeHRlbmRlZCBBZGRpdGlvbmFsLCAxRTAw4oCTMUVGRlxuXG4gIHZhciBleHRlbmRlZFdvcmRDaGFycyA9IC9eW0EtWmEtelxceEMwLVxcdTAyQzZcXHUwMkM4LVxcdTAyRDdcXHUwMkRFLVxcdTAyRkZcXHUxRTAwLVxcdTFFRkZdKyQvO1xuICB2YXIgcmVXaGl0ZXNwYWNlID0gL1xcUy87XG4gIHZhciB3b3JkRGlmZiA9IG5ldyBEaWZmKCk7XG5cbiAgd29yZERpZmYuZXF1YWxzID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pZ25vcmVDYXNlKSB7XG4gICAgICBsZWZ0ID0gbGVmdC50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmlnaHQgPSByaWdodC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCB0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QobGVmdCkgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KHJpZ2h0KTtcbiAgfTtcblxuICB3b3JkRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciB0b2tlbnMgPSB2YWx1ZS5zcGxpdCgvKFxccyt8WygpW1xcXXt9J1wiXXxcXGIpLyk7IC8vIEpvaW4gdGhlIGJvdW5kYXJ5IHNwbGl0cyB0aGF0IHdlIGRvIG5vdCBjb25zaWRlciB0byBiZSBib3VuZGFyaWVzLiBUaGlzIGlzIHByaW1hcmlseSB0aGUgZXh0ZW5kZWQgTGF0aW4gY2hhcmFjdGVyIHNldC5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBlbXB0eSBzdHJpbmcgaW4gdGhlIG5leHQgZmllbGQgYW5kIHdlIGhhdmUgb25seSB3b3JkIGNoYXJzIGJlZm9yZSBhbmQgYWZ0ZXIsIG1lcmdlXG4gICAgICBpZiAoIXRva2Vuc1tpICsgMV0gJiYgdG9rZW5zW2kgKyAyXSAmJiBleHRlbmRlZFdvcmRDaGFycy50ZXN0KHRva2Vuc1tpXSkgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgICB0b2tlbnNbaV0gKz0gdG9rZW5zW2kgKyAyXTtcbiAgICAgICAgdG9rZW5zLnNwbGljZShpICsgMSwgMik7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywge1xuICAgICAgaWdub3JlV2hpdGVzcGFjZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgfVxuICBmdW5jdGlvbiBkaWZmV29yZHNXaXRoU3BhY2Uob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgbGluZURpZmYgPSBuZXcgRGlmZigpO1xuXG4gIGxpbmVEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHJldExpbmVzID0gW10sXG4gICAgICAgIGxpbmVzQW5kTmV3bGluZXMgPSB2YWx1ZS5zcGxpdCgvKFxcbnxcXHJcXG4pLyk7IC8vIElnbm9yZSB0aGUgZmluYWwgZW1wdHkgdG9rZW4gdGhhdCBvY2N1cnMgaWYgdGhlIHN0cmluZyBlbmRzIHdpdGggYSBuZXcgbGluZVxuXG4gICAgaWYgKCFsaW5lc0FuZE5ld2xpbmVzW2xpbmVzQW5kTmV3bGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIGxpbmVzQW5kTmV3bGluZXMucG9wKCk7XG4gICAgfSAvLyBNZXJnZSB0aGUgY29udGVudCBhbmQgbGluZSBzZXBhcmF0b3JzIGludG8gc2luZ2xlIHRva2Vuc1xuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzQW5kTmV3bGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaW5lID0gbGluZXNBbmROZXdsaW5lc1tpXTtcblxuICAgICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgICAgcmV0TGluZXNbcmV0TGluZXMubGVuZ3RoIC0gMV0gKz0gbGluZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSkge1xuICAgICAgICAgIGxpbmUgPSBsaW5lLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldExpbmVzLnB1c2gobGluZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldExpbmVzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xuICB9XG4gIGZ1bmN0aW9uIGRpZmZUcmltbWVkTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtcbiAgICAgIGlnbm9yZVdoaXRlc3BhY2U6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgc2VudGVuY2VEaWZmID0gbmV3IERpZmYoKTtcblxuICBzZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc2VudGVuY2VEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBjc3NEaWZmID0gbmV3IERpZmYoKTtcblxuICBjc3NEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oW3t9OjssXXxcXHMrKS8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZDc3Mob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGNzc0RpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgICAgcmV0dXJuIGFycjI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gIH1cblxuICB2YXIgb2JqZWN0UHJvdG90eXBlVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIganNvbkRpZmYgPSBuZXcgRGlmZigpOyAvLyBEaXNjcmltaW5hdGUgYmV0d2VlbiB0d28gbGluZXMgb2YgcHJldHR5LXByaW50ZWQsIHNlcmlhbGl6ZWQgSlNPTiB3aGVyZSBvbmUgb2YgdGhlbSBoYXMgYVxuICAvLyBkYW5nbGluZyBjb21tYSBhbmQgdGhlIG90aGVyIGRvZXNuJ3QuIFR1cm5zIG91dCBpbmNsdWRpbmcgdGhlIGRhbmdsaW5nIGNvbW1hIHlpZWxkcyB0aGUgbmljZXN0IG91dHB1dDpcblxuICBqc29uRGlmZi51c2VMb25nZXN0VG9rZW4gPSB0cnVlO1xuICBqc29uRGlmZi50b2tlbml6ZSA9IGxpbmVEaWZmLnRva2VuaXplO1xuXG4gIGpzb25EaWZmLmNhc3RJbnB1dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBfdGhpcyRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICB1bmRlZmluZWRSZXBsYWNlbWVudCA9IF90aGlzJG9wdGlvbnMudW5kZWZpbmVkUmVwbGFjZW1lbnQsXG4gICAgICAgIF90aGlzJG9wdGlvbnMkc3RyaW5naSA9IF90aGlzJG9wdGlvbnMuc3RyaW5naWZ5UmVwbGFjZXIsXG4gICAgICAgIHN0cmluZ2lmeVJlcGxhY2VyID0gX3RoaXMkb3B0aW9ucyRzdHJpbmdpID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoaywgdikge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZFJlcGxhY2VtZW50IDogdjtcbiAgICB9IDogX3RoaXMkb3B0aW9ucyRzdHJpbmdpO1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeShjYW5vbmljYWxpemUodmFsdWUsIG51bGwsIG51bGwsIHN0cmluZ2lmeVJlcGxhY2VyKSwgc3RyaW5naWZ5UmVwbGFjZXIsICcgICcpO1xuICB9O1xuXG4gIGpzb25EaWZmLmVxdWFscyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgIHJldHVybiBEaWZmLnByb3RvdHlwZS5lcXVhbHMuY2FsbChqc29uRGlmZiwgbGVmdC5yZXBsYWNlKC8sKFtcXHJcXG5dKS9nLCAnJDEnKSwgcmlnaHQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJykpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZKc29uKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGpzb25EaWZmLmRpZmYob2xkT2JqLCBuZXdPYmosIG9wdGlvbnMpO1xuICB9IC8vIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgcHJlc2VuY2Ugb2YgY2lyY3VsYXIgcmVmZXJlbmNlcyBieSBiYWlsaW5nIG91dCB3aGVuIGVuY291bnRlcmluZyBhblxuICAvLyBvYmplY3QgdGhhdCBpcyBhbHJlYWR5IG9uIHRoZSBcInN0YWNrXCIgb2YgaXRlbXMgYmVpbmcgcHJvY2Vzc2VkLiBBY2NlcHRzIGFuIG9wdGlvbmFsIHJlcGxhY2VyXG5cbiAgZnVuY3Rpb24gY2Fub25pY2FsaXplKG9iaiwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpIHtcbiAgICBzdGFjayA9IHN0YWNrIHx8IFtdO1xuICAgIHJlcGxhY2VtZW50U3RhY2sgPSByZXBsYWNlbWVudFN0YWNrIHx8IFtdO1xuXG4gICAgaWYgKHJlcGxhY2VyKSB7XG4gICAgICBvYmogPSByZXBsYWNlcihrZXksIG9iaik7XG4gICAgfVxuXG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzdGFja1tpXSA9PT0gb2JqKSB7XG4gICAgICAgIHJldHVybiByZXBsYWNlbWVudFN0YWNrW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjYW5vbmljYWxpemVkT2JqO1xuXG4gICAgaWYgKCdbb2JqZWN0IEFycmF5XScgPT09IG9iamVjdFByb3RvdHlwZVRvU3RyaW5nLmNhbGwob2JqKSkge1xuICAgICAgc3RhY2sucHVzaChvYmopO1xuICAgICAgY2Fub25pY2FsaXplZE9iaiA9IG5ldyBBcnJheShvYmoubGVuZ3RoKTtcbiAgICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjYW5vbmljYWxpemVkT2JqW2ldID0gY2Fub25pY2FsaXplKG9ialtpXSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpO1xuICAgICAgfVxuXG4gICAgICBzdGFjay5wb3AoKTtcbiAgICAgIHJlcGxhY2VtZW50U3RhY2sucG9wKCk7XG4gICAgICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbiAgICB9XG5cbiAgICBpZiAob2JqICYmIG9iai50b0pTT04pIHtcbiAgICAgIG9iaiA9IG9iai50b0pTT04oKTtcbiAgICB9XG5cbiAgICBpZiAoX3R5cGVvZihvYmopID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICAgIHN0YWNrLnB1c2gob2JqKTtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmogPSB7fTtcbiAgICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcblxuICAgICAgdmFyIHNvcnRlZEtleXMgPSBbXSxcbiAgICAgICAgICBfa2V5O1xuXG4gICAgICBmb3IgKF9rZXkgaW4gb2JqKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgICBzb3J0ZWRLZXlzLnB1c2goX2tleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc29ydGVkS2V5cy5zb3J0KCk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3J0ZWRLZXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIF9rZXkgPSBzb3J0ZWRLZXlzW2ldO1xuICAgICAgICBjYW5vbmljYWxpemVkT2JqW19rZXldID0gY2Fub25pY2FsaXplKG9ialtfa2V5XSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBfa2V5KTtcbiAgICAgIH1cblxuICAgICAgc3RhY2sucG9wKCk7XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5vbmljYWxpemVkT2JqID0gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiBjYW5vbmljYWxpemVkT2JqO1xuICB9XG5cbiAgdmFyIGFycmF5RGlmZiA9IG5ldyBEaWZmKCk7XG5cbiAgYXJyYXlEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKCk7XG4gIH07XG5cbiAgYXJyYXlEaWZmLmpvaW4gPSBhcnJheURpZmYucmVtb3ZlRW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZkFycmF5cyhvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gYXJyYXlEaWZmLmRpZmYob2xkQXJyLCBuZXdBcnIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlUGF0Y2godW5pRGlmZikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgZGlmZnN0ciA9IHVuaURpZmYuc3BsaXQoL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdLyksXG4gICAgICAgIGRlbGltaXRlcnMgPSB1bmlEaWZmLm1hdGNoKC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS9nKSB8fCBbXSxcbiAgICAgICAgbGlzdCA9IFtdLFxuICAgICAgICBpID0gMDtcblxuICAgIGZ1bmN0aW9uIHBhcnNlSW5kZXgoKSB7XG4gICAgICB2YXIgaW5kZXggPSB7fTtcbiAgICAgIGxpc3QucHVzaChpbmRleCk7IC8vIFBhcnNlIGRpZmYgbWV0YWRhdGFcblxuICAgICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgbGluZSA9IGRpZmZzdHJbaV07IC8vIEZpbGUgaGVhZGVyIGZvdW5kLCBlbmQgcGFyc2luZyBkaWZmIG1ldGFkYXRhXG5cbiAgICAgICAgaWYgKC9eKFxcLVxcLVxcLXxcXCtcXCtcXCt8QEApXFxzLy50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gRGlmZiBpbmRleFxuXG5cbiAgICAgICAgdmFyIGhlYWRlciA9IC9eKD86SW5kZXg6fGRpZmYoPzogLXIgXFx3KykrKVxccysoLis/KVxccyokLy5leGVjKGxpbmUpO1xuXG4gICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICBpbmRleC5pbmRleCA9IGhlYWRlclsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkrKztcbiAgICAgIH0gLy8gUGFyc2UgZmlsZSBoZWFkZXJzIGlmIHRoZXkgYXJlIGRlZmluZWQuIFVuaWZpZWQgZGlmZiByZXF1aXJlcyB0aGVtLCBidXRcbiAgICAgIC8vIHRoZXJlJ3Mgbm8gdGVjaG5pY2FsIGlzc3VlcyB0byBoYXZlIGFuIGlzb2xhdGVkIGh1bmsgd2l0aG91dCBmaWxlIGhlYWRlclxuXG5cbiAgICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7XG4gICAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpOyAvLyBQYXJzZSBodW5rc1xuXG4gICAgICBpbmRleC5odW5rcyA9IFtdO1xuXG4gICAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBfbGluZSA9IGRpZmZzdHJbaV07XG5cbiAgICAgICAgaWYgKC9eKEluZGV4OnxkaWZmfFxcLVxcLVxcLXxcXCtcXCtcXCspXFxzLy50ZXN0KF9saW5lKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKC9eQEAvLnRlc3QoX2xpbmUpKSB7XG4gICAgICAgICAgaW5kZXguaHVua3MucHVzaChwYXJzZUh1bmsoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX2xpbmUgJiYgb3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgICAgICAvLyBJZ25vcmUgdW5leHBlY3RlZCBjb250ZW50IHVubGVzcyBpbiBzdHJpY3QgbW9kZVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsaW5lICcgKyAoaSArIDEpICsgJyAnICsgSlNPTi5zdHJpbmdpZnkoX2xpbmUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIFBhcnNlcyB0aGUgLS0tIGFuZCArKysgaGVhZGVycywgaWYgbm9uZSBhcmUgZm91bmQsIG5vIGxpbmVzXG4gICAgLy8gYXJlIGNvbnN1bWVkLlxuXG5cbiAgICBmdW5jdGlvbiBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpIHtcbiAgICAgIHZhciBmaWxlSGVhZGVyID0gL14oLS0tfFxcK1xcK1xcKylcXHMrKC4qKSQvLmV4ZWMoZGlmZnN0cltpXSk7XG5cbiAgICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBmaWxlSGVhZGVyWzFdID09PSAnLS0tJyA/ICdvbGQnIDogJ25ldyc7XG4gICAgICAgIHZhciBkYXRhID0gZmlsZUhlYWRlclsyXS5zcGxpdCgnXFx0JywgMik7XG4gICAgICAgIHZhciBmaWxlTmFtZSA9IGRhdGFbMF0ucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKTtcblxuICAgICAgICBpZiAoL15cIi4qXCIkLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICAgIGZpbGVOYW1lID0gZmlsZU5hbWUuc3Vic3RyKDEsIGZpbGVOYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0ZpbGVOYW1lJ10gPSBmaWxlTmFtZTtcbiAgICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0hlYWRlciddID0gKGRhdGFbMV0gfHwgJycpLnRyaW0oKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0gLy8gUGFyc2VzIGEgaHVua1xuICAgIC8vIFRoaXMgYXNzdW1lcyB0aGF0IHdlIGFyZSBhdCB0aGUgc3RhcnQgb2YgYSBodW5rLlxuXG5cbiAgICBmdW5jdGlvbiBwYXJzZUh1bmsoKSB7XG4gICAgICB2YXIgY2h1bmtIZWFkZXJJbmRleCA9IGksXG4gICAgICAgICAgY2h1bmtIZWFkZXJMaW5lID0gZGlmZnN0cltpKytdLFxuICAgICAgICAgIGNodW5rSGVhZGVyID0gY2h1bmtIZWFkZXJMaW5lLnNwbGl0KC9AQCAtKFxcZCspKD86LChcXGQrKSk/IFxcKyhcXGQrKSg/OiwoXFxkKykpPyBAQC8pO1xuICAgICAgdmFyIGh1bmsgPSB7XG4gICAgICAgIG9sZFN0YXJ0OiArY2h1bmtIZWFkZXJbMV0sXG4gICAgICAgIG9sZExpbmVzOiArY2h1bmtIZWFkZXJbMl0gfHwgMSxcbiAgICAgICAgbmV3U3RhcnQ6ICtjaHVua0hlYWRlclszXSxcbiAgICAgICAgbmV3TGluZXM6ICtjaHVua0hlYWRlcls0XSB8fCAxLFxuICAgICAgICBsaW5lczogW10sXG4gICAgICAgIGxpbmVkZWxpbWl0ZXJzOiBbXVxuICAgICAgfTtcbiAgICAgIHZhciBhZGRDb3VudCA9IDAsXG4gICAgICAgICAgcmVtb3ZlQ291bnQgPSAwO1xuXG4gICAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gTGluZXMgc3RhcnRpbmcgd2l0aCAnLS0tJyBjb3VsZCBiZSBtaXN0YWtlbiBmb3IgdGhlIFwicmVtb3ZlIGxpbmVcIiBvcGVyYXRpb25cbiAgICAgICAgLy8gQnV0IHRoZXkgY291bGQgYmUgdGhlIGhlYWRlciBmb3IgdGhlIG5leHQgZmlsZS4gVGhlcmVmb3JlIHBydW5lIHN1Y2ggY2FzZXMgb3V0LlxuICAgICAgICBpZiAoZGlmZnN0cltpXS5pbmRleE9mKCctLS0gJykgPT09IDAgJiYgaSArIDIgPCBkaWZmc3RyLmxlbmd0aCAmJiBkaWZmc3RyW2kgKyAxXS5pbmRleE9mKCcrKysgJykgPT09IDAgJiYgZGlmZnN0cltpICsgMl0uaW5kZXhPZignQEAnKSA9PT0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wZXJhdGlvbiA9IGRpZmZzdHJbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSBkaWZmc3RyLmxlbmd0aCAtIDEgPyAnICcgOiBkaWZmc3RyW2ldWzBdO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJyB8fCBvcGVyYXRpb24gPT09ICctJyB8fCBvcGVyYXRpb24gPT09ICcgJyB8fCBvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcbiAgICAgICAgICBodW5rLmxpbmVkZWxpbWl0ZXJzLnB1c2goZGVsaW1pdGVyc1tpXSB8fCAnXFxuJyk7XG5cbiAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgICBhZGRDb3VudCsrO1xuICAgICAgICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gSGFuZGxlIHRoZSBlbXB0eSBibG9jayBjb3VudCBjYXNlXG5cblxuICAgICAgaWYgKCFhZGRDb3VudCAmJiBodW5rLm5ld0xpbmVzID09PSAxKSB7XG4gICAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgICAgaHVuay5vbGRMaW5lcyA9IDA7XG4gICAgICB9IC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG5cblxuICAgICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICAgIGlmIChhZGRDb3VudCAhPT0gaHVuay5uZXdMaW5lcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWRkZWQgbGluZSBjb3VudCBkaWQgbm90IG1hdGNoIGZvciBodW5rIGF0IGxpbmUgJyArIChjaHVua0hlYWRlckluZGV4ICsgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbW92ZUNvdW50ICE9PSBodW5rLm9sZExpbmVzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaHVuaztcbiAgICB9XG5cbiAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICBwYXJzZUluZGV4KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICAvLyBJdGVyYXRvciB0aGF0IHRyYXZlcnNlcyBpbiB0aGUgcmFuZ2Ugb2YgW21pbiwgbWF4XSwgc3RlcHBpbmdcbiAgLy8gYnkgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0YXJ0IHBvc2l0aW9uLiBJLmUuIGZvciBbMCwgNF0sIHdpdGhcbiAgLy8gc3RhcnQgb2YgMiwgdGhpcyB3aWxsIGl0ZXJhdGUgMiwgMywgMSwgNCwgMC5cbiAgZnVuY3Rpb24gZGlzdGFuY2VJdGVyYXRvciAoc3RhcnQsIG1pbkxpbmUsIG1heExpbmUpIHtcbiAgICB2YXIgd2FudEZvcndhcmQgPSB0cnVlLFxuICAgICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgICBmb3J3YXJkRXhoYXVzdGVkID0gZmFsc2UsXG4gICAgICAgIGxvY2FsT2Zmc2V0ID0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgICBpZiAod2FudEZvcndhcmQgJiYgIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgaWYgKGJhY2t3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgICAgbG9jYWxPZmZzZXQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YW50Rm9yd2FyZCA9IGZhbHNlO1xuICAgICAgICB9IC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmV5b25kIHRleHQgbGVuZ3RoLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAgIC8vIGFmdGVyIG9mZnNldCBsb2NhdGlvbiAob3IgZGVzaXJlZCBsb2NhdGlvbiBvbiBmaXJzdCBpdGVyYXRpb24pXG5cblxuICAgICAgICBpZiAoc3RhcnQgKyBsb2NhbE9mZnNldCA8PSBtYXhMaW5lKSB7XG4gICAgICAgICAgcmV0dXJuIGxvY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgaWYgKCFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgICAgd2FudEZvcndhcmQgPSB0cnVlO1xuICAgICAgICB9IC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmVmb3JlIHRleHQgYmVnaW5uaW5nLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAgIC8vIGJlZm9yZSBvZmZzZXQgbG9jYXRpb25cblxuXG4gICAgICAgIGlmIChtaW5MaW5lIDw9IHN0YXJ0IC0gbG9jYWxPZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gLWxvY2FsT2Zmc2V0Kys7XG4gICAgICAgIH1cblxuICAgICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpdGVyYXRvcigpO1xuICAgICAgfSAvLyBXZSB0cmllZCB0byBmaXQgaHVuayBiZWZvcmUgdGV4dCBiZWdpbm5pbmcgYW5kIGJleW9uZCB0ZXh0IGxlbmd0aCwgdGhlblxuICAgICAgLy8gaHVuayBjYW4ndCBmaXQgb24gdGhlIHRleHQuIFJldHVybiB1bmRlZmluZWRcblxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVBhdGNoKHNvdXJjZSwgdW5pRGlmZikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHVuaURpZmYpKSB7XG4gICAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXBwbHlQYXRjaCBvbmx5IHdvcmtzIHdpdGggYSBzaW5nbGUgaW5wdXQuJyk7XG4gICAgICB9XG5cbiAgICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICAgIH0gLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG5cblxuICAgIHZhciBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgICAgZGVsaW1pdGVycyA9IHNvdXJjZS5tYXRjaCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vZykgfHwgW10sXG4gICAgICAgIGh1bmtzID0gdW5pRGlmZi5odW5rcyxcbiAgICAgICAgY29tcGFyZUxpbmUgPSBvcHRpb25zLmNvbXBhcmVMaW5lIHx8IGZ1bmN0aW9uIChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkge1xuICAgICAgcmV0dXJuIGxpbmUgPT09IHBhdGNoQ29udGVudDtcbiAgICB9LFxuICAgICAgICBlcnJvckNvdW50ID0gMCxcbiAgICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgICBtaW5MaW5lID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMCxcbiAgICAgICAgcmVtb3ZlRU9GTkwsXG4gICAgICAgIGFkZEVPRk5MO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgaHVuayBleGFjdGx5IGZpdHMgb24gdGhlIHByb3ZpZGVkIGxvY2F0aW9uXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGh1bmtGaXRzKGh1bmssIHRvUG9zKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGxpbmUgPSBodW5rLmxpbmVzW2pdLFxuICAgICAgICAgICAgb3BlcmF0aW9uID0gbGluZS5sZW5ndGggPiAwID8gbGluZVswXSA6ICcgJyxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmU7XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgLy8gQ29udGV4dCBzYW5pdHkgY2hlY2tcbiAgICAgICAgICBpZiAoIWNvbXBhcmVMaW5lKHRvUG9zICsgMSwgbGluZXNbdG9Qb3NdLCBvcGVyYXRpb24sIGNvbnRlbnQpKSB7XG4gICAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICAgIGlmIChlcnJvckNvdW50ID4gZnV6ekZhY3Rvcikge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9Qb3MrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgICBtYXhMaW5lID0gbGluZXMubGVuZ3RoIC0gaHVuay5vbGRMaW5lcyxcbiAgICAgICAgICBsb2NhbE9mZnNldCA9IDAsXG4gICAgICAgICAgdG9Qb3MgPSBvZmZzZXQgKyBodW5rLm9sZFN0YXJ0IC0gMTtcbiAgICAgIHZhciBpdGVyYXRvciA9IGRpc3RhbmNlSXRlcmF0b3IodG9Qb3MsIG1pbkxpbmUsIG1heExpbmUpO1xuXG4gICAgICBmb3IgKDsgbG9jYWxPZmZzZXQgIT09IHVuZGVmaW5lZDsgbG9jYWxPZmZzZXQgPSBpdGVyYXRvcigpKSB7XG4gICAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICAgIGh1bmsub2Zmc2V0ID0gb2Zmc2V0ICs9IGxvY2FsT2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsb2NhbE9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gLy8gU2V0IGxvd2VyIHRleHQgbGltaXQgdG8gZW5kIG9mIHRoZSBjdXJyZW50IGh1bmssIHNvIG5leHQgb25lcyBkb24ndCB0cnlcbiAgICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG5cblxuICAgICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gICAgfSAvLyBBcHBseSBwYXRjaCBodW5rc1xuXG5cbiAgICB2YXIgZGlmZk9mZnNldCA9IDA7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgaHVua3MubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2h1bmsgPSBodW5rc1tfaV0sXG4gICAgICAgICAgX3RvUG9zID0gX2h1bmsub2xkU3RhcnQgKyBfaHVuay5vZmZzZXQgKyBkaWZmT2Zmc2V0IC0gMTtcblxuICAgICAgZGlmZk9mZnNldCArPSBfaHVuay5uZXdMaW5lcyAtIF9odW5rLm9sZExpbmVzO1xuXG4gICAgICBpZiAoX3RvUG9zIDwgMCkge1xuICAgICAgICAvLyBDcmVhdGluZyBhIG5ldyBmaWxlXG4gICAgICAgIF90b1BvcyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2h1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGxpbmUgPSBfaHVuay5saW5lc1tqXSxcbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IGxpbmUubGVuZ3RoID4gMCA/IGxpbmVbMF0gOiAnICcsXG4gICAgICAgICAgICBjb250ZW50ID0gbGluZS5sZW5ndGggPiAwID8gbGluZS5zdWJzdHIoMSkgOiBsaW5lLFxuICAgICAgICAgICAgZGVsaW1pdGVyID0gX2h1bmsubGluZWRlbGltaXRlcnNbal07XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgX3RvUG9zKys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICBsaW5lcy5zcGxpY2UoX3RvUG9zLCAxKTtcbiAgICAgICAgICBkZWxpbWl0ZXJzLnNwbGljZShfdG9Qb3MsIDEpO1xuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICBsaW5lcy5zcGxpY2UoX3RvUG9zLCAwLCBjb250ZW50KTtcbiAgICAgICAgICBkZWxpbWl0ZXJzLnNwbGljZShfdG9Qb3MsIDAsIGRlbGltaXRlcik7XG4gICAgICAgICAgX3RvUG9zKys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNPcGVyYXRpb24gPSBfaHVuay5saW5lc1tqIC0gMV0gPyBfaHVuay5saW5lc1tqIC0gMV1bMF0gOiBudWxsO1xuXG4gICAgICAgICAgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIHJlbW92ZUVPRk5MID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICAgIGFkZEVPRk5MID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIEhhbmRsZSBFT0ZOTCBpbnNlcnRpb24vcmVtb3ZhbFxuXG5cbiAgICBpZiAocmVtb3ZlRU9GTkwpIHtcbiAgICAgIHdoaWxlICghbGluZXNbbGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgbGluZXMucG9wKCk7XG4gICAgICAgIGRlbGltaXRlcnMucG9wKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhZGRFT0ZOTCkge1xuICAgICAgbGluZXMucHVzaCgnJyk7XG4gICAgICBkZWxpbWl0ZXJzLnB1c2goJ1xcbicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBsaW5lcy5sZW5ndGggLSAxOyBfaysrKSB7XG4gICAgICBsaW5lc1tfa10gPSBsaW5lc1tfa10gKyBkZWxpbWl0ZXJzW19rXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluZXMuam9pbignJyk7XG4gIH0gLy8gV3JhcHBlciB0aGF0IHN1cHBvcnRzIG11bHRpcGxlIGZpbGUgcGF0Y2hlcyB2aWEgY2FsbGJhY2tzLlxuXG4gIGZ1bmN0aW9uIGFwcGx5UGF0Y2hlcyh1bmlEaWZmLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgICAgdW5pRGlmZiA9IHBhcnNlUGF0Y2godW5pRGlmZik7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzSW5kZXgoKSB7XG4gICAgICB2YXIgaW5kZXggPSB1bmlEaWZmW2N1cnJlbnRJbmRleCsrXTtcblxuICAgICAgaWYgKCFpbmRleCkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmxvYWRGaWxlKGluZGV4LCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZShlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVwZGF0ZWRDb250ZW50ID0gYXBwbHlQYXRjaChkYXRhLCBpbmRleCwgb3B0aW9ucyk7XG4gICAgICAgIG9wdGlvbnMucGF0Y2hlZChpbmRleCwgdXBkYXRlZENvbnRlbnQsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZShlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByb2Nlc3NJbmRleCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2Nlc3NJbmRleCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBvcHRpb25zLmNvbnRleHQgPSA0O1xuICAgIH1cblxuICAgIHZhciBkaWZmID0gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgICBkaWZmLnB1c2goe1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgbGluZXM6IFtdXG4gICAgfSk7IC8vIEFwcGVuZCBhbiBlbXB0eSB2YWx1ZSB0byBtYWtlIGNsZWFudXAgZWFzaWVyXG5cbiAgICBmdW5jdGlvbiBjb250ZXh0TGluZXMobGluZXMpIHtcbiAgICAgIHJldHVybiBsaW5lcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAnICcgKyBlbnRyeTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBodW5rcyA9IFtdO1xuICAgIHZhciBvbGRSYW5nZVN0YXJ0ID0gMCxcbiAgICAgICAgbmV3UmFuZ2VTdGFydCA9IDAsXG4gICAgICAgIGN1clJhbmdlID0gW10sXG4gICAgICAgIG9sZExpbmUgPSAxLFxuICAgICAgICBuZXdMaW5lID0gMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gZGlmZltpXSxcbiAgICAgICAgICBsaW5lcyA9IGN1cnJlbnQubGluZXMgfHwgY3VycmVudC52YWx1ZS5yZXBsYWNlKC9cXG4kLywgJycpLnNwbGl0KCdcXG4nKTtcbiAgICAgIGN1cnJlbnQubGluZXMgPSBsaW5lcztcblxuICAgICAgaWYgKGN1cnJlbnQuYWRkZWQgfHwgY3VycmVudC5yZW1vdmVkKSB7XG4gICAgICAgIHZhciBfY3VyUmFuZ2U7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBwcmV2aW91cyBjb250ZXh0LCBzdGFydCB3aXRoIHRoYXRcbiAgICAgICAgaWYgKCFvbGRSYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgdmFyIHByZXYgPSBkaWZmW2kgLSAxXTtcbiAgICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gb2xkTGluZTtcbiAgICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gbmV3TGluZTtcblxuICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICBjdXJSYW5nZSA9IG9wdGlvbnMuY29udGV4dCA+IDAgPyBjb250ZXh0TGluZXMocHJldi5saW5lcy5zbGljZSgtb3B0aW9ucy5jb250ZXh0KSkgOiBbXTtcbiAgICAgICAgICAgIG9sZFJhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgICAgbmV3UmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIE91dHB1dCBvdXIgY2hhbmdlc1xuXG5cbiAgICAgICAgKF9jdXJSYW5nZSA9IGN1clJhbmdlKS5wdXNoLmFwcGx5KF9jdXJSYW5nZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxpbmVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICByZXR1cm4gKGN1cnJlbnQuYWRkZWQgPyAnKycgOiAnLScpICsgZW50cnk7XG4gICAgICAgIH0pKSk7IC8vIFRyYWNrIHRoZSB1cGRhdGVkIGZpbGUgcG9zaXRpb25cblxuXG4gICAgICAgIGlmIChjdXJyZW50LmFkZGVkKSB7XG4gICAgICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2xkTGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElkZW50aWNhbCBjb250ZXh0IGxpbmVzLiBUcmFjayBsaW5lIGNoYW5nZXNcbiAgICAgICAgaWYgKG9sZFJhbmdlU3RhcnQpIHtcbiAgICAgICAgICAvLyBDbG9zZSBvdXQgYW55IGNoYW5nZXMgdGhhdCBoYXZlIGJlZW4gb3V0cHV0IChvciBqb2luIG92ZXJsYXBwaW5nKVxuICAgICAgICAgIGlmIChsaW5lcy5sZW5ndGggPD0gb3B0aW9ucy5jb250ZXh0ICogMiAmJiBpIDwgZGlmZi5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICB2YXIgX2N1clJhbmdlMjtcblxuICAgICAgICAgICAgLy8gT3ZlcmxhcHBpbmdcbiAgICAgICAgICAgIChfY3VyUmFuZ2UyID0gY3VyUmFuZ2UpLnB1c2guYXBwbHkoX2N1clJhbmdlMiwgX3RvQ29uc3VtYWJsZUFycmF5KGNvbnRleHRMaW5lcyhsaW5lcykpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIF9jdXJSYW5nZTM7XG5cbiAgICAgICAgICAgIC8vIGVuZCB0aGUgcmFuZ2UgYW5kIG91dHB1dFxuICAgICAgICAgICAgdmFyIGNvbnRleHRTaXplID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBvcHRpb25zLmNvbnRleHQpO1xuXG4gICAgICAgICAgICAoX2N1clJhbmdlMyA9IGN1clJhbmdlKS5wdXNoLmFwcGx5KF9jdXJSYW5nZTMsIF90b0NvbnN1bWFibGVBcnJheShjb250ZXh0TGluZXMobGluZXMuc2xpY2UoMCwgY29udGV4dFNpemUpKSkpO1xuXG4gICAgICAgICAgICB2YXIgaHVuayA9IHtcbiAgICAgICAgICAgICAgb2xkU3RhcnQ6IG9sZFJhbmdlU3RhcnQsXG4gICAgICAgICAgICAgIG9sZExpbmVzOiBvbGRMaW5lIC0gb2xkUmFuZ2VTdGFydCArIGNvbnRleHRTaXplLFxuICAgICAgICAgICAgICBuZXdTdGFydDogbmV3UmFuZ2VTdGFydCxcbiAgICAgICAgICAgICAgbmV3TGluZXM6IG5ld0xpbmUgLSBuZXdSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUsXG4gICAgICAgICAgICAgIGxpbmVzOiBjdXJSYW5nZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGkgPj0gZGlmZi5sZW5ndGggLSAyICYmIGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgICAgLy8gRU9GIGlzIGluc2lkZSB0aGlzIGh1bmtcbiAgICAgICAgICAgICAgdmFyIG9sZEVPRk5ld2xpbmUgPSAvXFxuJC8udGVzdChvbGRTdHIpO1xuICAgICAgICAgICAgICB2YXIgbmV3RU9GTmV3bGluZSA9IC9cXG4kLy50ZXN0KG5ld1N0cik7XG4gICAgICAgICAgICAgIHZhciBub05sQmVmb3JlQWRkcyA9IGxpbmVzLmxlbmd0aCA9PSAwICYmIGN1clJhbmdlLmxlbmd0aCA+IGh1bmsub2xkTGluZXM7XG5cbiAgICAgICAgICAgICAgaWYgKCFvbGRFT0ZOZXdsaW5lICYmIG5vTmxCZWZvcmVBZGRzKSB7XG4gICAgICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlOiBvbGQgaGFzIG5vIGVvbCBhbmQgbm8gdHJhaWxpbmcgY29udGV4dDsgbm8tbmwgY2FuIGVuZCB1cCBiZWZvcmUgYWRkc1xuICAgICAgICAgICAgICAgIGN1clJhbmdlLnNwbGljZShodW5rLm9sZExpbmVzLCAwLCAnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIW9sZEVPRk5ld2xpbmUgJiYgIW5vTmxCZWZvcmVBZGRzIHx8ICFuZXdFT0ZOZXdsaW5lKSB7XG4gICAgICAgICAgICAgICAgY3VyUmFuZ2UucHVzaCgnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaHVua3MucHVzaChodW5rKTtcbiAgICAgICAgICAgIG9sZFJhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgICAgbmV3UmFuZ2VTdGFydCA9IDA7XG4gICAgICAgICAgICBjdXJSYW5nZSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWZmLmxlbmd0aDsgaSsrKSB7XG4gICAgICBfbG9vcChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb2xkRmlsZU5hbWU6IG9sZEZpbGVOYW1lLFxuICAgICAgbmV3RmlsZU5hbWU6IG5ld0ZpbGVOYW1lLFxuICAgICAgb2xkSGVhZGVyOiBvbGRIZWFkZXIsXG4gICAgICBuZXdIZWFkZXI6IG5ld0hlYWRlcixcbiAgICAgIGh1bmtzOiBodW5rc1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlVHdvRmlsZXNQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICAgIHZhciBkaWZmID0gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKTtcbiAgICB2YXIgcmV0ID0gW107XG5cbiAgICBpZiAob2xkRmlsZU5hbWUgPT0gbmV3RmlsZU5hbWUpIHtcbiAgICAgIHJldC5wdXNoKCdJbmRleDogJyArIG9sZEZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXQucHVzaCgnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIHJldC5wdXNoKCctLS0gJyArIGRpZmYub2xkRmlsZU5hbWUgKyAodHlwZW9mIGRpZmYub2xkSGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm9sZEhlYWRlcikpO1xuICAgIHJldC5wdXNoKCcrKysgJyArIGRpZmYubmV3RmlsZU5hbWUgKyAodHlwZW9mIGRpZmYubmV3SGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm5ld0hlYWRlcikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWZmLmh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaHVuayA9IGRpZmYuaHVua3NbaV07XG4gICAgICByZXQucHVzaCgnQEAgLScgKyBodW5rLm9sZFN0YXJ0ICsgJywnICsgaHVuay5vbGRMaW5lcyArICcgKycgKyBodW5rLm5ld1N0YXJ0ICsgJywnICsgaHVuay5uZXdMaW5lcyArICcgQEAnKTtcbiAgICAgIHJldC5wdXNoLmFwcGx5KHJldCwgaHVuay5saW5lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldC5qb2luKCdcXG4nKSArICdcXG4nO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVBhdGNoKGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY3JlYXRlVHdvRmlsZXNQYXRjaChmaWxlTmFtZSwgZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucyk7XG4gIH1cblxuICBmdW5jdGlvbiBhcnJheUVxdWFsKGEsIGIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5U3RhcnRzV2l0aChhLCBiKTtcbiAgfVxuICBmdW5jdGlvbiBhcnJheVN0YXJ0c1dpdGgoYXJyYXksIHN0YXJ0KSB7XG4gICAgaWYgKHN0YXJ0Lmxlbmd0aCA+IGFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdGFydFtpXSAhPT0gYXJyYXlbaV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsY0xpbmVDb3VudChodW5rKSB7XG4gICAgdmFyIF9jYWxjT2xkTmV3TGluZUNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChodW5rLmxpbmVzKSxcbiAgICAgICAgb2xkTGluZXMgPSBfY2FsY09sZE5ld0xpbmVDb3VudC5vbGRMaW5lcyxcbiAgICAgICAgbmV3TGluZXMgPSBfY2FsY09sZE5ld0xpbmVDb3VudC5uZXdMaW5lcztcblxuICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBodW5rLm9sZExpbmVzID0gb2xkTGluZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBodW5rLm9sZExpbmVzO1xuICAgIH1cblxuICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBodW5rLm5ld0xpbmVzID0gbmV3TGluZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBodW5rLm5ld0xpbmVzO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtZXJnZShtaW5lLCB0aGVpcnMsIGJhc2UpIHtcbiAgICBtaW5lID0gbG9hZFBhdGNoKG1pbmUsIGJhc2UpO1xuICAgIHRoZWlycyA9IGxvYWRQYXRjaCh0aGVpcnMsIGJhc2UpO1xuICAgIHZhciByZXQgPSB7fTsgLy8gRm9yIGluZGV4IHdlIGp1c3QgbGV0IGl0IHBhc3MgdGhyb3VnaCBhcyBpdCBkb2Vzbid0IGhhdmUgYW55IG5lY2Vzc2FyeSBtZWFuaW5nLlxuICAgIC8vIExlYXZpbmcgc2FuaXR5IGNoZWNrcyBvbiB0aGlzIHRvIHRoZSBBUEkgY29uc3VtZXIgdGhhdCBtYXkga25vdyBtb3JlIGFib3V0IHRoZVxuICAgIC8vIG1lYW5pbmcgaW4gdGhlaXIgb3duIGNvbnRleHQuXG5cbiAgICBpZiAobWluZS5pbmRleCB8fCB0aGVpcnMuaW5kZXgpIHtcbiAgICAgIHJldC5pbmRleCA9IG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4O1xuICAgIH1cblxuICAgIGlmIChtaW5lLm5ld0ZpbGVOYW1lIHx8IHRoZWlycy5uZXdGaWxlTmFtZSkge1xuICAgICAgaWYgKCFmaWxlTmFtZUNoYW5nZWQobWluZSkpIHtcbiAgICAgICAgLy8gTm8gaGVhZGVyIG9yIG5vIGNoYW5nZSBpbiBvdXJzLCB1c2UgdGhlaXJzIChhbmQgb3VycyBpZiB0aGVpcnMgZG9lcyBub3QgZXhpc3QpXG4gICAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHRoZWlycy5vbGRGaWxlTmFtZSB8fCBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgICByZXQubmV3RmlsZU5hbWUgPSB0aGVpcnMubmV3RmlsZU5hbWUgfHwgbWluZS5uZXdGaWxlTmFtZTtcbiAgICAgICAgcmV0Lm9sZEhlYWRlciA9IHRoZWlycy5vbGRIZWFkZXIgfHwgbWluZS5vbGRIZWFkZXI7XG4gICAgICAgIHJldC5uZXdIZWFkZXIgPSB0aGVpcnMubmV3SGVhZGVyIHx8IG1pbmUubmV3SGVhZGVyO1xuICAgICAgfSBlbHNlIGlmICghZmlsZU5hbWVDaGFuZ2VkKHRoZWlycykpIHtcbiAgICAgICAgLy8gTm8gaGVhZGVyIG9yIG5vIGNoYW5nZSBpbiB0aGVpcnMsIHVzZSBvdXJzXG4gICAgICAgIHJldC5vbGRGaWxlTmFtZSA9IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICAgIHJldC5uZXdGaWxlTmFtZSA9IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICAgIHJldC5vbGRIZWFkZXIgPSBtaW5lLm9sZEhlYWRlcjtcbiAgICAgICAgcmV0Lm5ld0hlYWRlciA9IG1pbmUubmV3SGVhZGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQm90aCBjaGFuZ2VkLi4uIGZpZ3VyZSBpdCBvdXRcbiAgICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEZpbGVOYW1lLCB0aGVpcnMub2xkRmlsZU5hbWUpO1xuICAgICAgICByZXQubmV3RmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3RmlsZU5hbWUsIHRoZWlycy5uZXdGaWxlTmFtZSk7XG4gICAgICAgIHJldC5vbGRIZWFkZXIgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUub2xkSGVhZGVyLCB0aGVpcnMub2xkSGVhZGVyKTtcbiAgICAgICAgcmV0Lm5ld0hlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdIZWFkZXIsIHRoZWlycy5uZXdIZWFkZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldC5odW5rcyA9IFtdO1xuICAgIHZhciBtaW5lSW5kZXggPSAwLFxuICAgICAgICB0aGVpcnNJbmRleCA9IDAsXG4gICAgICAgIG1pbmVPZmZzZXQgPSAwLFxuICAgICAgICB0aGVpcnNPZmZzZXQgPSAwO1xuXG4gICAgd2hpbGUgKG1pbmVJbmRleCA8IG1pbmUuaHVua3MubGVuZ3RoIHx8IHRoZWlyc0luZGV4IDwgdGhlaXJzLmh1bmtzLmxlbmd0aCkge1xuICAgICAgdmFyIG1pbmVDdXJyZW50ID0gbWluZS5odW5rc1ttaW5lSW5kZXhdIHx8IHtcbiAgICAgICAgb2xkU3RhcnQ6IEluZmluaXR5XG4gICAgICB9LFxuICAgICAgICAgIHRoZWlyc0N1cnJlbnQgPSB0aGVpcnMuaHVua3NbdGhlaXJzSW5kZXhdIHx8IHtcbiAgICAgICAgb2xkU3RhcnQ6IEluZmluaXR5XG4gICAgICB9O1xuXG4gICAgICBpZiAoaHVua0JlZm9yZShtaW5lQ3VycmVudCwgdGhlaXJzQ3VycmVudCkpIHtcbiAgICAgICAgLy8gVGhpcyBwYXRjaCBkb2VzIG5vdCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBvdGhlcnMsIHlheS5cbiAgICAgICAgcmV0Lmh1bmtzLnB1c2goY2xvbmVIdW5rKG1pbmVDdXJyZW50LCBtaW5lT2Zmc2V0KSk7XG4gICAgICAgIG1pbmVJbmRleCsrO1xuICAgICAgICB0aGVpcnNPZmZzZXQgKz0gbWluZUN1cnJlbnQubmV3TGluZXMgLSBtaW5lQ3VycmVudC5vbGRMaW5lcztcbiAgICAgIH0gZWxzZSBpZiAoaHVua0JlZm9yZSh0aGVpcnNDdXJyZW50LCBtaW5lQ3VycmVudCkpIHtcbiAgICAgICAgLy8gVGhpcyBwYXRjaCBkb2VzIG5vdCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBvdGhlcnMsIHlheS5cbiAgICAgICAgcmV0Lmh1bmtzLnB1c2goY2xvbmVIdW5rKHRoZWlyc0N1cnJlbnQsIHRoZWlyc09mZnNldCkpO1xuICAgICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgICBtaW5lT2Zmc2V0ICs9IHRoZWlyc0N1cnJlbnQubmV3TGluZXMgLSB0aGVpcnNDdXJyZW50Lm9sZExpbmVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3ZlcmxhcCwgbWVyZ2UgYXMgYmVzdCB3ZSBjYW5cbiAgICAgICAgdmFyIG1lcmdlZEh1bmsgPSB7XG4gICAgICAgICAgb2xkU3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0KSxcbiAgICAgICAgICBvbGRMaW5lczogMCxcbiAgICAgICAgICBuZXdTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQubmV3U3RhcnQgKyBtaW5lT2Zmc2V0LCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0ICsgdGhlaXJzT2Zmc2V0KSxcbiAgICAgICAgICBuZXdMaW5lczogMCxcbiAgICAgICAgICBsaW5lczogW11cbiAgICAgICAgfTtcbiAgICAgICAgbWVyZ2VMaW5lcyhtZXJnZWRIdW5rLCBtaW5lQ3VycmVudC5vbGRTdGFydCwgbWluZUN1cnJlbnQubGluZXMsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQsIHRoZWlyc0N1cnJlbnQubGluZXMpO1xuICAgICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgICBtaW5lSW5kZXgrKztcbiAgICAgICAgcmV0Lmh1bmtzLnB1c2gobWVyZ2VkSHVuayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRQYXRjaChwYXJhbSwgYmFzZSkge1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoL15AQC9tLnRlc3QocGFyYW0pIHx8IC9eSW5kZXg6L20udGVzdChwYXJhbSkpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlUGF0Y2gocGFyYW0pWzBdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWJhc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgYSBiYXNlIHJlZmVyZW5jZSBvciBwYXNzIGluIGEgcGF0Y2gnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cnVjdHVyZWRQYXRjaCh1bmRlZmluZWQsIHVuZGVmaW5lZCwgYmFzZSwgcGFyYW0pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVOYW1lQ2hhbmdlZChwYXRjaCkge1xuICAgIHJldHVybiBwYXRjaC5uZXdGaWxlTmFtZSAmJiBwYXRjaC5uZXdGaWxlTmFtZSAhPT0gcGF0Y2gub2xkRmlsZU5hbWU7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RGaWVsZChpbmRleCwgbWluZSwgdGhlaXJzKSB7XG4gICAgaWYgKG1pbmUgPT09IHRoZWlycykge1xuICAgICAgcmV0dXJuIG1pbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4LmNvbmZsaWN0ID0gdHJ1ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pbmU6IG1pbmUsXG4gICAgICAgIHRoZWlyczogdGhlaXJzXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGh1bmtCZWZvcmUodGVzdCwgY2hlY2spIHtcbiAgICByZXR1cm4gdGVzdC5vbGRTdGFydCA8IGNoZWNrLm9sZFN0YXJ0ICYmIHRlc3Qub2xkU3RhcnQgKyB0ZXN0Lm9sZExpbmVzIDwgY2hlY2sub2xkU3RhcnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZUh1bmsoaHVuaywgb2Zmc2V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9sZFN0YXJ0OiBodW5rLm9sZFN0YXJ0LFxuICAgICAgb2xkTGluZXM6IGh1bmsub2xkTGluZXMsXG4gICAgICBuZXdTdGFydDogaHVuay5uZXdTdGFydCArIG9mZnNldCxcbiAgICAgIG5ld0xpbmVzOiBodW5rLm5ld0xpbmVzLFxuICAgICAgbGluZXM6IGh1bmsubGluZXNcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VMaW5lcyhodW5rLCBtaW5lT2Zmc2V0LCBtaW5lTGluZXMsIHRoZWlyT2Zmc2V0LCB0aGVpckxpbmVzKSB7XG4gICAgLy8gVGhpcyB3aWxsIGdlbmVyYWxseSByZXN1bHQgaW4gYSBjb25mbGljdGVkIGh1bmssIGJ1dCB0aGVyZSBhcmUgY2FzZXMgd2hlcmUgdGhlIGNvbnRleHRcbiAgICAvLyBpcyB0aGUgb25seSBvdmVybGFwIHdoZXJlIHdlIGNhbiBzdWNjZXNzZnVsbHkgbWVyZ2UgdGhlIGNvbnRlbnQgaGVyZS5cbiAgICB2YXIgbWluZSA9IHtcbiAgICAgIG9mZnNldDogbWluZU9mZnNldCxcbiAgICAgIGxpbmVzOiBtaW5lTGluZXMsXG4gICAgICBpbmRleDogMFxuICAgIH0sXG4gICAgICAgIHRoZWlyID0ge1xuICAgICAgb2Zmc2V0OiB0aGVpck9mZnNldCxcbiAgICAgIGxpbmVzOiB0aGVpckxpbmVzLFxuICAgICAgaW5kZXg6IDBcbiAgICB9OyAvLyBIYW5kbGUgYW55IGxlYWRpbmcgY29udGVudFxuXG4gICAgaW5zZXJ0TGVhZGluZyhodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgaW5zZXJ0TGVhZGluZyhodW5rLCB0aGVpciwgbWluZSk7IC8vIE5vdyBpbiB0aGUgb3ZlcmxhcCBjb250ZW50LiBTY2FuIHRocm91Z2ggYW5kIHNlbGVjdCB0aGUgYmVzdCBjaGFuZ2VzIGZyb20gZWFjaC5cblxuICAgIHdoaWxlIChtaW5lLmluZGV4IDwgbWluZS5saW5lcy5sZW5ndGggJiYgdGhlaXIuaW5kZXggPCB0aGVpci5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBtaW5lQ3VycmVudCA9IG1pbmUubGluZXNbbWluZS5pbmRleF0sXG4gICAgICAgICAgdGhlaXJDdXJyZW50ID0gdGhlaXIubGluZXNbdGhlaXIuaW5kZXhdO1xuXG4gICAgICBpZiAoKG1pbmVDdXJyZW50WzBdID09PSAnLScgfHwgbWluZUN1cnJlbnRbMF0gPT09ICcrJykgJiYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nIHx8IHRoZWlyQ3VycmVudFswXSA9PT0gJysnKSkge1xuICAgICAgICAvLyBCb3RoIG1vZGlmaWVkIC4uLlxuICAgICAgICBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJysnICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAgIHZhciBfaHVuayRsaW5lcztcblxuICAgICAgICAvLyBNaW5lIGluc2VydGVkXG4gICAgICAgIChfaHVuayRsaW5lcyA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXMsIF90b0NvbnN1bWFibGVBcnJheShjb2xsZWN0Q2hhbmdlKG1pbmUpKSk7XG4gICAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJysnICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgICAgdmFyIF9odW5rJGxpbmVzMjtcblxuICAgICAgICAvLyBUaGVpcnMgaW5zZXJ0ZWRcbiAgICAgICAgKF9odW5rJGxpbmVzMiA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXMyLCBfdG9Db25zdW1hYmxlQXJyYXkoY29sbGVjdENoYW5nZSh0aGVpcikpKTtcbiAgICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICctJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgICAvLyBNaW5lIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICAgIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAgIC8vIFRoZWlyIHJlbW92ZWQgb3IgZWRpdGVkXG4gICAgICAgIHJlbW92YWwoaHVuaywgdGhlaXIsIG1pbmUsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudCA9PT0gdGhlaXJDdXJyZW50KSB7XG4gICAgICAgIC8vIENvbnRleHQgaWRlbnRpdHlcbiAgICAgICAgaHVuay5saW5lcy5wdXNoKG1pbmVDdXJyZW50KTtcbiAgICAgICAgbWluZS5pbmRleCsrO1xuICAgICAgICB0aGVpci5pbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ29udGV4dCBtaXNtYXRjaFxuICAgICAgICBjb25mbGljdChodW5rLCBjb2xsZWN0Q2hhbmdlKG1pbmUpLCBjb2xsZWN0Q2hhbmdlKHRoZWlyKSk7XG4gICAgICB9XG4gICAgfSAvLyBOb3cgcHVzaCBhbnl0aGluZyB0aGF0IG1heSBiZSByZW1haW5pbmdcblxuXG4gICAgaW5zZXJ0VHJhaWxpbmcoaHVuaywgbWluZSk7XG4gICAgaW5zZXJ0VHJhaWxpbmcoaHVuaywgdGhlaXIpO1xuICAgIGNhbGNMaW5lQ291bnQoaHVuayk7XG4gIH1cblxuICBmdW5jdGlvbiBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgICB2YXIgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENoYW5nZSh0aGVpcik7XG5cbiAgICBpZiAoYWxsUmVtb3ZlcyhteUNoYW5nZXMpICYmIGFsbFJlbW92ZXModGhlaXJDaGFuZ2VzKSkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciByZW1vdmUgY2hhbmdlcyB0aGF0IGFyZSBzdXBlcnNldHMgb2Ygb25lIGFub3RoZXJcbiAgICAgIGlmIChhcnJheVN0YXJ0c1dpdGgobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpICYmIHNraXBSZW1vdmVTdXBlcnNldCh0aGVpciwgbXlDaGFuZ2VzLCBteUNoYW5nZXMubGVuZ3RoIC0gdGhlaXJDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIF9odW5rJGxpbmVzMztcblxuICAgICAgICAoX2h1bmskbGluZXMzID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczMsIF90b0NvbnN1bWFibGVBcnJheShteUNoYW5nZXMpKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGFycmF5U3RhcnRzV2l0aCh0aGVpckNoYW5nZXMsIG15Q2hhbmdlcykgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KG1pbmUsIHRoZWlyQ2hhbmdlcywgdGhlaXJDaGFuZ2VzLmxlbmd0aCAtIG15Q2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBfaHVuayRsaW5lczQ7XG5cbiAgICAgICAgKF9odW5rJGxpbmVzNCA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXM0LCBfdG9Db25zdW1hYmxlQXJyYXkodGhlaXJDaGFuZ2VzKSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJyYXlFcXVhbChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcykpIHtcbiAgICAgIHZhciBfaHVuayRsaW5lczU7XG5cbiAgICAgIChfaHVuayRsaW5lczUgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzNSwgX3RvQ29uc3VtYWJsZUFycmF5KG15Q2hhbmdlcykpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmxpY3QoaHVuaywgbXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZhbChodW5rLCBtaW5lLCB0aGVpciwgc3dhcCkge1xuICAgIHZhciBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q29udGV4dCh0aGVpciwgbXlDaGFuZ2VzKTtcblxuICAgIGlmICh0aGVpckNoYW5nZXMubWVyZ2VkKSB7XG4gICAgICB2YXIgX2h1bmskbGluZXM2O1xuXG4gICAgICAoX2h1bmskbGluZXM2ID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczYsIF90b0NvbnN1bWFibGVBcnJheSh0aGVpckNoYW5nZXMubWVyZ2VkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZsaWN0KGh1bmssIHN3YXAgPyB0aGVpckNoYW5nZXMgOiBteUNoYW5nZXMsIHN3YXAgPyBteUNoYW5nZXMgOiB0aGVpckNoYW5nZXMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZsaWN0KGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gICAgaHVuay5jb25mbGljdCA9IHRydWU7XG4gICAgaHVuay5saW5lcy5wdXNoKHtcbiAgICAgIGNvbmZsaWN0OiB0cnVlLFxuICAgICAgbWluZTogbWluZSxcbiAgICAgIHRoZWlyczogdGhlaXJcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydExlYWRpbmcoaHVuaywgaW5zZXJ0LCB0aGVpcikge1xuICAgIHdoaWxlIChpbnNlcnQub2Zmc2V0IDwgdGhlaXIub2Zmc2V0ICYmIGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgICAgIGluc2VydC5vZmZzZXQrKztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRUcmFpbGluZyhodW5rLCBpbnNlcnQpIHtcbiAgICB3aGlsZSAoaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xuICAgICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbGxlY3RDaGFuZ2Uoc3RhdGUpIHtcbiAgICB2YXIgcmV0ID0gW10sXG4gICAgICAgIG9wZXJhdGlvbiA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XVswXTtcblxuICAgIHdoaWxlIChzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIGxpbmUgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF07IC8vIEdyb3VwIGFkZGl0aW9ucyB0aGF0IGFyZSBpbW1lZGlhdGVseSBhZnRlciBzdWJ0cmFjdGlvbnMgYW5kIHRyZWF0IHRoZW0gYXMgb25lIFwiYXRvbWljXCIgbW9kaWZ5IGNoYW5nZS5cblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJy0nICYmIGxpbmVbMF0gPT09ICcrJykge1xuICAgICAgICBvcGVyYXRpb24gPSAnKyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcGVyYXRpb24gPT09IGxpbmVbMF0pIHtcbiAgICAgICAgcmV0LnB1c2gobGluZSk7XG4gICAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29sbGVjdENvbnRleHQoc3RhdGUsIG1hdGNoQ2hhbmdlcykge1xuICAgIHZhciBjaGFuZ2VzID0gW10sXG4gICAgICAgIG1lcmdlZCA9IFtdLFxuICAgICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgICAgY29udGV4dENoYW5nZXMgPSBmYWxzZSxcbiAgICAgICAgY29uZmxpY3RlZCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoICYmIHN0YXRlLmluZGV4IDwgc3RhdGUubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hhbmdlID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdLFxuICAgICAgICAgIG1hdGNoID0gbWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdOyAvLyBPbmNlIHdlJ3ZlIGhpdCBvdXIgYWRkLCB0aGVuIHdlIGFyZSBkb25lXG5cbiAgICAgIGlmIChtYXRjaFswXSA9PT0gJysnKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Q2hhbmdlcyA9IGNvbnRleHRDaGFuZ2VzIHx8IGNoYW5nZVswXSAhPT0gJyAnO1xuICAgICAgbWVyZ2VkLnB1c2gobWF0Y2gpO1xuICAgICAgbWF0Y2hJbmRleCsrOyAvLyBDb25zdW1lIGFueSBhZGRpdGlvbnMgaW4gdGhlIG90aGVyIGJsb2NrIGFzIGEgY29uZmxpY3QgdG8gYXR0ZW1wdFxuICAgICAgLy8gdG8gcHVsbCBpbiB0aGUgcmVtYWluaW5nIGNvbnRleHQgYWZ0ZXIgdGhpc1xuXG4gICAgICBpZiAoY2hhbmdlWzBdID09PSAnKycpIHtcbiAgICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG5cbiAgICAgICAgd2hpbGUgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgICAgY2hhbmdlID0gc3RhdGUubGluZXNbKytzdGF0ZS5pbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoLnN1YnN0cigxKSA9PT0gY2hhbmdlLnN1YnN0cigxKSkge1xuICAgICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgc3RhdGUuaW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdIHx8ICcnKVswXSA9PT0gJysnICYmIGNvbnRleHRDaGFuZ2VzKSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmxpY3RlZCkge1xuICAgICAgcmV0dXJuIGNoYW5nZXM7XG4gICAgfVxuXG4gICAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoKSB7XG4gICAgICBtZXJnZWQucHVzaChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleCsrXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lcmdlZDogbWVyZ2VkLFxuICAgICAgY2hhbmdlczogY2hhbmdlc1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBhbGxSZW1vdmVzKGNoYW5nZXMpIHtcbiAgICByZXR1cm4gY2hhbmdlcy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGNoYW5nZSkge1xuICAgICAgcmV0dXJuIHByZXYgJiYgY2hhbmdlWzBdID09PSAnLSc7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwUmVtb3ZlU3VwZXJzZXQoc3RhdGUsIHJlbW92ZUNoYW5nZXMsIGRlbHRhKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWx0YTsgaSsrKSB7XG4gICAgICB2YXIgY2hhbmdlQ29udGVudCA9IHJlbW92ZUNoYW5nZXNbcmVtb3ZlQ2hhbmdlcy5sZW5ndGggLSBkZWx0YSArIGldLnN1YnN0cigxKTtcblxuICAgICAgaWYgKHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4ICsgaV0gIT09ICcgJyArIGNoYW5nZUNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlLmluZGV4ICs9IGRlbHRhO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lcykge1xuICAgIHZhciBvbGRMaW5lcyA9IDA7XG4gICAgdmFyIG5ld0xpbmVzID0gMDtcbiAgICBsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICBpZiAodHlwZW9mIGxpbmUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBteUNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lLm1pbmUpO1xuICAgICAgICB2YXIgdGhlaXJDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQobGluZS50aGVpcnMpO1xuXG4gICAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKG15Q291bnQub2xkTGluZXMgPT09IHRoZWlyQ291bnQub2xkTGluZXMpIHtcbiAgICAgICAgICAgIG9sZExpbmVzICs9IG15Q291bnQub2xkTGluZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sZExpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKG15Q291bnQubmV3TGluZXMgPT09IHRoZWlyQ291bnQubmV3TGluZXMpIHtcbiAgICAgICAgICAgIG5ld0xpbmVzICs9IG15Q291bnQubmV3TGluZXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0xpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQgJiYgKGxpbmVbMF0gPT09ICcrJyB8fCBsaW5lWzBdID09PSAnICcpKSB7XG4gICAgICAgICAgbmV3TGluZXMrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvbGRMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnLScgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICAgIG9sZExpbmVzKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgb2xkTGluZXM6IG9sZExpbmVzLFxuICAgICAgbmV3TGluZXM6IG5ld0xpbmVzXG4gICAgfTtcbiAgfVxuXG4gIC8vIFNlZTogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL3dpa2kvQVBJXG4gIGZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9ETVAoY2hhbmdlcykge1xuICAgIHZhciByZXQgPSBbXSxcbiAgICAgICAgY2hhbmdlLFxuICAgICAgICBvcGVyYXRpb247XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYW5nZSA9IGNoYW5nZXNbaV07XG5cbiAgICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgICAgb3BlcmF0aW9uID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgICAgb3BlcmF0aW9uID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVyYXRpb24gPSAwO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChbb3BlcmF0aW9uLCBjaGFuZ2UudmFsdWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb1hNTChjaGFuZ2VzKSB7XG4gICAgdmFyIHJldCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hhbmdlID0gY2hhbmdlc1tpXTtcblxuICAgICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgICByZXQucHVzaCgnPGlucz4nKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgICAgcmV0LnB1c2goJzxkZWw+Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKGVzY2FwZUhUTUwoY2hhbmdlLnZhbHVlKSk7XG5cbiAgICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgICAgcmV0LnB1c2goJzwvaW5zPicpO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgICByZXQucHVzaCgnPC9kZWw+Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldC5qb2luKCcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzY2FwZUhUTUwocykge1xuICAgIHZhciBuID0gcztcbiAgICBuID0gbi5yZXBsYWNlKC8mL2csICcmYW1wOycpO1xuICAgIG4gPSBuLnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcbiAgICBuID0gbi5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgbiA9IG4ucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgIHJldHVybiBuO1xuICB9XG5cbiAgLyogU2VlIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMgb2YgdXNlICovXG5cbiAgZXhwb3J0cy5EaWZmID0gRGlmZjtcbiAgZXhwb3J0cy5kaWZmQ2hhcnMgPSBkaWZmQ2hhcnM7XG4gIGV4cG9ydHMuZGlmZldvcmRzID0gZGlmZldvcmRzO1xuICBleHBvcnRzLmRpZmZXb3Jkc1dpdGhTcGFjZSA9IGRpZmZXb3Jkc1dpdGhTcGFjZTtcbiAgZXhwb3J0cy5kaWZmTGluZXMgPSBkaWZmTGluZXM7XG4gIGV4cG9ydHMuZGlmZlRyaW1tZWRMaW5lcyA9IGRpZmZUcmltbWVkTGluZXM7XG4gIGV4cG9ydHMuZGlmZlNlbnRlbmNlcyA9IGRpZmZTZW50ZW5jZXM7XG4gIGV4cG9ydHMuZGlmZkNzcyA9IGRpZmZDc3M7XG4gIGV4cG9ydHMuZGlmZkpzb24gPSBkaWZmSnNvbjtcbiAgZXhwb3J0cy5kaWZmQXJyYXlzID0gZGlmZkFycmF5cztcbiAgZXhwb3J0cy5zdHJ1Y3R1cmVkUGF0Y2ggPSBzdHJ1Y3R1cmVkUGF0Y2g7XG4gIGV4cG9ydHMuY3JlYXRlVHdvRmlsZXNQYXRjaCA9IGNyZWF0ZVR3b0ZpbGVzUGF0Y2g7XG4gIGV4cG9ydHMuY3JlYXRlUGF0Y2ggPSBjcmVhdGVQYXRjaDtcbiAgZXhwb3J0cy5hcHBseVBhdGNoID0gYXBwbHlQYXRjaDtcbiAgZXhwb3J0cy5hcHBseVBhdGNoZXMgPSBhcHBseVBhdGNoZXM7XG4gIGV4cG9ydHMucGFyc2VQYXRjaCA9IHBhcnNlUGF0Y2g7XG4gIGV4cG9ydHMubWVyZ2UgPSBtZXJnZTtcbiAgZXhwb3J0cy5jb252ZXJ0Q2hhbmdlc1RvRE1QID0gY29udmVydENoYW5nZXNUb0RNUDtcbiAgZXhwb3J0cy5jb252ZXJ0Q2hhbmdlc1RvWE1MID0gY29udmVydENoYW5nZXNUb1hNTDtcbiAgZXhwb3J0cy5jYW5vbmljYWxpemUgPSBjYW5vbmljYWxpemU7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgQWR2YW5jZWRCbGFua3MgZnJvbSAnLi4vc2NyaXB0cy9hcHAnO1xyXG5cclxuLy8gTG9hZCBsaWJyYXJ5XHJcbkg1UCA9IEg1UCB8fCB7fTtcclxuSDVQLkFkdmFuY2VkQmxhbmtzID0gQWR2YW5jZWRCbGFua3M7IiwiZXhwb3J0IGZ1bmN0aW9uIGdldExvbmdlc3RTdHJpbmcoc3RyaW5nczogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gIHJldHVybiBzdHJpbmdzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC5sZW5ndGggPiBwcmV2Lmxlbmd0aCA/IGN1cnJlbnQgOiBwcmV2LCBcIlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGVBcnJheShhcnJheTogYW55W10pIHtcclxuICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgIHZhciB0ZW1wID0gYXJyYXlbaV07XHJcbiAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xyXG4gICAgYXJyYXlbal0gPSB0ZW1wO1xyXG4gIH1cclxuICByZXR1cm4gYXJyYXk7XHJcbn0iLCIvLyBUT0RPIGNhbiB3ZSBqdXN0IGRlY2xhcmUgdGhlIGtleWRvd25IYW5kbGVyIG9uY2U/IHVzaW5nIGB0aGlzYD9cclxuZnVuY3Rpb24gbWFrZUtleURlZmluaXRpb24oY29kZT86IG51bWJlcikge1xyXG4gIHJldHVybiAobm9kZSwgZmlyZSkgPT4ge1xyXG4gICAgZnVuY3Rpb24ga2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgdmFyIHdoaWNoID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcclxuXHJcbiAgICAgIGlmIChjb2RlICYmIHdoaWNoID09PSBjb2RlKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgZmlyZSh7XHJcbiAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgb3JpZ2luYWw6IGV2ZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIWNvZGUgJiYgWzE2LCAxNywgMTgsIDM1LCAzNiwgMTMsIDksIDI3LCAzMiwgMzcsIDM5LCA0MCwgMzhdLmZpbHRlcihjID0+IGMgPT09IHdoaWNoKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBmaXJlKHtcclxuICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICBvcmlnaW5hbDogZXZlbnRcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25IYW5kbGVyLCBmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGVhcmRvd24oKSB7XHJcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW50ZXIgPSBtYWtlS2V5RGVmaW5pdGlvbigxMyk7XHJcbmV4cG9ydCBjb25zdCB0YWIgPSBtYWtlS2V5RGVmaW5pdGlvbig5KTtcclxuZXhwb3J0IGNvbnN0IGVzY2FwZSA9IG1ha2VLZXlEZWZpbml0aW9uKDI3KTtcclxuZXhwb3J0IGNvbnN0IHNwYWNlID0gbWFrZUtleURlZmluaXRpb24oMzIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxlZnRhcnJvdyA9IG1ha2VLZXlEZWZpbml0aW9uKDM3KTtcclxuZXhwb3J0IGNvbnN0IHJpZ2h0YXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzOSk7XHJcbmV4cG9ydCBjb25zdCBkb3duYXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbig0MCk7XHJcbmV4cG9ydCBjb25zdCB1cGFycm93ID0gbWFrZUtleURlZmluaXRpb24oMzgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFueWtleSA9IG1ha2VLZXlEZWZpbml0aW9uKCk7IiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuL2NvbnRlbnQtbG9hZGVycy9ibGFuay1sb2FkZXInO1xyXG5pbXBvcnQgeyBINVBEYXRhUmVwb3NpdG9yeSwgSURhdGFSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRhLXJlcG9zaXRvcnknO1xyXG5pbXBvcnQgeyBDbG96ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2Nsb3plLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24sIExvY2FsaXphdGlvbkxhYmVscywgTG9jYWxpemF0aW9uU3RydWN0dXJlcyB9IGZyb20gXCIuL3NlcnZpY2VzL2xvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBJU2V0dGluZ3MsIEg1UFNldHRpbmdzIH0gZnJvbSBcIi4vc2VydmljZXMvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XHJcbmltcG9ydCB7IFVucndhcHBlciB9IGZyb20gJy4vaGVscGVycy91bndyYXBwZXInO1xyXG5pbXBvcnQgeyBYQVBJQWN0aXZpdHlEZWZpbml0aW9uIH0gZnJvbSAnLi9tb2RlbHMveGFwaSc7XHJcbmltcG9ydCB7IGNyZWF0ZVBlcm11dGF0aW9ucyB9IGZyb20gJy4vaGVscGVycy9wZXJtdXRhdGlvbnMnO1xyXG5cclxuXHJcbmVudW0gU3RhdGVzIHtcclxuICBvbmdvaW5nID0gJ29uZ29pbmcnLFxyXG4gIGNoZWNraW5nID0gJ2NoZWNraW5nJyxcclxuICBzaG93aW5nU29sdXRpb25zID0gJ3Nob3dpbmctc29sdXRpb24nLFxyXG4gIHN1Ym1pdHRlZEFuc3dlcnMgPSAnc3VibWl0dGVkLWFuc3dlcicsXHJcbiAgZmluaXNoZWQgPSAnZmluaXNoZWQnLFxyXG4gIHNob3dpbmdTb2x1dGlvbnNFbWJlZGRlZCA9ICdzaG93aW5nLXNvbHV0aW9uLWVtYmVkZGVkJ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZHZhbmNlZEJsYW5rcyBleHRlbmRzIChINVAuUXVlc3Rpb24gYXMgeyBuZXcoKTogYW55OyB9KSB7XHJcblxyXG4gIHByaXZhdGUgY2xvemVDb250cm9sbGVyOiBDbG96ZUNvbnRyb2xsZXI7XHJcbiAgcHJpdmF0ZSByZXBvc2l0b3J5OiBJRGF0YVJlcG9zaXRvcnk7XHJcbiAgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzO1xyXG4gIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb247XHJcbiAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgalF1ZXJ5O1xyXG5cclxuICBwcml2YXRlIGNvbnRlbnRJZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcHJldmlvdXNTdGF0ZTogYW55O1xyXG4gIHByaXZhdGUgc3RhdGU6IFN0YXRlcztcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIHVzZXIgaGFzIGVudGVyZWQgYW55IGFuc3dlciBzbyBmYXIuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhbnN3ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB1c2VyIGhhcyBzdWJtaXR0ZWQgYW5zd2VyLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB1c2VyIGlzIGluIHNob3cgc29sdXRpb24gbW9kZS5cclxuICAgKi9cclxuICBwcml2YXRlIHNob3dTb2x1dGlvbk1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRJZFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZW50RGF0YVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55LCBjb250ZW50SWQ6IHN0cmluZywgY29udGVudERhdGE6IGFueSA9IHt9KSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgY29uZmlnID0gSDVQLmpRdWVyeS5leHRlbmQodHJ1ZSwge30sIHtcclxuICAgICAgICBjdXJyaWtpc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGN1cnJpa2lsMTBuOiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRBbnN3ZXI6IFwiU3VibWl0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LCBjb25maWcpO1xyXG4gICAgdGhpcy5qUXVlcnkgPSBINVAualF1ZXJ5O1xyXG4gICAgdGhpcy5jb250ZW50SWQgPSBjb250ZW50SWQ7XHJcblxyXG4gICAgbGV0IHVud3JhcHBlciA9IG5ldyBVbnJ3YXBwZXIodGhpcy5qUXVlcnkpO1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgSDVQU2V0dGluZ3MoY29uZmlnKTtcclxuICAgIHRoaXMubG9jYWxpemF0aW9uID0gbmV3IEg1UExvY2FsaXphdGlvbihjb25maWcpO1xyXG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gbmV3IEg1UERhdGFSZXBvc2l0b3J5KGNvbmZpZywgdGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIDxKUXVlcnlTdGF0aWM+dGhpcy5qUXVlcnksIHVud3JhcHBlcik7XHJcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlID0gbmV3IE1lc3NhZ2VTZXJ2aWNlKHRoaXMualF1ZXJ5KTtcclxuICAgIEJsYW5rTG9hZGVyLmluaXRpYWxpemUodGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIHRoaXMualF1ZXJ5LCB0aGlzLm1lc3NhZ2VTZXJ2aWNlKTtcclxuXHJcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlciA9IG5ldyBDbG96ZUNvbnRyb2xsZXIodGhpcy5yZXBvc2l0b3J5LCB0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgdGhpcy5tZXNzYWdlU2VydmljZSk7XHJcblxyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25TY29yZUNoYW5nZWQgPSB0aGlzLm9uU2NvcmVDaGFuZ2VkO1xyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25Tb2x2ZWQgPSB0aGlzLm9uU29sdmVkO1xyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25BdXRvQ2hlY2tlZCA9IHRoaXMub25BdXRvQ2hlY2tlZDtcclxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uVHlwZWQgPSB0aGlzLm9uVHlwZWQ7XHJcblxyXG4gICAgaWYgKGNvbnRlbnREYXRhICYmIGNvbnRlbnREYXRhLnByZXZpb3VzU3RhdGUpXHJcbiAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IGNvbnRlbnREYXRhLnByZXZpb3VzU3RhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsZWQgZnJvbSBvdXRzaWRlIHdoZW4gdGhlIHNjb3JlIG9mIHRoZSBjbG96ZSBoYXMgY2hhbmdlZC5cclxuICAgKi9cclxuICBwcml2YXRlIG9uU2NvcmVDaGFuZ2VkID0gKHNjb3JlOiBudW1iZXIsIG1heFNjb3JlOiBudW1iZXIpID0+IHtcclxuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5pc0Z1bGx5RmlsbGVkT3V0KSB7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvblN0YXRlKCk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZXMuZmluaXNoZWQpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5jaGVja2luZztcclxuICAgICAgdGhpcy5zaG93RmVlZGJhY2soKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnNldEZlZWRiYWNrKFwiXCIsIHNjb3JlLCBtYXhTY29yZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSgpO1xyXG4gICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNvbHZlZCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uVHlwZWQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU3RhdGVzLmNoZWNraW5nKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMub25nb2luZztcclxuICAgICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmlnZ2VyWEFQSSgnaW50ZXJhY3RlZCcpO1xyXG4gICAgdGhpcy5hbnN3ZXJlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQXV0b0NoZWNrZWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnRyaWdnZXJYQVBJKCdpbnRlcmFjdGVkJyk7XHJcbiAgICB0aGlzLnRyaWdnZXJYQVBJQW5zd2VyZWQoKTtcclxuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5pc0Z1bGx5RmlsbGVkT3V0KSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlclhBUElDb21wbGV0ZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE92ZXJyaWRlcyB0aGUgYXR0YWNoIG1ldGhvZCBvZiB0aGUgc3VwZXJjbGFzcyAoSDVQLlF1ZXN0aW9uKSBhbmQgY2FsbHMgaXRcclxuICAgKiBhdCB0aGUgc2FtZSB0aW1lLiAoZXF1aXZhbGVudCB0byBzdXBlci5hdHRhY2goJGNvbnRhaW5lcikpLlxyXG4gICAqIFRoaXMgaXMgbmVjZXNzYXJ5LCBhcyBSYWN0aXZlIG5lZWRzIHRvIGJlIGluaXRpYWxpemVkIHdpdGggYW4gZXhpc3RpbmcgRE9NXHJcbiAgICogZWxlbWVudC4gRE9NIGVsZW1lbnRzIGFyZSBjcmVhdGVkIGluIEg1UC5RdWVzdGlvbi5hdHRhY2gsIHNvIGluaXRpYWxpemluZyBcclxuICAgKiBSYWN0aXZlIGluIHJlZ2lzdGVyRG9tRWxlbWVudHMgZG9lc24ndCB3b3JrLlxyXG4gICAqL1xyXG4gIGF0dGFjaCA9ICgob3JpZ2luYWwpID0+IHtcclxuICAgIHJldHVybiAoJGNvbnRhaW5lcikgPT4ge1xyXG4gICAgICBvcmlnaW5hbCgkY29udGFpbmVyKTtcclxuICAgICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuaW5pdGlhbGl6ZSh0aGlzLmNvbnRhaW5lci5nZXQoMCksICRjb250YWluZXIpO1xyXG4gICAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuZGVzZXJpYWxpemVDbG96ZSh0aGlzLnByZXZpb3VzU3RhdGUpKSB7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJlZCA9IHRoaXMuY2xvemVDb250cm9sbGVyLmlzRmlsbGVkT3V0O1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9DaGVjaylcclxuICAgICAgICAgIHRoaXMub25DaGVja0Fuc3dlcigpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pKHRoaXMuYXR0YWNoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIGJ5IEg1UC5RdWVzdGlvbi5hdHRhY2goKS4gQ3JlYXRlcyBhbGwgY29udGVudCBlbGVtZW50cyBhbmQgcmVnaXN0ZXJzIHRoZW1cclxuICAgKiB3aXRoIEg1UC5RdWVzdGlvbi5cclxuICAgKi9cclxuICByZWdpc3RlckRvbUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5yZWdpc3Rlck1lZGlhKCk7XHJcbiAgICB0aGlzLnNldEludHJvZHVjdGlvbih0aGlzLnJlcG9zaXRvcnkuZ2V0VGFza0Rlc2NyaXB0aW9uKCkpO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qUXVlcnkoXCI8ZGl2Lz5cIiwgeyBcImNsYXNzXCI6IFwiaDVwLWFkdmFuY2VkLWJsYW5rc1wiIH0pO1xyXG4gICAgdGhpcy5zZXRDb250ZW50KHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMucmVnaXN0ZXJCdXR0b25zKCk7XHJcblxyXG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMub25nb2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyBKUXVlcnkgLSBUaGUgb3V0ZXIgaDVwIGNvbnRhaW5lci4gVGhlIGxpYnJhcnkgY2FuIGFkZCBkaWFsb2d1ZXMgdG8gdGhpc1xyXG4gICAqIGVsZW1lbnQuIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0SDVwQ29udGFpbmVyKCk6IEpRdWVyeSB7XHJcbiAgICB2YXIgJGNvbnRlbnQgPSB0aGlzLmpRdWVyeSgnW2RhdGEtY29udGVudC1pZD1cIicgKyB0aGlzLmNvbnRlbnRJZCArICdcIl0uaDVwLWNvbnRlbnQnKTtcclxuICAgIHZhciAkY29udGFpbmVyUGFyZW50cyA9ICRjb250ZW50LnBhcmVudHMoJy5oNXAtY29udGFpbmVyJyk7XHJcblxyXG4gICAgLy8gc2VsZWN0IGZpbmQgY29udGFpbmVyIHRvIGF0dGFjaCBkaWFsb2dzIHRvXHJcbiAgICB2YXIgJGNvbnRhaW5lcjtcclxuICAgIGlmICgkY29udGFpbmVyUGFyZW50cy5sZW5ndGggIT09IDApIHtcclxuICAgICAgLy8gdXNlIHBhcmVudCBoaWdoZXN0IHVwIGlmIGFueVxyXG4gICAgICAkY29udGFpbmVyID0gJGNvbnRhaW5lclBhcmVudHMubGFzdCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoJGNvbnRlbnQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICRjb250YWluZXIgPSAkY29udGVudDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAkY29udGFpbmVyID0gdGhpcy5qUXVlcnkoZG9jdW1lbnQuYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICRjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyTWVkaWEoKSB7XHJcbiAgICB2YXIgbWVkaWEgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0TWVkaWEoKTtcclxuICAgIGlmICghbWVkaWEgfHwgIW1lZGlhLmxpYnJhcnkpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgdHlwZSA9IG1lZGlhLmxpYnJhcnkuc3BsaXQoJyAnKVswXTtcclxuICAgIGlmICh0eXBlID09PSAnSDVQLkltYWdlJykge1xyXG4gICAgICBpZiAobWVkaWEucGFyYW1zLmZpbGUpIHtcclxuICAgICAgICB0aGlzLnNldEltYWdlKG1lZGlhLnBhcmFtcy5maWxlLnBhdGgsIHtcclxuICAgICAgICAgIGRpc2FibGVJbWFnZVpvb21pbmc6IHRoaXMuc2V0dGluZ3MuZGlzYWJsZUltYWdlWm9vbWluZyxcclxuICAgICAgICAgIGFsdDogbWVkaWEucGFyYW1zLmFsdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlID09PSAnSDVQLlZpZGVvJykge1xyXG4gICAgICBpZiAobWVkaWEucGFyYW1zLnNvdXJjZXMpIHtcclxuICAgICAgICB0aGlzLnNldFZpZGVvKG1lZGlhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckJ1dHRvbnMoKSB7XHJcbiAgICB2YXIgJGNvbnRhaW5lciA9IHRoaXMuZ2V0SDVwQ29udGFpbmVyKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLmF1dG9DaGVjaykge1xyXG4gICAgICAvLyBDaGVjayBhbnN3ZXIgYnV0dG9uXHJcbiAgICAgIHRoaXMuYWRkQnV0dG9uKCdjaGVjay1hbnN3ZXInLCAnQ2hlY2sgQW5zd2VycycsXHJcbiAgICAgICAgdGhpcy5vbkNoZWNrQW5zd2VyLCB0cnVlLCB7fSwge1xyXG4gICAgICAgICAgY29uZmlybWF0aW9uRGlhbG9nOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdGhpcy5zZXR0aW5ncy5jb25maXJtQ2hlY2tEaWFsb2csXHJcbiAgICAgICAgICAgIGwxMG46IHRoaXMubG9jYWxpemF0aW9uLmdldE9iamVjdEZvclN0cnVjdHVyZShMb2NhbGl6YXRpb25TdHJ1Y3R1cmVzLmNvbmZpcm1DaGVjayksXHJcbiAgICAgICAgICAgIGluc3RhbmNlOiB0aGlzLFxyXG4gICAgICAgICAgICAkcGFyZW50RWxlbWVudDogJGNvbnRhaW5lclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCF0aGlzLnNldHRpbmdzLmRpc2FibGVTdWJtaXRCdXR0b24pIHtcclxuICAgICAgLy8gU3VibWl0IGFuc3dlciBidXR0b25cclxuICAgICAgdGhpcy5hZGRCdXR0b24oJ3N1Ym1pdC1hbnN3ZXInLCB0aGlzLmxvY2FsaXphdGlvbi5nZXRPYmplY3RGb3JTdHJ1Y3R1cmUoTG9jYWxpemF0aW9uU3RydWN0dXJlcy5jdXJyaWtpU2V0dGluZ3MpLmN1cnJpa2lsMTBuLnN1Ym1pdEFuc3dlcixcclxuICAgICAgICAgIHRoaXMub25TdWJtaXRBbnN3ZXIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3cgc29sdXRpb24gYnV0dG9uXHJcbiAgICB0aGlzLmFkZEJ1dHRvbignc2hvdy1zb2x1dGlvbicsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnNob3dTb2x1dGlvbkJ1dHRvbiksXHJcbiAgICAgIHRoaXMub25TaG93U29sdXRpb24sIHRoaXMuc2V0dGluZ3MuZW5hYmxlU29sdXRpb25zQnV0dG9uKTtcclxuXHJcbiAgICAvLyBUcnkgYWdhaW4gYnV0dG9uXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVSZXRyeSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmFkZEJ1dHRvbigndHJ5LWFnYWluJywgdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMucmV0cnlCdXR0b24pLFxyXG4gICAgICAgIHRoaXMub25SZXRyeSwgdHJ1ZSwge30sIHtcclxuICAgICAgICAgIGNvbmZpcm1hdGlvbkRpYWxvZzoge1xyXG4gICAgICAgICAgICBlbmFibGU6IHRoaXMuc2V0dGluZ3MuY29uZmlybVJldHJ5RGlhbG9nLFxyXG4gICAgICAgICAgICBsMTBuOiB0aGlzLmxvY2FsaXphdGlvbi5nZXRPYmplY3RGb3JTdHJ1Y3R1cmUoTG9jYWxpemF0aW9uU3RydWN0dXJlcy5jb25maXJtUmV0cnkpLFxyXG4gICAgICAgICAgICBpbnN0YW5jZTogdGhpcyxcclxuICAgICAgICAgICAgJHBhcmVudEVsZW1lbnQ6ICRjb250YWluZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DaGVja0Fuc3dlciA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLmNoZWNrQWxsKCk7XHJcblxyXG4gICAgdGhpcy50cmlnZ2VyWEFQSSgnaW50ZXJhY3RlZCcpO1xyXG4gICAgdGhpcy50cmlnZ2VyWEFQSUFuc3dlcmVkKCk7XHJcblxyXG4gICAgdGhpcy50cmFuc2l0aW9uU3RhdGUoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZXMuZmluaXNoZWQpXHJcbiAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuY2hlY2tpbmc7XHJcblxyXG4gICAgdGhpcy5zaG93RmVlZGJhY2soKTtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XHJcblxyXG4gICAgaWYodGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNGdWxseUZpbGxlZE91dCkge1xyXG4gICAgICB0aGlzLnRyaWdnZXJYQVBJQ29tcGxldGVkKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblN1Ym1pdEFuc3dlciA9ICgpID0+IHtcclxuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuc3VibWl0dGVkQW5zd2VycztcclxuICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcclxuICAgIHRoaXMudHJpZ2dlclhBUElTdWJtaXR0ZWRDdXJyaWtpKCk7XHJcbiAgICB0aGlzLmFkZFN1Ym1pdEFuc3dlckZlZWRiYWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIHN1Ym1pdCBhbnN3ZXIgZmVlZGJhY2sgZGl2XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhZGRTdWJtaXRBbnN3ZXJGZWVkYmFjayA9ICAoKSA9PiB7XHJcbiAgICB2YXIgJHN1Ym1pdF9tZXNzYWdlID0gJzxkaXYgY2xhc3M9XCJzdWJtaXQtYW5zd2VyLWZlZWRiYWNrXCIgc3R5bGUgPSBcImNvbG9yOiByZWRcIj5SZXN1bHQgaGFzIGJlZW4gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseTwvZGl2Pic7XHJcbiAgICBINVAualF1ZXJ5KCcuaDVwLXF1ZXN0aW9uLWJ1dHRvbnMnKS5hZnRlcigkc3VibWl0X21lc3NhZ2UpO1xyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHN1Ym1pdCBhbnN3ZXIgZmVlZGJhY2sgZGl2XHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZW1vdmVTdWJtaXRBbnN3ZXJGZWVkYmFjayA9ICAoKSA9PiB7XHJcbiAgICBINVAualF1ZXJ5KCcuc3VibWl0LWFuc3dlci1mZWVkYmFjaycpLnJlbW92ZSgpO1xyXG4gIH07XHJcblxyXG5cclxuICBwcml2YXRlIHRyYW5zaXRpb25TdGF0ZSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5pc1NvbHZlZCkge1xyXG4gICAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5maW5pc2hlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU2hvd1NvbHV0aW9uID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zaG93U29sdXRpb25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLnNob3dpbmdTb2x1dGlvbnMpO1xyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuc2hvd1NvbHV0aW9ucygpO1xyXG4gICAgdGhpcy5zaG93RmVlZGJhY2soKTtcclxuICAgIGlmKHRoaXMuc3VibWl0dGVkKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlU3VibWl0QW5zd2VyRmVlZGJhY2soKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uUmV0cnkgPSAoKSA9PiB7XHJcbiAgICAvKiBYQVBJIHJlc3RhcnQgdGhlIGFjdGl2aXR5U3RhcnRUaW1lICovXHJcbiAgICB0aGlzLnNldEFjdGl2aXR5U3RhcnRlZCgpO1xyXG4gICAgdGhpcy5yZW1vdmVGZWVkYmFjaygpO1xyXG4gICAgdGhpcy5yZW1vdmVTdWJtaXRBbnN3ZXJGZWVkYmFjaygpO1xyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIucmVzZXQoKTtcclxuICAgIHRoaXMuYW5zd2VyZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2hvd1NvbHV0aW9uTW9kZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLm9uZ29pbmcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc2hvd0ZlZWRiYWNrKCkge1xyXG4gICAgdmFyIHNjb3JlVGV4dCA9IEg1UC5RdWVzdGlvbi5kZXRlcm1pbmVPdmVyYWxsRmVlZGJhY2sodGhpcy5sb2NhbGl6YXRpb24uZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKExvY2FsaXphdGlvblN0cnVjdHVyZXMub3ZlcmFsbEZlZWRiYWNrKSwgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlIC8gdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUpLnJlcGxhY2UoJ0BzY29yZScsIHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZSkucmVwbGFjZSgnQHRvdGFsJywgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUpO1xyXG4gICAgdGhpcy5zZXRGZWVkYmFjayhzY29yZVRleHQsIHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZSwgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnNjb3JlQmFyTGFiZWwpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIGFyZSBoaWRlcyBidXR0b25zIGRlcGVuZGluZyBvbiB0aGUgY3VycmVudCBzdGF0ZSBhbmQgc2V0dGluZ3MgbWFkZVxyXG4gICAqIGJ5IHRoZSBjb250ZW50IGNyZWF0b3IuXHJcbiAgICogQHBhcmFtICB7U3RhdGVzfSBzdGF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgbW92ZVRvU3RhdGUoc3RhdGU6IFN0YXRlcykge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHN0YXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eShzdGF0ZTogU3RhdGVzKSB7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVTb2x1dGlvbnNCdXR0b24pIHtcclxuICAgICAgaWYgKCF0aGlzLnNob3dTb2x1dGlvbk1vZGUgJiYgKChzdGF0ZSA9PT0gU3RhdGVzLmNoZWNraW5nKVxyXG4gICAgICAgIHx8ICh0aGlzLnNldHRpbmdzLmF1dG9DaGVjayAmJiBzdGF0ZSA9PT0gU3RhdGVzLm9uZ29pbmcpIHx8IChzdGF0ZSA9PT0gU3RhdGVzLnN1Ym1pdHRlZEFuc3dlcnMpKVxyXG4gICAgICAgICYmICghdGhpcy5zZXR0aW5ncy5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dCB8fCB0aGlzLmNsb3plQ29udHJvbGxlci5hbGxCbGFua3NFbnRlcmVkKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0J1dHRvbignc2hvdy1zb2x1dGlvbicpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbignc2hvdy1zb2x1dGlvbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlUmV0cnkgJiYgKHN0YXRlID09PSBTdGF0ZXMuY2hlY2tpbmcgfHwgc3RhdGUgPT09IFN0YXRlcy5maW5pc2hlZCB8fCBzdGF0ZSA9PT0gU3RhdGVzLnNob3dpbmdTb2x1dGlvbnMgfHwgc3RhdGUgPT09IFN0YXRlcy5zdWJtaXR0ZWRBbnN3ZXJzKSkge1xyXG4gICAgICB0aGlzLnNob3dCdXR0b24oJ3RyeS1hZ2FpbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbigndHJ5LWFnYWluJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChzdGF0ZSA9PT0gU3RhdGVzLm9uZ29pbmcgJiYgdGhpcy5zZXR0aW5ncy5lbmFibGVDaGVja0J1dHRvbikge1xyXG4gICAgICB0aGlzLnNob3dCdXR0b24oJ2NoZWNrLWFuc3dlcicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignY2hlY2stYW5zd2VyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIXRoaXMuc2V0dGluZ3MuZGlzYWJsZVN1Ym1pdEJ1dHRvbikge1xyXG4gICAgICBpZighdGhpcy5zdWJtaXR0ZWQgJiYgKHN0YXRlID09PSBTdGF0ZXMuY2hlY2tpbmcgfHwgc3RhdGUgPT09IFN0YXRlcy5zaG93aW5nU29sdXRpb25zKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0J1dHRvbignc3VibWl0LWFuc3dlcicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbignc3VibWl0LWFuc3dlcicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXRlID09PSBTdGF0ZXMuc2hvd2luZ1NvbHV0aW9uc0VtYmVkZGVkKSB7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignY2hlY2stYW5zd2VyJyk7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbigndHJ5LWFnYWluJyk7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignc2hvdy1zb2x1dGlvbicpO1xyXG4gICAgICB0aGlzLmhpZGVCdXR0b24oJ3N1Ym1pdC1hbnN3ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRyaWdnZXIoJ3Jlc2l6ZScpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEN1cnJlbnRTdGF0ZSA9ICgpOiBzdHJpbmdbXSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jbG96ZUNvbnRyb2xsZXIuc2VyaWFsaXplQ2xvemUoKTtcclxuICB9O1xyXG5cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAqIEltcGxlbWVudGF0aW9uIG9mIFF1ZXN0aW9uIGNvbnRyYWN0ICAqXHJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgcHVibGljIGdldEFuc3dlckdpdmVuID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5zd2VyZWQgfHwgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUgPT09IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U2NvcmUgPSAoZnJvbUNoZWNrQW5zd2VyKTogbnVtYmVyID0+IHtcclxuICAgIGlmKCFmcm9tQ2hlY2tBbnN3ZXIpIHtcclxuICAgICAgdGhpcy5vbkNoZWNrQW5zd2VyKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE1heFNjb3JlID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1NvbHV0aW9ucyA9ICgpID0+IHtcclxuICAgIHRoaXMub25DaGVja0Fuc3dlcigpO1xyXG4gICAgdGhpcy5vblNob3dTb2x1dGlvbigpO1xyXG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMuc2hvd2luZ1NvbHV0aW9uc0VtYmVkZGVkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldFRhc2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLm9uUmV0cnkoKTtcclxuICB9XHJcblxyXG4gIC8qKipcclxuICAgKiBYQXBpIGltcGxlbWVudGF0aW9uXHJcbiAgICovXHJcblxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIHhBUEkgYW5zd2VyZWQgZXZlbnRcclxuICAgKi9cclxuICBwdWJsaWMgdHJpZ2dlclhBUElBbnN3ZXJlZCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHRoaXMuYW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgdmFyIHhBUElFdmVudCA9IHRoaXMuY3JlYXRlWEFQSUV2ZW50VGVtcGxhdGUoJ2Fuc3dlcmVkJyk7XHJcbiAgICB0aGlzLmFkZFF1ZXN0aW9uVG9YQVBJKHhBUElFdmVudCk7XHJcbiAgICB0aGlzLmFkZFJlc3BvbnNlVG9YQVBJKHhBUElFdmVudCk7XHJcbiAgICB0aGlzLnRyaWdnZXIoeEFQSUV2ZW50KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VyIHhBUEkgY29tcGxldGVkIGV2ZW50XHJcbiAgICovXHJcbiAgcHVibGljIHRyaWdnZXJYQVBJQ29tcGxldGVkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgdGhpcy50cmlnZ2VyWEFQSVNjb3JlZCh0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlLCAnY29tcGxldGVkJyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciB4QVBJIHN1Ym1pdHRlZCBjdXJyaWtpIGV2ZW50XHJcbiAgICovXHJcbiAgcHVibGljIHRyaWdnZXJYQVBJU3VibWl0dGVkQ3VycmlraSA9ICgpOiB2b2lkID0+IHtcclxuICAgIHRoaXMudHJpZ2dlclhBUElTY29yZWQodGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlLCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSwgJ3N1Ym1pdHRlZC1jdXJyaWtpJyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHhBUEkgZGF0YS5cclxuICAgKiBDb250cmFjdCB1c2VkIGJ5IHJlcG9ydCByZW5kZXJpbmcgZW5naW5lLlxyXG4gICAqXHJcbiAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci02fVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRYQVBJRGF0YSA9ICgpID0+IHtcclxuICAgIHZhciB4QVBJRXZlbnQgPSB0aGlzLmNyZWF0ZVhBUElFdmVudFRlbXBsYXRlKCdhbnN3ZXJlZCcpO1xyXG4gICAgdGhpcy5hZGRRdWVzdGlvblRvWEFQSSh4QVBJRXZlbnQpO1xyXG4gICAgdGhpcy5hZGRSZXNwb25zZVRvWEFQSSh4QVBJRXZlbnQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhdGVtZW50OiB4QVBJRXZlbnQuZGF0YS5zdGF0ZW1lbnRcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGUgeEFQSSBvYmplY3QgZGVmaW5pdGlvbiB1c2VkIGluIHhBUEkgc3RhdGVtZW50cy5cclxuICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICovXHJcbiAgcHVibGljIGdldHhBUElEZWZpbml0aW9uID0gKCk6IFhBUElBY3Rpdml0eURlZmluaXRpb24gPT4ge1xyXG4gICAgdmFyIGRlZmluaXRpb24gPSBuZXcgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbigpO1xyXG4gICAgZGVmaW5pdGlvbi5kZXNjcmlwdGlvbiA9IHtcclxuICAgICAgJ2VuLVVTJzogJzxwPicgKyB0aGlzLnJlcG9zaXRvcnkuZ2V0VGFza0Rlc2NyaXB0aW9uKCkgKyAnPC9wPicgKyB0aGlzLnJlcG9zaXRvcnkuZ2V0Q2xvemVUZXh0KClcclxuICAgIH07XHJcbiAgICBkZWZpbml0aW9uLnR5cGUgPSAnaHR0cDovL2FkbG5ldC5nb3YvZXhwYXBpL2FjdGl2aXRpZXMvY21pLmludGVyYWN0aW9uJztcclxuICAgIGRlZmluaXRpb24uaW50ZXJhY3Rpb25UeXBlID0gJ2ZpbGwtaW4nOyAvLyBXZSB1c2UgdGhlICdmaWxsLWluJyB0eXBlIGV2ZW4gaW4gc2VsZWN0IG1vZGUsIGFzIHRoZSB4QVBJIGZvcm1hdCBmb3Igc2VsZWN0aW9ucyBkb2Vzbid0IHJlYWxseSBjYXRlciBmb3Igc2VxdWVuY2VzLlxyXG4gICAgZGVmaW5pdGlvbi5jb3JyZWN0UmVzcG9uc2VzUGF0dGVybiA9IFtdO1xyXG4gICAgbGV0IGNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuUHJlZml4ID0gJ3tjYXNlX21hdHRlcnM9JyArIHRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSArICd9JztcclxuXHJcbiAgICAvLyB4QVBJIGZvcmNlcyB1cyB0byBjcmVhdGUgc29sdXRpb24gcGF0dGVybnMgZm9yIGFsbCBwb3NzaWJsZSBzb2x1dGlvbiBjb21iaW5hdGlvbnNcclxuICAgIGxldCBjb3JyZWN0QW5zd2VyUGVybXV0YXRpb25zID0gY3JlYXRlUGVybXV0YXRpb25zKHRoaXMuY2xvemVDb250cm9sbGVyLmdldENvcnJlY3RBbnN3ZXJMaXN0KCkpO1xyXG4gICAgZm9yIChsZXQgcGVybXV0YXRpb24gb2YgY29ycmVjdEFuc3dlclBlcm11dGF0aW9ucykge1xyXG4gICAgICBkZWZpbml0aW9uLmNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuLnB1c2goY29ycmVjdFJlc3BvbnNlc1BhdHRlcm5QcmVmaXggKyBwZXJtdXRhdGlvbi5qb2luKCdbLF0nKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVmaW5pdGlvbjtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgdGhlIHF1ZXN0aW9uIGl0c2VsZiB0byB0aGUgZGVmaW5pdGlvbiBwYXJ0IG9mIGFuIHhBUElFdmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRRdWVzdGlvblRvWEFQSSA9ICh4QVBJRXZlbnQpID0+IHtcclxuICAgIHZhciBkZWZpbml0aW9uID0geEFQSUV2ZW50LmdldFZlcmlmaWVkU3RhdGVtZW50VmFsdWUoWydvYmplY3QnLCAnZGVmaW5pdGlvbiddKTtcclxuICAgIHRoaXMualF1ZXJ5LmV4dGVuZChkZWZpbml0aW9uLCB0aGlzLmdldHhBUElEZWZpbml0aW9uKCkpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCB0aGUgcmVzcG9uc2UgcGFydCB0byBhbiB4QVBJIGV2ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0g1UC5YQVBJRXZlbnR9IHhBUElFdmVudFxyXG4gICAqICBUaGUgeEFQSSBldmVudCB3ZSB3aWxsIGFkZCBhIHJlc3BvbnNlIHRvXHJcbiAgICovXHJcbiAgcHVibGljIGFkZFJlc3BvbnNlVG9YQVBJID0gKHhBUElFdmVudCkgPT4ge1xyXG4gICAgeEFQSUV2ZW50LnNldFNjb3JlZFJlc3VsdCh0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlLCB0aGlzKTtcclxuICAgIHhBUElFdmVudC5kYXRhLnN0YXRlbWVudC5yZXN1bHQucmVzcG9uc2UgPSB0aGlzLmdldHhBUElSZXNwb25zZSgpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIHhBUEkgdXNlciByZXNwb25zZSwgdXNlZCBpbiB4QVBJIHN0YXRlbWVudHMuXHJcbiAgICogQHJldHVybiB7c3RyaW5nfSBVc2VyIGFuc3dlcnMgc2VwYXJhdGVkIGJ5IHRoZSBcIlssXVwiIHBhdHRlcm5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0eEFQSVJlc3BvbnNlID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICB2YXIgdXNlcnNBbnN3ZXJzID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcclxuICAgIHJldHVybiB1c2Vyc0Fuc3dlcnMuam9pbignWyxdJyk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XHJcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gJy4uL21vZGVscy9oaWdobGlnaHQnO1xyXG5pbXBvcnQgeyBBbnN3ZXIgfSBmcm9tICcuLi9tb2RlbHMvYW5zd2VyJztcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tICcuLi9tb2RlbHMvYmxhbmsnO1xyXG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24gfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24nO1xyXG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi4vbW9kZWxzL21lc3NhZ2VcIjtcclxuaW1wb3J0IHsgU25pcHBldCB9IGZyb20gJy4uL21vZGVscy9zbmlwcGV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCbGFua0xvYWRlciB7XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLCBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQmxhbmtMb2FkZXI7XHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKHNldHRpbmdzOiBJU2V0dGluZ3MsIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBqcXVlcnk6IEpRdWVyeVN0YXRpYywgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKTogQmxhbmtMb2FkZXIge1xyXG4gICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQmxhbmtMb2FkZXIoc2V0dGluZ3MsIGxvY2FsaXphdGlvbiwganF1ZXJ5LCBtZXNzYWdlU2VydmljZSk7XHJcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBCbGFua0xvYWRlciB7XHJcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpXHJcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuXHJcbiAgICB0aHJvdyBcIkJsYW5rTG9hZGVyIG11c3QgYmUgaW5pdGlhbGl6ZWQgYmVmb3JlIHVzZS5cIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVjb2RlSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZWxlbS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgcmV0dXJuIGVsZW0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlQmxhbmsoaWQ6IHN0cmluZywgY29ycmVjdFRleHQ6IHN0cmluZywgaGludFRleHQ6IHN0cmluZywgaW5jb3JyZWN0QW5zd2VyczogYW55W10pOiBCbGFuayB7XHJcbiAgICB2YXIgYmxhbmsgPSBuZXcgQmxhbmsodGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIHRoaXMuanF1ZXJ5LCB0aGlzLm1lc3NhZ2VTZXJ2aWNlLCBpZClcclxuICAgIGlmIChjb3JyZWN0VGV4dCkge1xyXG4gICAgICBjb3JyZWN0VGV4dCA9IHRoaXMuZGVjb2RlSHRtbChjb3JyZWN0VGV4dCk7XHJcbiAgICAgIGJsYW5rLmFkZENvcnJlY3RBbnN3ZXIobmV3IEFuc3dlcihjb3JyZWN0VGV4dCwgXCJcIiwgZmFsc2UsIDAsIHRoaXMuc2V0dGluZ3MpKTtcclxuICAgIH1cclxuICAgIGJsYW5rLnNldEhpbnQobmV3IE1lc3NhZ2UoaGludFRleHQgPyBoaW50VGV4dCA6IFwiXCIsIGZhbHNlLCAwKSk7XHJcblxyXG4gICAgaWYgKGluY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgZm9yICh2YXIgaDVwSW5jb3JyZWN0QW5zd2VyIG9mIGluY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgICBibGFuay5hZGRJbmNvcnJlY3RBbnN3ZXIodGhpcy5kZWNvZGVIdG1sKGg1cEluY29ycmVjdEFuc3dlci5pbmNvcnJlY3RBbnN3ZXJUZXh0KSwgaDVwSW5jb3JyZWN0QW5zd2VyLmluY29ycmVjdEFuc3dlckZlZWRiYWNrLCBoNXBJbmNvcnJlY3RBbnN3ZXIuc2hvd0hpZ2hsaWdodCwgaDVwSW5jb3JyZWN0QW5zd2VyLmhpZ2hsaWdodCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmxhbms7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVwbGFjZVNuaXBwZXRzKGJsYW5rOiBCbGFuaywgc25pcHBldHM6IFNuaXBwZXRbXSkge1xyXG4gICAgYmxhbmsuY29ycmVjdEFuc3dlcnMuY29uY2F0KGJsYW5rLmluY29ycmVjdEFuc3dlcnMpXHJcbiAgICAgIC5mb3JFYWNoKGFuc3dlciA9PiBhbnN3ZXIubWVzc2FnZS50ZXh0ID0gdGhpcy5nZXRTdHJpbmdXaXRoU25pcHBldHMoYW5zd2VyLm1lc3NhZ2UudGV4dCwgc25pcHBldHMpKTtcclxuICAgIGJsYW5rLmhpbnQudGV4dCA9IHRoaXMuZ2V0U3RyaW5nV2l0aFNuaXBwZXRzKGJsYW5rLmhpbnQudGV4dCwgc25pcHBldHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTdHJpbmdXaXRoU25pcHBldHModGV4dDogc3RyaW5nLCBzbmlwcGV0czogU25pcHBldFtdKTogc3RyaW5nIHtcclxuICAgIGlmICghdGV4dCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGlmKCFzbmlwcGV0cylcclxuICAgICAgcmV0dXJuIHRleHQ7ICAgIFxyXG5cclxuICAgIGZvciAodmFyIHNuaXBwZXQgb2Ygc25pcHBldHMpIHtcclxuICAgICAgaWYgKHNuaXBwZXQubmFtZSA9PT0gdW5kZWZpbmVkIHx8IHNuaXBwZXQubmFtZSA9PT0gXCJcIiB8fCBzbmlwcGV0LnRleHQgPT09IHVuZGVmaW5lZCB8fCBzbmlwcGV0LnRleHQgPT09IFwiXCIpXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoXCJAXCIgKyBzbmlwcGV0Lm5hbWUsIHNuaXBwZXQudGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoZSBoaWdobGlnaHQgb2JqZWN0cyB0byB0aGUgYW5zd2VycyBpbiB0aGUgY29ycmVjdCBhbmQgaW5jb3JyZWN0IGFuc3dlciBsaXN0LlxyXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQmVmb3JlIC0gQWxsIGhpZ2hsaWdodHMgY29taW5nIGJlZm9yZSB0aGUgYmxhbmsuXHJcbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNBZnRlciAtIEFsbCBoaWdobGlnaHRzIGNvbWluZyBhZnRlciB0aGUgYmxhbmsuXHJcbiAgICovXHJcbiAgcHVibGljIGxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGJsYW5rOiBCbGFuaywgaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pIHtcclxuICAgIGZvciAobGV0IGFuc3dlciBvZiBibGFuay5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICBhbnN3ZXIubGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgYmxhbmsuaW5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICBhbnN3ZXIubGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBibGFuay5oaW50LmxpbmtIaWdobGlnaHQoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuL2JsYW5rLWxvYWRlcic7XHJcbmltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4uL21vZGVscy9jbG96ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tICcuLi9tb2RlbHMvYmxhbmsnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuLi9tb2RlbHMvaGlnaGxpZ2h0JztcclxuaW1wb3J0IHsgQ2xvemUgfSBmcm9tIFwiLi4vbW9kZWxzL2Nsb3plXCI7XHJcblxyXG4vKipcclxuICogTG9hZHMgYSBjbG96ZSBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xvemVMb2FkZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIG5vcm1hbGl6ZWRCbGFua01hcmtlciA9ICdfX18nO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbCAtIFRoZSBodG1sIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSBjbG96ZSB3aXRoIGJsYW5rcyBtYXJraW5nIGFuZCBoaWdobGlnaHQgbWFya2luZ3MuXHJcbiAgICogQHBhcmFtICB7QmxhbmtbXX0gYmxhbmtzIC0gQWxsIGJsYW5rcyBhcyBlbnRlcmVkIGJ5IHRoZSBjb250ZW50IGF1dGhvci5cclxuICAgKiBAcmV0dXJucyBDbG96ZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ2xvemUoaHRtbDogc3RyaW5nLCBibGFua3M6IEJsYW5rW10pOiBDbG96ZSB7XHJcbiAgICB2YXIgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogQ2xvemVFbGVtZW50W10gPSBuZXcgQXJyYXkoKTtcclxuICAgIHZhciBoaWdobGlnaHRJbnN0YW5jZXM6IEhpZ2hsaWdodFtdID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgYmxhbmtzSW5zdGFuY2VzOiBCbGFua1tdID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgaHRtbCA9IENsb3plTG9hZGVyLm5vcm1hbGl6ZUJsYW5rTWFya2luZ3MoaHRtbCk7XHJcblxyXG4gICAgdmFyIGNvbnZlcnNpb25SZXN1bHQgPSBDbG96ZUxvYWRlci5jb252ZXJ0TWFya3VwVG9TcGFucyhodG1sLCBibGFua3MpO1xyXG4gICAgaHRtbCA9IGNvbnZlcnNpb25SZXN1bHQuaHRtbDtcclxuICAgIG9yZGVyZWRBbGxFbGVtZW50c0xpc3QgPSBjb252ZXJzaW9uUmVzdWx0Lm9yZGVyZWRBbGxFbGVtZW50c0xpc3Q7XHJcbiAgICBoaWdobGlnaHRJbnN0YW5jZXMgPSBjb252ZXJzaW9uUmVzdWx0LmhpZ2hsaWdodEluc3RhbmNlcztcclxuICAgIGJsYW5rc0luc3RhbmNlcyA9IGNvbnZlcnNpb25SZXN1bHQuYmxhbmtzSW5zdGFuY2VzO1xyXG5cclxuICAgIENsb3plTG9hZGVyLmxpbmtIaWdobGlnaHRzT2JqZWN0cyhvcmRlcmVkQWxsRWxlbWVudHNMaXN0LCBoaWdobGlnaHRJbnN0YW5jZXMsIGJsYW5rc0luc3RhbmNlcyk7XHJcblxyXG4gICAgdmFyIGNsb3plID0gbmV3IENsb3plKCk7XHJcbiAgICBjbG96ZS5odG1sID0gaHRtbDtcclxuICAgIGNsb3plLmJsYW5rcyA9IGJsYW5rc0luc3RhbmNlcztcclxuICAgIGNsb3plLmhpZ2hsaWdodHMgPSBoaWdobGlnaHRJbnN0YW5jZXM7XHJcblxyXG4gICAgcmV0dXJuIGNsb3plO1xyXG4gIH1cclxuXHJcbiAgIC8qKlxyXG4gICAqIENvbnZlcnRzICEhc2lnbmFsISEgaGlnaGxpZ2h0IG1hcmt1cCBhbmQgX19fICBibGFuayBtYXJrdXAgaW50byA8c3Bhbj4uLi48L3NwYW4+LlxyXG4gICAqIFJldHVybnMgdGhlIHJlc3VsdGluZyBodG1sIHN0cmluZyBhbmQgdGhyZWUgbGlzdHMgb2YgYWxsIGFjdGl2ZSBlbGVtZW50cyB1c2VkIGluIHRoZSBjbG96ZTpcclxuICAgKiAgICBvcmRlcmVkQWxsRWxlbWVudHM6IGhpZ2hsaWdodHMgYW5kIGJsYW5rcyBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZSBpbiB0aGUgaHRtbC5cclxuICAgKiAgICBoaWdobGlnaHRJbnN0YW5jZXM6IG9ubHkgaGlnaGxpZ2h0cyBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZVxyXG4gICAqICAgIGJsYW5rc0luc3RhbmNlczogb25seSBibGFua3MgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2VcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWxcclxuICAgKiBAcGFyYW0gIHtCbGFua1tdfSBibGFua3NcclxuICAgKiBAcmV0dXJucyBMaXN0cyBvZiBhY3RpdmUgZWxlbWVudHMgKHNlZSBkZXNjcmlwdGlvbikuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29udmVydE1hcmt1cFRvU3BhbnMoaHRtbDogc3RyaW5nLCBibGFua3M6IEJsYW5rW10pOiB7IGh0bWw6IHN0cmluZywgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogQ2xvemVFbGVtZW50W10sIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10sIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSB9IHtcclxuICAgIHZhciBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10gPSBuZXcgQXJyYXkoKTtcclxuICAgIHZhciBibGFua3NJbnN0YW5jZXM6IEJsYW5rW10gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICB2YXIgZXhjbGFtYXRpb25NYXJrUmVnRXhwID0gLyEhKC57MSw0MH0/KSEhL2k7XHJcbiAgICB2YXIgaGlnaGxpZ2h0Q291bnRlciA9IDA7XHJcbiAgICBsZXQgYmxhbmtDb3VudGVyID0gMDtcclxuXHJcbiAgICAvLyBTZWFyY2hlcyB0aGUgaHRtbCBzdHJpbmcgZm9yIGhpZ2hsaWdodHMgYW5kIGJsYW5rcyBhbmQgaW5zZXJ0cyBzcGFucy4gXHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBuZXh0SGlnaGxpZ2h0TWF0Y2ggPSBodG1sLm1hdGNoKGV4Y2xhbWF0aW9uTWFya1JlZ0V4cCk7XHJcbiAgICAgIHZhciBuZXh0QmxhbmtJbmRleCA9IGh0bWwuaW5kZXhPZihDbG96ZUxvYWRlci5ub3JtYWxpemVkQmxhbmtNYXJrZXIpO1xyXG5cclxuICAgICAgaWYgKG5leHRIaWdobGlnaHRNYXRjaCAmJiAoKG5leHRIaWdobGlnaHRNYXRjaC5pbmRleCA8IG5leHRCbGFua0luZGV4KSB8fCAobmV4dEJsYW5rSW5kZXggPCAwKSkpIHtcclxuICAgICAgICAvLyBuZXh0IGFjdGl2ZSBlbGVtZW50IGlzIGEgaGlnaGxpZ2h0XHJcbiAgICAgICAgdmFyIGhpZ2hsaWdodCA9IG5ldyBIaWdobGlnaHQobmV4dEhpZ2hsaWdodE1hdGNoWzFdLCBgaGlnaGxpZ2h0XyR7aGlnaGxpZ2h0Q291bnRlcn1gKTtcclxuICAgICAgICBoaWdobGlnaHRJbnN0YW5jZXMucHVzaChoaWdobGlnaHQpO1xyXG4gICAgICAgIG9yZGVyZWRBbGxFbGVtZW50c0xpc3QucHVzaChoaWdobGlnaHQpO1xyXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoZXhjbGFtYXRpb25NYXJrUmVnRXhwLCBgPHNwYW4gaWQ9J2NvbnRhaW5lcl9oaWdobGlnaHRfJHtoaWdobGlnaHRDb3VudGVyfSc+PC9zcGFuPmApO1xyXG4gICAgICAgIGhpZ2hsaWdodENvdW50ZXIrKztcclxuICAgICAgfSBlbHNlIGlmIChuZXh0QmxhbmtJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgLy8gbmV4dCBhY3RpdmUgZWxlbWVudCBpcyBhIGJsYW5rXHJcbiAgICAgICAgaWYgKGJsYW5rQ291bnRlciA+PSBibGFua3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAvLyBpZiB0aGUgYmxhbmsgaXMgbm90IGluIHRoZSByZXBvc2l0b3J5IChUaGUgY29udGVudCBhdXRob3IgaGFzIG1hcmtlZCB0b28gbWFueSBibGFua3MgaW4gdGhlIHRleHQsIGJ1dCBub3QgZW50ZXJlZCBjb3JyZWN0IGFuc3dlcnMuKVxyXG4gICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShDbG96ZUxvYWRlci5ub3JtYWxpemVkQmxhbmtNYXJrZXIsIFwiPHNwYW4+PC9zcGFuPlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB2YXIgYmxhbmsgPSBibGFua3NbYmxhbmtDb3VudGVyXTtcclxuICAgICAgICAgIGJsYW5rc0luc3RhbmNlcy5wdXNoKGJsYW5rKTtcclxuICAgICAgICAgIG9yZGVyZWRBbGxFbGVtZW50c0xpc3QucHVzaChibGFuayk7XHJcbiAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlciwgYDxzcGFuIGlkPSdjb250YWluZXJfJHtibGFuay5pZH0nPjwvc3Bhbj5gKTtcclxuICAgICAgICAgIGJsYW5rQ291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2hpbGUgKG5leHRIaWdobGlnaHRNYXRjaCB8fCAobmV4dEJsYW5rSW5kZXggPj0gMCkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGh0bWw6IGh0bWwsXHJcbiAgICAgIG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IG9yZGVyZWRBbGxFbGVtZW50c0xpc3QsXHJcbiAgICAgIGhpZ2hsaWdodEluc3RhbmNlczogaGlnaGxpZ2h0SW5zdGFuY2VzLFxyXG4gICAgICBibGFua3NJbnN0YW5jZXM6IGJsYW5rc0luc3RhbmNlc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvb2tzIGZvciBhbGwgaW5zdGFuY2VzIG9mIG1hcmtlZCBibGFua3MgYW5kIHJlcGxhY2VzIHRoZW0gd2l0aCBfX18uIFxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbFxyXG4gICAqIEByZXR1cm5zIHN0cmluZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIG5vcm1hbGl6ZUJsYW5rTWFya2luZ3MoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhciB1bmRlcmxpbmVCbGFua1JlZ0V4ID0gL197Myx9L2c7XHJcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKHVuZGVybGluZUJsYW5rUmVnRXgsIENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlcik7XHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gICAvKipcclxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGFsbCBibGFua3MgYW5kIGNhbGxzIHRoZWlyIGxpbmtIaWdobGlnaHRJZHNUb09iamVjdHMoLi4uKS5cclxuICAgKiBAcGFyYW0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCBcclxuICAgKiBAcGFyYW0gaGlnaGxpZ2h0SW5zdGFuY2VzIFxyXG4gICAqIEBwYXJhbSBibGFua3NJbnN0YW5jZXMgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgbGlua0hpZ2hsaWdodHNPYmplY3RzKG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IENsb3plRWxlbWVudFtdLCBoaWdobGlnaHRJbnN0YW5jZXM6IEhpZ2hsaWdodFtdLCBibGFua3NJbnN0YW5jZXM6IEJsYW5rW10pOiB2b2lkIHtcclxuICAgIGZvciAodmFyIGJsYW5rIG9mIGJsYW5rc0luc3RhbmNlcykge1xyXG4gICAgICB2YXIgbmV4dEJsYW5rSW5kZXhJbkFycmF5ID0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5pbmRleE9mKGJsYW5rKTtcclxuICAgICAgdmFyIGhpZ2hsaWdodHNCZWZvcmVCbGFuayA9IG9yZGVyZWRBbGxFbGVtZW50c0xpc3RcclxuICAgICAgICAuc2xpY2UoMCwgbmV4dEJsYW5rSW5kZXhJbkFycmF5KVxyXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlLnR5cGUgPT09IENsb3plRWxlbWVudFR5cGUuSGlnaGxpZ2h0KVxyXG4gICAgICAgIC5tYXAoZSA9PiBlIGFzIEhpZ2hsaWdodClcclxuICAgICAgICAucmV2ZXJzZSgpO1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0c0FmdGVyQmxhbmsgPSBvcmRlcmVkQWxsRWxlbWVudHNMaXN0XHJcbiAgICAgICAgLnNsaWNlKG5leHRCbGFua0luZGV4SW5BcnJheSArIDEpXHJcbiAgICAgICAgLmZpbHRlcihlID0+IGUudHlwZSA9PT0gQ2xvemVFbGVtZW50VHlwZS5IaWdobGlnaHQpXHJcbiAgICAgICAgLm1hcChlID0+IGUgYXMgSGlnaGxpZ2h0KTtcclxuICAgICAgQmxhbmtMb2FkZXIuaW5zdGFuY2UubGlua0hpZ2hsaWdodElkVG9PYmplY3QoYmxhbmssIGhpZ2hsaWdodHNCZWZvcmVCbGFuaywgaGlnaGxpZ2h0c0FmdGVyQmxhbmspO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcclxuaW1wb3J0IHsgQ2xvemVMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvY2xvemUtbG9hZGVyJztcclxuaW1wb3J0IHsgQ2xvemUgfSBmcm9tIFwiLi4vbW9kZWxzL2Nsb3plXCI7XHJcbmltcG9ydCB7IElEYXRhUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kYXRhLXJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2VudW1zXCI7XHJcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gXCIuLi9tb2RlbHMvaGlnaGxpZ2h0XCI7XHJcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSBcIi4uL21vZGVscy9ibGFua1wiO1xyXG5cclxuaW1wb3J0ICogYXMgUmFjdGl2ZUV2ZW50c0tleXMgZnJvbSAnLi4vLi4vbGliL3JhY3RpdmUtZXZlbnRzLWtleXMnO1xyXG5cclxuaW50ZXJmYWNlIFNjb3JlQ2hhbmdlZCB7XHJcbiAgKHNjb3JlOiBudW1iZXIsIG1heFNjb3JlOiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXV0b0NoZWNrZWQge1xyXG4gICgpOiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU29sdmVkIHtcclxuICAoKTogdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFR5cGVkIHtcclxuICAoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3plQ29udHJvbGxlciB7XHJcbiAgcHJpdmF0ZSBqcXVlcnk6IEpRdWVyeTtcclxuXHJcbiAgcHJpdmF0ZSBjbG96ZTogQ2xvemU7XHJcbiAgcHJpdmF0ZSBpc1NlbGVjdENsb3plOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgb25TY29yZUNoYW5nZWQ6IFNjb3JlQ2hhbmdlZDtcclxuICBwdWJsaWMgb25BdXRvQ2hlY2tlZDogQXV0b0NoZWNrZWQ7XHJcbiAgcHVibGljIG9uU29sdmVkOiBTb2x2ZWQ7XHJcbiAgcHVibGljIG9uVHlwZWQ6IFR5cGVkO1xyXG5cclxuICAvLyBTdG9yYWdlIG9mIHRoZSByYWN0aXZlIG9iamVjdHMgdGhhdCBsaW5rIG1vZGVscyBhbmQgdmlld3NcclxuICBwcml2YXRlIGhpZ2hsaWdodFJhY3RpdmVzOiB7IFtpZDogc3RyaW5nXTogUmFjdGl2ZS5SYWN0aXZlIH0gPSB7fTtcclxuICBwcml2YXRlIGJsYW5rUmFjdGl2ZXM6IHsgW2lkOiBzdHJpbmddOiBSYWN0aXZlLlJhY3RpdmUgfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgZ2V0IG1heFNjb3JlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBjdXJyZW50U2NvcmUoKTogbnVtYmVyIHtcclxuICAgIHZhciBzY29yZSA9IHRoaXMuY2xvemUuYmxhbmtzLmZpbHRlcihiID0+IGIuaXNDb3JyZWN0KS5sZW5ndGg7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgc2NvcmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBhbGxCbGFua3NFbnRlcmVkKCkge1xyXG4gICAgaWYgKHRoaXMuY2xvemUpXHJcbiAgICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5ldmVyeShibGFuayA9PiBibGFuay5pc0Vycm9yIHx8IGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1JldHJ5KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNTb2x2ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5pc1NvbHZlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNGaWxsZWRPdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoID09PSAwKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5zb21lKGIgPT4gYi5lbnRlcmVkVGV4dCAhPT0gJycpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpc0Z1bGx5RmlsbGVkT3V0KCkge1xyXG4gICAgaWYgKCF0aGlzLmNsb3plIHx8IHRoaXMuY2xvemUuYmxhbmtzLmxlbmd0aCA9PT0gMClcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3MuZXZlcnkoYiA9PiBiLmVudGVyZWRUZXh0ICE9PSAnJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlcG9zaXRvcnk6IElEYXRhUmVwb3NpdG9yeSwgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLCBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIE1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB1cCBhbGwgYmxhbmtzLCB0aGUgY2xvemUgaXRzZWxmIGFuZCB0aGUgcmFjdGl2ZSBiaW5kaW5ncy5cclxuICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gcm9vdFxyXG4gICAqL1xyXG4gIGluaXRpYWxpemUocm9vdDogSFRNTEVsZW1lbnQsIGpxdWVyeTogSlF1ZXJ5KSB7XHJcbiAgICB0aGlzLmpxdWVyeSA9IGpxdWVyeTtcclxuICAgIHRoaXMuaXNTZWxlY3RDbG96ZSA9IHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0ID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgIHZhciBibGFua3MgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0QmxhbmtzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RDbG96ZSAmJiB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbCkge1xyXG4gICAgICBmb3IgKHZhciBibGFuayBvZiBibGFua3MpIHtcclxuICAgICAgICBsZXQgb3RoZXJCbGFua3MgPSBibGFua3MuZmlsdGVyKHYgPT4gdiAhPT0gYmxhbmspO1xyXG4gICAgICAgIGJsYW5rLmxvYWRDaG9pY2VzRnJvbU90aGVyQmxhbmtzKG90aGVyQmxhbmtzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzbmlwcGV0cyA9IHRoaXMucmVwb3NpdG9yeS5nZXRTbmlwcGV0cygpO1xyXG4gICAgYmxhbmtzLmZvckVhY2goYmxhbmsgPT4gQmxhbmtMb2FkZXIuaW5zdGFuY2UucmVwbGFjZVNuaXBwZXRzKGJsYW5rLCBzbmlwcGV0cykpO1xyXG5cclxuICAgIHRoaXMuY2xvemUgPSBDbG96ZUxvYWRlci5jcmVhdGVDbG96ZSh0aGlzLnJlcG9zaXRvcnkuZ2V0Q2xvemVUZXh0KCksIGJsYW5rcyk7XHJcblxyXG4gICAgdmFyIGNvbnRhaW5lcnMgPSB0aGlzLmNyZWF0ZUFuZEFkZENvbnRhaW5lcnMocm9vdCk7XHJcbiAgICBjb250YWluZXJzLmNsb3plLmlubmVySFRNTCA9IHRoaXMuY2xvemUuaHRtbDtcclxuICAgIHRoaXMuY3JlYXRlUmFjdGl2ZUJpbmRpbmdzKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0FsbCA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xvemUuaGlkZUFsbEhpZ2hsaWdodHMoKTtcclxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XHJcbiAgICAgIGlmICgoIWJsYW5rLmlzQ29ycmVjdCkgJiYgYmxhbmsuZW50ZXJlZFRleHQgIT09IFwiXCIpXHJcbiAgICAgICAgYmxhbmsuZXZhbHVhdGVBdHRlbXB0KHRydWUsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcclxuICAgIHRoaXMuY2hlY2tBbmROb3RpZnlDb21wbGV0ZW5lc3MoKTtcclxuICB9XHJcblxyXG4gIHRleHRUeXBlZCA9IChibGFuazogQmxhbmspID0+IHtcclxuICAgIGJsYW5rLm9uVHlwZWQoKTtcclxuICAgIGlmICh0aGlzLm9uVHlwZWQpXHJcbiAgICAgIHRoaXMub25UeXBlZCgpO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcclxuICB9XHJcblxyXG4gIGZvY3VzID0gKGJsYW5rOiBCbGFuaykgPT4ge1xyXG4gICAgYmxhbmsub25Gb2N1c3NlZCgpO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlGZWVkYmFjayA9IChibGFuazogQmxhbmspID0+IHtcclxuICAgIGJsYW5rLm9uRGlzcGxheUZlZWRiYWNrKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2hvd0hpbnQgPSAoYmxhbms6IEJsYW5rKSA9PiB7XHJcbiAgICB0aGlzLmNsb3plLmhpZGVBbGxIaWdobGlnaHRzKCk7XHJcbiAgICBibGFuay5zaG93SGludCgpO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RDbG9zZVRvb2x0aXAgPSAoYmxhbms6IEJsYW5rKSA9PiB7XHJcbiAgICBibGFuay5yZW1vdmVUb29sdGlwKCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gICAgdGhpcy5qcXVlcnkuZmluZChcIiNcIiArIGJsYW5rLmlkKS5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tCbGFuayA9IChibGFuazogQmxhbmssIGNhdXNlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICgoY2F1c2UgPT09ICdibHVyJyB8fCBjYXVzZSA9PT0gJ2NoYW5nZScpKSB7XHJcbiAgICAgIGJsYW5rLmxvc3RGb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjYXVzZSA9PT0gJ2NoYW5nZScgJiYgdGhpcy5vblR5cGVkKSB7XHJcbiAgICAgIHRoaXMub25UeXBlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9DaGVjaykge1xyXG4gICAgICBpZiAoIWJsYW5rLmVudGVyZWRUZXh0IHx8IGJsYW5rLmVudGVyZWRUZXh0ID09PSBcIlwiKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuY2xvemUuaGlkZUFsbEhpZ2hsaWdodHMoKTtcclxuICAgICAgYmxhbmsuZXZhbHVhdGVBdHRlbXB0KGZhbHNlKTtcclxuICAgICAgdGhpcy5jaGVja0FuZE5vdGlmeUNvbXBsZXRlbmVzcygpO1xyXG4gICAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gICAgICB0aGlzLm9uQXV0b0NoZWNrZWQoKTtcclxuICAgIH1cclxuICAgIGlmICgoY2F1c2UgPT09ICdlbnRlcicpXHJcbiAgICAgICYmICgodGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2sgJiYgYmxhbmsuaXNDb3JyZWN0ICYmICF0aGlzLmlzU29sdmVkKVxyXG4gICAgICAgIHx8ICF0aGlzLnNldHRpbmdzLmF1dG9DaGVjaykpIHtcclxuICAgICAgLy8gbW92ZSB0byBuZXh0IGJsYW5rXHJcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuY2xvemUuYmxhbmtzLmluZGV4T2YoYmxhbmspO1xyXG4gICAgICB2YXIgbmV4dElkO1xyXG4gICAgICB3aGlsZSAoaW5kZXggPCB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGggLSAxICYmICFuZXh0SWQpIHtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIGlmICghdGhpcy5jbG96ZS5ibGFua3NbaW5kZXhdLmlzQ29ycmVjdClcclxuICAgICAgICAgIG5leHRJZCA9IHRoaXMuY2xvemUuYmxhbmtzW2luZGV4XS5pZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5leHRJZClcclxuICAgICAgICB0aGlzLmpxdWVyeS5maW5kKFwiI1wiICsgbmV4dElkKS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsb3plLnJlc2V0KCk7XHJcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1NvbHV0aW9ucyA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xvemUuc2hvd1NvbHV0aW9ucygpO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQW5kQWRkQ29udGFpbmVycyhhZGRUbzogSFRNTEVsZW1lbnQpOiB7IGNsb3plOiBIVE1MRGl2RWxlbWVudCB9IHtcclxuICAgIHZhciBjbG96ZUNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsb3plQ29udGFpbmVyRWxlbWVudC5pZCA9ICdoNXAtY2xvemUtY29udGFpbmVyJztcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCkge1xyXG4gICAgICBjbG96ZUNvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2g1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xvemVDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdoNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSc7XHJcbiAgICB9XHJcbiAgICBhZGRUby5hcHBlbmRDaGlsZChjbG96ZUNvbnRhaW5lckVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNsb3plOiBjbG96ZUNvbnRhaW5lckVsZW1lbnRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUhpZ2hsaWdodEJpbmRpbmcoaGlnaGxpZ2h0OiBIaWdobGlnaHQpIHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0UmFjdGl2ZXNbaGlnaGxpZ2h0LmlkXSA9IG5ldyBSYWN0aXZlKHtcclxuICAgICAgZWw6ICcjY29udGFpbmVyXycgKyBoaWdobGlnaHQuaWQsXHJcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuLi92aWV3cy9oaWdobGlnaHQucmFjdGl2ZS5odG1sJyksXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBvYmplY3Q6IGhpZ2hsaWdodFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQmxhbmtCaW5kaW5nKGJsYW5rOiBCbGFuaykge1xyXG4gICAgdmFyIHJhY3RpdmUgPSBuZXcgUmFjdGl2ZSh7XHJcbiAgICAgIGVsOiAnI2NvbnRhaW5lcl8nICsgYmxhbmsuaWQsXHJcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuLi92aWV3cy9ibGFuay5yYWN0aXZlLmh0bWwnKSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlzU2VsZWN0Q2xvemU6IHRoaXMuaXNTZWxlY3RDbG96ZSxcclxuICAgICAgICBibGFuazogYmxhbmtcclxuICAgICAgfSxcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgZW50ZXI6IFJhY3RpdmVFdmVudHNLZXlzLmVudGVyLFxyXG4gICAgICAgIGVzY2FwZTogUmFjdGl2ZUV2ZW50c0tleXMuZXNjYXBlLFxyXG4gICAgICAgIGFueWtleTogUmFjdGl2ZUV2ZW50c0tleXMuYW55a2V5XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmFjdGl2ZS5vbihcImNoZWNrQmxhbmtcIiwgdGhpcy5jaGVja0JsYW5rKTtcclxuICAgIHJhY3RpdmUub24oXCJzaG93SGludFwiLCB0aGlzLnNob3dIaW50KTtcclxuICAgIHJhY3RpdmUub24oXCJ0ZXh0VHlwZWRcIiwgdGhpcy50ZXh0VHlwZWQpO1xyXG4gICAgcmFjdGl2ZS5vbihcImNsb3NlTWVzc2FnZVwiLCB0aGlzLnJlcXVlc3RDbG9zZVRvb2x0aXApO1xyXG4gICAgcmFjdGl2ZS5vbihcImZvY3VzXCIsIHRoaXMuZm9jdXMpO1xyXG4gICAgcmFjdGl2ZS5vbihcImRpc3BsYXlGZWVkYmFja1wiLCB0aGlzLmRpc3BsYXlGZWVkYmFjayk7XHJcblxyXG4gICAgdGhpcy5ibGFua1JhY3RpdmVzW2JsYW5rLmlkXSA9IHJhY3RpdmU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVJhY3RpdmVCaW5kaW5ncygpIHtcclxuICAgIGZvciAodmFyIGhpZ2hsaWdodCBvZiB0aGlzLmNsb3plLmhpZ2hsaWdodHMpIHtcclxuICAgICAgdGhpcy5jcmVhdGVIaWdobGlnaHRCaW5kaW5nKGhpZ2hsaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcclxuICAgICAgdGhpcy5jcmVhdGVCbGFua0JpbmRpbmcoYmxhbmspO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyBhbGwgdmlld3Mgb2YgaGlnaGxpZ2h0cyBhbmQgYmxhbmtzLiBDYW4gYmUgY2FsbGVkIHdoZW4gYSBtb2RlbFxyXG4gICAqIHdhcyBjaGFuZ2VkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWZyZXNoQ2xvemUoKSB7XHJcbiAgICBmb3IgKHZhciBoaWdobGlnaHQgb2YgdGhpcy5jbG96ZS5oaWdobGlnaHRzKSB7XHJcbiAgICAgIHZhciBoaWdobGlnaHRSYWN0aXZlID0gdGhpcy5oaWdobGlnaHRSYWN0aXZlc1toaWdobGlnaHQuaWRdO1xyXG4gICAgICBoaWdobGlnaHRSYWN0aXZlLnNldChcIm9iamVjdFwiLCBoaWdobGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XHJcbiAgICAgIHZhciBibGFua1JhY3RpdmUgPSB0aGlzLmJsYW5rUmFjdGl2ZXNbYmxhbmsuaWRdO1xyXG4gICAgICBibGFua1JhY3RpdmUuc2V0KFwiYmxhbmtcIiwgYmxhbmspO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0FuZE5vdGlmeUNvbXBsZXRlbmVzcyA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIGlmICh0aGlzLm9uU2NvcmVDaGFuZ2VkKVxyXG4gICAgICB0aGlzLm9uU2NvcmVDaGFuZ2VkKHRoaXMuY3VycmVudFNjb3JlLCB0aGlzLm1heFNjb3JlKTtcclxuXHJcbiAgICBpZiAodGhpcy5jbG96ZS5pc1NvbHZlZCkge1xyXG4gICAgICBpZiAodGhpcy5vblNvbHZlZClcclxuICAgICAgICB0aGlzLm9uU29sdmVkKCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXJpYWxpemVDbG96ZSgpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5zZXJpYWxpemUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXNlcmlhbGl6ZUNsb3plKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmNsb3plIHx8ICFkYXRhKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB0aGlzLmNsb3plLmRlc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvcnJlY3RBbnN3ZXJMaXN0KCk6IHN0cmluZ1tdW10ge1xyXG4gICAgaWYgKCF0aGlzLmNsb3plIHx8IHRoaXMuY2xvemUuYmxhbmtzLmxlbmd0aCA9PT0gMClcclxuICAgICAgcmV0dXJuIFtbXV07XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmNsb3plLmJsYW5rcykge1xyXG4gICAgICByZXN1bHQucHVzaChibGFuay5nZXRDb3JyZWN0QW5zd2VycygpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gIFxyXG59IiwiLyoqXHJcbiAqIENyZWF0ZXMgYSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBwZXJtdXRhdGlvbnMgb2YgYSBsaXN0IG9mIGxpc3RzLlxyXG4gKiBAcGFyYW0gbGlzdCBUaGUgbGlzdCB0byBwZXJtdXRlIG92ZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGVybXV0YXRpb25zKGxpc3Q6IGFueVtdW10pOiBhbnlbXVtdIHtcclxuICBsZXQgb3V0cHV0OiBhbnlbXVtdID0gW1tdXTtcclxuICBmb3IgKGxldCBjdXJyZW50U3VibGlzdCBvZiBsaXN0KSB7XHJcbiAgICBsZXQgbmV3T3V0cHV0ID0gW107XHJcbiAgICBmb3IgKGxldCBzdWJsaXN0T2JqZWN0IG9mIGN1cnJlbnRTdWJsaXN0KSB7XHJcbiAgICAgIGZvciAodmFyIG8gb2Ygb3V0cHV0KSB7XHJcbiAgICAgICAgdmFyIG5ld0xpc3QgPSBvLnNsaWNlKCk7XHJcbiAgICAgICAgbmV3TGlzdC5wdXNoKHN1Ymxpc3RPYmplY3QpXHJcbiAgICAgICAgbmV3T3V0cHV0LnB1c2gobmV3TGlzdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG91dHB1dCA9IG5ld091dHB1dDtcclxuICB9XHJcbiAgcmV0dXJuIG91dHB1dDtcclxufSIsIi8qKlxyXG4gKiBUaGlzIGNsYXNzIGNsZWFucyBodG1sIHN0cmluZ3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVW5yd2FwcGVyIHtcclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBqcXVlcnk6IEpRdWVyeVN0YXRpYykge1xyXG5cclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIENsZWFucyBodG1sIHN0cmluZ3MgYnkgcmVtb3ZpbmcgdGhlIG91dG1vc3QgaHRtbCB0YWcgb2YgdGhlIHN0cmluZyBpZiB0aGVyZSBpcyBvbmx5IG9uZSB0YWcuXHJcbiAgICogRXhhbXBsZXM6ICBcIjxwPm15IHRleHQ8L3A+XCJcIiBiZWNvbWVzIFwibXkgdGV4dFwiXHJcbiAgICogICAgICAgICAgICBcIjxwPnRleHQgMTwvcD48cD50ZXh0IDI8L3AyPlwiIHN0YXlzXHJcbiAgICogQHBhcmFtIGh0bWwgVGhlIGh0bWwgc3RyaW5nXHJcbiAgICogQHJldHVybnMgdGhlIGNsZWFuZWQgaHRtbCBzdHJpbmdcclxuICAgKi9cclxuICBwdWJsaWMgdW53cmFwKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB2YXIgcGFyc2VkID0gdGhpcy5qcXVlcnkoaHRtbCk7XHJcbiAgICBpZiAocGFyc2VkLmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuICAgIGxldCB1bndyYXBwZWQgPSBwYXJzZWQudW53cmFwKCkuaHRtbCgpO1xyXG4gICAgcmV0dXJuIHVud3JhcHBlZDtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnLi9oaWdobGlnaHQnO1xyXG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncyc7XHJcbmltcG9ydCAqIGFzIGpzZGlmZiBmcm9tICdkaWZmJztcclxuXHJcbmV4cG9ydCBlbnVtIENvcnJlY3RuZXNzIHtcclxuICBFeGFjdE1hdGNoLFxyXG4gIENsb3NlTWF0Y2gsXHJcbiAgTm9NYXRjaFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZhbHVhdGlvbiB7XHJcbiAgcHVibGljIGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcztcclxuICBwdWJsaWMgY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50OiBudW1iZXI7XHJcbiAgcHVibGljIHVzZWRBbHRlcm5hdGl2ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlZEFuc3dlcjogQW5zd2VyKSB7XHJcbiAgICB0aGlzLmNvcnJlY3RuZXNzID0gQ29ycmVjdG5lc3MuTm9NYXRjaDtcclxuICAgIHRoaXMuY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50ID0gMDtcclxuICAgIHRoaXMudXNlZEFsdGVybmF0aXZlID0gXCJcIjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcG9zc2libGUgYW5zd2VyIHRoZSBjb250ZW50IGF1dGhvciBlbnRlcnMgZm9yIGEgYmxhbmssIGUuZy4gdGhlIGNvcnJlY3Qgb3IgYW4gaW5jb3JyZWN0IGFuc3dlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbnN3ZXIge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhbHRlcm5hdGl2ZXMgYXJlIGVxdWl2YWxlbnQgc3RyaW5ncyB0aGF0IHRoZSBsaWJyYXJ5IHNob3VsZCB0cmVhdCB0aGUgc2FtZSB3YXksIGUuZy4gc2hvdyB0aGUgc2FtZSBmZWVkYmFjay4gXHJcbiAgICovXHJcbiAgYWx0ZXJuYXRpdmVzOiBzdHJpbmdbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyB0aGUgbWVzc2FnZSB0aGF0IGlzIGRpc3BsYXllZCB3aGVuIHRoZSBhbnN3ZXIgd2FzIGVudGVyZWQgYnkgdGhlIHVzZXIuXHJcbiAgICovXHJcbiAgbWVzc2FnZTogTWVzc2FnZTtcclxuXHJcbiAgLyoqXHJcbiAgICogSXMgdHJ1ZSBpZiB0aGUgZXhwZWN0ZWQgdGV4dCBmb3IgdGhpcyBhbnN3ZXIgaXMgZW1wdHkuXHJcbiAgICovXHJcbiAgYXBwbGllc0Fsd2F5czogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBhbnN3ZXJUZXh0IC0gVGhlIGV4cGVjdGVkIGFuc3dlci4gQWx0ZXJuYXRpdmVzIGFyZSBzZXBhcmF0ZWQgYnkgfCBvciA7IC4gKGUuZy4gXCJBbHRlcm5hdGl2ZSAxfEFsdGVybmF0aXZlIDJ8QWx0ZXJuYXRpdmUgM3wuLi5cIiAgLW9yLSBcIkFsdGVybmF0aXZlIDE7QWx0ZXJuYXRpdmUgMjtBbHRlcm5hdGl2ZSAzXCIpXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSByZWFjdGlvbiAtIFRoZSB0b29sdGlwIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZC4gRm9ybWF0OiBUb29sdGlwIFRleHQ7ISEtMSEhICEhKzEhIVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGFuc3dlclRleHQ6IHN0cmluZywgcmVhY3Rpb246IHN0cmluZywgc2hvd0hpZ2hsaWdodDogYm9vbGVhbiwgaGlnaGxpZ2h0OiBudW1iZXIsIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncykge1xyXG4gICAgdGhpcy5hbHRlcm5hdGl2ZXMgPSBhbnN3ZXJUZXh0LnNwbGl0KC9cXC8vKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBuZXcgTWVzc2FnZShyZWFjdGlvbiwgc2hvd0hpZ2hsaWdodCwgaGlnaGxpZ2h0KTtcclxuICAgIGlmIChhbnN3ZXJUZXh0LnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICB0aGlzLmFwcGxpZXNBbHdheXMgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hcHBsaWVzQWx3YXlzID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb29rcyB0aHJvdWdoIHRoZSBvYmplY3QncyBtZXNzYWdlIGlkcyBhbmQgc3RvcmVzIHRoZSByZWZlcmVuY2VzIHRvIHRoZSBoaWdobGlnaHQgb2JqZWN0IGZvciB0aGVzZSBpZHMuXHJcbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNCZWZvcmVcclxuICAgKiBAcGFyYW0gIHtIaWdobGlnaHRbXX0gaGlnaGxpZ2h0c0FmdGVyXHJcbiAgICovXHJcbiAgcHVibGljIGxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGhpZ2hsaWdodHNCZWZvcmU6IEhpZ2hsaWdodFtdLCBoaWdobGlnaHRzQWZ0ZXI6IEhpZ2hsaWdodFtdKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2UubGlua0hpZ2hsaWdodChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBUdXJucyBvbiB0aGUgaGlnaGxpZ2h0cyBzZXQgYnkgdGhlIGNvbnRlbnQgYXV0aG9yIGZvciB0aGlzIGFuc3dlci5cclxuICAgKi9cclxuICBwdWJsaWMgYWN0aXZhdGVIaWdobGlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy5tZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudClcclxuICAgICAgdGhpcy5tZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudC5pc0hpZ2hsaWdodGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYW5TdHJpbmcodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1xcc3syLH0vZywgXCIgXCIpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBMb29rcyB0aHJvdWdoIHRoZSBkaWZmIGFuZCBjaGVja3MgaG93IG1hbnkgY2hhcmFjdGVyIGNoYW5nZSBvcGVyYXRpb25zIGFyZSBuZWVkZWQgdG8gdHVybiBvbmUgc3RyaW5nIGludG8gdGhlIG90aGVyLiBTaG91bGQgcmV0dXJuIHRoZSBzYW1lIHJlc3VsdHMgYXMgdGhlIExldmVuc3RoZWluIGRpc3RhbmNlLiBcclxuICAgKiBAcGFyYW0gIHtbe2FkZGVkPzpib29sZWFuLCBib29sZWFuOiByZW1vdmVkPywgc3RyaW5nOiB2YWx1ZX1dfSBkaWZmIC0gYXMgcmV0dXJuZWQgYnkganNkaWZmXHJcbiAgICogQHJldHVybnMgbnVtYmVyIC0gdGhlIGNvdW50IG9mIGNoYW5nZXMgKHJlcGxhY2UsIGFkZCwgZGVsZXRlKSBuZWVkZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZyb20gb25lIHN0cmluZyB0byB0aGUgb3RoZXIgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRDaGFuZ2VzQ291bnRGcm9tRGlmZihkaWZmOiBqc2RpZmYuQ2hhbmdlW10pOiBudW1iZXIge1xyXG4gICAgdmFyIHRvdGFsQ2hhbmdlc0NvdW50ID0gMDtcclxuICAgIHZhciBsYXN0VHlwZSA9IFwiXCI7XHJcbiAgICB2YXIgbGFzdENvdW50ID0gMDtcclxuXHJcbiAgICBmb3IgKHZhciBlbGVtZW50IG9mIGRpZmYpIHtcclxuICAgICAgaWYgKGVsZW1lbnQucmVtb3ZlZCkge1xyXG4gICAgICAgIHRvdGFsQ2hhbmdlc0NvdW50ICs9IGVsZW1lbnQudmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIGxhc3RUeXBlID0gXCJyZW1vdmVkXCI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoZWxlbWVudC5hZGRlZCkge1xyXG4gICAgICAgIGlmIChsYXN0VHlwZSA9PT0gXCJyZW1vdmVkXCIpIHtcclxuICAgICAgICAgIGlmIChsYXN0Q291bnQgPCBlbGVtZW50LnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0b3RhbENoYW5nZXNDb3VudCArPSBlbGVtZW50LnZhbHVlLmxlbmd0aCAtIGxhc3RDb3VudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdG90YWxDaGFuZ2VzQ291bnQgKz0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RUeXBlID0gXCJhZGRlZFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxhc3RUeXBlID0gXCJzYW1lXCI7XHJcbiAgICAgIH1cclxuICAgICAgbGFzdENvdW50ID0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvdGFsQ2hhbmdlc0NvdW50O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGhvdyBtYW55IGNoYXJhY3RlcnMgY2FuIGJlIHdyb25nIHRvIHN0aWxsIGJlIGNvdW50ZWQgYXMgYSBzcGVsbGluZyBtaXN0YWtlLlxyXG4gICAqIElmIHNwZWxsaW5nIG1pc3Rha2VzIGFyZSB0dXJuZWQgb2ZmIHRocm91Z2ggdGhlIHNldHRpbmdzLCBpdCB3aWxsIHJldHVybiAwLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGV4dFxyXG4gICAqIEByZXR1cm5zIG51bWJlclxyXG4gICAqL1xyXG5cclxuICBwcml2YXRlIGdldEFjY2VwdGFibGVTcGVsbGluZ01pc3Rha2VzKHRleHQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICB2YXIgYWNjZXB0YWJsZVR5cG9Db3VudDogbnVtYmVyO1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3Mud2FyblNwZWxsaW5nRXJyb3JzIHx8IHRoaXMuc2V0dGluZ3MuYWNjZXB0U3BlbGxpbmdFcnJvcnMpIC8vIFRPRE86IGNvbnNpZGVyIHJlbW92YWxcclxuICAgICAgYWNjZXB0YWJsZVR5cG9Db3VudCA9IE1hdGguZmxvb3IodGV4dC5sZW5ndGggLyAxMCkgKyAxO1xyXG4gICAgZWxzZVxyXG4gICAgICBhY2NlcHRhYmxlVHlwb0NvdW50ID0gMDtcclxuXHJcbiAgICByZXR1cm4gYWNjZXB0YWJsZVR5cG9Db3VudDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSB0ZXh0IGVudGVyZWQgYnkgdGhlIHVzZXIgaW4gYW4gZXR0ZW1wdCBpcyBtYXRjaGVkIGJ5IHRoZSBhbnN3ZXIsXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRlbXB0IFRoZSB0ZXh0IGVudGVyZWQgYnkgdGhlIHVzZXIuXHJcbiAgICogQHJldHVybnMgRXZhbHVhdGlvbiBpbmRpY2F0ZXMgaWYgdGhlIGVudGVyZWQgdGV4dCBpcyBtYXRjaGVkIGJ5IHRoZSBhbnN3ZXIuXHJcbiAgICovXHJcbiAgcHVibGljIGV2YWx1YXRlQXR0ZW1wdChhdHRlbXB0OiBzdHJpbmcpOiBFdmFsdWF0aW9uIHtcclxuICAgIHZhciBjbGVhbmVkQXR0ZW1wdCA9IHRoaXMuY2xlYW5TdHJpbmcoYXR0ZW1wdCk7XHJcbiAgICB2YXIgZXZhbHVhdGlvbiA9IG5ldyBFdmFsdWF0aW9uKHRoaXMpO1xyXG5cclxuICAgIGZvciAodmFyIGFsdGVybmF0aXZlIG9mIHRoaXMuYWx0ZXJuYXRpdmVzKSB7XHJcbiAgICAgIHZhciBjbGVhbmVkQWx0ZXJuYXRpdmUgPSB0aGlzLmNsZWFuU3RyaW5nKGFsdGVybmF0aXZlKTtcclxuXHJcbiAgICAgIHZhciBkaWZmID0ganNkaWZmLmRpZmZDaGFycyhjbGVhbmVkQWx0ZXJuYXRpdmUsIGNsZWFuZWRBdHRlbXB0LFxyXG4gICAgICAgIHsgaWdub3JlQ2FzZTogIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSB9KTtcclxuICAgICAgdmFyIGNoYW5nZUNvdW50ID0gdGhpcy5nZXRDaGFuZ2VzQ291bnRGcm9tRGlmZihkaWZmKTtcclxuXHJcbiAgICAgIGlmIChjaGFuZ2VDb3VudCA9PT0gMCkge1xyXG4gICAgICAgIGV2YWx1YXRpb24udXNlZEFsdGVybmF0aXZlID0gY2xlYW5lZEFsdGVybmF0aXZlO1xyXG4gICAgICAgIGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoO1xyXG4gICAgICAgIHJldHVybiBldmFsdWF0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2hhbmdlQ291bnQgPD0gdGhpcy5nZXRBY2NlcHRhYmxlU3BlbGxpbmdNaXN0YWtlcyhhbHRlcm5hdGl2ZSlcclxuICAgICAgICAmJiAoZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQgPT09IDAgfHwgY2hhbmdlQ291bnQgPCBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCkpIHtcclxuICAgICAgICBldmFsdWF0aW9uLnVzZWRBbHRlcm5hdGl2ZSA9IGNsZWFuZWRBbHRlcm5hdGl2ZTtcclxuICAgICAgICBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID0gQ29ycmVjdG5lc3MuQ2xvc2VNYXRjaDtcclxuICAgICAgICBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCA9IGNoYW5nZUNvdW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXZhbHVhdGlvbjtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XHJcbmltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4vY2xvemUtZWxlbWVudCc7XHJcbmltcG9ydCB7IEFuc3dlciwgQ29ycmVjdG5lc3MgfSBmcm9tICcuL2Fuc3dlcic7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBNZXNzYWdlVHlwZSwgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tICcuL2VudW1zJztcclxuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uLCBMb2NhbGl6YXRpb25MYWJlbHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24nO1xyXG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgZ2V0TG9uZ2VzdFN0cmluZywgc2h1ZmZsZUFycmF5IH0gZnJvbSBcIi4uLy4uL2xpYi9oZWxwZXJzXCI7XHJcbmltcG9ydCAqIGFzIGpzZGlmZiBmcm9tICdkaWZmJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCbGFuayBleHRlbmRzIENsb3plRWxlbWVudCB7XHJcbiAgLy8gY29udGVudFxyXG4gIGNvcnJlY3RBbnN3ZXJzOiBBbnN3ZXJbXTtcclxuICBpbmNvcnJlY3RBbnN3ZXJzOiBBbnN3ZXJbXTtcclxuICBoaW50OiBNZXNzYWdlO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY2hvaWNlczogc3RyaW5nW107XHJcbiAgaGFzSGludDogYm9vbGVhbjtcclxuXHJcbiAgLy8gdmlld21vZGVsIHN0dWZmXHJcblxyXG4gIGxhc3RDaGVja2VkVGV4dDogc3RyaW5nO1xyXG4gIGVudGVyZWRUZXh0OiBzdHJpbmc7XHJcbiAgaXNDb3JyZWN0OiBib29sZWFuO1xyXG4gIGlzRXJyb3I6IGJvb2xlYW47XHJcbiAgaXNSZXRyeTogYm9vbGVhbjtcclxuICBoYXNQZW5kaW5nRmVlZGJhY2s6IGJvb2xlYW47XHJcbiAgaXNTaG93aW5nU29sdXRpb246IGJvb2xlYW47XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIG1pblRleHRMZW5ndGg6IG51bWJlcjtcclxuICBzcGVlY2hCdWJibGU6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGluY29ycmVjdCBhbnN3ZXJzIGFmdGVyIGluaXRpYWxpemluZyB0aGUgb2JqZWN0LiBDYWxsIGZpbmlzaEluaXRpYWxpemF0aW9uKClcclxuICAgKiB3aGVuIGRvbmUuXHJcbiAgICogQHBhcmFtICB7SVNldHRpbmdzfSBzZXR0aW5nc1xyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaWRcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvcnJlY3RUZXh0P1xyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaGludFRleHQ/XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLCBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSwgaWQ6IHN0cmluZykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gXCJcIjtcclxuICAgIHRoaXMuY29ycmVjdEFuc3dlcnMgPSBuZXcgQXJyYXkoKTtcclxuICAgIHRoaXMuaW5jb3JyZWN0QW5zd2VycyA9IG5ldyBBcnJheSgpO1xyXG4gICAgdGhpcy5jaG9pY2VzID0gbmV3IEFycmF5KCk7XHJcbiAgICB0aGlzLnR5cGUgPSBDbG96ZUVsZW1lbnRUeXBlLkJsYW5rO1xyXG5cclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ2FsbCB0aGlzIG1ldGhvZCB3aGVuIGFsbCBpbmNvcnJlY3QgYW5zd2VycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgKi9cclxuICBwdWJsaWMgZmluaXNoSW5pdGlhbGl6YXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QgJiYgdGhpcy5zZXR0aW5ncy5zZWxlY3RBbHRlcm5hdGl2ZXMgPT09IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXMpIHtcclxuICAgICAgdGhpcy5sb2FkQ2hvaWNlc0Zyb21Pd25BbHRlcm5hdGl2ZXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FsY3VsYXRlTWluVGV4dExlbmd0aCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZENvcnJlY3RBbnN3ZXIoYW5zd2VyOiBBbnN3ZXIpIHtcclxuICAgIHRoaXMuY29ycmVjdEFuc3dlcnMucHVzaChhbnN3ZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvcnJlY3RBbnN3ZXJzKCk6IHN0cmluZ1tdIHtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIGZvciAobGV0IGFuc3dlciBvZiB0aGlzLmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYW5zd2VyLmFsdGVybmF0aXZlcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEhpbnQobWVzc2FnZTogTWVzc2FnZSkge1xyXG4gICAgdGhpcy5oaW50ID0gbWVzc2FnZTtcclxuICAgIHRoaXMuaGFzSGludCA9IHRoaXMuaGludC50ZXh0ICE9PSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyB0aGUgaW5jb3JyZWN0IGFuc3dlciB0byB0aGUgbGlzdC5cclxuICAgKiBAcGFyYW0gdGV4dCAtIFdoYXQgdGhlIHVzZXIgbXVzdCBlbnRlci5cclxuICAgKiBAcGFyYW0gcmVhY3Rpb24gIC0gV2hhdCB0aGUgdXNlciBnZXRzIGRpc3BsYXllZCB3aGVuIGhlIGVudGVyZXMgdGhlIHRleHQuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZEluY29ycmVjdEFuc3dlcih0ZXh0OiBzdHJpbmcsIHJlYWN0aW9uOiBzdHJpbmcsIHNob3dIaWdobGlnaHQ6IGJvb2xlYW4sIGhpZ2hsaWdodDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmluY29ycmVjdEFuc3dlcnMucHVzaChcclxuICAgICAgbmV3IEFuc3dlcih0ZXh0LCByZWFjdGlvbiwgc2hvd0hpZ2hsaWdodCwgaGlnaGxpZ2h0LCB0aGlzLnNldHRpbmdzKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGhvdyBtYW55IGNoYXJhY3RlcnMgdGhlIGlucHV0IGJveCBtdXN0IGhhdmUgYmUgdG8gYWxsb3cgZm9yIGFsbCBjb3JyZWN0IGFuc3dlcnMuXHJcbiAgICovXHJcbiAgLy8gVE9ETzogcmVmYWN0b3JcclxuICBwcml2YXRlIGNhbGN1bGF0ZU1pblRleHRMZW5ndGgoKTogdm9pZCB7XHJcbiAgICB2YXIgYW5zd2Vyczogc3RyaW5nW10gPSBuZXcgQXJyYXkoKTtcclxuICAgIGZvciAobGV0IGNvcnJlY3RBbnN3ZXIgb2YgdGhpcy5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICBhbnN3ZXJzLnB1c2goZ2V0TG9uZ2VzdFN0cmluZyhjb3JyZWN0QW5zd2VyLmFsdGVybmF0aXZlcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCkge1xyXG4gICAgICBmb3IgKGxldCBpbmNvcnJlY3RBbnN3ZXIgb2YgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgICAgYW5zd2Vycy5wdXNoKGdldExvbmdlc3RTdHJpbmcoaW5jb3JyZWN0QW5zd2VyLmFsdGVybmF0aXZlcykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvbmdlc3RBbnN3ZXIgPSBnZXRMb25nZXN0U3RyaW5nKGFuc3dlcnMpO1xyXG4gICAgdmFyIGwgPSBsb25nZXN0QW5zd2VyLmxlbmd0aDtcclxuICAgIHRoaXMubWluVGV4dExlbmd0aCA9IE1hdGgubWF4KDEwLCBsIC0gKGwgJSAxMCkgKyAxMCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbGlzdCBvZiBjaG9pY2VzIGZyb20gYWxsIGFsdGVybmF0aXZlcyBwcm92aWRlZCBieVxyXG4gICAqIHRoZSBjb3JyZWN0IGFuZCBpbmNvcnJlY3QgYW5zd2Vycy5cclxuICAgKi9cclxuICBwcml2YXRlIGxvYWRDaG9pY2VzRnJvbU93bkFsdGVybmF0aXZlcygpOiBzdHJpbmdbXSB7XHJcbiAgICB0aGlzLmNob2ljZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgIGZvciAobGV0IGFuc3dlciBvZiB0aGlzLmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgIGZvciAobGV0IGFsdGVybmF0aXZlIG9mIGFuc3dlci5hbHRlcm5hdGl2ZXMpIHtcclxuICAgICAgICB0aGlzLmNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgIGZvciAobGV0IGFsdGVybmF0aXZlIG9mIGFuc3dlci5hbHRlcm5hdGl2ZXMpIHtcclxuICAgICAgICB0aGlzLmNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNob2ljZXMgPSBzaHVmZmxlQXJyYXkodGhpcy5jaG9pY2VzKTtcclxuICAgIHRoaXMuY2hvaWNlcy51bnNoaWZ0KFwiXCIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNob2ljZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbGlzdCBvZiBjaG9pY2VzIGZyb20gYWxsIGNvcnJlY3QgYW5zd2VycyBvZiB0aGUgY2xvemUuXHJcbiAgICogQHBhcmFtIG90aGVyQmxhbmtzIEFsbCBPVEhFUiBibGFua3MgaW4gdGhlIGNsb3plLiAoZXhjbHVkZXMgdGhlIGN1cnJlbnQgb25lISlcclxuICAgKi9cclxuICBwdWJsaWMgbG9hZENob2ljZXNGcm9tT3RoZXJCbGFua3Mob3RoZXJCbGFua3M6IEJsYW5rW10pOiBzdHJpbmdbXSB7XHJcbiAgICBsZXQgb3duQ2hvaWNlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xyXG4gICAgICAgIG93bkNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgb3RoZXJDaG9pY2VzID0gbmV3IEFycmF5KCk7XHJcbiAgICBmb3IgKGxldCBvdGhlckJsYW5rIG9mIG90aGVyQmxhbmtzKSB7XHJcbiAgICAgIGZvciAobGV0IGFuc3dlciBvZiBvdGhlckJsYW5rLmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xyXG4gICAgICAgICAgb3RoZXJDaG9pY2VzLnB1c2goYWx0ZXJuYXRpdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG90aGVyQ2hvaWNlcyA9IHNodWZmbGVBcnJheShvdGhlckNob2ljZXMpO1xyXG5cclxuICAgIGxldCBtYXhDaG9pY2VzID0gdGhpcy5zZXR0aW5ncy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uO1xyXG4gICAgaWYgKG1heENob2ljZXMgPT09IHVuZGVmaW5lZCB8fCBtYXhDaG9pY2VzID09PSAwKVxyXG4gICAgICBtYXhDaG9pY2VzID0gb3duQ2hvaWNlcy5sZW5ndGggKyBvdGhlckNob2ljZXMubGVuZ3RoO1xyXG5cclxuICAgIGxldCBsZWZ0T3ZlckNob2ljZXMgPSBtYXhDaG9pY2VzIC0gb3duQ2hvaWNlcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxlZnRPdmVyQ2hvaWNlcyAmJiB4IDwgb3RoZXJDaG9pY2VzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgIGlmIChvd25DaG9pY2VzLmluZGV4T2Yob3RoZXJDaG9pY2VzW3hdKSA+PSAwKSB7XHJcbiAgICAgICAgbGVmdE92ZXJDaG9pY2VzKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3duQ2hvaWNlcy5wdXNoKG90aGVyQ2hvaWNlc1t4XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNob2ljZXMgPSBzaHVmZmxlQXJyYXkob3duQ2hvaWNlcyk7XHJcbiAgICB0aGlzLmNob2ljZXMudW5zaGlmdChcIlwiKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jaG9pY2VzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDbGVhcnMgdGhlIGJsYW5rIGZyb20gYWxsIGVudGVyZWQgdGV4dCBhbmQgaGlkZXMgcG9wdXBzLlxyXG4gICovXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgdGhpcy5lbnRlcmVkVGV4dCA9IFwiXCI7XHJcbiAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IFwiXCI7XHJcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcclxuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuTm9uZSk7XHJcbiAgICB0aGlzLmhhc1BlbmRpbmdGZWVkYmFjayA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgYmxhbmsgdG8gYSBzdGF0ZSBpbiB3aGljaCB0aGUgY29ycmVjdCBzb2x1dGlvbiBpZiBzaG93biBpZiB0aGUgdXNlclxyXG4gICAqIGhhc24ndCBlbnRlcmVkIGEgY29ycmVjdCBvbmUgc28gZmFyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaG93U29sdXRpb24oKSB7XHJcbiAgICB0aGlzLmV2YWx1YXRlQXR0ZW1wdCh0cnVlKTtcclxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xyXG4gICAgaWYgKHRoaXMuaXNDb3JyZWN0KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gdGhpcy5jb3JyZWN0QW5zd2Vyc1swXS5hbHRlcm5hdGl2ZXNbMF07XHJcbiAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLlNob3dTb2x1dGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Gb2N1c3NlZCgpIHtcclxuICAgIGlmICh0aGlzLmhhc1BlbmRpbmdGZWVkYmFjaykge1xyXG4gICAgICB0aGlzLmV2YWx1YXRlQXR0ZW1wdChmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Ob25lKTtcclxuICAgICAgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPSBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRGlzcGxheUZlZWRiYWNrKCkge1xyXG4gICAgaWYgKHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrKSB7XHJcbiAgICAgIHRoaXMuZXZhbHVhdGVBdHRlbXB0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGxheVRvb2x0aXAobWVzc2FnZTogc3RyaW5nLCB0eXBlOiBNZXNzYWdlVHlwZSwgc3VycHJlc3NUb29sdGlwOiBib29sZWFuLCBpZD86IHN0cmluZykge1xyXG4gICAgaWYgKCFzdXJwcmVzc1Rvb2x0aXApXHJcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2hvdyhpZCA/IGlkIDogdGhpcy5pZCwgbWVzc2FnZSwgdGhpcywgdHlwZSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNQZW5kaW5nRmVlZGJhY2sgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZVRvb2x0aXAoKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VG9vbHRpcEVycm9yVGV4dChtZXNzYWdlOiBNZXNzYWdlLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4pIHtcclxuICAgIGlmIChtZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKG1lc3NhZ2UudGV4dCwgTWVzc2FnZVR5cGUuRXJyb3IsIHN1cnByZXNzVG9vbHRpcCwgbWVzc2FnZS5oaWdobGlnaHRlZEVsZW1lbnQuaWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAobWVzc2FnZS50ZXh0LCBNZXNzYWdlVHlwZS5FcnJvciwgc3VycHJlc3NUb29sdGlwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3BlbGxpbmdNaXN0YWtlTWVzc2FnZShleHBlY3RlZFRleHQ6IHN0cmluZywgZW50ZXJlZFRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB2YXIgbWVzc2FnZSA9IHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnR5cG9NZXNzYWdlKVxyXG5cclxuICAgIHZhciBkaWZmID0ganNkaWZmLmRpZmZDaGFycyhleHBlY3RlZFRleHQsIGVudGVyZWRUZXh0LCB7IGlnbm9yZUNhc2U6ICF0aGlzLnNldHRpbmdzLmNhc2VTZW5zaXRpdmUgfSk7XHJcblxyXG4gICAgdmFyIG1pc3Rha2VTcGFuID0gdGhpcy5qcXVlcnkoXCI8c3Bhbi8+XCIsIHsgXCJjbGFzc1wiOiBcInNwZWxsaW5nLW1pc3Rha2VcIiB9KTtcclxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkaWZmLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICB2YXIgcGFydCA9IGRpZmZbaW5kZXhdO1xyXG4gICAgICB2YXIgc3BhbkNsYXNzID0gJyc7XHJcbiAgICAgIGlmIChwYXJ0LnJlbW92ZWQpIHtcclxuICAgICAgICBpZiAoaW5kZXggPT09IGRpZmYubGVuZ3RoIC0gMSB8fCAhZGlmZltpbmRleCArIDFdLmFkZGVkKSB7XHJcbiAgICAgICAgICBwYXJ0LnZhbHVlID0gcGFydC52YWx1ZS5yZXBsYWNlKC8uL2csIFwiX1wiKTtcclxuICAgICAgICAgIHNwYW5DbGFzcyA9ICdtaXNzaW5nLWNoYXJhY3Rlcic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXJ0LmFkZGVkKSB7XHJcbiAgICAgICAgc3BhbkNsYXNzID0gJ21pc3Rha2VuLWNoYXJhY3Rlcic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBzcGFuID0gdGhpcy5qcXVlcnkoXCI8c3Bhbi8+XCIsIHsgXCJjbGFzc1wiOiBzcGFuQ2xhc3MsIFwiaHRtbFwiOiBwYXJ0LnZhbHVlLnJlcGxhY2UoXCIgXCIsIFwiJm5ic3A7XCIpIH0pO1xyXG4gICAgICBtaXN0YWtlU3Bhbi5hcHBlbmQoc3Bhbik7XHJcbiAgICB9XHJcblxyXG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZShcIkBtaXN0YWtlXCIsIHRoaXMuanF1ZXJ5KFwiPHNwYW4vPlwiKS5hcHBlbmQobWlzdGFrZVNwYW4pLmh0bWwoKSk7XHJcbiAgICByZXR1cm4gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGUgZW50ZXJlZCB0ZXh0IGlzIHRoZSBjb3JyZWN0IGFuc3dlciBvciBvbmUgb2YgdGhlIFxyXG4gICAqIGluY29ycmVjdCBvbmVzIGFuZCBnaXZlcyB0aGUgdXNlciBmZWVkYmFjayBhY2NvcmRpbmdseS5cclxuICAgKi9cclxuICBwdWJsaWMgZXZhbHVhdGVBdHRlbXB0KHN1cnByZXNzVG9vbHRpcHM6IGJvb2xlYW4sIGZvcmNlQ2hlY2s/OiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrICYmIHRoaXMubGFzdENoZWNrZWRUZXh0ID09PSB0aGlzLmVudGVyZWRUZXh0ICYmICFmb3JjZUNoZWNrKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPSB0aGlzLmVudGVyZWRUZXh0LnRvU3RyaW5nKCk7XHJcbiAgICB0aGlzLmhhc1BlbmRpbmdGZWVkYmFjayA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XHJcblxyXG4gICAgdmFyIGV4YWN0Q29ycmVjdE1hdGNoZXMgPSB0aGlzLmNvcnJlY3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdCh0aGlzLmVudGVyZWRUZXh0KSkuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuRXhhY3RNYXRjaCkuc29ydChldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KTtcclxuICAgIHZhciBjbG9zZUNvcnJlY3RNYXRjaGVzID0gdGhpcy5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XHJcbiAgICB2YXIgZXhhY3RJbmNvcnJlY3RNYXRjaGVzID0gdGhpcy5pbmNvcnJlY3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdCh0aGlzLmVudGVyZWRUZXh0KSkuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuRXhhY3RNYXRjaCkuc29ydChldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KTtcclxuICAgIHZhciBjbG9zZUluY29ycmVjdE1hdGNoZXMgPSB0aGlzLmluY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5DbG9zZU1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xyXG5cclxuICAgIGlmIChleGFjdENvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Db3JyZWN0KTtcclxuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmNhc2VTZW5zaXRpdmUpIHtcclxuICAgICAgICB0aGlzLmVudGVyZWRUZXh0ID0gZXhhY3RDb3JyZWN0TWF0Y2hlc1swXS51c2VkQWx0ZXJuYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChleGFjdEluY29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkVycm9yKTtcclxuICAgICAgdGhpcy5zaG93RXJyb3JUb29sdGlwKGV4YWN0SW5jb3JyZWN0TWF0Y2hlc1swXS51c2VkQW5zd2VyLCBzdXJwcmVzc1Rvb2x0aXBzKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbG9zZUNvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3Mud2FyblNwZWxsaW5nRXJyb3JzKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcCh0aGlzLmdldFNwZWxsaW5nTWlzdGFrZU1lc3NhZ2UoY2xvc2VDb3JyZWN0TWF0Y2hlc1swXS51c2VkQWx0ZXJuYXRpdmUsIHRoaXMuZW50ZXJlZFRleHQpLCBNZXNzYWdlVHlwZS5SZXRyeSwgc3VycHJlc3NUb29sdGlwcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5SZXRyeSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFjY2VwdFNwZWxsaW5nRXJyb3JzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Db3JyZWN0KTtcclxuICAgICAgICB0aGlzLmVudGVyZWRUZXh0ID0gY2xvc2VDb3JyZWN0TWF0Y2hlc1swXS51c2VkQWx0ZXJuYXRpdmU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsb3NlSW5jb3JyZWN0TWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuRXJyb3IpO1xyXG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoY2xvc2VJbmNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbnN3ZXIsIHN1cnByZXNzVG9vbHRpcHMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFsd2F5c0FwcGx5aW5nQW5zd2VycyA9IHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5maWx0ZXIoYSA9PiBhLmFwcGxpZXNBbHdheXMpO1xyXG4gICAgaWYgKGFsd2F5c0FwcGx5aW5nQW5zd2VycyAmJiBhbHdheXNBcHBseWluZ0Fuc3dlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoYWx3YXlzQXBwbHlpbmdBbnN3ZXJzWzBdLCBzdXJwcmVzc1Rvb2x0aXBzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkVycm9yKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblR5cGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Ob25lKTtcclxuICAgIHRoaXMubGFzdENoZWNrZWRUZXh0ID0gXCJcIjtcclxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvc3RGb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2VTZXJ2aWNlLmlzQWN0aXZlKHRoaXMpKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgYm9vbGVhbiBwcm9wZXJ0aWVzIGlzQ29ycmVjdCwgaXMgRXJyb3IgYW5kIGlzUmV0cnkgYWNjb3JkaW5nIHRvIHRoZXBhc3NlZCAgbWVzc2FnZVR5cGUuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2VUeXBlIFxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0QW5zd2VyU3RhdGUobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgICB0aGlzLmlzQ29ycmVjdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0Vycm9yID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzUmV0cnkgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNTaG93aW5nU29sdXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuQ29ycmVjdDpcclxuICAgICAgICB0aGlzLmlzQ29ycmVjdCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRXJyb3I6XHJcbiAgICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5SZXRyeTpcclxuICAgICAgICB0aGlzLmlzUmV0cnkgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLlNob3dTb2x1dGlvbjpcclxuICAgICAgICB0aGlzLmlzU2hvd2luZ1NvbHV0aW9uID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0Vycm9yVG9vbHRpcChhbnN3ZXI6IEFuc3dlciwgc3VycHJlc3NUb29sdGlwOiBib29sZWFuKSB7XHJcbiAgICBpZiAoYW5zd2VyLm1lc3NhZ2UgJiYgYW5zd2VyLm1lc3NhZ2UudGV4dCkge1xyXG4gICAgICB0aGlzLnNldFRvb2x0aXBFcnJvclRleHQoYW5zd2VyLm1lc3NhZ2UsIHN1cnByZXNzVG9vbHRpcCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXN1cnByZXNzVG9vbHRpcCkge1xyXG4gICAgICBhbnN3ZXIuYWN0aXZhdGVIaWdobGlnaHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXlzIHRoZSBoaW50IGluIHRoZSB0b29sdGlwLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaG93SGludCgpIHtcclxuICAgIGlmICh0aGlzLmlzU2hvd2luZ1NvbHV0aW9uIHx8IHRoaXMuaXNDb3JyZWN0KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XHJcbiAgICBpZiAodGhpcy5oaW50ICYmIHRoaXMuaGludC50ZXh0ICE9PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAodGhpcy5oaW50LnRleHQsIE1lc3NhZ2VUeXBlLlJldHJ5LCBmYWxzZSk7XHJcbiAgICAgIGlmICh0aGlzLmhpbnQuaGlnaGxpZ2h0ZWRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5oaW50LmhpZ2hsaWdodGVkRWxlbWVudC5pc0hpZ2hsaWdodGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlcmlhbGl6ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmVudGVyZWRUZXh0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc2VyaWFsaXplKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5lbnRlcmVkVGV4dCA9IGRhdGE7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGVudW0gQ2xvemVFbGVtZW50VHlwZSB7XHJcbiAgQmxhbmssXHJcbiAgSGlnaGxpZ2h0XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbG96ZUVsZW1lbnQge1xyXG4gIHB1YmxpYyB0eXBlOiBDbG96ZUVsZW1lbnRUeXBlO1xyXG59IiwiaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSBcIi4vaGlnaGxpZ2h0XCI7XHJcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSBcIi4vYmxhbmtcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBjbG96ZS4gSW5zdGFudGlhdGUgd2l0aCBzdGF0aWMgY3JlYXRlQ2xvemUoKS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbG96ZSB7XHJcbiAgcHVibGljIGh0bWw6IHN0cmluZztcclxuICBwdWJsaWMgaGlnaGxpZ2h0czogSGlnaGxpZ2h0W107XHJcbiAgcHVibGljIGJsYW5rczogQmxhbmtbXTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgYmxhbmtzIHdlcmUgZW50ZXJlZCBjb3JyZWN0bHkuIFxyXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGlzU29sdmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmxhbmtzLmV2ZXJ5KGIgPT4gYi5pc0NvcnJlY3QgPT09IHRydWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBoaWRlQWxsSGlnaGxpZ2h0cygpOiB2b2lkIHtcclxuICAgIGZvciAodmFyIGhpZ2hsaWdodCBvZiB0aGlzLmhpZ2hsaWdodHMpIHtcclxuICAgICAgaGlnaGxpZ2h0LmlzSGlnaGxpZ2h0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldCgpIHtcclxuICAgIHRoaXMuaGlkZUFsbEhpZ2hsaWdodHMoKTtcclxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuYmxhbmtzKSB7XHJcbiAgICAgIGJsYW5rLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1NvbHV0aW9ucygpIHtcclxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuYmxhbmtzKSB7XHJcbiAgICAgIGJsYW5rLnNob3dTb2x1dGlvbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oaWRlQWxsSGlnaGxpZ2h0cygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlcmlhbGl6ZSgpIDogc3RyaW5nW10ge1xyXG4gICAgdmFyIGNsb3plID0gW107XHJcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmJsYW5rcykge1xyXG4gICAgICBjbG96ZS5wdXNoKGJsYW5rLnNlcmlhbGl6ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvemU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzZXJpYWxpemUoZGF0YTogYW55KSB7XHJcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKGluZGV4ID49IHRoaXMuYmxhbmtzLmxlbmd0aClcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIHZhciBibGFuayA9IHRoaXMuYmxhbmtzW2luZGV4XTtcclxuICAgICAgYmxhbmsuZGVzZXJpYWxpemUoZGF0YVtpbmRleF0pO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcclxuICBFcnJvcixcclxuICBDb3JyZWN0LFxyXG4gIFJldHJ5LFxyXG4gIFNob3dTb2x1dGlvbixcclxuICBOb25lXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENsb3plVHlwZSB7XHJcbiAgVHlwZSxcclxuICBTZWxlY3RcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2VsZWN0QWx0ZXJuYXRpdmVzIHtcclxuICBBbHRlcm5hdGl2ZXMsXHJcbiAgQWxsXHJcbn0iLCJpbXBvcnQgeyBDbG96ZUVsZW1lbnQsIENsb3plRWxlbWVudFR5cGUgfSBmcm9tICcuL2Nsb3plLWVsZW1lbnQnO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBoaWdobGlnaHQgaW4gdGhlIGNsb3plLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodCBleHRlbmRzIENsb3plRWxlbWVudCB7XHJcblx0dGV4dDogc3RyaW5nO1xyXG5cdGlzSGlnaGxpZ2h0ZWQ6IGJvb2xlYW47XHJcblx0aWQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IodGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50eXBlID0gQ2xvemVFbGVtZW50VHlwZS5IaWdobGlnaHQ7XHJcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy5pc0hpZ2hsaWdodGVkID0gZmFsc2U7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSBcIi4vaGlnaGxpZ2h0XCI7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIG1lc3NhZ2UgdGhhdCB0aGUgY29udGVudCBhdXRob3IgaGFzIHNwZWNpZmllZCB0byBiZSBhIHJlYWN0aW9uXHJcbiAqIHRvIGFuIHVzZXIncyBhbnN3ZXIuIFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gIGhpZ2hsaWdodGVkRWxlbWVudDogSGlnaGxpZ2h0O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGV4dDogc3RyaW5nLCBzaG93SGlnaGxpZ2h0OiBib29sZWFuLCBwcml2YXRlIHJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb246IG51bWJlcikge1xyXG4gICAgaWYoIXNob3dIaWdobGlnaHQpXHJcbiAgICAgIHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGxpbmtIaWdobGlnaHQgPSAoaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pID0+IHtcclxuICAgIGlmICghdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgICBpZiAodGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIDwgMCAmJiAoMCAtIHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiAtIDEpIDwgaGlnaGxpZ2h0c0JlZm9yZS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkRWxlbWVudCA9IGhpZ2hsaWdodHNCZWZvcmVbMCAtIHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiAtIDFdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiA+IDAgJiYgKHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiAtIDEgPCBoaWdobGlnaHRzQWZ0ZXIubGVuZ3RoKSkge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRFbGVtZW50ID0gaGlnaGxpZ2h0c0FmdGVyW3RoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiAtIDFdO1xyXG4gICAgICB9XHJcbiAgfVxyXG59IiwiLyoqXHJcbiAqIEEgc25pcHBldCBpcyBhIHRleHQgYmxvY2sgdGhhdCBpcyBwdXQgaW50byBwbGFjZWQgbWFya2VkIGluIGZlZWRiYWNrIHRleHRzIG9yIGhpbnRzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNuaXBwZXQge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdHMgdGhlIHNuaXBwZXQuXHJcbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHNuaXBwZXQgdGhhdCBpcyB1c2VkIHdoZW4gaXQgaXMgcmVmZXJlbmNlZCBpbiBhIGZlZWRiYWNrdGV4dCAod2l0aG91dCB0aGUgc25pcHBldCBtYXJrZXIgQClcclxuICAgKiBAcGFyYW0gdGV4dCBUaGUgc25pcHBldCBpdHNlbGYgKGh0bWwpXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHRleHQ6IHN0cmluZykge1xyXG4gICAgXHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFhBUElBY3Rpdml0eURlZmluaXRpb24ge1xyXG4gIG5hbWU6IGFueTtcclxuICBkZXNjcmlwdGlvbjogYW55O1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBpbnRlcmFjdGlvblR5cGU6IFwidHJ1ZS1mYWxzZVwiIHwgXCJjaG9pY2VcIiB8IFwiZmlsbC1pblwiIHwgXCJsb25nLWZpbGwtaW5cIiB8IFwibWF0Y2hpbmdcIiB8IFwicGVyZm9ybWFuY2VcIiB8IFwic2VxdWVuY2luZ1wiIHwgXCJsaWtlcnRcIiB8IFwibnVtZXJpY1wiIHwgXCJvdGhlclwiO1xyXG4gIGNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuPzogc3RyaW5nW11cclxufSIsImltcG9ydCB7IEJsYW5rTG9hZGVyIH0gZnJvbSAnLi4vY29udGVudC1sb2FkZXJzL2JsYW5rLWxvYWRlcic7XHJcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSBcIi4uL21vZGVscy9ibGFua1wiO1xyXG5pbXBvcnQgeyBTbmlwcGV0IH0gZnJvbSBcIi4uL21vZGVscy9zbmlwcGV0XCI7XHJcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgVW5yd2FwcGVyIH0gZnJvbSAnLi4vaGVscGVycy91bndyYXBwZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVJlcG9zaXRvcnkge1xyXG4gIGdldEJsYW5rcygpOiBCbGFua1tdO1xyXG4gIGdldENsb3plVGV4dCgpOiBzdHJpbmc7XHJcbiAgZ2V0RmVlZGJhY2tUZXh0KCk6IHN0cmluZztcclxuICBnZXRNZWRpYSgpOiBhbnk7XHJcbiAgZ2V0VGFza0Rlc2NyaXB0aW9uKCk6IHN0cmluZztcclxuICBnZXRTbmlwcGV0cygpOiBTbmlwcGV0W107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhcm91bmQgdGhlIGg1cCBjb25maWcgb2JqZWN0IGFuZCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGNvbnRlbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSDVQRGF0YVJlcG9zaXRvcnkgaW1wbGVtZW50cyBJRGF0YVJlcG9zaXRvcnkge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaDVwQ29uZmlnRGF0YTogYW55LCBwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsXHJcbiAgICBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBcclxuICAgIHByaXZhdGUgdW53cmFwcGVyOiBVbnJ3YXBwZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBibGFuayB0ZXh0IG9mIHRoZSBjbG96ZSAoYXMgSFRNTCBtYXJrdXApLlxyXG4gICAqL1xyXG4gIGdldENsb3plVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc1RleHQ7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiByZW1vdmUgb3IgaW1wbGVtZW50XHJcbiAgZ2V0RmVlZGJhY2tUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG4gIGdldE1lZGlhKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLm1lZGlhO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza0Rlc2NyaXB0aW9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQudGFzaztcclxuICB9XHJcblxyXG4gIGdldEJsYW5rcygpOiBCbGFua1tdIHtcclxuICAgIHZhciBibGFua3M6IEJsYW5rW10gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc0xpc3QpXHJcbiAgICAgIHJldHVybiBibGFua3M7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC5ibGFua3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBoNXBCbGFuayA9IHRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc0xpc3RbaV07XHJcblxyXG4gICAgICB2YXIgY29ycmVjdFRleHQgPSBoNXBCbGFuay5jb3JyZWN0QW5zd2VyVGV4dDtcclxuICAgICAgaWYgKGNvcnJlY3RUZXh0ID09PSBcIlwiIHx8IGNvcnJlY3RUZXh0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICB2YXIgYmxhbmsgPSBCbGFua0xvYWRlci5pbnN0YW5jZS5jcmVhdGVCbGFuayhcImNsb3plXCIgKyBpLCBjb3JyZWN0VGV4dCxcclxuICAgICAgICBoNXBCbGFuay5oaW50LCBoNXBCbGFuay5pbmNvcnJlY3RBbnN3ZXJzTGlzdCk7XHJcblxyXG4gICAgICBibGFuay5maW5pc2hJbml0aWFsaXphdGlvbigpO1xyXG4gICAgICBibGFua3MucHVzaChibGFuayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJsYW5rcztcclxuICB9XHJcblxyXG4gIGdldFNuaXBwZXRzKCk6IFNuaXBwZXRbXSB7XHJcbiAgICB2YXIgc25pcHBldHM6IFNuaXBwZXRbXSA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgIGlmICghdGhpcy5oNXBDb25maWdEYXRhLnNuaXBwZXRzKVxyXG4gICAgICByZXR1cm4gc25pcHBldHM7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmg1cENvbmZpZ0RhdGEuc25pcHBldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIHJhd19zbmlwcGV0ID0gdGhpcy5oNXBDb25maWdEYXRhLnNuaXBwZXRzW2ldO1xyXG4gICAgICB2YXIgc25pcHBldCA9IG5ldyBTbmlwcGV0KHJhd19zbmlwcGV0LnNuaXBwZXROYW1lLCB0aGlzLnVud3JhcHBlci51bndyYXAocmF3X3NuaXBwZXQuc25pcHBldFRleHQpKTtcclxuICAgICAgc25pcHBldHMucHVzaChzbmlwcGV0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBzbmlwcGV0cztcclxuICB9XHJcbn0iLCJleHBvcnQgZW51bSBMb2NhbGl6YXRpb25MYWJlbHMge1xyXG4gIHNob3dTb2x1dGlvbkJ1dHRvbiA9IFwic2hvd1NvbHV0aW9uc1wiLFxyXG4gIHJldHJ5QnV0dG9uID0gXCJ0cnlBZ2FpblwiLFxyXG4gIGNoZWNrQWxsQnV0dG9uID0gXCJjaGVja0Fuc3dlclwiLFxyXG4gIG5vdEZpbGxlZE91dFdhcm5pbmcgPSBcIm5vdEZpbGxlZE91dFwiLFxyXG4gIHRpcEJ1dHRvbiA9XCJ0aXBMYWJlbFwiLFxyXG4gIHR5cG9NZXNzYWdlID0gXCJzcGVsbGluZ01pc3Rha2VXYXJuaW5nXCIsXHJcbiAgc2NvcmVCYXJMYWJlbCA9IFwic2NvcmVCYXJMYWJlbFwiICBcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTG9jYWxpemF0aW9uU3RydWN0dXJlcyB7XHJcbiAgY29uZmlybUNoZWNrID0gXCJjb25maXJtQ2hlY2tcIixcclxuICBjb25maXJtUmV0cnkgPSBcImNvbmZpcm1SZXRyeVwiLFxyXG4gIG92ZXJhbGxGZWVkYmFjayA9IFwib3ZlcmFsbEZlZWRiYWNrXCIsXHJcbiAgY3VycmlraVNldHRpbmdzID0gXCJjdXJyaWtpc2V0dGluZ3NcIlxyXG59XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgbG9jYWxpemF0aW9uIHNlcnZpY2VzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBINVBMb2NhbGl6YXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaDVwQ29uZmlndXJhdGlvbjogYW55KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIHN0cmluZyB0aGF0IGlzIHJlcHJlc2VudGVkIGJ5IHRoZSBpZGVudGlmaWVyLlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbG9jYWxpemFibGVTdHJpbmdJZGVudGlmaWVyXHJcbiAgICogQHJldHVybnMgc3RyaW5nXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRUZXh0KGxvY2FsaXphYmxlU3RyaW5nSWRlbnRpZmllcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ3VyYXRpb25bbG9jYWxpemFibGVTdHJpbmdJZGVudGlmaWVyXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGFiZWxUb1N0cmluZyhsYWJlbDogTG9jYWxpemF0aW9uTGFiZWxzKSB7XHJcbiAgICByZXR1cm4gbGFiZWwudG9TdHJpbmcoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIHN0cmluZyBmb3IgdGhlIGxhYmVsLlxyXG4gICAqIEBwYXJhbSAge0xvY2FsaXphdGlvbkxhYmVsc30gbGFiZWxcclxuICAgKiBAcmV0dXJucyBzdHJpbmdcclxuICAgKi9cclxuICBnZXRUZXh0RnJvbUxhYmVsKGxhYmVsOiBMb2NhbGl6YXRpb25MYWJlbHMpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VGV4dCh0aGlzLmxhYmVsVG9TdHJpbmcobGFiZWwpKTtcclxuICB9XHJcblxyXG4gIGdldE9iamVjdEZvclN0cnVjdHVyZShzdHJ1Y3R1cmU6IExvY2FsaXphdGlvblN0cnVjdHVyZXMpIDogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ3VyYXRpb25bc3RydWN0dXJlLnRvU3RyaW5nKCldO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCbGFuayB9IGZyb20gJy4uL21vZGVscy9ibGFuayc7XHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2VudW1zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzcGVlY2hCdWJibGU6IGFueTtcclxuICBwcml2YXRlIGFzc29jaWF0ZWRCbGFuazogQmxhbms7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgalF1ZXJ5OiBKUXVlcnlTdGF0aWMpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvdyhlbGVtZW50SWQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBibGFuazogQmxhbmssIHR5cGU/OiBNZXNzYWdlVHlwZSkge1xyXG4gICAgaWYgKCF0eXBlKVxyXG4gICAgICB0eXBlID0gTWVzc2FnZVR5cGUuTm9uZTtcclxuXHJcbiAgICB2YXIgZWxlbWVudHMgPSB0aGlzLmpRdWVyeShcIiNcIiArIGVsZW1lbnRJZCk7XHJcblxyXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zcGVlY2hCdWJibGUgPSBuZXcgSDVQLkpvdWJlbFNwZWVjaEJ1YmJsZShlbGVtZW50cywgbWVzc2FnZSk7XHJcbiAgICAgIHRoaXMuYXNzb2NpYXRlZEJsYW5rID0gYmxhbms7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZSgpIHtcclxuICAgIGlmICh0aGlzLnNwZWVjaEJ1YmJsZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuc3BlZWNoQnViYmxlLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zcGVlY2hCdWJibGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmFzc29jaWF0ZWRCbGFuayA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0FjdGl2ZShibGFuazogQmxhbmspIHtcclxuICAgIHJldHVybiB0aGlzLmFzc29jaWF0ZWRCbGFuayA9PT0gYmxhbms7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2VudW1zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTZXR0aW5ncyB7XHJcbiAgY2xvemVUeXBlOiBDbG96ZVR5cGU7XHJcbiAgc2VsZWN0QWx0ZXJuYXRpdmVzOiBTZWxlY3RBbHRlcm5hdGl2ZXM7XHJcbiAgc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjogbnVtYmVyO1xyXG4gIGVuYWJsZVJldHJ5OiBib29sZWFuO1xyXG4gIGVuYWJsZVNvbHV0aW9uc0J1dHRvbjogYm9vbGVhbjtcclxuICBlbmFibGVDaGVja0J1dHRvbjogYm9vbGVhbjtcclxuICBkaXNhYmxlU3VibWl0QnV0dG9uOiBib29sZWFuO1xyXG4gIGF1dG9DaGVjazogYm9vbGVhbjtcclxuICBjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xyXG4gIHdhcm5TcGVsbGluZ0Vycm9yczogYm9vbGVhbjtcclxuICBhY2NlcHRTcGVsbGluZ0Vycm9yczogYm9vbGVhbjtcclxuICBzaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dDogYm9vbGVhbjtcclxuICBjb25maXJtQ2hlY2tEaWFsb2c6IGJvb2xlYW47XHJcbiAgY29uZmlybVJldHJ5RGlhbG9nOiBib29sZWFuO1xyXG4gIGRpc2FibGVJbWFnZVpvb21pbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBINVBTZXR0aW5ncyBpbXBsZW1lbnRzIElTZXR0aW5ncyB7XHJcbiAgcHVibGljIGNsb3plVHlwZTogQ2xvemVUeXBlID0gQ2xvemVUeXBlLlR5cGU7XHJcbiAgcHVibGljIHNlbGVjdEFsdGVybmF0aXZlczogU2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsdGVybmF0aXZlcztcclxuICBwdWJsaWMgc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjogbnVtYmVyID0gNTtcclxuICBwdWJsaWMgZW5hYmxlUmV0cnk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBlbmFibGVTb2x1dGlvbnNCdXR0b246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBlbmFibGVDaGVja0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGRpc2FibGVTdWJtaXRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgYXV0b0NoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgd2FyblNwZWxsaW5nRXJyb3JzOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgYWNjZXB0U3BlbGxpbmdFcnJvcnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBjb25maXJtQ2hlY2tEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgY29uZmlybVJldHJ5RGlhbG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGRpc2FibGVJbWFnZVpvb21pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaDVwQ29uZmlnRGF0YTogYW55KSB7XHJcbiAgICBpZiAoaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIubW9kZSA9PT0gJ3NlbGVjdGlvbicpIHtcclxuICAgICAgdGhpcy5jbG96ZVR5cGUgPSBDbG96ZVR5cGUuU2VsZWN0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvemVUeXBlID0gQ2xvemVUeXBlLlR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gJ2FsbCcpIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWxsO1xyXG4gICAgfSBlbHNlIGlmIChoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zZWxlY3RBbHRlcm5hdGl2ZXMgPT09ICdhbHRlcm5hdGl2ZXMnKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsdGVybmF0aXZlcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlcyA9IFNlbGVjdEFsdGVybmF0aXZlcy5BbGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjtcclxuICAgIHRoaXMuZW5hYmxlUmV0cnkgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5lbmFibGVSZXRyeTtcclxuICAgIHRoaXMuZW5hYmxlU29sdXRpb25zQnV0dG9uID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuZW5hYmxlU29sdXRpb25zQnV0dG9uO1xyXG4gICAgdGhpcy5lbmFibGVDaGVja0J1dHRvbiA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmVuYWJsZUNoZWNrQnV0dG9uO1xyXG4gICAgdGhpcy5hdXRvQ2hlY2sgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5hdXRvQ2hlY2s7XHJcbiAgICB0aGlzLmNhc2VTZW5zaXRpdmUgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5jYXNlU2Vuc2l0aXZlO1xyXG4gICAgdGhpcy53YXJuU3BlbGxpbmdFcnJvcnMgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zcGVsbGluZ0Vycm9yQmVoYXZpb3VyID09PSBcIndhcm5cIjtcclxuICAgIHRoaXMuYWNjZXB0U3BlbGxpbmdFcnJvcnMgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zcGVsbGluZ0Vycm9yQmVoYXZpb3VyID09PSBcImFjY2VwdFwiO1xyXG4gICAgdGhpcy5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dCA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0O1xyXG4gICAgdGhpcy5jb25maXJtQ2hlY2tEaWFsb2cgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5jb25maXJtQ2hlY2tEaWFsb2c7XHJcbiAgICB0aGlzLmNvbmZpcm1SZXRyeURpYWxvZyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmNvbmZpcm1SZXRyeURpYWxvZztcclxuICAgIHRoaXMuZGlzYWJsZUltYWdlWm9vbWluZyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmRpc2FibGVJbWFnZVpvb21pbmc7XHJcblxyXG4gICAgaWYoaDVwQ29uZmlnRGF0YS5jdXJyaWtpc2V0dGluZ3MpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVTdWJtaXRCdXR0b24gPSBoNXBDb25maWdEYXRhLmN1cnJpa2lzZXR0aW5ncy5kaXNhYmxlU3VibWl0QnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW5mb3JjZUxvZ2ljKCk7XHJcbiAgfVxyXG5cclxuICBcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzZXRzIHNlbnNpYmxlIGRlZmF1bHQgdmFsdWVzIGZvciBzZXR0aW5ncyBoaWRkZW4gd2l0aCBzaG93V2hlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgZW5mb3JjZUxvZ2ljKCkge1xyXG4gICAgaWYgKHRoaXMuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuVHlwZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlcyA9IFNlbGVjdEFsdGVybmF0aXZlcy5BbGw7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbiA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID09PSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLndhcm5TcGVsbGluZ0Vycm9ycyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmFjY2VwdFNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNwYW4gaWQ9XFxcImNvbnRhaW5lcnt7aWR9fVxcXCIgY2xhc3M9XFxcImJsYW5rIHt7I2JsYW5rLmhhc1BlbmRpbmdGZWVkYmFja319aGFzLXBlbmRpbmctZmVlZGJhY2t7ey9pZn19IHt7I2JsYW5rLmhhc0hpbnR9fWhhcy10aXB7ey9pZn19IHt7I2JsYW5rLmlzQ29ycmVjdH19Y29ycmVjdHt7L2lmfX0ge3sjYmxhbmsuaXNFcnJvcn19ZXJyb3J7ey9pZn19IHt7I2JsYW5rLmlzUmV0cnl9fXJldHJ5e3svaWZ9fSB7eyNibGFuay5pc1Nob3dpbmdTb2x1dGlvbn19c2hvd2luZy1zb2x1dGlvbnt7L2lmfX1cXFwiPlxcclxcbiAge3sjdW5sZXNzIGlzU2VsZWN0Q2xvemV9fVxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLWlucHV0LXdyYXBwZXJcXFwiPlxcclxcbiAgICAgIDxpbnB1dCBpZD1cXFwie3tibGFuay5pZH19XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tibGFuay5lbnRlcmVkVGV4dH19XFxcIiBcXHJcXG4gICAgICAgICAgICAgc2l6ZT1cXFwie3tibGFuay5taW5UZXh0TGVuZ3RofX1cXFwiIG9uLWVzY2FwZT1cXFwiQHRoaXMuZmlyZSgnY2xvc2VNZXNzYWdlJywgYmxhbmspXFxcIiBcXHJcXG4gICAgICAgICAgICAgb24tZW50ZXI9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCBibGFuaywgJ2VudGVyJylcXFwiIFxcclxcbiAgICAgICAgICAgICBvbi1ibHVyPVxcXCJAdGhpcy5maXJlKCdjaGVja0JsYW5rJywgYmxhbmssICdibHVyJylcXFwiIFxcclxcbiAgICAgICAgICAgICBvbi1mb2N1cz1cXFwiQHRoaXMuZmlyZSgnZm9jdXMnLCBibGFuaylcXFwiXFxyXFxuICAgICAgICAgICAgIG9uLWFueWtleT1cXFwiQHRoaXMuZmlyZSgndGV4dFR5cGVkJywgYmxhbmspXFxcIlxcclxcbiAgICAgICAgICAgICB7eyMoYmxhbmsuaXNDb3JyZWN0IHx8IGJsYW5rLmlzU2hvd2luZ1NvbHV0aW9uKX19ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcInt7L2lmfX1cXHJcXG4gICAgICAgICAgICAgY2xhc3M9XFxcImg1cC10ZXh0LWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCJcXHJcXG4gICAgICAgICAgICAgYXV0b2NhcGl0YWxpemU9XFxcIm9mZlxcXCIvPlxcclxcbiAgICAgIHt7I2JsYW5rLmhhc0hpbnR9fVxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImg1cC10aXAtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiBvbi1jbGljaz1cXFwiQHRoaXMuZmlyZSgnc2hvd0hpbnQnLCBibGFuaylcXFwiIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiIHt7L2lmfX0+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImpvdWJlbC10aXAtY29udGFpbmVyXFxcIiB0aXRsZT1cXFwiVGlwXFxcIiBhcmlhLWxhYmVsPVxcXCJUaXBcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjxzcGFuIGNsYXNzPVxcXCJqb3ViZWwtaWNvbi10aXAtbm9ybWFsIFxcXCI+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNoYWRvd1xcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1zcGVlY2gtYnViYmxlXFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLWluZm9cXFwiPjwvc3Bhbj48L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIHt7L2lmfX1cXHJcXG4gICAgPC9zcGFuPiAgICBcXHJcXG4gIHt7L3VubGVzc319XFxyXFxuICB7eyNpZiBpc1NlbGVjdENsb3plfX1cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoNXAtbm90aWZpY2F0aW9uXFxcIiBvbi1jbGljaz1cXFwiQHRoaXMuZmlyZSgnZGlzcGxheUZlZWRiYWNrJywgYmxhbmspXFxcIj5cXHJcXG4gICAgICAgICYjeGYwNWE7XFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImg1cC1pbnB1dC13cmFwcGVyXFxcIj4gICAgICBcXHJcXG4gICAgICA8c2VsZWN0IGlkPVxcXCJ7e2JsYW5rLmlkfX1cXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2JsYW5rLmVudGVyZWRUZXh0fX1cXFwiXFxyXFxuICAgICAgICAgICAgICBvbi1lbnRlcj1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnZW50ZXInKVxcXCIgXFxyXFxuICAgICAgICAgICAgICBvbi1jaGFuZ2U9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCBibGFuaywgJ2NoYW5nZScpXFxcIlxcclxcbiAgICAgICAgICAgICAgb24tZm9jdXM9XFxcIkB0aGlzLmZpcmUoJ2ZvY3VzJywgYmxhbmspXFxcIiAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICB7eyMoYmxhbmsuaXNDb3JyZWN0IHx8IGJsYW5rLmlzU2hvd2luZ1NvbHV0aW9uKX19ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcInt7L2lmfX0gXFxyXFxuICAgICAgICAgICAgICBzaXplPVxcXCIxXFxcIlxcclxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcImg1cC10ZXh0LWlucHV0XFxcIj5cXHJcXG4gICAgICAgIHt7I2VhY2ggYmxhbmsuY2hvaWNlc319XFxyXFxuICAgICAgICAgIDxvcHRpb24+e3t0aGlzfX08L29wdGlvbj5cXHJcXG4gICAgICAgIHt7L2VhY2h9fVxcclxcbiAgICAgIDwvc2VsZWN0PiAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgIHt7I2JsYW5rLmhhc0hpbnR9fVxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImg1cC10aXAtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiBvbi1jbGljaz1cXFwiQHRoaXMuZmlyZSgnc2hvd0hpbnQnLCBibGFuaylcXFwiIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fT5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiam91YmVsLXRpcC1jb250YWluZXJcXFwiIHRpdGxlPVxcXCJUaXBcXFwiIGFyaWEtbGFiZWw9XFxcIlRpcFxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PHNwYW4gY2xhc3M9XFxcImpvdWJlbC1pY29uLXRpcC1ub3JtYWwgXFxcIj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc2hhZG93XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNwZWVjaC1idWJibGVcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24taW5mb1xcXCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgIHt7L2lmfX0gICAgIFxcclxcbiAgICA8L3NwYW4+XFxyXFxuICB7ey9pZn19XFxyXFxuPC9zcGFuPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiB7eyNvYmplY3QuaXNIaWdobGlnaHRlZH19Y2xhc3M9XFxcImhpZ2hsaWdodGVkXFxcInt7L2lmfX0gaWQ9XFxcInt7b2JqZWN0LmlkfX1cXFwiPnt7e29iamVjdC50ZXh0fX19PC9zcGFuPlwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=