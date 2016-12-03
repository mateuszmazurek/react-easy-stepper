webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(185);


/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/index.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps/assets/iconfont.less\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(186);
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(33);
	
	var _require = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rc-steps\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    Steps = _require.Steps,
	    Step = _require.Step;
	
	var container = document.getElementById('__react-content');
	
	function generateRandomSteps() {
	  var n = Math.floor(Math.random() * 3) + 3;
	  var arr = [];
	  for (var i = 0; i < n; i++) {
	    arr.push({
	      title: '\u6B65\u9AA4' + (i + 1)
	    });
	  }
	  return arr;
	}
	var steps = generateRandomSteps();
	
	var MyForm = React.createClass({
	  displayName: 'MyForm',
	  getInitialState: function getInitialState() {
	    return {
	      currentStep: Math.floor(Math.random() * steps.length)
	    };
	  },
	  nextStep: function nextStep() {
	    var s = this.state.currentStep + 1;
	    if (s === steps.length) {
	      s = 0;
	    }
	    this.setState({
	      currentStep: s
	    });
	  },
	  render: function render() {
	    var cs = this.state.currentStep;
	    return React.createElement(
	      'form',
	      { className: 'my-step-form' },
	      React.createElement(
	        'div',
	        null,
	        '\u8FD9\u4E2Ademo\u968F\u673A\u751F\u62103~6\u4E2A\u6B65\u9AA4\uFF0C\u521D\u59CB\u968F\u673A\u8FDB\u884C\u5230\u5176\u4E2D\u4E00\u4E2A\u6B65\u9AA4'
	      ),
	      React.createElement(
	        'div',
	        null,
	        '\u5F53\u524D\u6B63\u5728\u6267\u884C\u7B2C',
	        cs + 1,
	        '\u6B65'
	      ),
	      React.createElement(
	        'div',
	        { className: 'my-step-container' },
	        React.createElement(
	          Steps,
	          { current: cs },
	          steps.map(function (s, i) {
	            return React.createElement(Step, {
	              key: i,
	              title: s.title
	            });
	          })
	        )
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'button',
	          { type: 'button', onClick: this.nextStep },
	          '\u4E0B\u4E00\u6B65'
	        )
	      )
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(MyForm, null), container);

/***/ },

/***/ 186:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=nextStep.js.map