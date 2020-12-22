import axios from 'axios';

let api = axios.create({
  baseURL: 'https://api.mocki.io/v1/',
  timeout: 30000,
});
api.interceptors.request.use(async (config) => {
  const param = config;
  param.headers['Content-Type'] = 'application/json';
  return param;
});

export default api;
