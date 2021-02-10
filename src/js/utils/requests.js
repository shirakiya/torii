import axios from 'axios';

function getAxios() {
  return axios.create({
    /* global API_URL */
    baseURL: API_URL,
    timeout: 3000,
  });
}

export function post(endpoint, data = {}, config = {}) {
  return getAxios().post(endpoint, data, config);
}
