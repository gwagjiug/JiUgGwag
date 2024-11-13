import axios, { AxiosError } from 'axios';
import axiosInstance from '../axios';

export interface RegisterRequest {
  username: string;
  password: string;
  hobby: string;
}

export interface RegisterResponse {
  result: {
    no: number;
  };
}

export interface ErrorResponse {
  code: string;
}

export const registerUser = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  try {
    const response = await axiosInstance.post<RegisterResponse>('/user', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data as ErrorResponse;
      throw new Error(`Error: ${errorData?.code || '알 수 없는 오류'}`);
    }
    throw new Error('알 수 없는 오류가 발생했습니다.');
  }
};
