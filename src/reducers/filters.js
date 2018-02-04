import types from 'constants/actionTypes';

const defaultFilters = {
  selected: {},
};

export default (filters = defaultFilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CHANGE_SELECTION:
      return { ...filters, selected: payload.selected };
    default:
      return filters;
  }
}
