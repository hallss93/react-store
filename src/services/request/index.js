import axios from 'axios';

let api = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  timeout: 30000,
});
api.interceptors.request.use(async (config) => {
  const param = config;
  param.headers['Content-Type'] = 'application/json';
  return param;
});

export default api;
