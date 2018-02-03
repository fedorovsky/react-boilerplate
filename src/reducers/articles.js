import types from 'constants/actionTypes';
import articles from 'fixtures/articles';

export default (state = articles, action) => {
  switch (action.type) {
    case types.DELETE_ARTICLE: {
      return {
        ...state,
      };
    }
    default:
      return state
  }
}
