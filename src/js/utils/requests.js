import axios from 'axios';
import { URL_PRODUCTION, URL_DEVELOPMENT } from './../constants/commons.js';

function getBaseURL() {
  return (process.env.NODE_ENV === 'production') ? URL_PRODUCTION : URL_DEVELOPMENT;
}

function getAxios() {
  return axios.create({
    baseURL: getBaseURL(),
    timeout: 3000,
  });
}

export function post(endpoint, data = {}) {
  return getAxios().post(endpoint, data);
}
