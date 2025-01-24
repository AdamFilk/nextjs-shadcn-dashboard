import { CredentialLoginPayload, TLoginRepoonse } from '@/types/api/auth';
import apiClient from '../client';
import endPoints from '../endpoints';
import { ApiResponse } from '@/types/api/common';

export const authApi = {
  login: async (payload: CredentialLoginPayload) => {
    const response = await apiClient.post<ApiResponse<TLoginRepoonse>>(endPoints.login, payload);
    return response.data;
  },
  googleSignIn: async (token: string) => {
    const res = await apiClient.get(endPoints.googleSignIn, {
      params: { token },
    });
    return res.data;
  },
};
