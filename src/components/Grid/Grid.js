import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import flexboxgrid from "./flexboxgrid.css";

class Grid extends Component {
  static propTypes = {
    fluid: PropTypes.bool,
  };

  render() {
    const {
      fluid,
      className,
      children,
      ...other
    } = this.props;

    const classes = classnames({
      [flexboxgrid["container"]]: !fluid,
      [flexboxgrid["container-fluid"]]: fluid,
    }, className);

    return (
      <div className={ classes } { ...other }>
        { children }
      </div>
    );
  }
}

export default Grid;
