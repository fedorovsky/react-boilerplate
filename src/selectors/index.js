import { createSelector } from 'reselect';

export const getArticlesSelector = (state) => state.articles;
export const getFilterSelected = (state) => state.filters.selected;

export const filtratedArticlesSelector = createSelector(getArticlesSelector, getFilterSelected, (articles, filter) => {
  console.log('hello', articles, filter);
  if(filter.value) {
    return articles.filter((article) => {
      return article.category === filter.value;
    })
  }
  return articles;
});

