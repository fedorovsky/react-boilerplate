import types from 'constants/actionTypes';

export const addMessage = (message) => {
  return {
    type: types.ADD_NOTIFICATION_MESSAGE,
    message,
  };
};
