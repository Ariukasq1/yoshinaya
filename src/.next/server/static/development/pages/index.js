module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layouts/Layout.js":
/*!**************************************!*\
  !*** ./components/layouts/Layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./components/layouts/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./components/layouts/footer.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./components/layouts/menu.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nclass Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const {\n      children,\n      title,\n      image\n    } = this.props;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: title,\n      image: image\n    }), __jsx(\"main\", {\n      className: \"relative\"\n    }, __jsx(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), children), __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0LmpzP2I3N2QiXSwibmFtZXMiOlsiTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInRpdGxlIiwiaW1hZ2UiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLDRDQUFLLENBQUNDLFNBQTNCLENBQXFDO0FBQ25DQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDLGNBQUY7QUFBWUMsV0FBWjtBQUFtQkM7QUFBbkIsUUFBNkIsS0FBS0MsS0FBeEM7QUFFQSxXQUNFLG1FQUNFLE1BQUMsK0NBQUQ7QUFBUSxXQUFLLEVBQUVGLEtBQWY7QUFBc0IsV0FBSyxFQUFFQztBQUE3QixNQURGLEVBRUU7QUFBTSxlQUFTLEVBQUM7QUFBaEIsT0FDRSxNQUFDLDZDQUFELE9BREYsRUFFR0YsUUFGSCxDQUZGLEVBTUUsTUFBQywrQ0FBRCxPQU5GLENBREY7QUFVRDs7QUFka0M7O0FBaUJ0QkoscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51XCI7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSwgaW1hZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWRlciB0aXRsZT17dGl0bGV9IGltYWdlPXtpbWFnZX0gLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/Layout.js\n");

/***/ }),

/***/ "./components/layouts/footer.js":
/*!**************************************!*\
  !*** ./components/layouts/footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Footer() {\n  return __jsx(\"footer\", {\n    className: \"pt-30 pb-30\"\n  }, \"\\xA9 2020 All right reserved\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvZm9vdGVyLmpzP2JkNjkiXSwibmFtZXMiOlsiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQixTQUNFO0FBQVEsYUFBUyxFQUFDO0FBQWxCLG9DQURGO0FBS0Q7O0FBRWNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXRzL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicHQtMzAgcGItMzBcIj5cbiAgICAgIMKpIDIwMjAgQWxsIHJpZ2h0IHJlc2VydmVkXG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/footer.js\n");

/***/ }),

/***/ "./components/layouts/header.js":
/*!**************************************!*\
  !*** ./components/layouts/header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Header({\n  title,\n  image\n}) {\n  let defaultUrl = '';\n\n  if (false) {}\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(\"title\", null, title || 'Gerege WP Template'), __jsx(\"meta\", {\n    charSet: \"UTF-8\"\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"wp, gerege\"\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Here is website description\"\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: \"Here is website author url\"\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\"\n  }), __jsx(\"meta\", {\n    httpEquiv: \"X-UA-Compatible\",\n    content: \"IE=edge\"\n  }), __jsx(\"meta\", {\n    httpEquiv: \"Cache-Control\",\n    content: \"no-cache, no-store, must-revalidate\"\n  }), __jsx(\"meta\", {\n    httpEquiv: \"Pragma\",\n    content: \"no-cache\"\n  }), __jsx(\"meta\", {\n    httpEquiv: \"Expires\",\n    content: \"0\"\n  }), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: title || \"Gerege WP Template\"\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"Here is website description\"\n  }), __jsx(\"meta\", {\n    property: \"og:url\",\n    content: defaultUrl\n  }), __jsx(\"meta\", {\n    property: \"og:type\",\n    content: \"website\"\n  }), __jsx(\"meta\", {\n    property: \"og:image\",\n    content: image || \"Here is website demo image\"\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: \"Gerege WP Template\"\n  }), __jsx(\"meta\", {\n    name: \"twitter:card\",\n    content: \"summary\"\n  }), __jsx(\"meta\", {\n    name: \"twitter:title\",\n    content: title || \"Gerege WP Template\"\n  }), __jsx(\"meta\", {\n    name: \"twitter:url\",\n    content: defaultUrl\n  }), __jsx(\"meta\", {\n    name: \"twitter:description\",\n    content: \"Here is website description\"\n  }), __jsx(\"meta\", {\n    name: \"twitter:image\",\n    content: image || \"Here is website demo image\"\n  }), __jsx(\"meta\", {\n    name: \"twitter:site\",\n    content: \"@your-site-twitter-name\"\n  }), __jsx(\"meta\", {\n    name: \"twitter:creator\",\n    content: \"@your-site-twitter-name\"\n  }), __jsx(\"meta\", {\n    name: \"twitter:image:alt\",\n    content: \"Gerege WP Template\"\n  }), __jsx(\"link\", {\n    rel: \"shortcut icon\",\n    id: \"favicon\",\n    href: \"/favicon.ico\"\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyLmpzP2Q0YzkiXSwibmFtZXMiOlsiSGVhZGVyIiwidGl0bGUiLCJpbWFnZSIsImRlZmF1bHRVcmwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBaEIsRUFBa0M7QUFDaEMsTUFBSUMsVUFBVSxHQUFHLEVBQWpCOztBQUVBLGFBQXFCLEVBRXBCOztBQUVELFNBQ0UsbUVBQ0UsTUFBQyxnREFBRCxRQUNFLHFCQUFRRixLQUFLLElBQUksb0JBQWpCLENBREYsRUFFRTtBQUFNLFdBQU8sRUFBQztBQUFkLElBRkYsRUFHRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQztBQUE5QixJQUhGLEVBSUU7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUM7QUFBakMsSUFKRixFQUtFO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBb0IsV0FBTyxFQUFDO0FBQTVCLElBTEYsRUFNRTtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQztBQUE5QixJQU5GLEVBT0U7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFdBQU8sRUFBQztBQUExQyxJQVBGLEVBUUU7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBZ0MsV0FBTyxFQUFDO0FBQXhDLElBUkYsRUFTRTtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixXQUFPLEVBQUM7QUFBakMsSUFURixFQVVFO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBQztBQUFsQyxJQVZGLEVBWUU7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVBLEtBQUssSUFBSTtBQUE1QyxJQVpGLEVBYUU7QUFBTSxZQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsV0FBTyxFQUFDO0FBQXhDLElBYkYsRUFjRTtBQUFNLFlBQVEsRUFBQyxRQUFmO0FBQXdCLFdBQU8sRUFBRUU7QUFBakMsSUFkRixFQWVFO0FBQU0sWUFBUSxFQUFDLFNBQWY7QUFBeUIsV0FBTyxFQUFDO0FBQWpDLElBZkYsRUFnQkU7QUFBTSxZQUFRLEVBQUMsVUFBZjtBQUEwQixXQUFPLEVBQUVELEtBQUssSUFBSTtBQUE1QyxJQWhCRixFQWlCRTtBQUFNLFlBQVEsRUFBQyxjQUFmO0FBQThCLFdBQU8sRUFBQztBQUF0QyxJQWpCRixFQW1CRTtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLFdBQU8sRUFBQztBQUFsQyxJQW5CRixFQW9CRTtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLFdBQU8sRUFBRUQsS0FBSyxJQUFJO0FBQTdDLElBcEJGLEVBcUJFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFRTtBQUFsQyxJQXJCRixFQXNCRTtBQUFNLFFBQUksRUFBQyxxQkFBWDtBQUFpQyxXQUFPLEVBQUM7QUFBekMsSUF0QkYsRUF1QkU7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUEyQixXQUFPLEVBQUVELEtBQUssSUFBSTtBQUE3QyxJQXZCRixFQXdCRTtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQTBCLFdBQU8sRUFBQztBQUFsQyxJQXhCRixFQXlCRTtBQUFNLFFBQUksRUFBQyxpQkFBWDtBQUE2QixXQUFPLEVBQUM7QUFBckMsSUF6QkYsRUEwQkU7QUFBTSxRQUFJLEVBQUMsbUJBQVg7QUFBK0IsV0FBTyxFQUFDO0FBQXZDLElBMUJGLEVBNEJFO0FBQU0sT0FBRyxFQUFDLGVBQVY7QUFBMEIsTUFBRSxFQUFDLFNBQTdCO0FBQXVDLFFBQUksRUFBQztBQUE1QyxJQTVCRixDQURGLENBREY7QUFrQ0Q7O0FBRWNGLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXRzL2hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlLCBpbWFnZSB9KSB7XG4gIGxldCBkZWZhdWx0VXJsID0gJyc7XG5cbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGRlZmF1bHRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlIHx8ICdHZXJlZ2UgV1AgVGVtcGxhdGUnfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJ3cCwgZ2VyZWdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhlcmUgaXMgd2Vic2l0ZSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiSGVyZSBpcyB3ZWJzaXRlIGF1dGhvciB1cmxcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiQ2FjaGUtQ29udHJvbFwiIGNvbnRlbnQ9XCJuby1jYWNoZSwgbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZVwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlByYWdtYVwiIGNvbnRlbnQ9XCJuby1jYWNoZVwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIkV4cGlyZXNcIiBjb250ZW50PVwiMFwiIC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlIHx8IFwiR2VyZWdlIFdQIFRlbXBsYXRlXCJ9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSGVyZSBpcyB3ZWJzaXRlIGRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtkZWZhdWx0VXJsfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZSB8fCBcIkhlcmUgaXMgd2Vic2l0ZSBkZW1vIGltYWdlXCJ9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkdlcmVnZSBXUCBUZW1wbGF0ZVwiIC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZSB8fCBcIkdlcmVnZSBXUCBUZW1wbGF0ZVwifSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXtkZWZhdWx0VXJsfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIZXJlIGlzIHdlYnNpdGUgZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlIHx8IFwiSGVyZSBpcyB3ZWJzaXRlIGRlbW8gaW1hZ2VcIn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJAeW91ci1zaXRlLXR3aXR0ZXItbmFtZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHlvdXItc2l0ZS10d2l0dGVyLW5hbWVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZTphbHRcIiBjb250ZW50PVwiR2VyZWdlIFdQIFRlbXBsYXRlXCIgLz5cblxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaWQ9XCJmYXZpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/header.js\n");

/***/ }),

/***/ "./components/layouts/menu.js":
/*!************************************!*\
  !*** ./components/layouts/menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./config.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass MenuComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      headerMenu: []\n    });\n  }\n\n  componentDidMount() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].apiUrl}/menus/v1/menus/header-menu`).then(res => this.setState({\n      headerMenu: res.data,\n      loading: true\n    })).catch(err => console.log(err));\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      className: \"main-header\"\n    }, \"Here will be menu\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvbWVudS5qcz9mNTNlIl0sIm5hbWVzIjpbIk1lbnVDb21wb25lbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImhlYWRlck1lbnUiLCJjb21wb25lbnREaWRNb3VudCIsImF4aW9zIiwiZ2V0IiwiQ29uZmlnIiwiYXBpVXJsIiwidGhlbiIsInJlcyIsInNldFN0YXRlIiwiZGF0YSIsImxvYWRpbmciLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBTixTQUE0QkMsNENBQUssQ0FBQ0MsU0FBbEMsQ0FBNEM7QUFBQTtBQUFBOztBQUFBLG1DQUNsQztBQUFFQyxnQkFBVSxFQUFFO0FBQWQsS0FEa0M7QUFBQTs7QUFHMUNDLG1CQUFpQixHQUFHO0FBQ2xCQyxnREFBSyxDQUNGQyxHQURILENBQ1EsR0FBRUMsK0NBQU0sQ0FBQ0MsTUFBTyw2QkFEeEIsRUFFR0MsSUFGSCxDQUVRQyxHQUFHLElBQ1AsS0FBS0MsUUFBTCxDQUFjO0FBQ1pSLGdCQUFVLEVBQUVPLEdBQUcsQ0FBQ0UsSUFESjtBQUVaQyxhQUFPLEVBQUU7QUFGRyxLQUFkLENBSEosRUFRR0MsS0FSSCxDQVFTQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBUmhCO0FBU0Q7O0FBRURHLFFBQU0sR0FBRztBQUNQLFdBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZiwyQkFERjtBQUtEOztBQXJCeUM7O0FBd0I3QmxCLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXRzL21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5jbGFzcyBNZW51Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGhlYWRlck1lbnU6IFtdIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYCR7Q29uZmlnLmFwaVVybH0vbWVudXMvdjEvbWVudXMvaGVhZGVyLW1lbnVgKVxuICAgICAgLnRoZW4ocmVzID0+XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhlYWRlck1lbnU6IHJlcy5kYXRhLFxuICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxuICAgICAgICBIZXJlIHdpbGwgYmUgbWVudVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51Q29tcG9uZW50O1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/menu.js\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Config = {\n  apiUrl: 'http://tdb.nmma.co/wp/wp-json'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/YTFiYyJdLCJuYW1lcyI6WyJDb25maWciLCJhcGlVcmwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQURLLENBQWY7QUFJZUQscUVBQWYiLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb25maWcgPSB7XG4gIGFwaVVybDogJ2h0dHA6Ly90ZGIubm1tYS5jby93cC93cC1qc29uJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wpapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wpapi */ \"wpapi\");\n/* harmony import */ var wpapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wpapi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/Layout */ \"./components/layouts/Layout.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n // const wp = new WPAPI({ endpoint: Config.apiUrl });\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  // static async getInitialProps() {\n  //   let apiMethod = wp.categories();\n  //   const mainTabCategory = await apiMethod\n  //     .parent(21)\n  //     .embed();\n  //   return { mainTabCategory };\n  // }\n  render() {\n    return __jsx(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, __jsx(\"div\", {\n      className: \"relative\"\n    }, __jsx(\"h2\", null, \"Gerege wordpress\"), \"Hello template\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBRUEsTUFBTUEsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFDbEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsUUFBTSxHQUFHO0FBQ1AsV0FDRSxNQUFDLGtFQUFELFFBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFLHFDQURGLG1CQURGLENBREY7QUFRRDs7QUFwQmlDOztBQXVCckJILG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV1BBUEkgZnJvbSAnd3BhcGknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXRcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG4vLyBjb25zdCB3cCA9IG5ldyBXUEFQSSh7IGVuZHBvaW50OiBDb25maWcuYXBpVXJsIH0pO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gIC8vICAgbGV0IGFwaU1ldGhvZCA9IHdwLmNhdGVnb3JpZXMoKTtcblxuICAvLyAgIGNvbnN0IG1haW5UYWJDYXRlZ29yeSA9IGF3YWl0IGFwaU1ldGhvZFxuICAvLyAgICAgLnBhcmVudCgyMSlcbiAgLy8gICAgIC5lbWJlZCgpO1xuXG4gIC8vICAgcmV0dXJuIHsgbWFpblRhYkNhdGVnb3J5IH07XG4gIC8vIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8aDI+R2VyZWdlIHdvcmRwcmVzczwvaDI+XG4gICAgICAgICAgSGVsbG8gdGVtcGxhdGVcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dCA+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/anu-ujin/Works/non-erxes-projects/gerege-wordpress/src/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "wpapi":
/*!************************!*\
  !*** external "wpapi" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"wpapi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3cGFwaVwiP2JmMjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoid3BhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3cGFwaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///wpapi\n");

/***/ })

/******/ });