import axios from 'axios';
import axiosInstance from '../axios';
import {
  LoginRequest,
  LoginSuccessResponse,
  LoginErrorResponse,
} from '../../types/types';

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
      const errorData = error.response?.data as LoginErrorResponse;
      throw new Error(`Error: ${errorData?.code || '알 수 없는 오류'}`);
    }

    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`);
    }

    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};
