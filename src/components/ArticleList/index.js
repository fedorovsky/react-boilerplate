import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filtratedArticlesSelector } from 'selectors';

class ArticlesList extends Component {
  render() {
    const { articles } = this.props;
    return (
      <ul>
        {
          articles.map((article) => {
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
    articles: filtratedArticlesSelector(state),
  }
};

export default connect(mapStateToProps)(ArticlesList);
