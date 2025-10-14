import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

// Add auth token to requests
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  return instance.request<T>(config).then((res) => res.data);
};