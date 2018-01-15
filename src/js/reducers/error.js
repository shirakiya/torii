import * as types from './../constants/actionTypes.js';

const initialState = {
  message: null,
  type: null,
};

export default function error(state = initialState, action) {
  switch (action.type) {
    case types.SUBMIT: {
      return Object.assign({}, state, {
        message: null,
        type: null,
      });
    }
    case types.SUBMIT_ERROR: {
      return Object.assign({}, state, {
        message: `[${action.data.error_class}] ${action.data.message}`,
        type: action.data.type,
      });
    }
    default:
      return state;
  }
}
