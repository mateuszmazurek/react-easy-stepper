webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(187);


/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(188);
	
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(35);
	
	var _require = __webpack_require__(181),
	    Steps = _require.Steps,
	    Step = _require.Step;
	
	var container = document.getElementById('__react-content');
	
	ReactDOM.render(React.createElement(
	  Steps,
	  {
	    direction: 'vertical',
	    current: 2,
	    iconPrefix: 'fa',
	    iconFinish: 'check',
	    hideNonProcessDescription: true
	  },
	  React.createElement(Step, { title: 'Test 1' }),
	  React.createElement(
	    Step,
	    { title: 'Second' },
	    React.createElement(
	      'h1',
	      null,
	      'Test'
	    ),
	    ' 2'
	  ),
	  React.createElement(Step, { title: 'Third', description: 'Test 3' })
	), container);

/***/ },

/***/ 188:
2

});
//# sourceMappingURL=children.js.map