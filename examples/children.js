require('rc-steps/assets/index.less');
require('rc-steps/assets/iconfont.less');

const React = require('react');
const ReactDOM = require('react-dom');
const { Steps, Step } = require('rc-steps');

const container = document.getElementById('__react-content');

ReactDOM.render(
  <Steps direction="vertical" current={2} hideNonProcessDescription>
    <Step title="Test 1" />
    <Step title="Second">
      <h1>Test</h1> 2
    </Step>
    <Step title="Third" description="Test 3" />
  </Steps>
, container);
