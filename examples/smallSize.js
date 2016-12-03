webpackJsonp([9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(188);


/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/iconfont.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(33);
	
	var _require = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    Steps = _require.Steps,
	    Step = _require.Step;
	
	var container = document.getElementById('__react-content');
	
	var steps = [{
	  status: 'finish',
	  title: '已完成'
	}, {
	  status: 'process',
	  title: '进行中'
	}, {
	  status: 'wait',
	  title: '待运行'
	}, {
	  status: 'wait',
	  title: '待运行'
	}].map(function (s, i) {
	  return React.createElement(Step, {
	    key: i,
	    status: s.status,
	    title: s.title
	  });
	});
	
	ReactDOM.render(React.createElement(
	  Steps,
	  { size: 'small' },
	  steps
	), container);

/***/ }

});
//# sourceMappingURL=smallSize.js.map