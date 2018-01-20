import types from '../constants/actionTypes';

export const addMessage = (message) => (dispatch) => {
  dispatch({
    type: types.ADD_NOTIFICATION_MESSAGE,
    message
  })
};