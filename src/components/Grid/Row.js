import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import flexboxgrid from "./flexboxgrid.css";

class Row extends Component {
  static propTypes = {
    reverse: PropTypes.bool,
    xsHAlign: PropTypes.oneOf(["start", "center", "end"]),
    smHAlign: PropTypes.oneOf(["start", "center", "end"]),
    mdHAlign: PropTypes.oneOf(["start", "center", "end"]),
    lgHAlign: PropTypes.oneOf(["start", "center", "end"]),
    xsVAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
    smVAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
    mdVAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
    lgVAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
    xsDistribution: PropTypes.oneOf(["around", "between"]),
    smDistribution: PropTypes.oneOf(["around", "between"]),
    mdDistribution: PropTypes.oneOf(["around", "between"]),
    lgDistribution: PropTypes.oneOf(["around", "between"]),
  };

  render() {
    const {
      xsHAlign, smHAlign, mdHAlign, lgHAlign,
      xsVAlign, smVAlign, mdVAlign, lgVAlign,
      xsDistribution, smDistribution, mdDistribution, lgDistribution,
      reverse,
      className,
      children,
      ...other
    } = this.props;

    const classes = classnames({
      [flexboxgrid["row"]]: !reverse,
      [flexboxgrid["row-reverse"]]: reverse,
      [flexboxgrid[`${xsHAlign}-xs`]]: xsHAlign,
      [flexboxgrid[`${smHAlign}-sm`]]: smHAlign,
      [flexboxgrid[`${mdHAlign}-md`]]: mdHAlign,
      [flexboxgrid[`${lgHAlign}-lg`]]: lgHAlign,
      [flexboxgrid[`${xsVAlign}-xs`]]: xsVAlign,
      [flexboxgrid[`${smVAlign}-sm`]]: smVAlign,
      [flexboxgrid[`${mdVAlign}-md`]]: mdVAlign,
      [flexboxgrid[`${lgVAlign}-lg`]]: lgVAlign,
      [flexboxgrid[`${xsDistribution}-xs`]]: xsDistribution,
      [flexboxgrid[`${smDistribution}-sm`]]: smDistribution,
      [flexboxgrid[`${mdDistribution}-md`]]: mdDistribution,
      [flexboxgrid[`${lgDistribution}-lg`]]: lgDistribution,
    }, className);

    return (
      <div className={ classes } { ...other }>
        { children }
      </div>
    );
  }
}

export default Row;
