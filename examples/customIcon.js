webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(181);


/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/iconfont.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcSteps = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Icon = function Icon(_ref) {
	  var type = _ref.type;
	  return _react2.default.createElement('i', { className: 'rcicon rcicon-' + type });
	};
	
	_reactDom2.default.render(_react2.default.createElement(
	  _rcSteps.Steps,
	  { current: 1 },
	  _react2.default.createElement(_rcSteps.Step, { title: '\u6B65\u9AA41', icon: _react2.default.createElement(Icon, { type: 'cloud' }) }),
	  _react2.default.createElement(_rcSteps.Step, { title: '\u6B65\u9AA42', icon: 'apple' }),
	  _react2.default.createElement(_rcSteps.Step, { title: '\u6B65\u9AA43', icon: 'github' })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=customIcon.js.map