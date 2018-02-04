import React, { Component } from 'react';
import Select from 'react-select';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSelection } from 'actions/filters'
import { getArticlesSelector, getFilterSelected } from 'selectors';
import 'react-select/dist/react-select.css';
import styles from './index.css';

class Filters extends Component {
  static propTypes = {
    // from redux
    changeSelection: propTypes.func.isRequired,
  };

  handleChange = (selectedOption) => {
    this.props.changeSelection(selectedOption || {});
  };

  render() {
    console.log(this.props);
    const { articles, selected } = this.props;

    const optionsMap = articles.map((article) => {
      return {
        label: article.category,
        value: article.category,
      }
    });

    return (
      <Select
        className={styles.select}
        value={selected.value}
        options={optionsMap}
        onChange={this.handleChange}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected: getFilterSelected(state),
    articles: getArticlesSelector(state),
  }
};

export default connect(mapStateToProps, {
  changeSelection
})(Filters);
