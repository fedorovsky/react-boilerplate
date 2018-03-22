import types from '../constants/actionTypes';

const initialState = {
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NOTIFICATION_MESSAGE: {
      return {
        ...state,
        message: action.message,
      };
    }
    default:
      return state;
  }
};
