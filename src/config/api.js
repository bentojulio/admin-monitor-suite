import axios from 'axios';

const api = axios.create({
  baseURL: localStorage.getItem("@AMS:apiUrl") + '/api',
 // baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createApiInstance = (token) => {
  return axios.create({
   // baseURL: 'http://localhost:3000/',
    baseURL: localStorage.getItem("@AMS:apiUrl") + '/api',
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined
    }
  });
};

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('@AMS:token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
  ,
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      localStorage.removeItem('@AMS:user');
      localStorage.removeItem('@AMS:token');
      window.location = '/ams-react/login';
    }
    return Promise.reject(error);
  }
);

export { api };