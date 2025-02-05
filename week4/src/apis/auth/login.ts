import axios from 'axios';
import axiosInstance from '../axios';
import { LoginRequest, LoginSuccessResponse } from '../../types/types';

export const loginUser = async (
  loginData: LoginRequest
): Promise<LoginSuccessResponse> => {
  try {
    const response = await axiosInstance.post<LoginSuccessResponse>(
      '/login',
      loginData
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
