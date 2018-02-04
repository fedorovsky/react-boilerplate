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
    const { articles, selected } = this.props;

    let used = {};
    const optionsMap = articles.filter((article) => {
      let obj = null;
      if(article.category in used){
        obj = true;
      } else {
        used[article.category] = 1;
        obj = false;
      }
      return obj;
    }).map((article) => {
      return {
        label: article.category,
        value: article.category,
      }
    });

    // optionsMap:
    // {
    //   label: 'Label',
    //   value: 'Value',
    // }

    console.log('-----', optionsMap, used);

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
