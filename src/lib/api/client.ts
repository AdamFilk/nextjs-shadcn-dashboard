import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { signOut, getSession } from 'next-auth/react';

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session) {
    config.headers.Authorization = `Bearer ${session.token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response): AxiosResponse => {
    return response;
  },
  (error: AxiosError<ApiError>) => {
    const errResponse = error.response;
    if (errResponse?.status === 401) {
      signOut({ redirect: true, callbackUrl: '/auth/login' });
    }
    return Promise.reject(errResponse?.data || error);
  }
);

export default apiClient;
