import axios from 'axios';
import { encodeBase64Url } from '../utils/utils.js';
const normalizeBaseUrl = (url) => {
  if (!url || typeof url !== 'string' || url === 'undefined') {
    return '';
  }
  return url.replace(/\/+$/, '');
};

export const getDefaultDevApiUrl = () => {
  return (import.meta?.env?.VITE_DEV_API_URL || 'http://10.55.37.17').replace(/\/+$/, '');
};

const resolveBaseUrl = () => {
  if (typeof window === 'undefined') {
    return '/api';
  }

  const storedUrl = localStorage.getItem('@AMS:apiUrl');
  const base = normalizeBaseUrl(storedUrl || getDefaultDevApiUrl());

  return base ? `${base}/api` : '/api';
};

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

export const getEvalDataByAPI = async (content, currentURLorHTML) => {
  if(content === "html") {
   return await api.post(`amp/eval/html`, { html: currentURLorHTML })
  } else {
   const encodedURL = encodeBase64Url(currentURLorHTML);
   return await api.get(`amp/eval/${encodeURIComponent(encodedURL)}`);  
  }
}

api.interceptors.request.use(
  (config) => {
    // Always refresh the baseURL from localStorage before each request
    config.baseURL = refreshApiBaseUrl();
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
      const currentPath = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname : '';
      const isOnLoginPage = currentPath.endsWith('/login') || currentPath.includes('/login');
      if (!isOnLoginPage) {
        localStorage.removeItem('@AMS:user');
        localStorage.removeItem('@AMS:token');
        window.location = '/ams/login';
      }
    }
    return Promise.reject(error);
  }
);

export { api };