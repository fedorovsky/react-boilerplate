import React, {Component} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import flexboxgrid from "./flexboxgrid.css";

class Col extends Component {
  static propTypes = {
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    xsOffset: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    reverse: PropTypes.bool,
  };

  render() {
    const {
      xs, xsOffset,
      sm, smOffset,
      md, mdOffset,
      lg, lgOffset,
      reverse,
      className,
      children,
      ...other
    } = this.props;

    const classes = classnames({
      [flexboxgrid[`${Number.isInteger(xs) ? `col-xs-${xs}` : ""}`]]: xs,
      [flexboxgrid[`${Number.isInteger(sm) ? `col-sm-${sm}` : ""}`]]: sm,
      [flexboxgrid[`${Number.isInteger(md) ? `col-md-${md}` : ""}`]]: md,
      [flexboxgrid[`${Number.isInteger(lg) ? `col-lg-${lg}` : ""}`]]: lg,
      [flexboxgrid[`col-xs-offset-${xsOffset}`]]: xsOffset,
      [flexboxgrid[`col-sm-offset-${smOffset}`]]: smOffset,
      [flexboxgrid[`col-md-offset-${mdOffset}`]]: mdOffset,
      [flexboxgrid[`col-lg-offset-${lgOffset}`]]: lgOffset,
      [flexboxgrid["col-reverse"]]: reverse,
    }, className);

    return (
      <div className={classes} {...other}>
        {children}
      </div>
    );
  }
}

export default Col;
