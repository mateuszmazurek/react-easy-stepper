import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastStepOffsetWidth: 0,
    };
  }
  componentDidMount() {
    this.culcLastStepOffsetWidth();
  }
  componentDidUpdate() {
    this.culcLastStepOffsetWidth();
  }
  componentWillUnmount() {
    if (this.culcTimeout) {
      clearTimeout(this.culcTimeout);
    }
  }
  culcLastStepOffsetWidth = () => {
    const domNode = ReactDOM.findDOMNode(this);
    if (domNode.children.length > 0) {
      this.culcTimeout = setTimeout(() => {
        // +1 for fit edge bug of digit width, like 35.4px
        const lastStepOffsetWidth = domNode.lastChild.offsetWidth + 1;
        if (this.state.lastStepOffsetWidth === lastStepOffsetWidth) {
          return;
        }
        this.setState({ lastStepOffsetWidth });
      });
    }
  }
  render() {
    const props = this.props;
    const { prefixCls, style = {}, className, children, direction,
            labelPlacement, iconPrefix, iconFinish, iconError, status, size, current,
            hideNonProcessDescription, ...restProps } = props;
    const lastIndex = children.length - 1;
    const reLayouted = this.state.lastStepOffsetWidth > 0;
    const classString = classNames({
      [prefixCls]: true,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${direction}`]: true,
      [`${prefixCls}-label-${labelPlacement}`]: direction === 'horizontal',
      [`${prefixCls}-hidden`]: !reLayouted,
      [className]: className,
    });

    return (
      <div className={classString} style={style} {...restProps}>
        {
          React.Children.map(children, (ele, idx) => {
            const tailWidth = (direction === 'vertical' || idx === lastIndex || !reLayouted)
              ? null : `${100 / lastIndex}%`;
            const adjustMarginRight = (direction === 'vertical' || idx === lastIndex)
              ? null : -Math.round(this.state.lastStepOffsetWidth / lastIndex + 1);
            const np = {
              stepNumber: (idx + 1).toString(),
              stepLast: idx === lastIndex,
              tailWidth,
              adjustMarginRight,
              prefixCls,
              iconPrefix,
              iconFinish,
              iconError,
              wrapperStyle: style,
            };

            // fix tail color
            if (status === 'error' && idx === current - 1) {
              np.className = `${props.prefixCls}-next-error`;
            }

            if (!ele.props.status) {
              if (idx === current) {
                np.status = status;
              } else if (idx < current) {
                np.status = 'finish';
              } else {
                np.status = 'wait';
              }
            }
            if (hideNonProcessDescription &&
                typeof ele.props.hideDescription === 'undefined' &&
                (np.status || ele.props.status || status) !== 'process') {
              np.hideDescription = true;
            }
            return React.cloneElement(ele, np);
          }, this)
        }
      </div>
    );
  }
}

Steps.propTypes = {
  prefixCls: PropTypes.string,
  iconPrefix: PropTypes.string,
  iconFinish: PropTypes.string,
  iconError: PropTypes.string,
  direction: PropTypes.string,
  labelPlacement: PropTypes.string,
  children: PropTypes.any,
  status: PropTypes.string,
  size: PropTypes.string,
  hideNonProcessDescription: PropTypes.bool,
};

Steps.defaultProps = {
  prefixCls: 'rc-steps',
  iconPrefix: 'rcicon',
  iconFinish: 'check',
  iconError: 'cross',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  current: 0,
  status: 'process',
  size: '',
  hideNonProcessDescription: false,
};
