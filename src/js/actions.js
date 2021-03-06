import * as types from './constants/actionTypes.js';
import { post } from './utils/requests.js';


export default {
  stopNextCall: () => {
    return {
      type: types.STOPNEXTCALL,
    };
  },

  submit: (statement, context) => {
    return (dispatch) => {
      post('/api/render', {
        statement: statement,
        context: context,
      }, {
        timeout: 10000,
      }).then(res => {
        dispatch({
          type: types.SUBMIT,
          data: res.data,
        });
      }).catch((err) => {
        dispatch({
          type: types.SUBMIT_ERROR,
          data: err.response.data,
        });
      });
    };
  },
};
