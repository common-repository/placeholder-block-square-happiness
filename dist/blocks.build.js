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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__placeholder_index_js__ = __webpack_require__(/*! ./placeholder/index.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9wbGFjZWhvbGRlci9pbmRleC5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************!*\
  !*** ./src/placeholder/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon__ = __webpack_require__(/*! ./icon */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inspector__ = __webpack_require__(/*! ./inspector */ 5);\n//  Import CSS.\n\n\n\n\n\n\nvar withSelect = wp.data.withSelect;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\nregisterBlockType('shp/placeholder', {\n  title: __('SH Placeholder'),\n  icon: __WEBPACK_IMPORTED_MODULE_2__icon__[\"a\" /* default */],\n  category: 'layout',\n  keywords: [__('Placeholder'), __('Custom content'), __('Square happiness placeholder')],\n  attributes: {\n    selectedPlaceholder: {\n      type: 'number'\n    },\n    selectedPlaceholderTitle: {\n      type: 'string'\n    }\n  },\n\n  edit: withSelect(function (select) {\n    return { placeholders: select('core').getEntityRecords('postType', 'placeholder') };\n  })(function (props) {\n    if (props.placeholders && props.placeholders.length === 0) {\n      return \"No placeholders set yet. Please add one.\";\n    }\n    return [wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__inspector__[\"a\" /* default */], Object.assign({}, props)), wp.element.createElement(\n      'p',\n      null,\n      __WEBPACK_IMPORTED_MODULE_2__icon__[\"a\" /* default */],\n      ' SQHP Placeholder Block'\n    ), wp.element.createElement(\n      'p',\n      null,\n      'Selected: ',\n      wp.element.createElement(\n        'b',\n        null,\n        props.attributes.selectedPlaceholderTitle\n      )\n    )];\n  }),\n\n  save: function save() {\n    // Rendering in PHP\n    return null;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wbGFjZWhvbGRlci9pbmRleC5qcz8zYzM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uJztcbmltcG9ydCBTSEluc3BlY3RvciBmcm9tICcuL2luc3BlY3Rvcic7XG5cbnZhciB3aXRoU2VsZWN0ID0gd3AuZGF0YS53aXRoU2VsZWN0O1xudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnc2hwL3BsYWNlaG9sZGVyJywge1xuICB0aXRsZTogX18oJ1NIIFBsYWNlaG9sZGVyJyksXG4gIGljb246IGljb24sXG4gIGNhdGVnb3J5OiAnbGF5b3V0JyxcbiAga2V5d29yZHM6IFtfXygnUGxhY2Vob2xkZXInKSwgX18oJ0N1c3RvbSBjb250ZW50JyksIF9fKCdTcXVhcmUgaGFwcGluZXNzIHBsYWNlaG9sZGVyJyldLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgc2VsZWN0ZWRQbGFjZWhvbGRlcjoge1xuICAgICAgdHlwZTogJ251bWJlcidcbiAgICB9LFxuICAgIHNlbGVjdGVkUGxhY2Vob2xkZXJUaXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9XG4gIH0sXG5cbiAgZWRpdDogd2l0aFNlbGVjdChmdW5jdGlvbiAoc2VsZWN0KSB7XG4gICAgcmV0dXJuIHsgcGxhY2Vob2xkZXJzOiBzZWxlY3QoJ2NvcmUnKS5nZXRFbnRpdHlSZWNvcmRzKCdwb3N0VHlwZScsICdwbGFjZWhvbGRlcicpIH07XG4gIH0pKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcy5wbGFjZWhvbGRlcnMgJiYgcHJvcHMucGxhY2Vob2xkZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiTm8gcGxhY2Vob2xkZXJzIHNldCB5ZXQuIFBsZWFzZSBhZGQgb25lLlwiO1xuICAgIH1cbiAgICByZXR1cm4gW3dwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTSEluc3BlY3RvciwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAgbnVsbCxcbiAgICAgIGljb24sXG4gICAgICAnIFNRSFAgUGxhY2Vob2xkZXIgQmxvY2snXG4gICAgKSwgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3AnLFxuICAgICAgbnVsbCxcbiAgICAgICdTZWxlY3RlZDogJyxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2InLFxuICAgICAgICBudWxsLFxuICAgICAgICBwcm9wcy5hdHRyaWJ1dGVzLnNlbGVjdGVkUGxhY2Vob2xkZXJUaXRsZVxuICAgICAgKVxuICAgICldO1xuICB9KSxcblxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuICAgIC8vIFJlbmRlcmluZyBpbiBQSFBcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcGxhY2Vob2xkZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./src/placeholder/style.scss ***!
  \************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wbGFjZWhvbGRlci9zdHlsZS5zY3NzP2E2Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wbGFjZWhvbGRlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*************************************!*\
  !*** ./src/placeholder/editor.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wbGFjZWhvbGRlci9lZGl0b3Iuc2Nzcz8xYzJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcGxhY2Vob2xkZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*********************************!*\
  !*** ./src/placeholder/icon.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var icon = wp.element.createElement(\n    'svg',\n    { id: 'Capa_1', xmlns: 'http://www.w3.org/2000/svg', width: '20', height: '20',\n        viewBox: '0 0 20 20' },\n    wp.element.createElement('rect', { x: '2.5', y: '4.5', fill: '#FFF', stroke: '#000', strokeMiterlimit: '10',\n        width: '13', height: '13' }),\n    wp.element.createElement('rect', { x: '7.5', y: '2.5', fill: '#FFF', stroke: '#000', strokeMiterlimit: '10',\n        width: '10', height: '10' })\n);\n/* harmony default export */ __webpack_exports__[\"a\"] = (icon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wbGFjZWhvbGRlci9pY29uLmpzPzQ0YWIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGljb24gPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ3N2ZycsXG4gICAgeyBpZDogJ0NhcGFfMScsIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB3aWR0aDogJzIwJywgaGVpZ2h0OiAnMjAnLFxuICAgICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyB9LFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncmVjdCcsIHsgeDogJzIuNScsIHk6ICc0LjUnLCBmaWxsOiAnI0ZGRicsIHN0cm9rZTogJyMwMDAnLCBzdHJva2VNaXRlcmxpbWl0OiAnMTAnLFxuICAgICAgICB3aWR0aDogJzEzJywgaGVpZ2h0OiAnMTMnIH0pLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncmVjdCcsIHsgeDogJzcuNScsIHk6ICcyLjUnLCBmaWxsOiAnI0ZGRicsIHN0cm9rZTogJyMwMDAnLCBzdHJva2VNaXRlcmxpbWl0OiAnMTAnLFxuICAgICAgICB3aWR0aDogJzEwJywgaGVpZ2h0OiAnMTAnIH0pXG4pO1xuZXhwb3J0IGRlZmF1bHQgaWNvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wbGFjZWhvbGRlci9pY29uLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./src/placeholder/inspector.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//\nvar Component = wp.element.Component;\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar withSelect = wp.data.withSelect;\n\n// Import Inspector components\n\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    ColorPalette = _wp$editor.ColorPalette;\n\n// Import Inspector components\n\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\n\nvar SHInspector = function (_Component) {\n  _inherits(SHInspector, _Component);\n\n  function SHInspector(props) {\n    _classCallCheck(this, SHInspector);\n\n    return _possibleConstructorReturn(this, (SHInspector.__proto__ || Object.getPrototypeOf(SHInspector)).apply(this, arguments));\n  }\n\n  _createClass(SHInspector, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props,\n          _props$attributes = _props.attributes,\n          selectedPlaceholder = _props$attributes.selectedPlaceholder,\n          selectedPlaceholderTitle = _props$attributes.selectedPlaceholderTitle,\n          setAttributes = _props.setAttributes,\n          placeholders = _props.placeholders;\n\n      var loadedPlaceholders = [];\n      var labelObj = [];\n      var label = '';\n\n      if (null !== placeholders) {\n        loadedPlaceholders = placeholders.map(function (item) {\n          return { value: item.id, label: item.title.rendered };\n        });\n      }\n      loadedPlaceholders.unshift({ label: 'Select one, please.' });\n\n      var handlePlaceholderChange = function handlePlaceholderChange(value) {\n        labelObj = placeholders.filter(function (obj) {\n          return obj.id === parseInt(value);\n        });\n        label = labelObj[0].title.rendered;\n        setAttributes({ selectedPlaceholder: value });\n        setAttributes({ selectedPlaceholderTitle: label });\n      };\n\n      return wp.element.createElement(\n        InspectorControls,\n        { key: 'inspector' },\n        wp.element.createElement(\n          PanelBody,\n          { title: __('SQHP Placeholder') },\n          wp.element.createElement(SelectControl, {\n            label: __('Select a Placeholder'),\n            description: __('TODO.'),\n            options: loadedPlaceholders,\n            value: selectedPlaceholder,\n            onChange: handlePlaceholderChange\n          })\n        )\n      );\n    }\n  }]);\n\n  return SHInspector;\n}(Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SHInspector);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wbGFjZWhvbGRlci9pbnNwZWN0b3IuanM/MTcyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vXG52YXIgQ29tcG9uZW50ID0gd3AuZWxlbWVudC5Db21wb25lbnQ7XG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHdpdGhTZWxlY3QgPSB3cC5kYXRhLndpdGhTZWxlY3Q7XG5cbi8vIEltcG9ydCBJbnNwZWN0b3IgY29tcG9uZW50c1xuXG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgQ29sb3JQYWxldHRlID0gX3dwJGVkaXRvci5Db2xvclBhbGV0dGU7XG5cbi8vIEltcG9ydCBJbnNwZWN0b3IgY29tcG9uZW50c1xuXG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBTZWxlY3RDb250cm9sID0gX3dwJGNvbXBvbmVudHMuU2VsZWN0Q29udHJvbDtcblxudmFyIFNISW5zcGVjdG9yID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNISW5zcGVjdG9yLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTSEluc3BlY3Rvcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTSEluc3BlY3Rvcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNISW5zcGVjdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU0hJbnNwZWN0b3IpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTSEluc3BlY3RvciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBfcHJvcHMkYXR0cmlidXRlcyA9IF9wcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICAgIHNlbGVjdGVkUGxhY2Vob2xkZXIgPSBfcHJvcHMkYXR0cmlidXRlcy5zZWxlY3RlZFBsYWNlaG9sZGVyLFxuICAgICAgICAgIHNlbGVjdGVkUGxhY2Vob2xkZXJUaXRsZSA9IF9wcm9wcyRhdHRyaWJ1dGVzLnNlbGVjdGVkUGxhY2Vob2xkZXJUaXRsZSxcbiAgICAgICAgICBzZXRBdHRyaWJ1dGVzID0gX3Byb3BzLnNldEF0dHJpYnV0ZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXJzID0gX3Byb3BzLnBsYWNlaG9sZGVycztcblxuICAgICAgdmFyIGxvYWRlZFBsYWNlaG9sZGVycyA9IFtdO1xuICAgICAgdmFyIGxhYmVsT2JqID0gW107XG4gICAgICB2YXIgbGFiZWwgPSAnJztcblxuICAgICAgaWYgKG51bGwgIT09IHBsYWNlaG9sZGVycykge1xuICAgICAgICBsb2FkZWRQbGFjZWhvbGRlcnMgPSBwbGFjZWhvbGRlcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGl0ZW0uaWQsIGxhYmVsOiBpdGVtLnRpdGxlLnJlbmRlcmVkIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbG9hZGVkUGxhY2Vob2xkZXJzLnVuc2hpZnQoeyBsYWJlbDogJ1NlbGVjdCBvbmUsIHBsZWFzZS4nIH0pO1xuXG4gICAgICB2YXIgaGFuZGxlUGxhY2Vob2xkZXJDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVQbGFjZWhvbGRlckNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBsYWJlbE9iaiA9IHBsYWNlaG9sZGVycy5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmouaWQgPT09IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxhYmVsID0gbGFiZWxPYmpbMF0udGl0bGUucmVuZGVyZWQ7XG4gICAgICAgIHNldEF0dHJpYnV0ZXMoeyBzZWxlY3RlZFBsYWNlaG9sZGVyOiB2YWx1ZSB9KTtcbiAgICAgICAgc2V0QXR0cmlidXRlcyh7IHNlbGVjdGVkUGxhY2Vob2xkZXJUaXRsZTogbGFiZWwgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAgeyBrZXk6ICdpbnNwZWN0b3InIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBQYW5lbEJvZHksXG4gICAgICAgICAgeyB0aXRsZTogX18oJ1NRSFAgUGxhY2Vob2xkZXInKSB9LFxuICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG4gICAgICAgICAgICBsYWJlbDogX18oJ1NlbGVjdCBhIFBsYWNlaG9sZGVyJyksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogX18oJ1RPRE8uJyksXG4gICAgICAgICAgICBvcHRpb25zOiBsb2FkZWRQbGFjZWhvbGRlcnMsXG4gICAgICAgICAgICB2YWx1ZTogc2VsZWN0ZWRQbGFjZWhvbGRlcixcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVQbGFjZWhvbGRlckNoYW5nZVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNISW5zcGVjdG9yO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBTSEluc3BlY3RvcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wbGFjZWhvbGRlci9pbnNwZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);