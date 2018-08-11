import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import flexboxgrid from './flexboxgrid.css';

const propTypes = {
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  reverse: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xsOffset: null,
  smOffset: null,
  mdOffset: null,
  lgOffset: null,
  reverse: null,
  className: null,
  children: null,
};

const Col = props => {
  const {
    xs,
    xsOffset,
    sm,
    smOffset,
    md,
    mdOffset,
    lg,
    lgOffset,
    reverse,
    className,
    children,
    ...other
  } = props;

  const classes = classnames(
    {
      [flexboxgrid[`${Number.isInteger(xs) ? `col-xs-${xs}` : ''}`]]: xs,
      [flexboxgrid[`${Number.isInteger(sm) ? `col-sm-${sm}` : ''}`]]: sm,
      [flexboxgrid[`${Number.isInteger(md) ? `col-md-${md}` : ''}`]]: md,
      [flexboxgrid[`${Number.isInteger(lg) ? `col-lg-${lg}` : ''}`]]: lg,
      [flexboxgrid[`col-xs-offset-${xsOffset}`]]: xsOffset,
      [flexboxgrid[`col-sm-offset-${smOffset}`]]: smOffset,
      [flexboxgrid[`col-md-offset-${mdOffset}`]]: mdOffset,
      [flexboxgrid[`col-lg-offset-${lgOffset}`]]: lgOffset,
      [flexboxgrid['col-reverse']]: reverse,
    },
    className,
  );

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
