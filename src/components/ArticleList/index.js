import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticlesSelector } from 'selectors';

class ArticlesList extends Component {
  render() {
    const { articles } = this.props;
    return (
      <ul>
        {
          articles.items.map((article) => {
            return (
              <li key={article.id}>{ article.title }</li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: getArticlesSelector(state),
  }
};

export default connect(mapStateToProps)(ArticlesList);
