import React, { PropTypes } from 'react';
import classNames from 'classnames';

function isString(str) {
  return typeof str === 'string';
}

export default class Step extends React.Component {
  title() {
    return this.props.title;
  }
  status() {
    return this.props.status;
  }
  children() {
    return this.props.children;
  }
  restProps(props) {
    return props;
  }
  render() {
    const {
      className, prefixCls, style, tailWidth,
      status, iconPrefix, iconFinish, iconError, icon, wrapperStyle,
      adjustMarginRight, stepLast, stepNumber,
      description, children, title, hideDescription, ...props } = this.props;
    const restProps = this.restProps(props);
    const _children = this.children();
    const _title = this.title();
    const _status = this.status();
    const content = _children || description;
    const iconClassName = classNames({
      [`${prefixCls}-icon`]: true,
      [iconPrefix]: true,
      [`${iconPrefix}-${icon}`]: icon && isString(icon),
      [`${iconPrefix}-${iconFinish}`]: !icon && _status === 'finish',
      [`${iconPrefix}-${iconError}`]: !icon && _status === 'error',
    });

    let iconNode;
    if (icon && !isString(icon)) {
      iconNode = <span className={`${prefixCls}-icon`}>{icon}</span>;
    } else if (icon || _status === 'finish' || _status === 'error') {
      iconNode = <span className={iconClassName} />;
    } else {
      iconNode = <span className={`${prefixCls}-icon`}>{stepNumber}</span>;
    }

    const classString = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-last`]: stepLast,
      [`${prefixCls}-status-${_status}`]: true,
      [`${prefixCls}-custom`]: icon,
      [className]: !!className,
    });
    const descriptionClassString = classNames({
      [`${prefixCls}-description`]: true,
      ['hidden']: hideDescription,
    });
    return (
      <div {...restProps}
        className={classString}
        style={{ width: tailWidth, marginRight: adjustMarginRight, ...style }}
      >
        {stepLast ? '' : <div className={`${prefixCls}-tail`}><i /></div>}
        <div className={`${prefixCls}-step`}>
          <div
            className={`${prefixCls}-head`}
            style={{ background: wrapperStyle.background || wrapperStyle.backgroundColor }}
          >
            <div className={`${prefixCls}-head-inner`}>{iconNode}</div>
          </div>
          <div className={`${prefixCls}-main`}>
            <div
              className={`${prefixCls}-title`}
              style={{ background: wrapperStyle.background || wrapperStyle.backgroundColor }}
            >{_title}</div>
            {content ? <div className={descriptionClassString}>{content}</div> : null}
          </div>
        </div>
      </div>
    );
  }
}

Step.propTypes = {
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  style: PropTypes.object,
  wrapperStyle: PropTypes.object,
  tailWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  status: PropTypes.string,
  iconPrefix: PropTypes.string,
  iconFinish: PropTypes.string,
  iconError: PropTypes.string,
  icon: PropTypes.node,
  adjustMarginRight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  stepLast: PropTypes.bool,
  stepNumber: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.any,
  title: PropTypes.any,
  hideDescription: PropTypes.bool,
};
