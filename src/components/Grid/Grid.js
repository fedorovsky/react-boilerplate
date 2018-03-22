import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import flexboxgrid from './flexboxgrid.css';

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  fluid: null,
  className: null,
  children: null,
};

const Grid = (props) => {
  const {
    fluid,
    className,
    children,
    ...other
  } = props;

  const classes = classnames({
    [flexboxgrid.container]: !fluid,
    [flexboxgrid['container-fluid']]: fluid,
  }, className);

  return (
    <div className={classes} {...other}>
      { children }
    </div>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
