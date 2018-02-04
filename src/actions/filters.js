import types from 'constants/actionTypes';

export const changeSelection = (selected) => {
  return {
    type: types.CHANGE_SELECTION,
    payload: { selected }
  }
};
