import * as types from './../constants/actionTypes.js';

const initialState = {
  statement: '',
  context: '{}',
  rendered: null,
};

export default function template(state = initialState, action) {
  switch (action.type) {
  case types.SUBMIT: {
    return Object.assign({}, state, {
      rendered: action.data.rendered,
    });
  }
  case types.SUBMIT_ERROR: {
    return Object.assign({}, state, {
      rendered: null,
    });
  }
  default:
    return state;
  }
}
