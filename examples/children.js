webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(180);


/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/font-awesome.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(33);
	
	var _require = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
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

/***/ }

});
//# sourceMappingURL=children.js.map