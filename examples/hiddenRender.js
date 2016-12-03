webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(184);


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* eslint-disable react/no-multi-comp */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/iconfont.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(33);
	
	var _require = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    Steps = _require.Steps,
	    Step = _require.Step;
	
	var container = document.getElementById('__react-content');
	var data = [{
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
	}];
	
	var App = React.createClass({
	  displayName: 'App',
	  getInitialState: function getInitialState() {
	    return {
	      hidden: true
	    };
	  },
	  toggle: function toggle(e) {
	    this.setState({
	      hidden: !e.target.checked
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'label',
	        null,
	        React.createElement('input', { type: 'checkbox', onChange: this.toggle }),
	        ' \u663E\u793A\u6B65\u9AA4\u6761'
	      ),
	      React.createElement('br', null),
	      React.createElement(
	        'div',
	        { className: this.state.hidden ? 'hidden' : '' },
	        React.createElement(StepDemo, null)
	      )
	    );
	  }
	});
	
	var StepDemo = React.createClass({
	  displayName: 'StepDemo',
	  render: function render() {
	    var steps = data.map(function (s, i) {
	      return React.createElement(Step, {
	        key: i,
	        status: s.status,
	        title: s.title,
	        description: s.description
	      });
	    });
	    return React.createElement(
	      Steps,
	      null,
	      steps
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(App, null), container);

/***/ }

});
//# sourceMappingURL=hiddenRender.js.map