import types from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WEATHER_REQUEST: {
      return { ...state, status: 'request' };
    }
    case types.GET_WEATHER_SUCCESS: {
      return {
        ...state,
        ...action.weather,
        status: 'success',
      };
    }
    case types.GET_WEATHER_ERROR: {
      return { ...state, status: 'error' };
    }
    default:
      return state;
  }
};
