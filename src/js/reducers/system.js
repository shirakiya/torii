import * as types from './../constants/actionTypes.js';

const initialState = {
  inCallingAPI: false,
};

export default function system(state = initialState, action) {
  switch (action.type) {
  case types.STOPNEXTCALL: {
    return Object.assign({}, state, {
      inCallingAPI: true,
    });
  }
  case types.SUBMIT: {
    return Object.assign({}, state, {
      inCallingAPI: false,
    });
  }
  case types.SUBMIT_ERROR: {
    return Object.assign({}, state, {
      inCallingAPI: false,
    });
  }
  default:
    return state;
  }
}
