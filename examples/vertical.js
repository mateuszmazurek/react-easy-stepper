webpackJsonp([10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(189);


/***/ },

/***/ 189:
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
	  title: '已完成',
	  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊'
	}, {
	  status: 'process',
	  title: '进行中',
	  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊'
	}, {
	  status: 'wait',
	  title: '待运行',
	  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊'
	}].map(function (s, i) {
	  return React.createElement(Step, {
	    key: i,
	    status: s.status,
	    title: s.title,
	    description: s.description
	  });
	});
	
	ReactDOM.render(React.createElement(
	  Steps,
	  { direction: 'vertical' },
	  steps
	), container);

/***/ }

});
//# sourceMappingURL=vertical.js.map