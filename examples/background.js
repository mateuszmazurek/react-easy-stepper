webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(186);


/***/ },

/***/ 3:
2,

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(3);
	
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(35);
	
	var _require = __webpack_require__(181),
	    Steps = _require.Steps,
	    Step = _require.Step;
	
	var container = document.getElementById('__react-content');
	
	var steps = [{
	  title: '已完成',
	  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶'
	}, {
	  title: '进行中',
	  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶'
	}, {
	  title: '待运行',
	  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶'
	}, {
	  title: '待运行',
	  description: '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶'
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
	  { current: 1, style: { background: '#CCE4F6' } },
	  steps
	), container);

/***/ }

});
//# sourceMappingURL=background.js.map