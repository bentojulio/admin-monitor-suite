import axios from 'axios';

const api = axios.create({
  baseURL: localStorage.getItem('@AMS:apiUrl'),
  headers: {
    'Content-Type': 'application/json',
  },
});


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

export { api };