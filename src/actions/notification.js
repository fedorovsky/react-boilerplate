import types from 'constants/actionTypes';

export const addMessage = message => ({
  type: types.ADD_NOTIFICATION_MESSAGE,
  message,
});

export const test = 'test';
